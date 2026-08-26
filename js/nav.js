/* ── TALSUUDUS SHARED NAV TOGGLE ──────────────────────────
   Wires up the slide-out panel (open/close) and bottom-nav
   active state. Used on pages that don't have their own
   page-specific script (Leadership, FAQ, Privacy). */
(function () {
  var panel   = document.getElementById('talsuPanel');
  var overlay = document.getElementById('talsuOverlay');
  var openBtn = document.getElementById('talsuOpenBtn');
  var closeBtn= document.getElementById('talsuCloseBtn');
  if (!panel || !overlay || !openBtn || !closeBtn) return;

  function openMenu()  { panel.classList.add('open');    overlay.classList.add('show');    document.body.style.overflow='hidden'; }
  function closeMenu() { panel.classList.remove('open'); overlay.classList.remove('show'); document.body.style.overflow=''; }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.talsu-menu-item').forEach(function (item) {
    item.addEventListener('click', function () { setTimeout(closeMenu, 160); });
  });
})();
