// サービスワーカーのインストールイベント
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('weather-app-cache').then(function(cache) {
            return cache.addAll([
                './',
                './TokyoWeather.html',
                './manifest.json',
                './icons/icon-192x192.png',
                './icons/icon-512x512.png'
            ]);
        })
    );
});

// リソースの取得イベント
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
