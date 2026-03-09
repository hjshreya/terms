const filesToCache = [
  '/',
  '/index.html',
  '/js/main.js',
  '/js/terms.js',
  '/js/aux.js',
  '/css/main.css',
  '/favicon.png',
  '/manifest.json'
];

const staticCacheName = 'terms-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
