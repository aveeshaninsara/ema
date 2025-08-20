const CACHE_NAME = "ema-cache-v1";
const urlsToCache = [
  "index.html",
  "home.html",
  "radar.html",
  "report.html",
  "alert.html",
  "chatbot.html",
  "analytics.html",
  "manifest.json",
  "https://i.ibb.co/jvN2hV16/logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

// Background notification placeholder (needs push server later)
self.addEventListener("push", event => {
  const data = event.data ? event.data.text() : "Elephant Monitoring Alert";
  event.waitUntil(
    self.registration.showNotification("EMA Alert", {
      body: data,
      icon: "https://i.ibb.co/jvN2hV16/logo.png"
    })
  );
});
