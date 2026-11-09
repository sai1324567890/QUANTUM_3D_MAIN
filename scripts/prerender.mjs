// Runs after `vite build`. Renders the React page to HTML and writes it into dist/index.html
// so search engines and social crawlers see real text instead of an empty <div id="root">.
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const file = path.resolve('dist/index.html');
const template = fs.readFileSync(file, 'utf8');

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
  ssr: { noExternal: ['three'] },
});

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
  const html = renderToString(React.createElement(App));
  if (!template.includes('<div id="root"></div>')) throw new Error('root placeholder not found in dist/index.html');
  fs.writeFileSync(file, template.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
  console.log(`[prerender] injected ${(html.length / 1024).toFixed(1)} kB of static HTML into dist/index.html`);
} finally {
  await vite.close();
}
