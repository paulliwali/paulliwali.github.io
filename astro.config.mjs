// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import wikiLinkPlugin from 'remark-wiki-link';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { pageResolver, hrefTemplate } from './src/utils/wiki-resolver.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://paulliwali.github.io',
  integrations: [react()],
  markdown: {
    remarkPlugins: [
      remarkMath,
      [wikiLinkPlugin, {
        pageResolver,
        hrefTemplate,
        aliasDivider: '|',
      }],
    ],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-light',
      langs: [
        async () => {
          return await import('shiki/langs/sql.mjs').then(m => m.default[0]);
        },
      ],
    },
  },
});
