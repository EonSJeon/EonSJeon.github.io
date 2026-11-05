import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { unified } from '@astrojs/markdown-remark';
import { legacyRedirects } from './src/lib/redirects';

const privatePreview = process.env.SITE_PREVIEW_MODE === 'private';
if (privatePreview && !process.argv.includes('dev')) {
  throw new Error('Private preview is local dev only. Unset SITE_PREVIEW_MODE before a build or export.');
}

export default defineConfig({
  cacheDir: privatePreview ? './.astro-private' : './.astro',
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
