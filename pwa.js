/* ثبت Service Worker برای حالت آفلاین */
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("sw.js")
            .catch((err) => console.warn("Service Worker ثبت نشد:", err));
    });
}
