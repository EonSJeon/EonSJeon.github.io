export const site = {
  // 번역 금지: 영문 고유명은 고정값이다. 한국어 본문용 이름은 koreanName을 별도로 사용한다.
  name: 'Sangeon Jeon',
  koreanName: '전상언',
  hanjaName: '全商彥',
  title: 'Sangeon Jeon — Wireless Communications & Signal Processing',
  description: 'Ph.D. student in Electrical and Computer Engineering at Georgia Tech. Research in wireless communications, waveform design, synchronization, TI-ADC, and Bayesian statistics.',
  role: 'Ph.D. student, Electrical & Computer Engineering',
  // 번역 금지: 기관명·Atlanta, Georgia·우편주소·이메일은 한국어 화면에서도 원문을 유지한다.
  institution: 'Georgia Institute of Technology',
  location: 'Atlanta, Georgia',
  address: 'Rm 5263, Centergy One',
  mapAddress: '75 5th St NW, Atlanta, GA 30308',
  mapPlaceName: 'Centergy One',
  email: 'sjeon84@gatech.edu',
  github: 'https://github.com/EonSJeon',
  scholar: 'https://scholar.google.com/citations?user=vwwPFNMAAAAJ',
  orcid: 'https://orcid.org/0009-0001-5883-0774',
  linkedin: 'https://www.linkedin.com/in/sangeon-jeon-b8bb7b239/',
  // Owner-approved three-page CV; editable sources remain in the private Overleaf workspace.
  cvPdf: '/files/sangeon-jeon-cv.pdf',
  advisor: { name: 'Xiaoli Ma', url: 'https://xma-ultra-signals.github.io/' },
  kaistAdvisor: { name: 'Jinseok Choi', url: 'https://sic-x.kaist.ac.kr/' },
  dualDegreeProgram: {
    en: 'https://ee.kaist.ac.kr/en/education-cooperation-01/',
    ko: 'https://ee.kaist.ac.kr/education-cooperation-01/',
  },
  // 번역 금지: TI-ADC 약어는 모든 언어에서 동일하게 유지한다.
  interests: ['Wireless communications', 'Waveform design', 'Synchronization', 'TI-ADC', 'Bayesian statistics'],
};

export const sections = {
  projects: {
    label: 'Projects',
    description: 'Engineering projects connecting software and hardware, from independent prototypes to team design projects.',
  },
  coursework: {
    label: 'Coursework',
    description: 'Courses I have taken, with study notes and selected laboratory work.',
  },
  publications: {
    label: 'Publications',
    description: 'Journal and conference papers, with review status shown for submitted manuscripts.',
  },
  blog: {
    label: 'Blog',
    description: 'A space for technical notes, engineering explanations, and longer reflections.',
  },
  proposals: {
    label: 'Ideas',
    description: 'Research questions and project ideas, with tentative approaches and open questions.',
  },
} as const;

export const education = [
  { degree: 'Ph.D. in Electrical and Computer Engineering', institution: 'Georgia Institute of Technology', period: '2026–present', cvPeriod: { en: 'Jan 2026–present', ko: '2026.01–현재' }, note: 'Advisor: Xiaoli Ma', gpa: '4.00 / 4.0' },
  { degree: 'M.S. in Electrical and Computer Engineering', institution: 'Georgia Institute of Technology', period: '2025', cvPeriod: { en: 'Jan–Dec 2025', ko: '2025.01–12' }, note: 'Advisor: Xiaoli Ma', gpa: '4.00 / 4.0' },
  { degree: 'B.S. in Electrical and Computer Engineering', institution: 'Georgia Institute of Technology', period: '2023–2024', cvPeriod: { en: 'Jan 2023–Dec 2024', ko: '2023.01–2024.12' }, gpa: '4.00 / 4.0' },
  { degree: 'B.S. in Electrical Engineering', institution: 'KAIST', period: '2018–2025', cvPeriod: { en: 'Feb 2018–Feb 2025', ko: '2018.02–2025.02' }, note: 'Advisor: Jinseok Choi', gpa: '3.95 / 4.3' },
];
