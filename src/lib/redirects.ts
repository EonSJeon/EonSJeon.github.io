export const movedProjectSlugs = [
  'venus-flytrap-bioelectrical-playback',
  'ece3011-robachtic-symphony',
  'ee405-robotic-tic-tac-toe',
];

export const legacyRedirects: Record<string, string> = {
  '/about/': '/',
  '/ko/about/': '/ko/',
  ...Object.fromEntries(['', '/ko'].flatMap((prefix) => movedProjectSlugs.map((slug) => [
    `${prefix}/coursework/${slug}/`, `${prefix}/projects/${slug}/`,
  ]))),
};
