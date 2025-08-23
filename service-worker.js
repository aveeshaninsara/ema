const CACHE_NAME = 'ema-pwa-cache-v1';
const CACHE_NAME = 'ema-pwa-cache-v1';
const urlsToCache = [
  '/ema/index.html',
  '/ema/firebase-messaging-sw.js',
  '/ema/service-worker.js', 
  '/ema/manifest.json',
  '/ema/logo.png' 
];


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
