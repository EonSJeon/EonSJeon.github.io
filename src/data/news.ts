import type { Locale } from '../lib/i18n';

const news = [
  { date: '2026-01', en: 'I started the Ph.D. program in Electrical and Computer Engineering at the Georgia Institute of Technology.', ko: 'Georgia Institute of Technology 전기컴퓨터공학 박사과정을 시작했습니다.' },
];

export function getNews(lang: Locale) {
  return news.map((item) => ({ date: item.date, text: item[lang] }));
}
