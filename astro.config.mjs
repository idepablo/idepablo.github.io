import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Legacy root URLs from the first version of the site. Each becomes a small redirect page.
const legacy = ['azimuth', 'food-delivery', 'hospital-length-of-stay', 'ma-education', 'mining-flotation', 'nba-2026-season', 'world-bank-ida'];
const redirects = Object.fromEntries(legacy.map((s) => [`/${s}`, { status: 301, destination: `/projects/${s}.html` }]));

export default defineConfig({
  site: 'https://idepablo.com',
  trailingSlash: 'ignore',
  // Pages build as /projects/azimuth.html, so every link that already exists keeps working.
  build: { format: 'preserve' },
  redirects,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      // Pages are served as .html files; keep the sitemap consistent with the canonical URLs.
      serialize: (item) => {
        if (/\/(projects|buildlog)$/.test(item.url)) item.url += '/';
        else if (!item.url.endsWith('/')) item.url += '.html';
        return item;
      },
    }),
  ],
});
