// sw.js - Forces the browser to recognize the game as a native app!
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).catch(() => {
            return new Response('Offline Mode Active');
        })
    );
});
