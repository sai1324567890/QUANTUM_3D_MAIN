// Runs after `vite build`. Writes real, crawlable pages + sitemap + ads.txt into dist/.
import fs from 'node:fs';
import path from 'node:path';
import cfg from '../site.config.mjs';
import { guides } from '../content/guides.mjs';
import { SITE, esc, iconLinks, trackingHead, bookLink, affiliateNote } from './lib.mjs';

const DIST = path.resolve('dist');
const write = (rel, data) => {
  const f = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, data);
};

/* ------------------------------ shared CSS ------------------------------ */
write('page.css', `
:root{--bg:#050816;--fg:#E8F0F6;--mut:#9fb0c3;--ac:#FF7A59;--card:#0d1330;--bd:#1d2750}
@media (prefers-color-scheme:light){:root{--bg:#f7f9fc;--fg:#0e1630;--mut:#4a5a73;--ac:#d4491f;--card:#fff;--bd:#d9e1ee}}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--fg);font:17px/1.75 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif}
a{color:var(--ac)}a:hover{text-decoration-thickness:2px}
.top{display:flex;gap:18px;align-items:center;flex-wrap:wrap;padding:14px 20px;border-bottom:1px solid var(--bd);position:sticky;top:0;background:var(--bg);z-index:5}
.brand{display:flex;gap:9px;align-items:center;font-weight:700;color:var(--fg);text-decoration:none;margin-right:auto}
.top nav{display:flex;gap:16px;flex-wrap:wrap}.top nav a{color:var(--mut);text-decoration:none;font-size:15px}.top nav a:hover{color:var(--ac)}
main{max-width:760px;margin:0 auto;padding:36px 20px 20px}
h1{font-size:clamp(28px,5vw,40px);line-height:1.2;margin:.2em 0 .4em}
h2{font-size:24px;margin:1.9em 0 .4em;line-height:1.3}
.lead{font-size:19px;color:var(--mut)}.meta{color:var(--mut);font-size:14px}
ul{padding-left:1.2em}li{margin:.45em 0}
.note{background:var(--card);border:1px solid var(--bd);border-radius:10px;padding:12px 16px;font-size:15px;color:var(--mut)}
.cta{display:inline-block;background:var(--ac);color:#fff;padding:11px 20px;border-radius:9px;text-decoration:none;font-weight:600;margin-top:10px}
.cards{display:grid;gap:14px;margin-top:18px}
.card{display:block;background:var(--card);border:1px solid var(--bd);border-radius:12px;padding:18px 20px;text-decoration:none;color:var(--fg)}
.card:hover{border-color:var(--ac)}.card b{display:block;font-size:19px;margin-bottom:4px}.card span{color:var(--mut);font-size:15px}
footer{max-width:760px;margin:30px auto 0;padding:24px 20px 50px;border-top:1px solid var(--bd);color:var(--mut);font-size:14px}
footer a{color:var(--mut)}footer p{margin:.5em 0}
`);

/* ------------------------------ page shell ------------------------------ */
const LOGO = `<svg width="26" height="26" viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="12" fill="none" stroke="currentColor" stroke-width="1.5"/><ellipse cx="15" cy="15" rx="12" ry="4.2" fill="none" stroke="currentColor" stroke-width="1" opacity=".5"/><line x1="15" y1="15" x2="22" y2="7" stroke="#FF7A59" stroke-width="2.5" stroke-linecap="round"/><circle cx="22" cy="7" r="2.6" fill="#FF7A59"/></svg>`;

function page({ url, title, description, keywords, body, jsonld = [], type = 'website' }) {
  const full = `${title} | ${cfg.siteName}`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(full)}</title>
    <meta name="description" content="${esc(description)}" />${keywords ? `\n    <meta name="keywords" content="${esc(keywords)}" />` : ''}
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${SITE}${url}" />${iconLinks()}
    <meta name="theme-color" content="#050816" />
    <meta property="og:type" content="${type}" />
    <meta property="og:site_name" content="${esc(cfg.siteName)}" />
    <meta property="og:title" content="${esc(full)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${SITE}${url}" />
    <meta property="og:image" content="${SITE}/og-image.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(full)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${SITE}/og-image.png" />${trackingHead()}
    <link rel="stylesheet" href="/page.css" />
