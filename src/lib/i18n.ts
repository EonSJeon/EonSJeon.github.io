import { site, sections, education } from '../data/site';

export const LOCALES = ['en', 'ko'] as const;
export type Locale = typeof LOCALES[number];
export type LanguageLinks = Partial<Record<Locale, string>>;

const koreanInterests: Record<string, string> = {
  'Wireless communications': '무선통신',
  'Waveform design': '파형 설계',
  'Synchronization': '동기화',
  'Bayesian statistics': '베이지안 통계',
};

export function localizePath(path: string, lang: Locale): string {
  const url = new URL(path, 'https://local.invalid');
  let pathname = url.pathname.replace(/^\/ko(?=\/|$)/, '') || '/';
  if (pathname === '/404.html') pathname = '/404/';
  if (lang === 'en' && pathname === '/404/') pathname = '/404.html';
  return `${lang === 'ko' ? '/ko' : ''}${pathname}${url.search}${url.hash}`;
}

export function getSiteCopy(lang: Locale) {
  if (lang === 'en') return site;
  return {
    ...site, name: site.koreanName,
    title: '전상언 — 무선통신 및 신호처리',
    description: 'Georgia Institute of Technology 전기·컴퓨터공학 박사과정 전상언입니다. 무선통신, 파형 설계, 동기화와 베이지안 통계를 연구합니다.',
    role: '전기·컴퓨터공학 박사과정', institution: 'Georgia Institute of Technology', location: 'Atlanta, Georgia',
    interests: site.interests.map((interest) => koreanInterests[interest] ?? interest),
  };
}

const koreanSections = {
  projects: { label: '프로젝트', description: '독립 시제품부터 팀 설계 프로젝트까지, 소프트웨어와 하드웨어를 연결한 공학 프로젝트입니다.' },
  coursework: { label: '코스웍', description: '수강한 과목과 학습 내용, 실험 기록을 정리합니다.' },
  publications: { label: '출판', description: '학회·저널의 출판물과 투고 원고를 정리합니다.' },
  blog: { label: '블로그', description: '기술 노트, 공학적 설명, 긴 생각을 기록하는 공간입니다.' },
  proposals: { label: '아이디어', description: '앞으로 탐구하고 싶은 연구 질문과 프로젝트 아이디어, 가능한 접근 방법과 남은 과제를 정리합니다.' },
};

export function getSectionsCopy(lang: Locale) {
  return lang === 'ko' ? koreanSections : sections;
}

export function getEducationCopy(lang: Locale) {
  return lang === 'en' ? education : education.map((item) => ({
    ...item,
    degree: item.degree.startsWith('Ph.D.') ? '전기·컴퓨터공학 박사과정'
      : item.degree.startsWith('M.S.') ? '전기·컴퓨터공학 석사'
      : item.institution === 'KAIST' ? '전기및전자공학 학사' : '전기·컴퓨터공학 학사',
    institution: item.institution === 'KAIST' ? 'KAIST' : 'Georgia Institute of Technology',
    period: item.period.replace('present', '현재'),
    note: item.note?.replace('Advisor: Jinseok Choi', '지도교수: 최진석').replace('Advisor: ', '지도교수: '),
  }));
}

export function formatDate(date: Date, lang: Locale) {
  return date.toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  });
}
