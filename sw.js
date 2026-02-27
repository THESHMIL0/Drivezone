// sw.js - This forces the browser to recognize the game as a native app!
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    return self.clients.claim();
});

// Browsers REQUIRE this fetch listener to allow installation
self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).catch(() => {
            return new Response('Offline Mode Active');
        })
    );
});
