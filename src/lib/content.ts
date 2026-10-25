import { getCollection, type CollectionEntry } from 'astro:content';

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

export async function getPublicEntries<C extends PublicCollection>(collection: C): Promise<CollectionEntry<C>[]> {
  const entries = await getCollection(collection, isPublicEntry);
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

export function hrefForEntry(entry: Pick<PublicEntry, 'collection' | 'id'>): string {
  const slug = entry.id.split('/').map(encodeURIComponent).join('/');
  return `/${entry.collection}/${slug}/`;
}
