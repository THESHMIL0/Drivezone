// sw.js - This makes your game installable as a PWA!
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});
self.addEventListener('fetch', (e) => {
    // This allows the game to satisfy the browser's PWA requirements
});
