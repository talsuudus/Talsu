const CACHE_NAME = 'talsuudus-v1';

// All the files your app needs to work offline
const ASSETS = [
  '/',
  '/index.html',
  '/members.html',
  '/constitution.html',
  '/studyvault.html',
  '/manifest.json',
  '/styles/style.css',
  '/styles/members.css',
  '/styles/constitution.css',
  '/styles/studyvault.css',
  '/js/script.js',
  '/js/members.js',
  '/js/constitution.js',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png'
];

// INSTALL — cache everything
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// ACTIVATE — remove old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// FETCH — serve from cache first, fall back to network
self.addEventListener('fetch', event => {
  // Skip non-GET and Firebase/external requests
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('firebaseapp') ||
      event.request.url.includes('googleapis.com/identitytoolkit')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).catch(() => {
        // If offline and page not cached, show index as fallback
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
