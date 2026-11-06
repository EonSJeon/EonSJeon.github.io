import type { APIContext } from 'astro';
import { writingRSS } from '../../lib/rss';
import { isPrivatePreview } from '../../lib/content-policy.mjs';
export function getStaticPaths() {
  return isPrivatePreview() ? [{ params: { feed: 'rss' } }] : [];
}
export async function GET(context: APIContext) { return writingRSS(context, 'ko'); }
