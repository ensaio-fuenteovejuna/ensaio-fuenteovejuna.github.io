const CACHE = 'ensaio-d2a96cee3c3a';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png'];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); });
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys =>
  Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  // Áudios ficam no cache HTTP do navegador (o Safari precisa de respostas
  // parciais/Range para mídia, que um service worker simples não fornece).
  if (url.pathname.includes('/audio/')) return;
  // App: rede primeiro, cópia salva quando estiver offline.
  e.respondWith(fetch(e.request).then(r => { if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
});
