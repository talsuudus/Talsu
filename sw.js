/* TALSUUDUS service worker
   - Pages (HTML): network first, fall back to cache, then the home page
   - Own static files (css/js/images): stale-while-revalidate
   - Everything else (Firebase, Cloudinary, fonts, CDNs): left to the browser
   Bump CACHE_VERSION whenever you want every user to refresh their cache. */
const CACHE_VERSION = 'v7';
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
  'js/pwa.js',
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

  // HTML pages: network first
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match('index.html')))
    );
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
