import path from 'node:path';
import { readFile } from 'node:fs/promises';
import type { APIRoute } from 'astro';
import { getPublicEntries, PUBLIC_COLLECTIONS, slugForEntry, type PublicEntry } from './content';
import { LOCALES } from './i18n';

export function clipHref(entry: PublicEntry, filename: string): string {
  return `/media/${entry.collection}/${slugForEntry(entry)}/${filename}`;
}

// Native media is emitted only when referenced by a released translation.
// Raw source videos stay in ignored references; these are selected web copies.
export async function getReleasedClipAssets() {
  const groups = await Promise.all(PUBLIC_COLLECTIONS.flatMap((collection) => LOCALES.map((locale) => getPublicEntries(collection, locale))));
  const assets = new Map<string, { asset: string; source: string; type: string }>();
  for (const entry of groups.flat()) {
    for (const clip of entry.data.clips) {
      if (!entry.filePath) throw new Error(`Missing source path for video entry: ${entry.id}`);
      const directory = path.dirname(path.resolve(entry.filePath));
      const contentRoot = path.resolve('src/content', entry.collection);
      if (!directory.startsWith(contentRoot + path.sep)) throw new Error(`Video source outside content collection: ${entry.id}`);
      for (const filename of [clip.src, clip.poster].filter((name): name is string => Boolean(name))) {
        const source = path.join(directory, filename);
        const asset = clipHref(entry, filename).slice('/media/'.length);
        const existing = assets.get(asset);
        if (existing && existing.source !== source) throw new Error(`Conflicting video asset: ${asset}`);
        const type = filename.endsWith('.mp4') ? 'video/mp4' : filename.endsWith('.png') ? 'image/png' : filename.endsWith('.webp') ? 'image/webp' : 'image/jpeg';
        assets.set(asset, { asset, source, type });
      }
    }
  }
  return [...assets.values()];
}

// Explicit extensions keep media URLs identical in dev and static hosting,
// even when page routes use trailingSlash: 'always'.
export async function getClipStaticPaths(extension: 'mp4' | 'jpg' | 'png' | 'webp') {
  return (await getReleasedClipAssets()).filter((asset) => asset.asset.endsWith(`.${extension}`)).map((asset) => ({
    params: { asset: asset.asset.slice(0, -extension.length - 1) },
    props: asset,
  }));
}

export const serveClipAsset: APIRoute = async ({ props }) => {
  const bytes = await readFile(props.source);
  return new Response(new Uint8Array(bytes), { headers: { 'Content-Type': props.type } });
};
