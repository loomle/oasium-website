import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oasium.io',
  publicDir: './webimg',
  output: 'static',
  integrations: [sitemap()],
});

