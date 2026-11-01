export const site = {
  name: 'Sangeon Jeon',
  koreanName: '전상언',
  hanjaName: '全商彥',
  title: 'Sangeon Jeon — Wireless Communications & Signal Processing',
  description: 'Ph.D. student in Electrical and Computer Engineering at Georgia Tech. Research in wireless communications, waveform design, synchronization, and Bayesian inference.',
  role: 'Ph.D. student, Electrical & Computer Engineering',
  institution: 'Georgia Institute of Technology',
  location: 'Atlanta, Georgia',
  address: 'Rm5263, 75 5th St NW, Atlanta, GA 30308',
  email: 'sjeon84@gatech.edu',
  github: 'https://github.com/EonSJeon',
  scholar: 'https://scholar.google.com/citations?user=vwwPFNMAAAAJ',
  orcid: 'https://orcid.org/0009-0001-5883-0774',
  linkedin: 'https://www.linkedin.com/in/sangeon-jeon-b8bb7b239/',
  advisor: { name: 'Xiaoli Ma', url: 'https://xma-ultra-signals.github.io/' },
  interests: ['Wireless communications', 'Waveform design', 'Synchronization', 'Bayesian inference'],
};

export const sections = {
  research: {
    label: 'Research', eyebrow: 'Questions & investigations',
    description: 'Research in wireless communications and meta-analysis: synchronization, receiver estimation, and synthesis of disease-prevalence evidence.',
  },
  projects: {
    label: 'Projects', eyebrow: 'Ideas made tangible',
    description: 'Engineering projects connecting software and hardware, from independent prototypes to team design projects.',
  },
  coursework: {
    label: 'Coursework', eyebrow: 'Courses & foundations',
    description: 'Courses I have taken, with study notes and selected laboratory work.',
  },
  publications: {
    label: 'Publications', eyebrow: 'Manuscripts & publications',
    description: 'Published journal articles and manuscripts under review, with links to the papers and related research.',
  },
  blog: {
    label: 'Blog', eyebrow: 'Notes & observations',
    description: 'A space for technical notes, engineering explanations, and longer reflections.',
  },
  proposals: {
    label: 'Ideas', eyebrow: 'Questions worth exploring',
    description: 'Research questions and project ideas, with tentative approaches and open questions.',
  },
} as const;

export const education = [
  { degree: 'Ph.D. in Electrical and Computer Engineering', institution: 'Georgia Institute of Technology', period: '2026–present', cvPeriod: { en: 'Jan 2026–present', ko: '2026.01–현재' }, note: 'Advisor: Xiaoli Ma', gpa: '4.00 / 4.0' },
  { degree: 'M.S. in Electrical and Computer Engineering', institution: 'Georgia Institute of Technology', period: '2025', cvPeriod: { en: 'Jan–Dec 2025', ko: '2025.01–12' }, note: 'Advisor: Xiaoli Ma', gpa: '4.00 / 4.0' },
  { degree: 'B.S. in Electrical and Computer Engineering', institution: 'Georgia Institute of Technology', period: '2023–2024', cvPeriod: { en: 'Jan 2023–Dec 2024', ko: '2023.01–2024.12' }, gpa: '4.00 / 4.0' },
  { degree: 'B.S. in Electrical Engineering', institution: 'KAIST', period: '2018–2025', cvPeriod: { en: 'Feb 2018–Feb 2025', ko: '2018.02–2025.02' }, note: 'Advisor: Jinseok Choi', gpa: '3.95 / 4.3' },
];
