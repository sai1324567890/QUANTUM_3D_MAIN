import cfg from '../site.config.mjs';

export const SITE = cfg.siteUrl.replace(/\/+$/, '');
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Favicon + app icon tags (every browser/device). */
export const iconLinks = () => `
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />`;

/** GA4 + AdSense + Search Console tag. Empty string when nothing is configured. */
export function trackingHead() {
  let h = '';
  if (cfg.googleSiteVerification)
    h += `\n    <meta name="google-site-verification" content="${esc(cfg.googleSiteVerification)}" />`;
  if (cfg.ga4Id)
    h += `\n    <script async src="https://www.googletagmanager.com/gtag/js?id=${esc(cfg.ga4Id)}"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${esc(cfg.ga4Id)}');</script>`;
  if (cfg.adsenseClient)
    h += `\n    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${esc(cfg.adsenseClient)}" crossorigin="anonymous"></script>`;
  return h;
}

/** Amazon search link carrying your affiliate tag. Plain bold text when no tag is set. */
export function bookLink(title, author = '') {
  if (!cfg.amazonTag) return `<b>${esc(title)}</b>`;
  const q = encodeURIComponent(`${title} ${author}`.trim());
  return `<a href="https://${cfg.amazonDomain}/s?k=${q}&amp;tag=${encodeURIComponent(cfg.amazonTag)}" target="_blank" rel="sponsored nofollow noopener"><b>${esc(title)}</b></a>`;
}

export const affiliateNote = () =>
  cfg.amazonTag
    ? `<p class="note"><b>Disclosure:</b> some links below are affiliate links. If you buy through them we may earn a small commission at no extra cost to you. As an Amazon Associate we earn from qualifying purchases.</p>`
    : '';
