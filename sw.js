const CACHE_NAME = 'wykaz-v3-cache';
const ASSETS = [
  './',
  './index.html',
  './stacje.json',
  './favicon.svg'
];

// Instalacja i cache'owanie zasobów
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
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