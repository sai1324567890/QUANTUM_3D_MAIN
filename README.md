```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure
- `src/App.jsx` – composes the page and starts the simulations once after mount
- `src/components/*.jsx` – one component per section (Hero, Overview, Why, … Studio, Footer)
- `src/scripts/*.js` – the original simulation / 3D code, one `init…()` per original `<script>`
- `src/styles/*.css` – the original CSS, unchanged
- three.js is now an npm dependency (`three@0.128.0`, same r128 as the CDN build)

---

## Growth + monetization setup (read this once)

All settings live in **`site.config.mjs`**. Leave a value as `''` to keep it off.

`npm run build` now does four things: builds the app → pre-renders it to real HTML (so Google sees the text) →
generates the guide / About / Privacy / Contact pages → writes `sitemap.xml`, `robots.txt` and `ads.txt`.

**Cloudflare Pages settings:** Build command `npm run build` · Output directory `dist` · Do not commit `node_modules`.

### Checklist (in this order)
1. **Buy your own domain** (.com or .in, about ₹700–900/yr) and connect it in Cloudflare Pages → Custom domains.
   Then set `siteUrl` in `site.config.mjs`. AdSense will not approve a `*.pages.dev` address.
2. Set a real `contactEmail` (and your name in `authorName`).
3. Create a **Google Search Console** property → verify → submit `/sitemap.xml` → "Request indexing" on the home page and each guide.
4. Create a **GA4** property → paste the ID into `ga4Id`.
5. Publish 1 new guide per week (copy an object in `content/guides.mjs`). Aim for 15–20 good guides before applying to AdSense.
6. Apply to **AdSense** once you have traffic and enough pages → paste `adsenseClient` → rebuild. Turn on Google's consent message
   (AdSense → Privacy & messaging) for EU/UK visitors.
7. Join **Amazon Associates India** → paste your tag into `amazonTag` → rebuild (book links become affiliate links, disclosure is automatic).
