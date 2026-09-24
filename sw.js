const CACHE_NAME = 'wykaz-v3.8-cache';
const ASSETS = [
  './',
  './index.html',
  './stacje.json',
  './favicon.svg'
];

// Instalacja i cache'owanie zasobów
self.addEventListener('install', (e) => {
  self.skipWaiting(); // Zmusza apkę do natychmiastowej instalacji nowej wersji!
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Czyszczenie starych wersji po aktywacji
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    }).then(() => self.clients.claim())
  );
});

// Serwowanie plików z cache, gdy brak sieci
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});