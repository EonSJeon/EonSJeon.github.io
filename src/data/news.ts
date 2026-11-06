import type { Locale } from '../lib/i18n';

// Event months do not imply an invented first-of-month date. September's tie is editorial.
const news = [
  { date: '2026-10', paper: 'tiadc-ofdm-estimation', en: 'Submitted our work on joint channel and TI-ADC mismatch estimation to ICC 2027.', ko: '채널과 TI-ADC 불일치 공동 추정 연구를 ICC 2027에 투고했습니다.' },
  { date: '2026-09', paper: 'ocdm-cfo-estimation', en: 'Submitted our work on single-pilot OCDM frequency-offset estimation to ICASSP 2027.', ko: '단일 파일럿을 이용한 OCDM 주파수 오프셋 추정 연구를 ICASSP 2027에 투고했습니다.' },
  { date: '2026-09', paper: 'amd-global-burden', en: 'Our study on age-related macular degeneration was published in Ophthalmology Retina.', ko: '연령관련황반변성 연구가 Ophthalmology Retina에 출판되었습니다.' },
  { date: '2026-07', paper: 'ocd-related-disorders-prevalence', en: 'Our study on obsessive-compulsive and related disorders was published in the American Journal of Psychiatry.', ko: '강박장애 및 관련 장애 연구가 American Journal of Psychiatry에 출판되었습니다.' },
];

export function getNews(lang: Locale) {
  return news.slice(0, 4).map((item) => ({ date: item.date, paper: item.paper, text: item[lang] }));
}
