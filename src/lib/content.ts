import { getCollection, type CollectionEntry } from 'astro:content';
import { localizePath, type Locale, type LanguageLinks } from './i18n';

export const PUBLIC_COLLECTIONS = [
  'research',
  'publications',
  'projects',
  'coursework',
  'blog',
  'proposals',
] as const;

export type PublicCollection = (typeof PUBLIC_COLLECTIONS)[number];
export type PublicEntry = CollectionEntry<PublicCollection>;

export function isPublicEntry(entry: {
  data: { approvedForPublication?: boolean; draft?: boolean };
}): boolean {
  return entry.data.approvedForPublication === true && entry.data.draft !== true;
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
    if (collection === 'blog') {
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
  return localizePath(`/${entry.collection}/${slug}/`, entry.data.language);
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
