const CACHE_NAME = 'ai-agent-cache-v1';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  // Pass through fetch
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('Offline');
    })
  );
});
