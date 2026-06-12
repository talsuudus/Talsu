// ── REGISTER SERVICE WORKER ─────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('✅ SW registered:', reg.scope))
      .catch(err => console.error('❌ SW failed:', err));
  });
}

// ── INSTALL PROMPT (Android Chrome "Add to Home Screen") ──
let deferredPrompt;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;

  // Show your custom install banner
  const banner = document.getElementById('pwa-install-banner');
  if (banner) banner.style.display = 'flex';
});

// When user taps "Install" on the banner
function installPWA() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(result => {
    console.log('Install choice:', result.outcome);
    deferredPrompt = null;
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.style.display = 'none';
  });
}

// When user taps "Not Now" on the banner
function dismissInstallBanner() {
  const banner = document.getElementById('pwa-install-banner');
  if (banner) banner.style.display = 'none';
}
