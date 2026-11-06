/* TALSUUDUS service worker
   - Pages (HTML): network first, fall back to cache, then the home page
   - Own static files (css/js/images): stale-while-revalidate
   - Everything else (Supabase, Cloudinary, fonts, CDNs): left to the browser
   Bump CACHE_VERSION whenever you want every user to refresh their cache. */
const CACHE_VERSION = 'v16';
const CACHE_NAME = 'talsuudus-' + CACHE_VERSION;

const PRECACHE = [
  './',
  'index.html',
  'members.html',
  'constitution.html',
  'studyvault.html',
  'leadership.html',
  'faq.html',
  'privacy.html',
  'announcement.html',
  'nomination.html',
  'manifest.json',
  'styles/style.css',
  'styles/members.css',
  'styles/constitution.css',
  'styles/nav.css',
  'styles/studyvault.css',
  'js/script.js',
  'js/members.js',
  'js/constitution.js',
  'js/theme.js',
  'js/nav.js',
  'js/vote.js',
  'js/vote-config.js',
  'styles/vote.css',
  'js/pwa.js',
  'js/faces.js',
  'js/studyvault.js',
  'js/supabase-config.js',
  'js/past-presidents.js',
  'assets/favicon.svg',
  'assets/Talsulogo.webp',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      // One missing file must not break the whole install
      .then(cache => Promise.all(PRECACHE.map(url => cache.add(url).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('talsuudus-') && k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // never touch third-party requests

  // HTML pages: network first, but fall back to the cached copy after 4s so a slow network never hangs the page
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(req, { ignoreSearch: true });
      const net = fetch(req).then(res => { if (res && res.ok) cache.put(req, res.clone()); return res; });
      event.waitUntil(net.catch(() => null));
      if (!cached) return net.catch(() => caches.match('index.html'));
      try {
        const res = await Promise.race([net, new Promise(r => setTimeout(() => r(null), 4000))]);
        return res || cached;
      } catch (e) { return cached; }
    })());
    return;
  }

  // Static assets: stale-while-revalidate
  event.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req)
        .then(res => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
