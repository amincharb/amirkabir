/*
 * Service Worker سایت کلاس ۲۰۳ امیرکبیر
 * ----------------------------------------------------------------
 * هدف: بار اول همه‌ی محتوا ذخیره بشه و دفعات بعد (حتی بدون اینترنت)
 * از حافظه‌ی مرورگر خونده بشه.
 *
 * استراتژی‌ها:
 *  - صفحات HTML  : اول شبکه (حداکثر ۴ ثانیه صبر)، اگه نشد از کش  ← تا اطلاعیه‌ها/تکالیف جدید همیشه تازه بیان
 *  - CSS و JS    : از کش نشون بده + پشت‌صحنه آپدیت کن (stale-while-revalidate)
 *  - عکس/فونت/PDF/آیکون : اول کش (یک بار دانلود، بعد دیگه دانلود نمی‌شه)
 *
 * ⚠️ وقتی فایل‌های سایت رو عوض کردی (مثلاً عکس یا اسکریپت جدید)
 *    عدد VERSION رو یکی بالا ببر تا کش قدیمی پاک بشه.
 */

const VERSION = "v1";
const PREFIX = "amirkabir-";
const CORE_CACHE = `${PREFIX}core-${VERSION}`;   // فایل‌های اصلی سایت (حتماً باید کش بشن)
const PAGE_CACHE = `${PREFIX}pages-${VERSION}`;   // صفحات HTML
const MEDIA_CACHE = `${PREFIX}media-${VERSION}`;  // عکس‌ها و PDFها
const ALL_CACHES = [CORE_CACHE, PAGE_CACHE, MEDIA_CACHE];

const NETWORK_TIMEOUT = 4000; // میلی‌ثانیه؛ بعدش از کش خونده می‌شه

/* مسیرها نسبت به محل sw.js هستن (یعنی /amirkabir/) */
const CORE_ASSETS = [
  "./",
  "index.html",
  "AllHomeWork.html",
  "students.html",
  "teachers.html",
  "offline.html",
  "style.css",
  "script.js",
  "script-s.js",
  "script-t.js",
  "script-ahw.js",
  "pwa.js",
  "manifest.json",
  "icon/announcement.png",
  "icon/close.png",
  "icon/home.png",
  "icon/homework.png",
  "icon/icon-192.png",
  "icon/icon-512.png",
  "icon/instagram.png",
  "icon/moon.png",
  "icon/person.png",
  "icon/red.png",
  "icon/rubika.png",
  "icon/shad.png",
  "icon/student.png",
  "icon/sun.png",
  "icon/teacher.png",
  "icon/telegram.png",
  "icon/weekly.png",
  "icon/wsun.png",
  "font/Vazirmatn-Black.ttf",
  "font/Vazirmatn-Bold.ttf",
  "font/Vazirmatn-ExtraBold.ttf",
  "font/Vazirmatn-ExtraLight.ttf",
  "font/Vazirmatn-Light.ttf",
  "font/Vazirmatn-Medium.ttf",
  "font/Vazirmatn-Regular.ttf",
  "font/Vazirmatn-SemiBold.ttf",
  "font/Vazirmatn-Thin.ttf",
];

/* عکس‌ها: بعد از نصب، پشت‌صحنه دانلود می‌شن.
   اگه فایلی وجود نداشته باشه نادیده گرفته می‌شه (نصب خراب نمی‌شه). */
const MEDIA_ASSETS = [
  ...Array.from({ length: 34 }, (_, i) => `profiles/${i + 1}.webp`),
  ...Array.from({ length: 76 }, (_, i) => `homeworks/${i + 1}.webp`),
];

/* PDFها (حدود ۱۰ مگابایت) خودکار دانلود نمی‌شن؛ اولین باری که کاربر بازشون کنه کش می‌شن.
   اگه می‌خوای مثل عکس‌ها از اول دانلود بشن، این رو true کن. */
const PRECACHE_PDFS = false;
const PDF_ASSETS = [
  "homeworks/جلسه اول.pdf",
  "homeworks/جلسه دوم.pdf",
  "homeworks/جلسه سوم.pdf",
  "homeworks/چلسه چهارم.pdf",
  "homeworks/جلسه پنجم.pdf",
  "homeworks/جلسه ششم.pdf",
];

const toURL = (path) => new URL(path, self.registration.scope).href;

/* ---------------------------- نصب ---------------------------- */
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CORE_CACHE);
      // cache:"reload" یعنی از کش HTTP خود مرورگر/GitHub نخون، نسخه‌ی تازه بگیر
      await cache.addAll(CORE_ASSETS.map((p) => new Request(toURL(p), { cache: "reload" })));
      await self.skipWaiting();
    })()
  );
});

