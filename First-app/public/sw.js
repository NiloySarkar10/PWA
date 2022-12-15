// Refer to the service worker using "self"

self.addEventListener('install', function(event) {
    console.log('[Service worker] installing...', event);
});

self.addEventListener('activate', function(event) {
    console.log('[Service worker] activating...', event);
});

self.addEventListener('fetch', function(event) {
    console.log('[Service worker] fetching...', event);
    event.respondWith(fetch(event.request));
});
