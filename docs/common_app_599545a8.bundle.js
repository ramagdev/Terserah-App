"use strict";(self.webpackChunkterserah_app=self.webpackChunkterserah_app||[]).push([[549],{602:(e,t,n)=>{n.d(t,{P2:()=>D});const r=(e,t)=>t.some((t=>e instanceof t));let o,s;const i=new WeakMap,a=new WeakMap,c=new WeakMap;let u={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return i.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){u=e(u)}function f(e){return(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(I(this),t),p(this.request)}:function(...t){return p(e.apply(I(this),t))}}function l(e){return"function"==typeof e?f(e):(e instanceof IDBTransaction&&function(e){if(i.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)}));i.set(e,t)}(e),r(e,o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,u):e)}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{t(p(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",s)}));return c.set(t,e),t}(e);if(a.has(e))return a.get(e);const t=l(e);return t!==e&&(a.set(e,t),c.set(t,e)),t}const I=e=>c.get(e);function D(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const i=indexedDB.open(e,t),a=p(i);return r&&i.addEventListener("upgradeneeded",(e=>{r(p(i.result),e.oldVersion,e.newVersion,p(i.transaction),e)})),n&&i.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const h=["get","getKey","getAll","getAllKeys","count"],v=["put","add","delete","clear"],g=new Map;function y(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(g.get(t))return g.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=v.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!h.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,o?"readwrite":"readonly");let i=s.store;return r&&(i=i.index(t.shift())),(await Promise.all([i[n](...t),o&&s.done]))[0]};return g.set(t,s),s}d((e=>({...e,get:(t,n,r)=>y(t,n)||e.get(t,n,r),has:(t,n)=>!!y(t,n)||e.has(t,n)})));const B=["continue","continuePrimaryKey","advance"],w={},b=new WeakMap,m=new WeakMap,E={get(e,t){if(!B.includes(t))return e[t];let n=w[t];return n||(n=w[t]=function(...e){b.set(this,m.get(this)[t](...e))}),n}};async function*L(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;const n=new Proxy(t,E);for(m.set(n,t),c.set(n,I(t));t;)yield n,t=await(b.get(n)||t.continue()),b.delete(n)}function k(e,t){return t===Symbol.asyncIterator&&r(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&r(e,[IDBIndex,IDBObjectStore])}d((e=>({...e,get:(t,n,r)=>k(t,n)?L:e.get(t,n,r),has:(t,n)=>k(t,n)||e.has(t,n)})))}}]);
//# sourceMappingURL=common_app_599545a8.bundle.js.map