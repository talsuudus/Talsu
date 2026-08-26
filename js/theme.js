/* ── TALSUUDUS THEME TOGGLE ──────────────────────────────
   Applies saved theme immediately (before paint) to avoid a
   flash of the wrong theme, then wires up any .theme-toggle
   button present on the page once the DOM is ready. */
(function () {
  try {
    var saved = localStorage.getItem('talsu-theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) { /* localStorage unavailable — default to light */ }
})();

function talsuInitThemeToggle() {
  var btns = document.querySelectorAll('.theme-toggle');
  if (!btns.length) return;
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        try { localStorage.setItem('talsu-theme', 'light'); } catch (e) {}
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        try { localStorage.setItem('talsu-theme', 'dark'); } catch (e) {}
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', talsuInitThemeToggle);
} else {
  talsuInitThemeToggle();
}
