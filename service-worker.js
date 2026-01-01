const CACHE_NAME = 'voice-ai-v1';
const FILES = ['/', '/index.html', '/styles.css', '/app.js', '/manifest.webmanifest'];
self.addEventListener('install', (evt) => {
evt.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
self.skipWaiting();
});
self.addEventListener('activate', (evt)=>{
evt.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (evt) => {
evt.respondWith(caches.match(evt.request).then(resp => resp || fetch(evt.request)));
});