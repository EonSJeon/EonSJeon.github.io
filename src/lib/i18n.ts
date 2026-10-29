import { site, sections, education } from '../data/site';

export const LOCALES = ['en', 'ko'] as const;
export type Locale = typeof LOCALES[number];
export type LanguageLinks = Partial<Record<Locale, string>>;

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
    description: '조지아공과대학교 전기·컴퓨터공학 박사과정 전상언입니다. 무선통신, 동기화, 통계적 신호 추정을 연구합니다.',
    role: '전기·컴퓨터공학 박사과정', institution: '조지아공과대학교', location: '미국 조지아주 애틀랜타',
    interests: ['무선통신', '동기화', '통계적 신호 추정'],
  };
}

const koreanSections = {
  research: { label: '연구', eyebrow: '연구 주제와 탐구', description: '처프 기반 파형부터 수신기 하드웨어 비이상성까지, 무선통신 시스템의 동기화와 추정을 연구합니다.' },
  projects: { label: '프로젝트', eyebrow: '아이디어의 구현', description: '소프트웨어와 하드웨어를 연결하고 일상의 문제를 다루는 독립적인 공학 프로젝트입니다.' },
  coursework: { label: '교과 프로젝트', eyebrow: '만들며 배우기', description: '생체전자공학, 메카트로닉스, 디지털 통신, 임베디드 제어 분야의 수업 프로젝트를 소개합니다.' },
  publications: { label: '논문', eyebrow: '논문 및 투고 현황', description: '논문별 투고·심사·게재 현황을 정리합니다. 진행 중인 연구는 연구 페이지에서 소개합니다.' },
  blog: { label: '글', eyebrow: '기록과 생각', description: '기술 노트, 공학적 설명, 긴 생각을 기록하는 공간입니다.' },
  proposals: { label: '아이디어', eyebrow: '탐구할 만한 질문', description: '앞으로 탐구하고 싶은 연구 질문과 프로젝트 아이디어, 가능한 접근 방법과 남은 과제를 정리합니다.' },
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
    institution: item.institution === 'KAIST' ? 'KAIST' : '조지아공과대학교',
    period: item.period.replace('present', '현재'),
    note: item.note?.replace('Advisor: Jinseok Choi', '지도교수: 최진석').replace('Advisor: ', '지도교수: '),
  }));
}

export function formatDate(date: Date, lang: Locale) {
  return date.toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  });
}
