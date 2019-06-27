/* Update names to update caches!*/
var CACHE_STATIC_NAME = 'staticAssets-v1';
var STATIC_FILES = [
  // You can also load google font and other foreign assets here by simply adding the whole url to their server
  '/',
  'index.html',
  'css/styles.css',
  'js/jquery.js',
  'js/mycode.js',
  'img/apps.svg',
  'img/benefits.svg',
  'img/check.svg',
  'img/cuckoo.svg',
  'img/favicon.png',
  'img/github.svg',
  'img/heart.svg',
  'img/logo.svg',
  'img/menu.svg',
  'img/phone-love.svg',
  'img/splashicon.png',
  'img/udemy.svg'
]

/* Precaching */
self.addEventListener('install', function(event){

    console.log('[Service worker] Installing Service worker...', event);
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
        .then(function(cache){
            console.log('[Service Worker] Precaching');
            cache.addAll(STATIC_FILES);
        })
    );

});

/* Activate Service Worker and delete old cache, if name of cache was updated */
self.addEventListener('activate', function(event){

    console.log('[Service worker] Activating Service worker...', event);
    event.waitUntil(
        caches.keys()
            .then(function(keyList){
                return Promise.all(keyList.map(function(key){
                    if (key !=CACHE_STATIC_NAME){
                        console.log('Removing old cache:' + key);
                        return caches.delete(key);
                    }
                }))
            })
    )
    return self.clients.claim;

});

/* Cache-then-network strategy*/ 
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
