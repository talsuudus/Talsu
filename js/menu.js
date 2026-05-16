/* Shared menu behavior and injection helper
   File: js/menu.js
   - Injects the standard Talsuudus menu HTML when not present
   - Handles open/close and active link highlighting
*/
(function () {
  'use strict';

  // Menu HTML template (kept small and accessible)
  const menuTemplate = `
  <div class="talsu-topbar" id="talsuTopbar">
    <a class="talsu-logo" href="index.html">
      <div class="talsu-logo-icon" aria-hidden="true"></div>
      <span class="talsu-logo-text">TAL<span>SU UDUS</span></span>
    </a>
    <div class="talsu-topbar-right">
      <button class="talsu-menu-btn" id="talsuOpenBtn" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>

  <div class="talsu-overlay" id="talsuOverlay"></div>

  <div class="talsu-panel" id="talsuPanel" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="talsu-panel-header">
      <span class="talsu-panel-title">Menu</span>
      <button class="talsu-close-btn" id="talsuCloseBtn" aria-label="Close menu">✕</button>
    </div>
    <div class="talsu-menu-list">
      <a class="talsu-menu-item" href="index.html">
        <div class="talsu-item-icon"></div>
        <div class="talsu-item-label">Home</div>
        <div class="talsu-chevron" aria-hidden="true">›</div>
      </a>
      <a class="talsu-menu-item" href="members.html">
        <div class="talsu-item-icon"></div>
        <div class="talsu-item-label">Members</div>
        <div class="talsu-chevron" aria-hidden="true">›</div>
      </a>
      <a class="talsu-menu-item" href="constitution.html">
        <div class="talsu-item-icon"></div>
        <div class="talsu-item-label">Constitution</div>
        <div class="talsu-chevron" aria-hidden="true">›</div>
      </a>
      <a class="talsu-menu-item" href="studyvault.html">
        <div class="talsu-item-icon"></div>
        <div class="talsu-item-label">Study Vault</div>
        <div class="talsu-chevron" aria-hidden="true">›</div>
      </a>
    </div>
  </div>

  <nav class="talsu-bottom-nav" id="talsuBottomNav">
    <button class="talsu-nav-item" data-href="index.html">
      <div class="talsu-nav-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(201,149,58,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
      </div>
      <span class="talsu-nav-label">Home</span>
    </button>
    <button class="talsu-nav-item" data-href="members.html">
      <div class="talsu-nav-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(201,149,58,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
      </div>
      <span class="talsu-nav-label">Members</span>
    </button>
    <button class="talsu-nav-item" data-href="constitution.html">
      <div class="talsu-nav-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(201,149,58,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
      </div>
      <span class="talsu-nav-label">Constitution</span>
    </button>
    <button class="talsu-nav-item" data-href="studyvault.html">
      <div class="talsu-nav-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(201,149,58,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      </div>
      <span class="talsu-nav-label">Study Vault</span>
    </button>
  </nav>
  `;

  function injectMenu() {
    if (document.querySelector('.talsu-topbar')) return; // already present

    // Remove older menu elements (best effort)
    const oldTop = document.querySelector('.topbar'); if (oldTop) oldTop.remove();
    const oldOverlay = document.querySelector('.overlay, .slide-overlay'); if (oldOverlay) oldOverlay.remove();
    const oldPanel = document.querySelector('.panel'); if (oldPanel) oldPanel.remove();
    const oldBottom = document.querySelector('.bottom-nav'); if (oldBottom) oldBottom.remove();

    // Inject template at top of body
    document.body.insertAdjacentHTML('afterbegin', menuTemplate);
  }

  function setupMenuBehavior() {
    const panel = document.getElementById('talsuPanel');
    const overlay = document.getElementById('talsuOverlay');
    const openBtn = document.getElementById('talsuOpenBtn');
    const closeBtn = document.getElementById('talsuCloseBtn');

    if (!panel || !overlay || !openBtn) return;

    function setOpen(open) {
      if (open) {
        panel.classList.add('open'); overlay.classList.add('show'); document.documentElement.classList.add('menu-open'); panel.setAttribute('aria-hidden', 'false'); overlay.setAttribute('aria-hidden', 'false');
      } else {
        panel.classList.remove('open'); overlay.classList.remove('show'); document.documentElement.classList.remove('menu-open'); panel.setAttribute('aria-hidden', 'true'); overlay.setAttribute('aria-hidden', 'true');
      }
    }

    openBtn.addEventListener('click', () => setOpen(true));
    closeBtn && closeBtn.addEventListener('click', () => setOpen(false));
    overlay.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });

    // Close when a menu link is clicked
    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  }

  function markActiveLinks() {
    const path = (location.pathname || '').split('/').pop() || 'index.html';

    // menu list links
    document.querySelectorAll('.talsu-menu-item').forEach(a => {
      try {
        const href = a.getAttribute('href') || a.dataset.href || '';
        const name = href.split('/').pop();
        if (name === path) a.classList.add('active'); else a.classList.remove('active');
      } catch (e) {}
    });

    // bottom nav buttons
    document.querySelectorAll('.talsu-nav-item').forEach(btn => {
      const href = btn.getAttribute('data-href') || '';
      const name = href.split('/').pop();
      if (name === path) btn.classList.add('active'); else btn.classList.remove('active');
      // wire click to navigate
      btn.addEventListener('click', () => { if (href) location.href = href; });
    });
  }

  // Auto-run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { injectMenu(); setupMenuBehavior(); markActiveLinks(); });
  } else {
    injectMenu(); setupMenuBehavior(); markActiveLinks();
  }
})();
