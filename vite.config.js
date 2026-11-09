import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cfg from './site.config.mjs';
import { trackingHead } from './scripts/lib.mjs';

// Fills __PLACEHOLDERS__ in index.html from site.config.mjs and adds analytics/ads on production builds only.
const htmlFromConfig = () => ({
  name: 'html-from-config',
  transformIndexHtml: {
    order: 'pre',
    handler(html, ctx) {
      const site = cfg.siteUrl.replace(/\/+$/, '');
      let out = html
        .replaceAll('__SITE_URL__', site)
        .replaceAll('__TITLE__', cfg.title)
        .replaceAll('__DESCRIPTION__', cfg.description)
        .replaceAll('__SITE_NAME__', cfg.siteName);
      if (!ctx.server) out = out.replace('</head>', `${trackingHead()}\n  </head>`);
      return out;
    },
  },
});

export default defineConfig({ plugins: [react(), htmlFromConfig()] });
