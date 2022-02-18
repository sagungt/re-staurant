importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

if (workbox) {
  const { assets } = global.serviceWorkerOption;

  workbox.setConfig({ debug: false });

  workbox.precaching.precacheAndRoute(
    [...assets, './'].map((asset) => ({ url: asset, revision: 3 })),
  );
  workbox.core.clientsClaim();
  workbox.core.skipWaiting();
  workbox.precaching.cleanupOutdatedCaches();

  workbox.routing.registerRoute(
    ({ url }) => url.href.startsWith('http') && (url.href.indexOf('undefined') === -1),
    new workbox.strategies.StaleWhileRevalidate(),
  );
}
