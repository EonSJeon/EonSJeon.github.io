/** Editorial Markdown has one owner-controlled release switch per language. */
export const EDITORIAL_COLLECTIONS = new Set(['coursework', 'blog', 'proposals']);

/** @param {{visibility?: string, approvedForPublication?: boolean, draft?: boolean}} data
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

/** @param {{visibility?: string, approvedForPublication?: boolean, draft?: boolean}} data
 * @param {string} [collection] */
export function isVisibleData(data, collection) {
  return isPrivatePreview() || visibilityFor(data, collection) === 'public';
}
