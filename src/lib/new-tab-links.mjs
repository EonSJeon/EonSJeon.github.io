import { parse, serializeOuter } from 'parse5';

/** Document/website links open a tab; fragment navigation and protocol actions do not. */
export function opensInNewTab(href) {
  const value = href?.trim();
  if (!value || value.startsWith('#')) return false;
  try {
    return ['http:', 'https:'].includes(new URL(value, 'https://eonsjeon.github.io/').protocol);
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
