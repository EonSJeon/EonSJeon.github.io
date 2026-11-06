import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getBlogEntries, hrefForEntry } from './content';
import type { Locale } from './i18n';

export async function writingRSS(context: APIContext, lang: Locale) {
  const posts = await getBlogEntries(lang);
  return rss({
    title: lang === 'ko' ? '전상언 — 블로그' : 'Sangeon Jeon — Blog',
    description: lang === 'ko' ? '전상언의 기술 노트와 공학적 설명, 생각을 기록합니다.' : 'Technical notes, engineering explanations, and reflections by Sangeon Jeon.',
    site: context.site!,
    customData: `<language>${lang === 'ko' ? 'ko-KR' : 'en-US'}</language>`,
    items: posts.filter((post) => post.data.pubDate).map((post) => ({
      title: post.data.title, description: post.data.summary,
      pubDate: post.data.pubDate!, link: hrefForEntry(post),
    })),
  });
}
