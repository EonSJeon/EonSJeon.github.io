import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'yaml';

export async function filesIn(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true }).catch(() => [])) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesIn(filename));
    else if (entry.isFile()) files.push(filename);
  }
  return files;
}

export async function readMarkdown(filename) {
  const source = await readFile(filename, 'utf8');
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) throw new Error(`Markdown needs YAML frontmatter: ${filename}`);
  return { data: parse(match[1]), body: source.slice(match[0].length), source };
}

export async function contentFiles(root) {
  return (await filesIn(path.join(root, 'src/content')))
    .filter((filename) => /\.(md|mdx)$/i.test(filename) && !/^readme\./i.test(path.basename(filename)) && !filename.split(path.sep).includes('raw'));
}
