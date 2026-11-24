import { defineMiddleware } from 'astro:middleware';
import { newTabLinks } from './lib/new-tab-links.mjs';

// Apply the owner's external-link policy to components and Markdown, in preview and static builds.
export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  if (!response.body || !response.headers.get('content-type')?.includes('text/html')) return response;
  const html = newTabLinks(await response.text());
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  headers.delete('etag');
  return new Response(html, { status: response.status, statusText: response.statusText, headers });
});
