import assert from 'node:assert/strict';
import { existsSync, statSync } from 'node:fs';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');
const origin = 'https://eonsjeon.github.io';
const collections = ['research', 'publications', 'projects', 'coursework', 'blog', 'proposals'];
const approvedDownloads = new Set([
  'documents/sangeon-jeon-cv-industrial-2026-04.pdf',
  'documents/sangeon-jeon-resume-full-2025-09.pdf',
]);
const requiredRoutes = [
  '/', '/about/', '/research/', '/publications/', '/projects/', '/coursework/', '/blog/', '/proposals/', '/cv/',
  '/research/ocdm-cfo-estimation/', '/research/tiadc-ofdm-estimation/',
  '/projects/when-to-eat/',
  '/coursework/venus-flytrap-bioelectrical-playback/',
  '/coursework/ece3011-robachtic-symphony/',
  '/coursework/ee305-electronics-design-lab/',
  '/coursework/ee405-robotic-tic-tac-toe/',
];

async function filesIn(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await filesIn(target));
    else if (entry.isFile()) result.push(target);
  }
  return result;
}

function routeFile(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const candidate = path.resolve(output, '.' + decoded);
  assert(candidate === output || candidate.startsWith(output + path.sep), `Path escapes build output: ${urlPath}`);
  const options = decoded.endsWith('/')
    ? [path.join(candidate, 'index.html'), candidate.slice(0, -1) + '.html']
    : [candidate, path.join(candidate, 'index.html'), candidate + '.html'];
  return options.find((option) => existsSync(option) && statSync(option).isFile());
}

function decodeAttribute(value) {
  return value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, number) => String.fromCodePoint(Number(number)))
    .replace(/&#x([\da-f]+);/gi, (_, number) => String.fromCodePoint(parseInt(number, 16)));
}

async function validateOutput({ absentMarker } = {}) {
  assert(existsSync(output), 'No dist directory. Run npm run build first.');
  const files = await filesIn(output);
  const htmlFiles = files.filter((file) => file.endsWith('.html'));
  assert(htmlFiles.length > 0, 'The build contains no HTML pages.');
  for (const route of requiredRoutes) assert(routeFile(route), `Missing expected route: ${route}`);
  assert(existsSync(path.join(output, '404.html')), 'Missing 404 page.');
  for (const document of approvedDownloads) assert(existsSync(path.join(output, document)), `Missing selected download: ${document}`);

  for (const file of files) {
    const relative = path.relative(output, file).replaceAll(path.sep, '/');
    assert(!/(?:^|\/)(?:reference-private|\.git)(?:\/|$)/i.test(relative), `Raw source directory in output: ${relative}`);
    assert(!/source-inventory|아이디어|\.(?:md|mdx|docx|zip|mbox|bundle)$/i.test(relative), `Private/source artifact in output: ${relative}`);
    if (/\.pdf$/i.test(relative)) assert(approvedDownloads.has(relative), `Unselected PDF in output: ${relative}`);
    if (/\.(?:html|xml|json|txt|js|css)$/i.test(relative)) {
      const text = await readFile(file, 'utf8');
      assert(!/reference-private\/|source-inventory\.json|아이디어\.docx/.test(text), `Source reference leaked into ${relative}`);
      if (absentMarker) assert(!text.includes(absentMarker), `Unreleased fixture leaked into ${relative}`);
    }
  }

  let checkedLinks = 0;
  const htmlCache = new Map();
  for (const file of htmlFiles) htmlCache.set(file, await readFile(file, 'utf8'));
  for (const [file, html] of htmlCache) {
    const relative = path.relative(output, file).replaceAll(path.sep, '/');
    const documentPath = '/' + relative.replace(/index\.html$/, '');
    const base = new URL(documentPath, origin);
    for (const match of html.matchAll(/\b(?:href|src|poster)\s*=\s*["']([^"']+)["']/gi)) {
      const value = decodeAttribute(match[1]).trim();
      if (!value || /^(?:mailto:|tel:|data:|blob:)/i.test(value)) continue;
      assert(!/^javascript:/i.test(value), `Unsafe URL in ${relative}`);
      const url = new URL(value, base);
      if (url.origin !== origin) continue;
      const target = routeFile(url.pathname);
      assert(target, `Broken local link in ${relative}: ${value}`);
      checkedLinks += 1;
      if (url.hash && target.endsWith('.html')) {
        const targetHTML = htmlCache.get(target) ?? await readFile(target, 'utf8');
        const id = decodeURIComponent(url.hash.slice(1));
        const identifiers = [...targetHTML.matchAll(/\b(?:id|name)\s*=\s*["']([^"']+)["']/gi)].map((item) => decodeAttribute(item[1]));
        assert(identifiers.includes(id), `Missing anchor in ${relative}: ${value}`);
      }
    }
  }
  return { pages: htmlFiles.length, files: files.length, checkedLinks };
}

