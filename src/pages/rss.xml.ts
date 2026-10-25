import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublicEntries, hrefForEntry } from '../lib/content';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const posts = await getPublicEntries('blog');
  return rss({
    title: `${site.name} — Writing`,
    description: 'Technical notes, engineering explanations, and reflections by Sangeon Jeon.',
    site: context.site!,
    items: posts.filter((post) => post.data.pubDate).map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.pubDate!,
      link: hrefForEntry(post),
    })),
  });
}
