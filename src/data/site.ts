export const site = {
  name: 'Sangeon Jeon',
  koreanName: '전상언',
  title: 'Sangeon Jeon — Wireless Communications & Signal Processing',
  description: 'Ph.D. student in Electrical and Computer Engineering at Georgia Tech. Research in wireless communications, synchronization, and statistical signal estimation.',
  role: 'Ph.D. student, Electrical & Computer Engineering',
  institution: 'Georgia Institute of Technology',
  location: 'Atlanta, Georgia',
  email: 'sjeon84@gatech.edu',
  github: 'https://github.com/EonSJeon',
  scholar: 'https://scholar.google.com/citations?user=vwwPFNMAAAAJ',
  orcid: 'https://orcid.org/0009-0001-5883-0774',
  linkedin: 'https://www.linkedin.com/in/sangeon-jeon-b8bb7b239/',
  advisor: { name: 'Xiaoli Ma', url: 'https://xma-ultra-signals.github.io/' },
  interests: ['Wireless communications', 'Synchronization', 'Statistical signal estimation'],
};

export const sections = {
  research: {
    label: 'Research', eyebrow: 'Questions & investigations',
    description: 'Synchronization and estimation for wireless communication systems, from chirp-based waveforms to receiver hardware impairments.',
  },
  projects: {
    label: 'Projects', eyebrow: 'Ideas made tangible',
    description: 'Independent engineering work that brings software, hardware, and everyday interactions together.',
  },
  coursework: {
    label: 'Coursework', eyebrow: 'Learning through making',
    description: 'Selected course projects in bioelectronics, mechatronics, digital communications, and embedded control.',
  },
  publications: {
    label: 'Publications', eyebrow: 'Manuscripts & publications',
    description: 'Manuscripts with their current submission status. Research in progress is described separately on the Research page.',
  },
  blog: {
    label: 'Writing', eyebrow: 'Notes & observations',
    description: 'A space for technical notes, engineering explanations, and longer reflections.',
  },
  proposals: {
    label: 'Proposals', eyebrow: 'Questions worth exploring',
    description: 'Research questions and project ideas, with tentative approaches and open questions.',
  },
} as const;

export const education = [
  { degree: 'Ph.D. in Electrical and Computer Engineering', institution: 'Georgia Institute of Technology', period: '2026–present', note: 'Advisor: Xiaoli Ma', gpa: '4.00 / 4.0' },
  { degree: 'M.S. in Electrical and Computer Engineering', institution: 'Georgia Institute of Technology', period: '2025', note: 'Advisor: Xiaoli Ma', gpa: '4.00 / 4.0' },
  { degree: 'B.S. in Electrical and Computer Engineering', institution: 'Georgia Institute of Technology', period: '2023–2024', gpa: '4.00 / 4.0' },
  { degree: 'B.S. in Electrical Engineering', institution: 'KAIST', period: '2018–2025', note: 'Advisor: Jinseok Choi', gpa: '3.95 / 4.3' },
];
