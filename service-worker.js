self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("jordan-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./times.js",
        "./logo-jordan.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
