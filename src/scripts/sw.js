import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute, Route } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'
import CONFIG from './globals/config'

precacheAndRoute(self.__WB_MANIFEST)

const restoDicodingApi = new Route(
  ({ url }) => url.href.startsWith(CONFIG.BASE_URL),
  new StaleWhileRevalidate({
    cacheName: 'resto-dicoding-api'
  })
)

registerRoute(restoDicodingApi)

self.addEventListener('install', () => {
  console.log('Service Worker: Installed')
  self.skipWaiting()
})
