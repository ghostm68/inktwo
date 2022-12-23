// Installing service worker
const CACHE_NAME = 'https://www.inkrealm.info/';

/* Add relative URL of all the static content you want to store in
* cache storage (this will help us use our app offline)*/
let resourcesToCache = ["./ghostm68/inktwo/tree/master/Images", ".VAPORGRAM1609365711615.mp4", "./rellax.min.js", "./style.css"];

self.addEventListener("install", e=>{
e.waitUntil(
caches.open(CACHE_NAME).then(cache =>{
return cache.addAll(resourcesToCache);
})
);
});
// Cache and return requests
self.addEventListener("fetch", e=>{
e.respondWith(
caches.match(e.request).then(response=>{
return response || fetch(e.request);
})
);
});

// Update a service worker
const cacheWhitelist = ['https://authorwave.gq/'];
self.addEventListener('activate', event => {
event.waitUntil(
caches.keys().then(cacheNames => {
return Promise.all(
cacheNames.map(cacheName => {
if (cacheWhitelist.indexOf(cacheName) === -1) {
return caches.delete(cacheName);
}
})
);
})
);
});
