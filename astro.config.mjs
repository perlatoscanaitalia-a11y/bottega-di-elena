import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bottegadielena.it',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !/\/(?:404|privacy)\/?$/.test(page) })],
});
