import { parse, serializeOuter } from 'parse5';

/** Only external HTTP(S) URLs open a tab; site pages, files and fragments do not. */
export function opensInNewTab(href) {
  const value = href?.trim();
  if (!value || value.startsWith('#')) return false;
  try {
    const url = new URL(value, 'https://eonsjeon.github.io/');
    return ['http:', 'https:'].includes(url.protocol) && url.origin !== 'https://eonsjeon.github.io';
  } catch {
    return false;
  }
}

/** Patch only real anchor start tags, preserving scripts, code samples and all other HTML. */
export function newTabLinks(html) {
  const patches = [];
  function visit(node) {
    if (node.tagName === 'a' && opensInNewTab(node.attrs.find((attr) => attr.name === 'href')?.value)) {
      const location = node.sourceCodeLocation?.startTag;
      if (location) {
        const rel = node.attrs.find((attr) => attr.name === 'rel')?.value ?? '';
        const tokens = rel.toLowerCase().split(/\s+/).filter((token) => token && token !== 'opener');
        const attrs = node.attrs.filter((attr) => !['target', 'rel'].includes(attr.name));
        attrs.push({ name: 'target', value: '_blank' });
        attrs.push({ name: 'rel', value: [...new Set([...tokens, 'noopener', 'noreferrer'])].join(' ') });
        const tag = serializeOuter({ ...node, attrs, childNodes: [] }).replace(/<\/a>$/, '');
        patches.push({ start: location.startOffset, end: location.endOffset, tag });
      }
    }
    for (const child of node.childNodes ?? []) visit(child);
    if (node.content) visit(node.content);
  }
  visit(parse(html, { sourceCodeLocationInfo: true }));
  for (const patch of patches.sort((a, b) => b.start - a.start)) {
    html = html.slice(0, patch.start) + patch.tag + html.slice(patch.end);
  }
  return html;
}
