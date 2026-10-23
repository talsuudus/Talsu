/* ──────────────────────────────────────────────────────────────
   PAST PRESIDENTS  (shown at the bottom of leadership.html)

   HOW TO EDIT
   • Newest president first. Copy a line, change the details, keep the commas.
   • name  → full name            years → e.g. "2023 – 2024"  (the session they served)
   • img   → paste the Cloudinary link of the photo (it is cropped to the face automatically).
             Leave it "" to show a neat initials circle instead.
   • note  → optional small line under the year (e.g. "Faculty of Pharmacy"). Leave "" for none.

   ⚠ The four entries below are PLACEHOLDERS — replace them with the real past presidents.
   ────────────────────────────────────────────────────────────── */
const PAST_PRESIDENTS = [
  { name: "Sanusi Haliru", years: "2024 – 2025", img: "https://res.cloudinary.com/dgwinzauy/image/upload/v1777875408/President_m4wd2a.webp", note: "" },
  { name: "Name of President", years: "2023 – 2024", img: "", note: "" },
  { name: "Name of President", years: "2022 – 2023", img: "", note: "" },
  { name: "Name of President", years: "2021 – 2022", img: "", note: "" }
];

(function () {
  'use strict';
  var grid = document.getElementById('pastGrid');
  var section = document.getElementById('pastSection');
  if (!grid) return;
  if (!PAST_PRESIDENTS.length) { if (section) section.hidden = true; return; }

  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  // works offline: a small green circle with the person's initials
  var initialsAvatar = function (name) {
    var parts = String(name).trim().split(/\s+/);
    var ini = ((parts[0] || '?')[0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#22a366"/><stop offset="1" stop-color="#1a7a4c"/></linearGradient></defs>' +
      '<rect width="120" height="120" fill="url(#g)"/><text x="60" y="76" font-family="Arial,sans-serif" font-size="46" font-weight="700" ' +
      'text-anchor="middle" fill="#fff">' + esc(ini) + '</text></svg>';
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  };

  grid.innerHTML = PAST_PRESIDENTS.map(function (p, i) {
    var src = p.img ? p.img : initialsAvatar(p.name);
    return '<article class="past-card" style="animation-delay:' + (i * 0.06) + 's">' +
      '<img class="past-photo" src="' + esc(src) + '" alt="' + esc(p.name) + ', President ' + esc(p.years) + '" loading="lazy" width="96" height="96">' +
      '<div class="past-name">' + esc(p.name) + '</div>' +
      '<div class="past-years">' + esc(p.years) + '</div>' +
      (p.note ? '<div class="past-note">' + esc(p.note) + '</div>' : '') +
      '</article>';
  }).join('');

  // if a photo link is broken, fall back to the initials circle
  grid.querySelectorAll('img.past-photo').forEach(function (img, i) {
    img.addEventListener('error', function () {
      var p = PAST_PRESIDENTS[i];
      if (p && img.dataset.fb !== '1') { img.dataset.fb = '1'; img.src = initialsAvatar(p.name); }
    });
  });
})();