/* ---------------------------- فعال‌سازی ---------------------------- */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // پاک کردن کش‌های نسخه‌های قدیمی
      const names = await caches.keys();
      await Promise.all(
        names
          .filter((n) => n.startsWith(PREFIX) && !ALL_CACHES.includes(n))
          .map((n) => caches.delete(n))
      );
      await self.clients.claim();
      // دانلود پشت‌صحنه‌ی عکس‌ها و PDFها
      await precacheMedia();
    })()
  );
});

async function precacheMedia() {
  // اگه کاربر «صرفه‌جویی در داده» رو روشن کرده، دانلود خودکار انجام نمی‌شه
  // (عکس‌ها موقع دیدن کش می‌شن)
  if (self.navigator.connection && self.navigator.connection.saveData) return;

  const cache = await caches.open(MEDIA_CACHE);
  const queue = (PRECACHE_PDFS ? [...MEDIA_ASSETS, ...PDF_ASSETS] : MEDIA_ASSETS).map(toURL);
  const worker = async () => {
    while (queue.length) {
      const url = queue.shift();
      try {
        if (await cache.match(url)) continue;
        const res = await fetch(url);
        if (res.ok) await cache.put(url, res);
      } catch (_) {
        /* آفلاین یا فایل نبود؛ مهم نیست */
      }
    }
  };
  // ۴ دانلود هم‌زمان
  await Promise.all([worker(), worker(), worker(), worker()]);
}

/* ---------------------------- درخواست‌ها ---------------------------- */
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  if (request.headers.has("range")) return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;           // سایت‌های بیرونی دست‌نخورده
  if (!url.href.startsWith(self.registration.scope)) return;  // فقط داخل /amirkabir/
  if (url.pathname.endsWith("/sw.js")) return;

  if (request.mode === "navigate") {
    event.respondWith(pageStrategy(event, request));
    return;
  }

  if (request.destination === "style" || request.destination === "script") {
    event.respondWith(staleWhileRevalidate(event, request));
    return;
  }

  event.respondWith(cacheFirst(request));
});

/* کلید کش صفحه: بدون ?homework=... تا همه‌ی لینک‌های یک صفحه یک نسخه داشته باشن */
const pageKey = (request) => {
  const u = new URL(request.url);
  return new Request(u.origin + u.pathname);
};

async function pageStrategy(event, request) {
  const cache = await caches.open(PAGE_CACHE);
  const key = pageKey(request);

  const cached =
    (await cache.match(key)) ||
    (await caches.match(key, { cacheName: CORE_CACHE }));

  const network = fetch(request)
    .then((res) => {
      if (res.ok) cache.put(key, res.clone());
      return res;
    });

  if (!cached) {
    try {
      return await network;
    } catch (_) {
      return offlineFallback();
    }
  }

  event.waitUntil(network.catch(() => {})); // اگه دیر رسید، بازم کش آپدیت بشه
  const timeout = new Promise((resolve) => setTimeout(() => resolve(null), NETWORK_TIMEOUT));
  try {
    const res = await Promise.race([network, timeout]);
    return res && res.ok ? res : cached;
  } catch (_) {
    return cached;
  }
}

async function offlineFallback() {
  const res = await caches.match(toURL("offline.html"), { cacheName: CORE_CACHE });
  return (
    res ||
    new Response("آفلاین هستید و این صفحه هنوز ذخیره نشده است.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    })
  );
}

async function staleWhileRevalidate(event, request) {
  const match = async () =>
    (await caches.match(request, { ignoreSearch: true, cacheName: CORE_CACHE })) ||
    (await caches.match(request, { ignoreSearch: true }));

  const cached = await match();
  const refresh = fetch(request, { cache: "no-cache" })
    .then(async (res) => {
      if (res.ok) {
        const cache = await caches.open(CORE_CACHE);
        await cache.put(request, res.clone());
      }
      return res;
    });

  if (cached) {
    event.waitUntil(refresh.catch(() => {}));
    return cached;
  }
  try {
    return await refresh;
  } catch (_) {
    return Response.error();
  }
}

async function cacheFirst(request) {
  const cached =
    (await caches.match(request, { cacheName: CORE_CACHE })) ||
    (await caches.match(request, { cacheName: MEDIA_CACHE })) ||
    (await caches.match(request, { cacheName: PAGE_CACHE }));
  if (cached) return cached;

  try {
    const res = await fetch(request);
    if (res.ok && res.status === 200) {
      const cache = await caches.open(MEDIA_CACHE);
      cache.put(request, res.clone());
    }
    return res;
  } catch (_) {
    return Response.error();
  }
}

/* امکان آپدیت دستی از صفحه: navigator.serviceWorker.controller.postMessage("SKIP_WAITING") */
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});
