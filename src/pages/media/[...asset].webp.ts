import type { GetStaticPaths } from 'astro';
import { getClipStaticPaths, serveClipAsset } from '../../lib/media';
export const getStaticPaths = (() => getClipStaticPaths('webp')) satisfies GetStaticPaths;
export const GET = serveClipAsset;
