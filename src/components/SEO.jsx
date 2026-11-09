import { useEffect } from 'react';
import cfg from '../../site.config.mjs';

// Keeps the tab title / meta in sync with site.config.mjs after React mounts.
// (index.html already contains the same values for crawlers.)
const SITE = cfg.siteUrl.replace(/\/+$/, '');

export default function SEO() {
  useEffect(() => {
    document.title = cfg.title;

    const setMeta = (attr, key, content) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', cfg.description);
    setMeta('property', 'og:title', cfg.title);
    setMeta('property', 'og:description', cfg.description);
    setMeta('property', 'og:url', SITE + '/');
    setMeta('name', 'twitter:title', cfg.title);
    setMeta('name', 'twitter:description', cfg.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = SITE + '/';
  }, []);

  return null;
}
