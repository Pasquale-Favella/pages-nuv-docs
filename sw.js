if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const o=e=>n(e,t),r={module:{uri:t},exports:i,require:o};s[t]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(a(...e),i)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/pages-nuv-docs/_next/static/chunks/187-2861d080c348caf8.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/chunks/647-4e40b0e52aec4e16.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/chunks/main-e197206acdcb4363.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/chunks/pages/404-8e69ca24e8c9af3f.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/chunks/pages/_app-a90987444c927ab0.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/chunks/pages/docs-5911a8f3553358dc.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/chunks/pages/docs/%5Bslug%5D/%5Bmarkdown%5D-cf090ab2febc7cf1.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/chunks/pages/index-dcd76d315a804f29.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/chunks/pages/search-c35dd1632b43c0d4.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/chunks/pages/videos-5366bdf5a6488737.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/chunks/webpack-6ccf84a01f2ed5c0.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/css/9635a546c21ac414.css",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/s1Qb8NneZbfgj4tenGSAz/_buildManifest.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/s1Qb8NneZbfgj4tenGSAz/_middlewareManifest.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/_next/static/s1Qb8NneZbfgj4tenGSAz/_ssgManifest.js",revision:"s1Qb8NneZbfgj4tenGSAz"},{url:"/pages-nuv-docs/card-image.svg",revision:"385a24875e71356629ef9687bbc380ef"},{url:"/pages-nuv-docs/favicon.ico",revision:"06fcce84e50e859f92ccaecc812853f0"},{url:"/pages-nuv-docs/icon-192x192.png",revision:"56d9625fa4c417a384367466cf2adce0"},{url:"/pages-nuv-docs/icon-256x256.png",revision:"7c49139705bff2d84857e2ecb029ad6f"},{url:"/pages-nuv-docs/icon-384x384.png",revision:"581afecaccc42679b569662a253bcdf8"},{url:"/pages-nuv-docs/icon-512x512.png",revision:"643b8a5f8d79cb8e734c5ee00651e907"},{url:"/pages-nuv-docs/launch.svg",revision:"8a44675cab1d1287580df23390ee0068"},{url:"/pages-nuv-docs/logo.svg",revision:"1e9fc0fd54b1321147ce463e8c48d7af"},{url:"/pages-nuv-docs/manifest.json",revision:"94f8b3deaed65f9fcf8621dc6ccbdf20"},{url:"/pages-nuv-docs/nuv-logo-wbg.png",revision:"50c73e3dcddb7583d2526ae68ea4bde7"},{url:"/pages-nuv-docs/nuv-logo.png",revision:"d182eae07a13b0f33726739e25e47074"},{url:"/pages-nuv-docs/nuvolaris.png",revision:"09d6970d34717c8b47687ea8dd16c9a2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/pages-nuv-docs",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));