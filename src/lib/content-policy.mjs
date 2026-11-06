/** Editorial Markdown has one owner-controlled release switch per language. */
export const EDITORIAL_COLLECTIONS = new Set(['coursework', 'blog', 'proposals']);

/** @param {{visibility?: string, approvedForPublication?: boolean, draft?: boolean, language?: string}} data
 * @param {string} [collection]
 * @returns {'public' | 'private'} */
export function visibilityFor(data, collection) {
  if (data.visibility !== undefined) return data.visibility === 'public' ? 'public' : 'private';
  if (EDITORIAL_COLLECTIONS.has(collection)) return 'private';
  return data.approvedForPublication === true && data.draft !== true ? 'public' : 'private';
}

export function isPrivatePreview() {
  return process.env.SITE_PREVIEW_MODE === 'private';
}

/** The paired filename is authoritative when frontmatter omits its language.
 * A contradictory declaration must stop publishing, never become an EN fallback.
 * @param {{language?: unknown}} data
 * @param {string} filename
 * @returns {'en' | 'ko'} */
export function languageForSource(data, filename) {
  const expected = /\.ko(?:\.(?:md|mdx))?$/i.test(filename) ? 'ko' : 'en';
  if (data.language !== undefined && data.language !== expected) {
    throw new Error(`Language metadata does not match source filename: ${filename}`);
  }
  return expected;
}

/** @param {{visibility?: string, approvedForPublication?: boolean, draft?: boolean, language?: string}} data
 * @param {string} [collection] */
export function isVisibleData(data, collection) {
  // Language availability is independent of the owner's per-language release
  // switch. Public builds cannot load Korean bodies or their asset imports.
  return isPrivatePreview() || (data.language !== 'ko' && visibilityFor(data, collection) === 'public');
}
