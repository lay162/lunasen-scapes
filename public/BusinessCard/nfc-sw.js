// LUNA SEN-Scapes card PWA + NFC message forwarder
var CACHE = "luna-card-v1";
var PRECACHE = [
  "/BusinessCard/",
  "/BusinessCard/manifest.json",
  "/BusinessCard/luna-dbc-core.js",
  "/BusinessCard/luna-nfc-runtime.js",
  "/BusinessCard/contact.vcf",
  "/brand/logo.png",
  "/brand/icon-192.png",
  "/brand/icon-512.png",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE)
      .then(function (cache) {
        return cache.addAll(PRECACHE);
      })
      .then(function () {
        return self.skipWaiting();
      })
      .catch(function () {
        return self.skipWaiting();
      }),
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (keys) {
        return Promise.all(
          keys
            .filter(function (key) {
              return key !== CACHE;
            })
            .map(function (key) {
              return caches.delete(key);
            }),
        );
      })
      .then(function () {
        return self.clients.claim();
      }),
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) return cached;
      return fetch(event.request).then(function (res) {
        if (!res || res.status !== 200 || res.type === "opaque") return res;
        var copy = res.clone();
        caches.open(CACHE).then(function (cache) {
          cache.put(event.request, copy);
        });
        return res;
      });
    }),
  );
});

self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "LUNA_CARD_DETECTED") {
    event.waitUntil(handleCardDetection(event.data.url));
  }
});

function handleCardDetection(url) {
  return self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (clients) {
    clients.forEach(function (client) {
      client.postMessage({ type: "OPEN_LUNA_CARD", url: url });
    });
  });
}
