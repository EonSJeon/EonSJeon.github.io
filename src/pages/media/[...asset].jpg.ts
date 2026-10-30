import type { GetStaticPaths } from 'astro';
import { getClipStaticPaths, serveClipAsset } from '../../lib/media';
export const getStaticPaths = (() => getClipStaticPaths('jpg')) satisfies GetStaticPaths;
export const GET = serveClipAsset;
