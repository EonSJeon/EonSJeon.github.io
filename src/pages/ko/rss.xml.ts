import type { APIContext } from 'astro';
import { writingRSS } from '../../lib/rss';
export async function GET(context: APIContext) { return writingRSS(context, 'ko'); }
