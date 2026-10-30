import type { GetStaticPaths } from 'astro';
import { getClipStaticPaths, serveClipAsset } from '../../lib/media';
export const getStaticPaths = (() => getClipStaticPaths('mp4')) satisfies GetStaticPaths;
export const GET = serveClipAsset;
