/* Service worker: makes the app shell available offline.
   Every path here is relative, so the same file works at
   /kaiwa-trainer/ on GitHub Pages and at / on a custom domain later. */

// Bump only when SHELL itself changes — activate() then wipes the old cache.
const CACHE = 'kaiwa-v1';

const SHELL = [
  './',
  'index.html',
  'data.js',
  'manifest.json',
  'fonts/inter-400.woff2',
  'fonts/inter-500.woff2',
  'fonts/inter-600.woff2',
  'fonts/inter-700.woff2',
  'fonts/inter-800.woff2',
  'fonts/zenkaku-500.woff2',
  'fonts/zenkaku-700.woff2',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-512-maskable.png',
  'icons/apple-touch-icon.png'
];

// Fonts and icons never change in place — a new subset or a new icon is a new
// deploy and a CACHE bump. Safe to serve from cache forever, never refetched.
const IMMUTABLE = /\/(fonts|icons)\//;

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;                        // nothing to cache
  if (new URL(req.url).origin !== self.location.origin) return;

  if (IMMUTABLE.test(new URL(req.url).pathname)) {
    event.respondWith(cacheFirst(req));
  } else {
    event.respondWith(staleWhileRevalidate(event));
  }
});

async function cacheFirst(req) {
  const hit = await caches.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) (await caches.open(CACHE)).put(req, res.clone());
  return res;
}

// index.html and data.js: answer from cache instantly, refresh in the
// background, so a new deploy is live on the next launch. Deploying stays
// "git push" — there is no version string to remember to bump.
async function staleWhileRevalidate(event) {
  const req = event.request;
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req, { ignoreSearch: true });

  // cache:'no-cache' forces a revalidation against the server. GitHub Pages
  // sets its own HTTP cache headers; without this our own fetch can be served
  // from the browser HTTP cache and the update would never arrive.
  const fresh = fetch(new Request(req.url, { cache: 'no-cache' }))
    .then(res => {
      // A 404 or a captive-portal redirect must never poison the shell.
      if (res.ok && !res.redirected) cache.put(req, res.clone());
      return res;
    })
    .catch(() => null);

  if (hit) {
    event.waitUntil(fresh);   // keep the worker alive until the update lands
    return hit;
  }

  const res = await fresh;
  if (res) return res;

  // Offline with nothing cached for this exact URL: a navigation still gets
  // the app shell rather than the browser's error page.
  if (req.mode === 'navigate') {
    const shell = await cache.match('index.html');
    if (shell) return shell;
  }
  return Response.error();
}
