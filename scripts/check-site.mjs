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
const collections = ['publications', 'projects', 'coursework', 'blog', 'proposals'];
// The owner approved only this newly authored three-page CV for public download.
const publicCVPDF = 'files/sangeon-jeon-cv.pdf';
const requiredRoutes = [
  '/', '/coursework/', '/blog/',
  '/projects/when-to-eat/',
  '/projects/venus-flytrap-bioelectrical-playback/',
  '/projects/ece3011-robachtic-symphony/',
  '/projects/ee405-robotic-tic-tac-toe/',
  '/coursework/electronics-design-lab/',
];
const absentRoutes = ['/about/', '/research/', '/publications/', '/projects/', '/proposals/', '/cv/', '/ko/'];

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

function attributesFor(tag) {
  return Object.fromEntries([...tag.matchAll(/\b([\w-]+)\s*=\s*["']([^"']*)["']/g)]
    .map((match) => [match[1].toLowerCase(), decodeAttribute(match[2])]));
}

function languageLink(html, language) {
  return [...html.matchAll(/<a\b[^>]*>/gi)].map((match) => attributesFor(match[0]))
    .find((attributes) => attributes['data-language'] === language);
}

function alternateLanguages(html) {
  return [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => attributesFor(match[0]))
    .filter((attributes) => attributes.rel === 'alternate' && attributes.hreflang);
}

