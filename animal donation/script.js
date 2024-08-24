// !function () {
//   if ("undefined" != typeof window) {
//       let t = "kettocdn.gumlet.io", u = "dev-cdn.gumlet.io";
//       window.GUMLET_CONFIG = {
//           hosts: [{ current: "dev1.ketto.org", gumlet: "dev1.gumlet.io" }, { current: "dev2.ketto.org", gumlet: "dev2.gumlet.io" }, { current: "dev4.ketto.org", gumlet: "dev4.gumlet.io" }, { current: "dev5.ketto.org", gumlet: "dev5.gumlet.io" }, { current: "dev6.ketto.org", gumlet: "dev6.gumlet.io" }, { current: "https://www.ketto.org", gumlet: "ketto.gumlet.io" }, { current: "https://d1odpswjdg60uv.cloudfront.net", gumlet: u }, { current: "https://d1vdjc70h9nzd9.cloudfront.net", gumlet: t }, { current: u, gumlet: u }, { current: t, gumlet: t },], lazy_load: !0, use_native_lazy_load: !1, threshold: 100
//       }, (s = (d = document).createElement("script")).src = "https://cdn.gumlet.com/gumlet.js/2.1/gumlet.min.js", s.async = 1, d.getElementsByTagName("head")[0].appendChild(s)
//   }
// }();
// (function (w, s) {
//   var e = document.createElement("script");
//   e.type = "text/javascript"; e.async = true;
//   e.src = "https://cdn-in.pagesense.io/js/lqge2ovj/8efe89a0bc2f4f40898daa9bf00c1591.js";
//   var x = document.getElementsByTagName("script")[0];
//   x.parentNode.insertBefore(e, x);
// })(window, "script"); (function (w, d, s, l, i) {
//   w[l] = w[l] || [];
//   w[l].push({
//       'gtm.start': new Date().getTime(),
//       event: 'gtm.js'
//   });
//   var f = d.getElementsByTagName(s)[0],
//       j = d.createElement(s),
//       dl = l != 'dataLayer' ? '&l=' + l : '';
//   j.defered = true;
//   j.setAttribute('rel', 'preconnect');
//   j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
//   j.addEventListener('load', function () {
//       var _ge = new CustomEvent('gtm_loaded', { bubbles: true });
//       d.dispatchEvent(_ge);
//   });
//   f.parentNode.insertBefore(j, f);
// })(window, document, 'script', 'dataLayer', 'GTM-K25VCW5'); 
// var clevertap = { event: [], profile: [], account: [], onUserLogin: [], notifications: [], privacy: [], region: 'in1' };
// clevertap.account.push({ "id": 'TEST-84R-5W8-476Z' });
// clevertap.privacy.push({ optOut: false });
// clevertap.privacy.push({ useIP: false });
// (function () {
//   var wzrk = document.createElement('script');
//   wzrk.type = 'text/javascript';
//   wzrk.async = true;
//   wzrk.defered = true;
//   wzrk.setAttribute('rel', 'preconnect');
//   wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/clevertap.min.js';
//   var s = document.getElementsByTagName('script')[0];
//   s.addEventListener('load', function () {
//       var _ct = new CustomEvent('ct_loaded', { bubbles: true });
//       document.dispatchEvent(_ct);
//   });
//   s.parentNode.insertBefore(wzrk, s);
// })(); !function (f, b, e, v, n, t, s) {
//   if (f.fbq) return; n = f.fbq = function () {
//       n.callMethod ?
//           n.callMethod.apply(n, arguments) : n.queue.push(arguments)
//   }; 
//   if (!f._fbq) f._fbq = n;
//   n.push = n; 
//   n.loaded = !0;
//   n.version = '2.0'; 
//   n.queue = []; 
//   t = b.createElement(e); 
//   t.async = !0;
//   t.src = v; s = b.getElementsByTagName(e)[0];
//   s.addEventListener("load", function () { 
//           var e = new CustomEvent("fb_pixel_loaded", { bubbles: !0 }); 
//           document.dispatchEvent(e) 
//       }
//   );
//   s.parentNode.insertBefore(t, s)
// }
// (window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '538031250815425'); (function (c, l, a, r, i, t, y) {
//   c[a] = c[a] || function () { 
//       (c[a].q = c[a].q || []).push(arguments) };
//       t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
//       y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
//       t.addEventListener('load', function () {
//               var _ct = new CustomEvent('clarity_loaded', { bubbles: true });
//               document.dispatchEvent(_ct);
//           }
//       );
//   }
// )
// (window, document, "clarity", "script", 'f5d5n1q3au'); 
// (function (a, c, e, f, d, b) { 
//   a.hj = a.hj || function () { 
//       (a.hj.q = a.hj.q || []).push(arguments) }; 
//       a._hjSettings = { hjid: 2592223, hjsv: 6 }; 
//       d = c.getElementsByTagName("head")[0]; 
//       b = c.createElement("script"); 
//       b.async = 1; b.src = e + a._hjSettings.hjid + f + a._hjSettings.hjsv; 
//       d.appendChild(b) 
//   }
// )
// (window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv\x3d"); 
// !function (a, e, f, k, h, g, c, b, d) { 
//   a.AppsFlyerSdkObject = h; 
//   a.AF = a.AF || function () { 
//       (a.AF.q = a.AF.q || []).push([Date.now()].concat(Array.prototype.slice.call(arguments))) }; 
//       a.AF.id = a.AF.id || c; a.AF.plugins = {}; 
//       b = e.createElement(f); d = e.getElementsByTagName(f)[0]; 
//       b.async = 1; 
//       b.src = "https://websdk.appsflyer.com?" + (0 < g.length ? "st\x3d" + g.split(",").sort().join(",") + "\x26" : "") + (0 < c.length ? "af_id\x3d" + c : ""); d.parentNode.insertBefore(b, d) }(window, document, "script", 0, "AF", "pba", { 
//               pba: { 
//                   webAppId: "4ee63b81-ff33-4397-975e-b076b99e1e51"
//               }
//           }
//       ); 
// (function (a, e, f, g, b, c, d) { 
//   a[b] || (a.GlobalSnowplowNamespace = a.GlobalSnowplowNamespace || [], a.GlobalSnowplowNamespace.push(b), a[b] = function () { (a[b].q = a[b].q || []).push(arguments) }, a[b].q = a[b].q || [], c = e.createElement(f), d = e.getElementsByTagName(f)[0], c.async = 1, c.src = g, d.parentNode.insertBefore(c, d)) 
// })
// (window, document, "script", "https://c94e4fd4-e617-4ac5-845c-5d789657bd86.app.try-snowplow.com/v3/try.js", "snowplow");
//   snowplow("newTracker", "try", "https://c94e4fd4-e617-4ac5-845c-5d789657bd86.app.try-snowplow.com", { 
//       appId: "try-snowplow", platform: "web", contexts: { 
//           webPage: !0, performanceTiming: !0 
//       } 
//   }
// ); 
// snowplow("enableActivityTracking", { minimumVisitLength: 10, heartbeatDelay: 10 }); 
// snowplow("enableLinkClickTracking"); 
// snowplow("trackPageView");

