import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import downloads from '../../documents/downloads.json';

export const getStaticPaths = (() => downloads.map((document) => ({
  params: { filename: document.filename.replace(/\.pdf$/, '') },
  props: { document },
}))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const document = props.document as (typeof downloads)[number];
  const bytes = await readFile(path.resolve('src/documents', document.source));
  return new Response(new Uint8Array(bytes), {
    headers: { 'Content-Type': 'application/pdf' },
  });
};
