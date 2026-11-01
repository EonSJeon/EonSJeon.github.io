export const movedProjectSlugs = [
  'venus-flytrap-bioelectrical-playback',
  'ece3011-robachtic-symphony',
  'ee405-robotic-tic-tac-toe',
];

export const legacyPublicationSlugs = [
  'amd-global-burden',
  'ocd-related-disorders-prevalence',
  'sma-global-prevalence',
];

export const retiredResearchPapers: Record<string, string> = {
  'ocdm-cfo-estimation': 'ocdm-cfo-estimation',
  'tiadc-ofdm-estimation': 'tiadc-ofdm-estimation',
  'hemophilia-resource-modeling': 'hemophilia-resource-modeling',
  'ocd-prevalence-meta-analysis': 'ocd-related-disorders-prevalence',
  'sma-prevalence-modeling': 'sma-global-prevalence',
  'amd-prevalence-modeling': 'amd-global-burden',
};

export const legacyRedirects: Record<string, string> = {
  '/about/': '/',
  '/ko/about/': '/ko/',
  '/research/': '/publications/',
  '/ko/research/': '/ko/publications/',
  ...Object.fromEntries(['', '/ko'].flatMap((prefix) => Object.entries(retiredResearchPapers).map(([research, paper]) => [
    `${prefix}/research/${research}/`, `${prefix}/publications/#${paper}`,
  ]))),
  ...Object.fromEntries(['', '/ko'].flatMap((prefix) => movedProjectSlugs.map((slug) => [
    `${prefix}/coursework/${slug}/`, `${prefix}/projects/${slug}/`,
  ]))),
  ...Object.fromEntries(['', '/ko'].flatMap((prefix) => legacyPublicationSlugs.map((slug) => [
    `${prefix}/publications/${slug}/`, `${prefix}/publications/#${slug}`,
  ]))),
};
