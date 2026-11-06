import { getCollection, type CollectionEntry } from 'astro:content';
import { localizePath, type Locale, type LanguageLinks } from './i18n';
import { isVisibleData } from './content-policy.mjs';

export const PUBLIC_COLLECTIONS = [
  'publications',
  'projects',
  'coursework',
  'blog',
  'proposals',
] as const;

export type PublicCollection = (typeof PUBLIC_COLLECTIONS)[number];
export type PublicEntry = CollectionEntry<PublicCollection>;

export function isPublicEntry(entry: {
  collection?: string;
  data: { visibility?: string; approvedForPublication?: boolean; draft?: boolean };
}): boolean {
  return isVisibleData(entry.data, entry.collection);
}

export async function getPublicEntries<C extends PublicCollection>(collection: C, lang: Locale = 'en'): Promise<CollectionEntry<C>[]> {
  const entries = await getCollection(collection, (entry) => isPublicEntry(entry) && entry.data.language === lang);
  const slugs = new Set<string>();
  for (const entry of entries) {
    const slug = slugForEntry(entry);
    if (slugs.has(slug)) throw new Error(`Duplicate ${lang} route in ${collection}: ${slug}`);
    slugs.add(slug);
  }
  return entries.sort((a, b) => {
    if (collection === 'blog' || collection === 'publications') {
      const byDate = (b.data.pubDate?.getTime() ?? 0) - (a.data.pubDate?.getTime() ?? 0);
      if (byDate) return byDate;
    }
    const aOrder = collection === 'proposals' ? (a.data.priority ?? a.data.displayOrder) : a.data.displayOrder;
    const bOrder = collection === 'proposals' ? (b.data.priority ?? b.data.displayOrder) : b.data.displayOrder;
    return aOrder - bOrder || a.id.localeCompare(b.id);
  });
}

export function slugForEntry(entry: Pick<PublicEntry, 'id' | 'data'>): string {
  return entry.data.translationKey ?? entry.id.replace(/\.(en|ko)$/, '');
}

export function hrefForEntry(entry: Pick<PublicEntry, 'collection' | 'id' | 'data'>): string {
  const slug = slugForEntry(entry).split('/').map(encodeURIComponent).join('/');
  if (entry.collection === 'publications') return localizePath(`/#${slug}`, entry.data.language);
  if (entry.collection === 'proposals') return localizePath(`/blog/ideas/${slug}/`, entry.data.language);
  return localizePath(`/${entry.collection}/${slug}/`, entry.data.language);
}

/** One visible Blog, without moving paired editorial sources or changing flags. */
export async function getBlogEntries(lang: Locale = 'en'): Promise<PublicEntry[]> {
  const [posts, ideas] = await Promise.all([getPublicEntries('blog', lang), getPublicEntries('proposals', lang)]);
  const entries: PublicEntry[] = [...posts, ...ideas];
  const paths = new Set<string>();
  for (const entry of entries) {
    const href = hrefForEntry(entry);
    if (paths.has(href)) throw new Error(`Duplicate ${lang} Blog URL: ${href}`);
    paths.add(href);
  }
  return entries.sort((a, b) => (b.data.pubDate?.getTime() ?? 0) - (a.data.pubDate?.getTime() ?? 0)
    || a.data.displayOrder - b.data.displayOrder || hrefForEntry(a).localeCompare(hrefForEntry(b)));
}

export function editorialTags(entry: PublicEntry): string[] {
  return [...new Set([...(entry.collection === 'proposals' ? ['idea'] : []), ...entry.data.tags])];
}

export async function translationLinksForEntry(entry: PublicEntry): Promise<LanguageLinks> {
  const released = await getCollection(entry.collection, isPublicEntry);
  const links: LanguageLinks = {};
  for (const candidate of released) {
    if (slugForEntry(candidate) === slugForEntry(entry)) links[candidate.data.language] = hrefForEntry(candidate);
  }
  return links;
}

export function isUnderReview(entry: PublicEntry) {
  return /^(under review|심사 중)/i.test(entry.data.status);
}

export function isPublished(entry: PublicEntry) {
  return /^(published|accepted|게재 완료|게재 승인|출판 완료)(?:\s|$|[·—:-])/i.test(entry.data.status);
}
