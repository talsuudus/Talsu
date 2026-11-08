const PAST_PRESIDENTS = [
  { name: "Sanusi Haliru", years: "2025 – 2026", img: "https://res.cloudinary.com/dgwinzauy/image/upload/v1777875408/President_m4wd2a.webp", note: "" },
  { name: "Abdulrahman Umar Gidan Madi", years: "2024 – 2025", img: "https://res.cloudinary.com/dgwinzauy/image/upload/v1777875407/Abdul_mwngzw.webp", note: "" },
  { name: "Yusha'u Bello", years: "2021 – 2024", img: "https://res.cloudinary.com/dgwinzauy/image/upload/v1777875406/Yushau_dn6dgp.webp", note: "" },
  { name: "Shafi'i Ibrahim", years: "2019 – 2021", img: "https://res.cloudinary.com/dgwinzauy/image/upload/v1777875409/Shafiu_ml1xw4.webp", note: "" },
  { name: "Abubakar Umar Gidan Madi", years: "2017 – 2019", img: "https://res.cloudinary.com/dgwinzauy/image/upload/v1777875407/Abubakar_h1miiq.webp", note: "" }
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

  grid.querySelectorAll('img.past-photo').forEach(function (img, i) {
    img.addEventListener('error', function () {
      var p = PAST_PRESIDENTS[i];
      if (p && img.dataset.fb !== '1') { img.dataset.fb = '1'; img.src = initialsAvatar(p.name); }
    });
  });
})();
