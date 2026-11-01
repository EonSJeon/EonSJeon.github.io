import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { unified } from '@astrojs/markdown-remark';
import { legacyRedirects } from './src/lib/redirects';

export default defineConfig({
  site: 'https://eonsjeon.github.io',
  output: 'static',
  trailingSlash: 'always',
  i18n: { defaultLocale: 'en', locales: ['en', 'ko'], routing: { prefixDefaultLocale: false } },
  integrations: [mdx(), sitemap({ filter: (page) => !(new URL(page).pathname in legacyRedirects) })],
  markdown: {
    processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