${jsonld.map((j) => `    <script type="application/ld+json">${JSON.stringify(j)}</script>`).join('\n')}
  </head>
  <body>
    <header class="top">
      <a class="brand" href="/">${LOGO} Quantum Hub 3D</a>
      <nav aria-label="Main"><a href="/">Interactive course</a><a href="/guides/">Guides</a><a href="/about/">About</a></nav>
    </header>
    <main>${body}</main>
    <footer>
      <p><a href="/">Home</a> · <a href="/guides/">Guides</a> · <a href="/about/">About</a> · <a href="/privacy/">Privacy Policy</a> · <a href="/contact/">Contact</a></p>
      <p>© ${new Date().getFullYear()} ${esc(cfg.siteName)}. Educational content only. Check current official documentation before starting a project.</p>
    </footer>
  </body>
</html>`;
}

const crumbs = (items) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + url })),
});

/* -------------------------------- guides -------------------------------- */
const ctx = { book: bookLink, affiliateNote: affiliateNote() };
for (const g of guides) {
  const url = `/guides/${g.slug}/`;
  const body = `
      <p class="meta"><a href="/guides/">Guides</a> › ${esc(g.title)}</p>
      <article>
        <h1>${esc(g.title)}</h1>
        <p class="meta">By ${esc(cfg.authorName)} · Published ${g.published} · ${g.minutes} min read</p>
        ${g.body(ctx)}
        <p><a class="cta" href="/#lab">Try the live simulations →</a></p>
      </article>`;
  write(`guides/${g.slug}/index.html`, page({
    url, title: g.title, description: g.description, keywords: g.keywords, body, type: 'article',
    jsonld: [
      { '@context': 'https://schema.org', '@type': 'Article', headline: g.title, description: g.description,
        datePublished: g.published, dateModified: cfg.lastUpdated, image: `${SITE}/og-image.png`,
        author: { '@type': 'Person', name: cfg.authorName },
        publisher: { '@type': 'Organization', name: cfg.siteName, logo: { '@type': 'ImageObject', url: `${SITE}/favicon-512.png` } },
        mainEntityOfPage: SITE + url },
      crumbs([['Home', '/'], ['Guides', '/guides/'], [g.title, url]]),
    ],
  }));
}

write('guides/index.html', page({
  url: '/guides/', title: 'Quantum Computing Guides for Beginners',
  description: 'Plain-English quantum computing guides: what a qubit is, how to learn quantum computing for free, and the best books and courses.',
  body: `<h1>Quantum computing guides</h1><p class="lead">Short, accurate guides for people learning quantum computing from scratch.</p>
    <div class="cards">${guides.map((g) => `<a class="card" href="/guides/${g.slug}/"><b>${esc(g.title)}</b><span>${esc(g.description)}</span></a>`).join('')}</div>
    <p><a class="cta" href="/">Open the interactive 3D course →</a></p>`,
  jsonld: [crumbs([['Home', '/'], ['Guides', '/guides/']])],
}));

/* ------------------------- trust pages (needed by AdSense) ------------------------- */
write('about/index.html', page({
  url: '/about/', title: 'About', description: `About ${cfg.siteName}: a free, interactive guide to quantum computing and quantum technology.`,
  body: `<h1>About ${esc(cfg.siteName)}</h1>
    <p class="lead">${esc(cfg.siteName)} is a free, interactive guide to quantum computing and quantum technology, built for people learning on their own.</p>
    <p>The site combines long-form explanations with live 3D simulations (a Bloch sphere, circuits, entanglement and more), a five-level learning path, practice questions and project ideas, so you can read a concept and then break and rebuild it yourself.</p>
    <h2>Our approach</h2>
    <ul><li>Explain ideas plainly, and say clearly what quantum computers can not do.</li><li>Link to primary, official sources and note when information may have changed.</li><li>Keep the learning material free to use.</li></ul>
    <h2>Who writes it</h2><p>${esc(cfg.authorName)}. Questions, corrections and suggestions are welcome via the <a href="/contact/">contact page</a>.</p>
    <p><a class="cta" href="/">Explore the course →</a></p>`,
}));

write('contact/index.html', page({
  url: '/contact/', title: 'Contact', description: `Contact ${cfg.siteName} with questions, corrections or suggestions.`,
  body: `<h1>Contact</h1><p class="lead">Found a mistake, have a question, or want to suggest a topic? Email us.</p>
    <p><a href="mailto:${esc(cfg.contactEmail)}">${esc(cfg.contactEmail)}</a></p>
    <p>We read every message and aim to reply within a few days.</p>`,
}));

const analytics = cfg.ga4Id
  ? `<li><b>Analytics.</b> We use Google Analytics 4 to understand how visitors use the site (pages viewed, approximate location, device type). It uses cookies and sends data to Google. You can opt out with the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics opt-out add-on</a>.</li>` : '';
const ads = cfg.adsenseClient
  ? `<li><b>Advertising.</b> We use Google AdSense. Google and its partners may use cookies to show ads based on your visits to this and other sites. You can manage this at <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google Ads Settings</a> or <a href="https://www.aboutads.info" target="_blank" rel="noopener">aboutads.info</a>.</li>` : '';
const aff = cfg.amazonTag
  ? `<li><b>Affiliate links.</b> Some links go to Amazon and carry our affiliate tag. If you buy, we may earn a commission at no extra cost to you. As an Amazon Associate we earn from qualifying purchases.</li>` : '';

write('privacy/index.html', page({
  url: '/privacy/', title: 'Privacy Policy', description: `How ${cfg.siteName} handles data, cookies, analytics, advertising and affiliate links.`,
  body: `<h1>Privacy Policy</h1><p class="meta">Last updated ${cfg.lastUpdated}</p>
    <p>${esc(cfg.siteName)} (“we”, “the site”) respects your privacy. This page explains what is collected and why.</p>
    <h2>What we collect</h2>
    <ul>
      <li><b>No accounts.</b> You do not need to register, and we do not ask for personal details to use the course.</li>
      <li><b>Saved in your browser only.</b> Your theme choice and learning progress are stored in your browser’s local storage on your own device. We do not receive them.</li>
      ${analytics}${ads}${aff}
      <li><b>Email.</b> If you email us, we use your address only to reply.</li>
    </ul>
    <h2>Third-party links</h2><p>The site links to other websites (for example IBM, Microsoft and Google). We are not responsible for their content or privacy practices.</p>
    <h2>Hosting and logs</h2><p>The site is hosted on Cloudflare Pages, which may process standard server logs (such as IP address) to deliver and secure the service.</p>
    <h2>Children</h2><p>The site is general educational content and is not directed at children under 13.</p>
    <h2>Your choices</h2><p>You can clear local storage and cookies in your browser at any time. If you are in the EEA, UK or India you may have additional rights over your personal data; contact us at <a href="mailto:${esc(cfg.contactEmail)}">${esc(cfg.contactEmail)}</a> to exercise them.</p>
    <h2>Changes</h2><p>We may update this policy and will change the date above when we do.</p>`,
}));

/* ------------------------------ sitemap + ads.txt ------------------------------ */
const urls = [
  ['/', cfg.lastUpdated, '1.0'], ['/guides/', cfg.lastUpdated, '0.8'],
  ...guides.map((g) => [`/guides/${g.slug}/`, cfg.lastUpdated, '0.9']),
  ['/about/', cfg.lastUpdated, '0.4'], ['/contact/', cfg.lastUpdated, '0.3'], ['/privacy/', cfg.lastUpdated, '0.2'],
];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([u, d, p]) => `  <url><loc>${SITE}${u}</loc><lastmod>${d}</lastmod><priority>${p}</priority></url>`).join('\n')}
</urlset>
`);
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
if (cfg.adsenseClient) write('ads.txt', `google.com, ${cfg.adsenseClient.replace('ca-', '')}, DIRECT, f08c47fec0942fa0\n`);

console.log(`[pages] wrote ${guides.length} guides + about/contact/privacy + sitemap (${urls.length} URLs)`);
