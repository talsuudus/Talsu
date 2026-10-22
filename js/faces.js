/* ── TALSUUDUS face crop ───────────────────────────────────────
   Any <img class="exec-photo"> / <img class="past-photo"> (or <img data-face>) that uses a Cloudinary link
   is automatically cropped by Cloudinary to the person's FACE, centred.
   Just paste the normal Cloudinary link as the img src — nothing else to do.
   Optional: data-zoom="0.6" (more space around the face) … "1" (tighter). */
(function () {
  'use strict';
  var MARK = '/image/upload/';

  function faceOnly(url, size, zoom) {
    if (!url || url.indexOf('res.cloudinary.com') === -1 || url.indexOf(MARK) === -1) return url;
    var head = url.slice(0, url.indexOf(MARK) + MARK.length);
    var rest = url.slice(head.length);
    if (/^([a-z]{1,3}_[^\/,]+,?)+\//.test(rest)) return url; // already has a transformation
    return head + 'c_thumb,g_face,z_' + zoom + ',w_' + size + ',h_' + size + ',q_auto/' + rest;
  }

  function apply(img) {
    if (img.dataset.faceDone) return;
    img.dataset.faceDone = '1';
    var original = img.getAttribute('src');
    var size = Math.min(600, Math.max(160, Math.round((img.clientWidth || 80) * 2.5))); // sharp on phones
    var zoom = img.dataset.zoom || '0.7';
    var cropped = faceOnly(original, size, zoom);
    if (cropped === original) return;
    img.addEventListener('error', function onErr() {
      img.removeEventListener('error', onErr);
      img.src = original; // if the cropped link fails, show the original photo
    });
    img.src = cropped;
  }

  function run() {
    document.querySelectorAll('img.exec-photo, img.past-photo, img[data-face]').forEach(apply);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
