import type { Locale } from '../lib/i18n';

// Event months do not imply an invented first-of-month date. September's tie is editorial.
const news = [
  { date: '2026-10', en: 'Submitted our work on joint channel and TI-ADC mismatch estimation to ICC 2027.', ko: '채널과 TI-ADC 불일치 공동 추정 연구를 ICC 2027에 투고했습니다.' },
  { date: '2026-09', en: 'Submitted our work on single-pilot OCDM frequency-offset estimation to ICASSP 2027.', ko: '단일 파일럿을 이용한 OCDM 주파수 오프셋 추정 연구를 ICASSP 2027에 투고했습니다.' },
  { date: '2026-09', url: 'https://www.sciencedirect.com/science/article/pii/S2468653026004914', en: 'Our study on age-related macular degeneration was published in Ophthalmology Retina.', ko: '연령관련황반변성 연구가 Ophthalmology Retina에 출판되었습니다.' },
  // BRIC registration: 2026-07-09. This is not the November announcement date.
  { date: '2026-07', url: 'https://www.ibric.org/bric/hanbitsa/treatise.do?mode=treatise-view&id=102421&authorId=53054#!/list', en: "Featured in BRIC’s Hanbitsa for our study on obsessive-compulsive and related disorders.", ko: '강박장애 및 관련 장애 연구로 BRIC 한빛사(한국을 빛내는 사람들)에 선정되었습니다.' },
  { date: '2026-07', url: 'https://psychiatryonline.org/doi/10.1176/appi.ajp.20250944', en: 'Our study on obsessive-compulsive and related disorders was published in the American Journal of Psychiatry.', ko: '강박장애 및 관련 장애 연구가 American Journal of Psychiatry에 출판되었습니다.' },
];

export function getNews(lang: Locale) {
  return news.slice(0, 7).map((item) => ({ date: item.date, url: item.url, text: item[lang] }));
}