async function validateOutput({ absentMarker } = {}) {
  assert(existsSync(output), 'No dist directory. Run npm run build first.');
  const files = await filesIn(output);
  const htmlFiles = files.filter((file) => file.endsWith('.html'));
  assert(htmlFiles.length > 0, 'The build contains no HTML pages.');
  for (const route of requiredRoutes) assert(routeFile(route), `Missing expected route: ${route}`);
  assert(existsSync(path.join(output, '404.html')), 'Missing 404 page.');
  for (const route of absentRoutes) assert(!routeFile(route), `Obsolete route remains: ${route}`);
  assert(!existsSync(path.join(output, 'ko')), 'Public output must not contain Korean routes or feeds');
  for (const feed of ['rss.xml']) {
    const xml = await readFile(path.join(output, feed), 'utf8');
    assert(xml.includes('<language>en-US</language>'), `Public feed must contain English only: ${feed}`);
  }
  const cvPDF = await readFile(path.join(output, publicCVPDF));
  assert(cvPDF.subarray(0, 5).toString() === '%PDF-', 'Published CV is not a PDF.');
  assert(cvPDF.equals(await readFile(path.join(root, 'public', publicCVPDF))), 'Published CV differs from the approved public source.');
  const homeHTML = await readFile(path.join(output, 'index.html'), 'utf8');
  assert(homeHTML.includes(`href="/${publicCVPDF}"`), 'Home must link directly to the approved CV PDF');
  for (const id of ['publications','projects','ocdm-cfo-estimation','tiadc-ofdm-estimation','amd-global-burden','ocd-related-disorders-prevalence','sma-global-prevalence','hemophilia-resource-modeling']) {
    assert(new RegExp(`id=["']${id}["']`).test(homeHTML), `Canonical Home anchor missing: ${id}`);
  }
  for (const home of ['index.html']) {
    assert(decodeAttribute(await readFile(path.join(output, home), 'utf8')).includes('全商彥'), `Missing owner-supplied Hanja name in ${home}`);
  }
  for (const file of files) {
    const relative = path.relative(output, file).replaceAll(path.sep, '/');
    assert(!/(?:^|\/)(?:reference-private|CV-Resume|job applications|instructions|\.git)(?:\/|$)/i.test(relative), `Raw source directory in output: ${relative}`);
    assert(relative === publicCVPDF || !/source-inventory|아이디어|\.(?:md|mdx|tex|sty|pdf|docx|zip|mbox|bundle)$/i.test(relative), `Private/source artifact in output: ${relative}`);
    assert(!/^documents\//i.test(relative), `Withdrawn document route in output: ${relative}`);
    assert(!/^(?:ko|about|research|publications|proposals|cv)(?:\/|$)/.test(relative), `Obsolete route directory remains: ${relative}`);
    if (/\.(?:html|xml|json|txt|js|css)$/i.test(relative)) {
      const text = await readFile(file, 'utf8');
      assert(!/reference-private\/|CV-Resume\/|job(?: |%20)applications\/|instructions\/|source-inventory\.json|아이디어\.docx/.test(text), `Source reference leaked into ${relative}`);
      if (absentMarker) assert(!text.includes(absentMarker), `Unreleased fixture leaked into ${relative}`);
    }
  }

  let checkedLinks = 0;
  const htmlCache = new Map();
  for (const file of htmlFiles) htmlCache.set(file, await readFile(file, 'utf8'));
  for (const [file, html] of htmlCache) {
    const relative = path.relative(output, file).replaceAll(path.sep, '/');
    const documentPath = '/' + relative.replace(/index\.html$/, '');
    assert(!/EE305/i.test(html), `Hidden course number exposed in ${relative}`);
    const base = new URL(documentPath, origin);
    const htmlAttributes = attributesFor(html.match(/<html\b[^>]*>/i)?.[0] ?? '');
    assert.equal(htmlAttributes.lang, 'en', `Public output must use English: ${relative}`);
    const canonicals = [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => attributesFor(match[0]))
      .filter((attributes) => attributes.rel === 'canonical');
    assert.equal(canonicals.length, 1, `Expected one canonical URL in ${relative}`);
    const metadata = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => attributesFor(match[0]));
    assert(!metadata.some((attributes) => attributes['http-equiv']?.toLowerCase() === 'refresh'), `Compatibility redirect remains in ${relative}`);
    const expectedCanonical = new URL(documentPath, origin);
    assert.equal(canonicals[0].href, expectedCanonical.href, `Wrong canonical URL in ${relative}`);
    assert(!languageLink(html, 'ko') && !languageLink(html, 'en'), `Public language switch leaked into ${relative}`);
    assert(!alternateLanguages(html).some((link) => link.hreflang === 'ko' || new URL(link.href, base).pathname.startsWith('/ko/')), `Korean alternate advertised in ${relative}`);
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
  for (const filename of files.filter((file) => /sitemap[^/]*\.xml$/.test(file))) {
    const xml = await readFile(filename, 'utf8');
    assert(!xml.includes(`${origin}/ko/`) && !xml.includes(`${origin}/proposals/`), 'Removed route URLs leaked into sitemap');
  }
  return { pages: htmlFiles.length, files: files.length, checkedLinks };
}

async function testPublicationGate() {
  // The integration fixture tests every route/index/feed surface after a real build.
  // Files exist only for this check and are removed before the final build.
  const fixtureSuffix = `${Date.now()}-${process.pid}`;
  const token = `unreleased-canary-${fixtureSuffix}`;
  const rendererSlug = `approved-renderer-${fixtureSuffix}`;
  const koreanOnlySlug = `korean-only-${fixtureSuffix}`;
  const ideaSlug = `approved-idea-${fixtureSuffix}`;
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
        const imageName = `${token}-cover.png`;
        const videoName = `${token}-clip.mp4`;
        const posterName = `${token}-poster.jpg`;
        await writeFile(path.join(folder, videoName), `${token} unreleased native video`);
        await writeFile(path.join(folder, posterName), `${token} unreleased video poster`);
        await writeFile(path.join(folder, imageName), Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jT1sAAAAASUVORK5CYII=', 'base64'));
        for (const language of ['en', 'ko']) {
          const filename = `${slug}${language === 'ko' ? '.ko' : ''}.md`;
          const visibility = ['coursework', 'blog', 'proposals'].includes(collection) ? 'visibility: private\n' : '';
          await writeFile(path.join(folder, filename), `---\ntitle: ${token}-${suffix}\nsummary: ${token}\ncategoryLabel: Fixture\nstatus: Fixture\ncourseCode: TEST\ncover:\n  src: ./${imageName}\n  alt: ${token}\nclips:\n  - src: ${videoName}\n    poster: ${posterName}\n    title: ${token}\n    caption: ${token}\n    width: 720\n    height: 1280\napprovedForPublication: ${approval}\ndraft: ${draft}\n${visibility}language: ${language}\ntranslationKey: ${slug}\n---\n\n${token}\n`);
        }
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
      'visibility: public',
      'pubDate: 2026-01-01',
      'language: en',
      `translationKey: ${rendererSlug}`,
      '---',
      '',
      '## Rendering check',
      '',
      'The approved English MDX body is rendered.',
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
    // Korean text and Korean-only releases stay out of public HTML, feeds,
    // routes and assets even if the owner has marked that language public.
    await writeFile(path.join(rendererFolder, 'index.ko.md'), `---\ntitle: ${token}-translated-draft\nsummary: ${token}\ncategoryLabel: Fixture\nstatus: Published\nvisibility: private\nlanguage: ko\ntranslationKey: ${rendererSlug}\n---\n\n${token}\n`);
    const koreanFolder = path.join(root, 'src/content/blog', koreanOnlySlug);
    fixtures.push(koreanFolder);
    await mkdir(koreanFolder);
    await writeFile(path.join(koreanFolder, 'index.ko.md'), `---\ntitle: ${token}-korean-public\nsummary: ${token}\ncategoryLabel: Fixture\nstatus: Published\nvisibility: public\nlanguage: ko\ntranslationKey: ${koreanOnlySlug}\npubDate: 2026-01-01\n---\n\n${token}\n`);
    const ideaFolder = path.join(root, 'src/content/proposals', ideaSlug);
    fixtures.push(ideaFolder);
    await mkdir(ideaFolder);
    await writeFile(path.join(ideaFolder, 'index.md'), `---\ntitle: Approved idea fixture ${fixtureSuffix}\nsummary: A public idea in the unified Blog.\ncategoryLabel: Idea\nstatus: Early concept\nvisibility: public\nlanguage: en\ntranslationKey: ${ideaSlug}\npubDate: 2026-01-01\n---\n\nAn explicitly public idea body.\n`);
    // Colocated source notes must never become articles or trigger schema errors.
    await writeFile(path.join(rendererFolder, 'README.md'), `# Source only\n\n${token}\n`);
    await mkdir(path.join(rendererFolder, 'raw'));
    await writeFile(path.join(rendererFolder, 'raw', 'notes.md'), `# Source only\n\n${token}\n`);

    build();
    const report = await validateOutput({ absentMarker: token });
    const builtFiles = await filesIn(output);
    assert(!builtFiles.some((file) => file.includes(token)), 'Unreleased entry or media leaked into the build output.');

    const rendererPath = routeFile(`/blog/${rendererSlug}/`);
    assert(rendererPath, 'Folder-based index.mdx did not generate its stable English detail route.');
    assert(!routeFile(`/blog/${rendererSlug}/index/`), 'The index filename leaked into the public URL.');
    assert(!routeFile(`/blog/${koreanOnlySlug}/`) && !routeFile(`/ko/blog/${koreanOnlySlug}/`), 'A Korean-only release generated a public route.');
    const rendered = await readFile(rendererPath, 'utf8');
    assert(/<html\b[^>]*\blang=["']en["']/i.test(rendered), 'English MDX entry did not set the document language.');
    assert(rendered.includes('The approved English MDX body is rendered.'), 'Approved English MDX body text was not preserved.');
    assert(rendered.includes('MDX expression evaluated: 5'), 'The MDX expression was not evaluated.');
    assert(/<span\b[^>]*class=["']katex["']/i.test(rendered), 'Inline mathematics was not rendered with KaTeX.');
    const codeBlocks = rendered.match(/<pre\b[\s\S]*?<\/pre>/gi) ?? [];
    assert(codeBlocks.some((block) => /astro-code/.test(block)
      && block.replace(/<[^>]*>/g, '').includes('const rendererApproved = true;')), 'The fenced code block was not syntax-highlighted.');
    assert(rendered.includes('data-footnote-ref') && rendered.includes('data-footnote-backref')
      && rendered.includes('Renderer footnote support is working.'), 'Footnote references/backlinks were not rendered.');
    for (const surface of ['blog/index.html', 'rss.xml']) {
      const body = await readFile(path.join(output, surface), 'utf8');
      assert(body.includes(rendererSlug), `Approved English post is absent from ${surface}`);
      assert(body.includes(`blog/ideas/${ideaSlug}/`), `Approved idea is absent from unified Blog ${surface}`);
      assert(!body.includes(koreanOnlySlug), `Korean-only post leaked into ${surface}`);
    }
    const ideaPath = routeFile(`/blog/ideas/${ideaSlug}/`);
    assert(ideaPath, 'Public idea canonical Blog route is missing.');
    assert((await readFile(ideaPath, 'utf8')).includes('#idea'), 'Public idea lacks its idea tag.');
    assert(!routeFile(`/proposals/${ideaSlug}/`), 'Removed Ideas route was generated');
    assert(!routeFile(`/ko/blog/${rendererSlug}/`), 'Public Korean route was generated');
    const sitemaps = builtFiles.filter((file) => /sitemap[^/]*\.xml$/.test(file));
    const sitemapBodies = await Promise.all(sitemaps.map((file) => readFile(file, 'utf8')));
    assert(sitemapBodies.some((body) => body.includes(rendererSlug)), 'Approved post is absent from the sitemap.');
    console.log('English MDX, canonical Blog ideas/tags/feed, Korean/obsolete route absence, KaTeX, highlighted code and footnotes passed.');
    console.log(`Publication gate passed: unapproved and draft translations stayed absent across all ${collections.length} collections (${report.pages} pages).`);
  } finally {
    for (const fixture of fixtures) await rm(fixture, { recursive: true, force: true });
    build();
  }
  assert(!routeFile(`/blog/${rendererSlug}/`) && !routeFile(`/ko/blog/${rendererSlug}/`), 'Temporary approved fixture route remained after cleanup.');
  await validateOutput({ absentMarker: rendererSlug });
}

if (process.argv.includes('--test-publication-gate')) await testPublicationGate();
const report = await validateOutput();
console.log(`Website checks passed: ${report.pages} HTML pages, ${report.files} files, ${report.checkedLinks} local links; no raw reference artifacts.`);