async function testPublicationGate() {
  // The integration fixture tests every route/index/feed surface after a real build.
  // Files exist only for this check and are removed before the final build.
  const fixtureSuffix = `${Date.now()}-${process.pid}`;
  const token = `unreleased-canary-${fixtureSuffix}`;
  const rendererSlug = `approved-renderer-${fixtureSuffix}`;
  const fixtures = [];
  const require = createRequire(import.meta.url);
  const packagePath = require.resolve('astro/package.json');
  const astroPackage = JSON.parse(await readFile(packagePath, 'utf8'));
  const binary = typeof astroPackage.bin === 'string' ? astroPackage.bin : astroPackage.bin.astro;
  const astroCLI = path.resolve(path.dirname(packagePath), binary);
  const build = () => {
    const result = spawnSync(process.execPath, [astroCLI, 'build'], { cwd: root, stdio: 'inherit', env: process.env });
    assert.equal(result.status, 0, 'The publication-gate fixture build failed.');
  };

  try {
    for (const collection of collections) {
      const directory = path.join(root, 'src/content', collection);
      await mkdir(directory, { recursive: true });
      for (const [suffix, approval, draft] of [['unapproved', false, false], ['draft', true, true]]) {
        const slug = `${token}-${suffix}`;
        const folder = path.join(directory, slug);
        assert(!existsSync(folder), 'Fixture folder already exists.');
        fixtures.push(folder);
        await mkdir(folder);
        const file = path.join(folder, `${slug}.md`);
        await writeFile(file, `---\ntitle: ${token}-${suffix}\nsummary: ${token}\ncategoryLabel: Fixture\nstatus: Fixture\ncourseCode: TEST\napprovedForPublication: ${approval}\ndraft: ${draft}\n---\n\n${token}\n`);
      }
    }

    // Check the approved MDX path as well as exclusion: a renderer that simply
    // drops all editorial content would otherwise pass the negative canaries.
    const rendererFolder = path.join(root, 'src/content/blog', rendererSlug);
    assert(!existsSync(rendererFolder), 'Renderer fixture folder already exists.');
    fixtures.push(rendererFolder);
    await mkdir(rendererFolder);
    const rendererFixture = path.join(rendererFolder, 'index.mdx');
    await writeFile(rendererFixture, [
      '---',
      `title: Approved renderer fixture ${fixtureSuffix}`,
      'summary: A temporary check of the approved publishing path.',
      'categoryLabel: Technical note',
      'status: Published',
      'approvedForPublication: true',
      'draft: false',
      'pubDate: 2026-01-01',
      'language: ko',
      '---',
      '',
      '## Rendering check',
      '',
      '한국어 본문 렌더링을 확인합니다.',
      '',
      'Inline mathematics: $E = mc^2$.',
      '',
      '```typescript',
      'const rendererApproved = true;',
      '```',
      '',
      'A sentence with a footnote.[^renderer]',
      '',
      '[^renderer]: Renderer footnote support is working.',
      '',
      '<p data-renderer-expression="true">{"MDX expression evaluated: " + (2 + 3)}</p>',
      '',
    ].join('\n'));
    // Colocated source notes must never become articles or trigger schema errors.
    await writeFile(path.join(rendererFolder, 'README.md'), `# Source only\n\n${token}\n`);
    await mkdir(path.join(rendererFolder, 'raw'));
    await writeFile(path.join(rendererFolder, 'raw', 'notes.md'), `# Source only\n\n${token}\n`);

    build();
    const report = await validateOutput({ absentMarker: token });
    const builtFiles = await filesIn(output);
    assert(!builtFiles.some((file) => file.includes(token)), 'Unreleased fixture generated a route.');

    const rendererPath = routeFile(`/blog/${rendererSlug}/`);
    assert(rendererPath, 'Folder-based index.mdx did not generate its stable detail route.');
    assert(!routeFile(`/blog/${rendererSlug}/index/`), 'The index filename leaked into the public URL.');
    const rendered = await readFile(rendererPath, 'utf8');
    assert(/<html\b[^>]*\blang=["']ko["']/i.test(rendered), 'Korean MDX entry did not set the document language.');
    assert(rendered.includes('한국어 본문 렌더링을 확인합니다.'), 'Korean MDX body text was not preserved.');
    assert(rendered.includes('MDX expression evaluated: 5'), 'The MDX expression was not evaluated.');
    assert(/<span\b[^>]*class=["']katex["']/i.test(rendered), 'Inline mathematics was not rendered with KaTeX.');
    const codeBlocks = rendered.match(/<pre\b[\s\S]*?<\/pre>/gi) ?? [];
    assert(codeBlocks.some((block) => /astro-code/.test(block)
      && block.replace(/<[^>]*>/g, '').includes('const rendererApproved = true;')), 'The fenced code block was not syntax-highlighted.');
    assert(rendered.includes('data-footnote-ref') && rendered.includes('data-footnote-backref')
      && rendered.includes('Renderer footnote support is working.'), 'Footnote references/backlinks were not rendered.');
    // validateOutput() above checks the actual footnote href/id targets, too.
    assert((await readFile(path.join(output, 'blog/index.html'), 'utf8')).includes(rendererSlug), 'Approved post is absent from its index.');
    assert((await readFile(path.join(output, 'rss.xml'), 'utf8')).includes(rendererSlug), 'Approved post is absent from RSS.');
    const sitemaps = builtFiles.filter((file) => /sitemap[^/]*\.xml$/.test(file));
    const sitemapBodies = await Promise.all(sitemaps.map((file) => readFile(file, 'utf8')));
    assert(sitemapBodies.some((body) => body.includes(rendererSlug)), 'Approved post is absent from the sitemap.');
    console.log('Approved folder-based MDX passed: stable URL, excluded README/raw sources, Korean, document language, evaluated expression, KaTeX, highlighted code, footnotes, index, RSS, and sitemap.');
    console.log(`Publication gate passed: unapproved and draft entries stayed absent across all six collections (${report.pages} pages).`);
  } finally {
    for (const fixture of fixtures) await rm(fixture, { recursive: true, force: true });
    build();
  }
  assert(!routeFile(`/blog/${rendererSlug}/`), 'Temporary approved fixture route remained after cleanup.');
  await validateOutput({ absentMarker: rendererSlug });
}

if (process.argv.includes('--test-publication-gate')) await testPublicationGate();
const report = await validateOutput();
console.log(`Website checks passed: ${report.pages} HTML pages, ${report.files} files, ${report.checkedLinks} local links; no raw reference artifacts.`);
