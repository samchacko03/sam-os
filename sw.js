// Sam OS service worker: offline shell + push display.
const CACHE = "samos-v1";
const SHELL = ["./index.html", "./support.js", "./ios-frame.jsx", "./samos-data.js", "./samos-connect.js", "./manifest.webmanifest", "./ds/fonts.css", "./ds/colors.css", "./ds/typography.css", "./ds/spacing.css"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL).catch(() => {}))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (u.origin === location.origin) {
    e.respondWith(caches.match(e.request).then(hit => { const net = fetch(e.request).then(r => { if (r.ok) caches.open(CACHE).then(c => c.put(e.request, r.clone())); return r; }).catch(() => hit); return hit || net; }));
  }
});
self.addEventListener("push", e => {
  let d = {}; try { d = e.data.json(); } catch (x) { d = { title: "Sam OS", body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || "Sam OS", { body: d.body || "", icon: "icons/icon-192.png", badge: "icons/icon-192.png", data: d.url || "./index.html" }));
});
self.addEventListener("notificationclick", e => { e.notification.close(); e.waitUntil(clients.matchAll({ type: "window" }).then(ws => { const w = ws[0]; if (w) return w.focus(); return clients.openWindow(e.notification.data || "./"); })); });
