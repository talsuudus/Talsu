/* ── TALSUUDUS PWA ─────────────────────────────────────────
   1. Registers the service worker
   2. Shows a friendly "Install app" banner when the browser allows it
      (Chrome / Edge / Android / desktop) and a short "Add to Home Screen"
      tip on iPhone/iPad Safari, which has no install prompt.
   Loaded on every page. Dismissed banners stay hidden for 7 days. */
(function () {
  'use strict';

  /* 1 ── Service worker */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }

  /* 2 ── Install banner */
  var DISMISS_KEY = 'talsu-pwa-dismissed';
  var DISMISS_DAYS = 7;
  var deferredPrompt = null;

  function isInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  }
  function recentlyDismissed() {
    try {
      var t = parseInt(localStorage.getItem(DISMISS_KEY), 10);
      return t && (Date.now() - t) < DISMISS_DAYS * 86400000;
    } catch (e) { return false; }
  }
  function rememberDismiss() {
    try { localStorage.setItem(DISMISS_KEY, String(Date.now())); } catch (e) {}
  }

  function injectStyles() {
    if (document.getElementById('talsu-pwa-css')) return;
    var s = document.createElement('style');
    s.id = 'talsu-pwa-css';
    s.textContent =
      '.talsu-pwa{position:fixed;left:50%;bottom:92px;transform:translate(-50%,20px);opacity:0;z-index:250;' +
      'width:calc(100% - 28px);max-width:420px;display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:16px;' +
      'background:rgba(255,255,255,.92);border:1px solid rgba(26,122,76,.25);box-shadow:0 14px 40px rgba(10,40,25,.28);' +
      'backdrop-filter:blur(18px) saturate(180%);-webkit-backdrop-filter:blur(18px) saturate(180%);' +
      'font-family:"Barlow",system-ui,sans-serif;transition:transform .35s ease,opacity .35s ease}' +
      '.talsu-pwa.show{transform:translate(-50%,0);opacity:1}' +
      '.talsu-pwa img{width:40px;height:40px;border-radius:10px;flex-shrink:0}' +
      '.talsu-pwa-text{flex:1;min-width:0}' +
      '.talsu-pwa-title{color:#1a7a4c;font-weight:700;font-size:13px;letter-spacing:.04em;text-transform:uppercase}' +
      '.talsu-pwa-sub{color:rgba(20,23,21,.7);font-size:12px;margin-top:2px;line-height:1.35}' +
      '.talsu-pwa-btn{background:#1a7a4c;color:#fff;border:0;border-radius:9px;padding:8px 14px;font-weight:700;font-size:12px;cursor:pointer}' +
      '.talsu-pwa-x{background:transparent;border:0;color:rgba(20,23,21,.5);font-size:18px;line-height:1;cursor:pointer;padding:4px 6px}' +
      '[data-theme="dark"] .talsu-pwa{background:rgba(16,32,26,.94);border-color:rgba(34,163,102,.4)}' +
      '[data-theme="dark"] .talsu-pwa-title{color:#22a366}' +
      '[data-theme="dark"] .talsu-pwa-sub{color:rgba(238,245,240,.75)}' +
      '[data-theme="dark"] .talsu-pwa-x{color:rgba(238,245,240,.6)}' +
      '@media (min-width:900px){.talsu-pwa{top:76px;bottom:auto;left:auto;right:24px;transform:translate(0,-12px)}.talsu-pwa.show{transform:none}}';
    document.head.appendChild(s);
  }

  function hideBanner() {
    var b = document.getElementById('talsu-pwa-banner');
    if (!b) return;
    b.classList.remove('show');
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 400);
  }

  function showBanner(mode) {
    if (document.getElementById('talsu-pwa-banner')) return;
    injectStyles();
    var b = document.createElement('div');
    b.id = 'talsu-pwa-banner';
    b.className = 'talsu-pwa';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', 'Install TALSUUDUS app');

    var img = document.createElement('img');
    img.src = 'assets/icons/icon-192.png';
    img.alt = '';

    var text = document.createElement('div');
    text.className = 'talsu-pwa-text';
    var title = document.createElement('div');
    title.className = 'talsu-pwa-title';
    title.textContent = 'Install TALSUUDUS';
    var sub = document.createElement('div');
    sub.className = 'talsu-pwa-sub';
    sub.textContent = mode === 'ios'
      ? 'Tap the Share button, then “Add to Home Screen”.'
      : 'Open faster and use it like an app, even on slow networks.';
    text.appendChild(title);
    text.appendChild(sub);

    b.appendChild(img);
    b.appendChild(text);

    if (mode !== 'ios') {
      var install = document.createElement('button');
      install.className = 'talsu-pwa-btn';
      install.type = 'button';
      install.textContent = 'Install';
      install.addEventListener('click', installPWA);
      b.appendChild(install);
    }

    var close = document.createElement('button');
    close.className = 'talsu-pwa-x';
    close.type = 'button';
    close.setAttribute('aria-label', 'Dismiss');
    close.textContent = '✕';
    close.addEventListener('click', function () { rememberDismiss(); hideBanner(); });
    b.appendChild(close);

    document.body.appendChild(b);
    requestAnimationFrame(function () { requestAnimationFrame(function () { b.classList.add('show'); }); });
  }

  function installPWA() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(function (choice) {
      if (choice.outcome !== 'accepted') rememberDismiss();
      deferredPrompt = null;
      hideBanner();
    });
  }

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    if (!isInstalled() && !recentlyDismissed()) {
      // small delay so the banner doesn't fight the page-load curtain
      setTimeout(function () { showBanner('native'); }, 2500);
    }
  });

  window.addEventListener('appinstalled', function () {
    deferredPrompt = null;
    hideBanner();
  });

  // iPhone / iPad Safari has no install event, so show a one-time tip
  var ua = navigator.userAgent || '';
  var isIOS = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isSafari = /safari/i.test(ua) && !/crios|fxios|edgios/i.test(ua);
  if (isIOS && isSafari && !isInstalled() && !recentlyDismissed()) {
    window.addEventListener('load', function () { setTimeout(function () { showBanner('ios'); }, 3000); });
  }
})();
