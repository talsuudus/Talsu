/* ══════════════════════════════════════════════════════════════════
   STUDY VAULT — Supabase version
   • Sign in  : Supabase Auth (email + password, admins only)
   • Database : table "pdfs"           (see supabase/setup.sql)
   • Files    : Storage bucket "study-vault"
   Security is enforced by Row Level Security on the Supabase side —
   the buttons shown here are only a convenience.
   ══════════════════════════════════════════════════════════════════ */
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.112.3/+esm";
import { SUPABASE_URL, SUPABASE_ANON_KEY, BUCKET } from "./supabase-config.js";

const isConfigured = /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(SUPABASE_URL) && !SUPABASE_URL.includes('YOUR-PROJECT') &&
                     SUPABASE_ANON_KEY && !SUPABASE_ANON_KEY.includes('YOUR-ANON');
const supabase = createClient(
  isConfigured ? SUPABASE_URL : 'https://placeholder.supabase.co',
  isConfigured ? SUPABASE_ANON_KEY : 'placeholder',
  { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false } }
);

/* ── DOM shortcuts ───────────────────────────────────────── */
const $ = id => document.getElementById(id);

const loginBtn        = $('loginBtn');
const userZone        = $('userZone');
const userPill        = $('userPill');
const userAvatar      = $('userAvatar');
const userName        = $('userName');
const userDropdown    = $('userDropdown');
const dropName        = $('dropName');
const dropEmail       = $('dropEmail');
const dropUpload      = $('dropUpload');
const dropUploadDiv   = $('dropUploadDivider');
const dropLogout      = $('dropLogout');
const loginModal      = $('loginModal');
const uploadModal     = $('uploadModal');
const loginEmail      = $('loginEmail');
const loginPassword   = $('loginPassword');
const submitLoginBtn  = $('submitLoginBtn');
const upTitle         = $('upTitle');
const upDesc          = $('upDesc');
const upCourse        = $('upCourse');
const fileInput       = $('fileInput');
const dropZone        = $('dropZone');
const selFile         = $('selFile');
const progWrap        = $('progWrap');
const progBar         = $('progBar');
const progPct         = $('progPct');
const submitUploadBtn = $('submitUploadBtn');
const pdfGrid         = $('pdfGrid');
const docCount        = $('docCount');
const filterPills     = $('filterPills');
const sortSelect      = $('sortSelect');
const statFiles       = $('statFiles');
const statCourses     = $('statCourses');
const heroSearch      = $('heroSearch');
const searchSugg      = $('searchSugg');
const toast           = $('toast');
const toastMsg        = $('toastMsg');
const toastIcon       = $('toastIcon');

/* ── State ───────────────────────────────────────────────── */
let currentUser  = null;
let allDocs      = {};
let activeFilter = 'all';
let sortMode     = 'newest';
let searchQuery  = '';
let toastTimer   = null;
let suggTimer    = null;
let loaderDismissed = false;

/* ── Page loader dismiss ─────────────────────────────────── */
const pageLoader = $('pageLoader');
function dismissLoader() {
  if (loaderDismissed) return;
  loaderDismissed = true;
  setTimeout(() => pageLoader.classList.add('hidden'), 320);
}

/* ── IntersectionObserver for lazy-load card entrance ────── */
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const card = entry.target;
      const delay = card._lazyDelay || 0;
      setTimeout(() => card.classList.add('card-visible'), delay);
      cardObserver.unobserve(card);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

// Safety: always dismiss loader after 5 s, even if the network is slow
setTimeout(dismissLoader, 5000);

/* ── Instant cache load (shows PDFs before Supabase responds) ── */
const CACHE_KEY = 'talsu_pdfs_v2';
try {
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    allDocs = JSON.parse(cached);
    dismissLoader();
    render();       // render immediately from cache
    updateStats();
    buildPills();
  }
} catch (_) { /* ignore parse errors */ }

/* ── Utilities ───────────────────────────────────────────── */
const esc      = s => { const d = document.createElement('div'); d.appendChild(document.createTextNode(String(s))); return d.innerHTML; };
const fmtBytes = b => b < 1048576 ? (b/1024).toFixed(1)+' KB' : (b/1048576).toFixed(1)+' MB';
const easeOut  = t => 1 - Math.pow(1-t, 3);

function showToast(msg, type = 'success') {
  clearTimeout(toastTimer);
  toast.className = `toast ${type}`;
  toastIcon.className = `ph-bold ${{ success:'ph-check-circle', error:'ph-warning-circle', info:'ph-info' }[type]}`;
  toastMsg.textContent = msg;
  requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('show')));
  toastTimer = setTimeout(() => toast.classList.remove('show'), 4200);
}

const openModal  = el => { el.classList.add('open');    document.body.style.overflow = 'hidden'; };
const closeModal = el => { el.classList.remove('open'); document.body.style.overflow = ''; };

function animateNum(el, target) {
  const s = parseInt(el.textContent) || 0;
  const t0 = performance.now(), dur = 650;
  const step = now => {
    const p = Math.min((now - t0) / dur, 1);
    el.textContent = Math.round(s + (target - s) * easeOut(p));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ── Modal backdrop click / Escape ──────────────────────── */
document.querySelectorAll('.modal-backdrop').forEach(b =>
  b.addEventListener('click', e => { if (e.target === b) closeModal(b); })
);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(loginModal); closeModal(uploadModal); closeDropdown(); }
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); heroSearch.focus(); }
});

/* ── User dropdown ───────────────────────────────────────── */
function openDropdown()  { userZone.classList.add('open'); }
function closeDropdown() { userZone.classList.remove('open'); }
function toggleDropdown(){ userZone.classList.toggle('open'); }

userPill.addEventListener('click', e => { e.stopPropagation(); toggleDropdown(); });
document.addEventListener('click', e => {
  if (!userZone.contains(e.target)) closeDropdown();
});

dropLogout.addEventListener('click', async () => {
  closeDropdown();
  await supabase.auth.signOut();
  showToast('Signed out.', 'info');
});

dropUpload.addEventListener('click', () => {
  closeDropdown();
  openModal(uploadModal);
});

/* ── Data: load + live updates ───────────────────────────── */
const bottomNav = document.getElementById('talsuBottomNav');
let channel = null;
let reloadTimer = null;

function rowToDoc(r) {
  const nice = (r.title || 'document').replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '_').slice(0, 60) || 'document';
  return {
    title:       r.title,
    description: r.description,
    course:      r.course,
    filePath:    r.file_path,
    // ?download=<name> makes the browser save the file instead of just opening it
    downloadURL: supabase.storage.from(BUCKET).getPublicUrl(r.file_path, { download: nice + '.pdf' }).data.publicUrl,
    uploadedAt:  r.uploaded_at ? new Date(r.uploaded_at).getTime() : 0
  };
}

function showLibraryMessage(icon, title, sub) {
  pdfGrid.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon"><i class="ph ${icon}"></i></div>
      <h3 class="empty-title">${title}</h3>
      <p class="empty-sub">${sub}</p>
    </div>`;
  docCount.textContent = '0 docs';
}

async function loadPdfs() {
  if (!isConfigured) {
    dismissLoader();
    showLibraryMessage('ph-plugs', 'Study Vault is not connected yet', 'Add your Supabase URL and key in js/supabase-config.js.');
    return;
  }
  const { data, error } = await supabase
    .from('pdfs')
    .select('id,title,description,course,file_path,uploaded_at')
    .order('uploaded_at', { ascending: false })
    .limit(1000);
  dismissLoader();
  if (error) {
    console.error('[vault] load failed:', error.message);
    if (!Object.keys(allDocs).length) showLibraryMessage('ph-wifi-slash', 'Could not load the library', 'Check your internet connection and try again.');
    else showToast('Offline — showing saved list.', 'info');
    return;
  }
  allDocs = {};
  data.forEach(r => { allDocs[r.id] = rowToDoc(r); });
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(allDocs)); } catch (_) {}
  render();
  updateStats();
  buildPills();
}

function scheduleReload() { clearTimeout(reloadTimer); reloadTimer = setTimeout(loadPdfs, 300); }

function subscribeToPdfs() {
  loadPdfs();
  if (!isConfigured || channel) return;
  channel = supabase.channel('vault-pdfs')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'pdfs' }, scheduleReload)
    .subscribe();
}
window.addEventListener('online', loadPdfs);

/* ── Auth state ──────────────────────────────────────────── */
let evaluated = { uid: null, admin: false };   // remembers the last admin check for this user

function setAdminUI(user) {
  currentUser = user;
  if (user) {
    loginBtn.style.display      = 'none';
    userZone.style.display      = 'flex';
    dropUpload.style.display    = 'flex';
    dropUploadDiv.style.display = 'block';

    const displayName = user.user_metadata?.display_name || (user.email || '').split('@')[0] || 'Admin';
    userAvatar.textContent = displayName[0].toUpperCase();
    userName.textContent   = displayName;
    dropName.textContent   = displayName;
    dropEmail.textContent  = user.email || '—';

    document.body.classList.add('is-admin');
    /* Hide bottom nav — admin has upload/delete controls, nav overlays them */
    bottomNav.style.display = 'none';
    document.body.style.paddingBottom = '0';
  } else {
    loginBtn.style.display      = 'flex';
    userZone.style.display      = 'none';
    dropUpload.style.display    = 'none';
    dropUploadDiv.style.display = 'none';

    document.body.classList.remove('is-admin');
    bottomNav.style.display = 'flex';
    document.body.style.paddingBottom = '80px';
  }
}

/* Signed-in users are only treated as admins if their id is in the "admins" table. */
async function applySession(session) {
  const user = session?.user || null;
  if (!user) { evaluated = { uid: null, admin: false }; setAdminUI(null); return false; }
  if (evaluated.uid === user.id) { setAdminUI(evaluated.admin ? user : null); return evaluated.admin; }

  const { data, error } = await supabase.from('admins').select('user_id').eq('user_id', user.id).maybeSingle();
  const admin = !error && !!data;
  evaluated = { uid: user.id, admin };
  if (!admin) {
    showToast('This account is not an admin.', 'error');
    await supabase.auth.signOut();
    setAdminUI(null);
    return false;
  }
  setAdminUI(user);
  return true;
}

if (isConfigured) {
  // setTimeout(0): Supabase asks us not to call its API directly inside this callback
  supabase.auth.onAuthStateChange((_event, session) => { setTimeout(() => applySession(session), 0); });
} else {
  setAdminUI(null);
}
subscribeToPdfs();

/* ── Login ───────────────────────────────────────────────── */
loginBtn.addEventListener('click', () => openModal(loginModal));
$('closeLoginModal').addEventListener('click', () => closeModal(loginModal));
$('cancelLoginBtn').addEventListener('click',  () => closeModal(loginModal));
loginPassword.addEventListener('keydown', e => { if (e.key === 'Enter') submitLoginBtn.click(); });

submitLoginBtn.addEventListener('click', async () => {
  $('fEmail').classList.remove('err');
  $('fPassword').classList.remove('err');

  const email = loginEmail.value.trim();
  const pass  = loginPassword.value;
  let ok = true;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    $('fEmail').classList.add('err'); ok = false;
  }
  if (!pass) {
    $('fPassword').classList.add('err'); ok = false;
  }
  if (!ok) return;

  submitLoginBtn.disabled = true;
  submitLoginBtn.innerHTML = '<i class="ph ph-circle-notch" style="animation:spin .7s linear infinite"></i> Signing in…';

  try {
    if (!isConfigured) throw { code: 'not_configured' };
    const { data, error } = await supabase.auth.signInWithPassword({ email, password: pass });
    if (error) throw error;
    const isAdmin = await applySession(data.session);
    if (isAdmin) {
      closeModal(loginModal);
      loginEmail.value = '';
      loginPassword.value = '';
      showToast('Welcome back!', 'success');
    } else {
      $('fPassword').classList.add('err');
      $('passErr').textContent = 'This account does not have admin access.';
    }
  } catch (e) {
    $('fPassword').classList.add('err');
    const code = e.code || '';
    $('passErr').textContent =
      code === 'not_configured' ? 'Study Vault is not connected to Supabase yet.'
      : (code === 'invalid_credentials' || /invalid login credentials/i.test(e.message || '')) ? 'Incorrect email or password.'
      : code === 'email_not_confirmed' ? 'Please confirm your email first.'
      : (e.status === 429 || /rate limit/i.test(code + (e.message || ''))) ? 'Too many attempts. Please wait a few minutes.'
      : 'Sign-in failed. Try again.';
    showToast('Sign-in failed.', 'error');
  } finally {
    submitLoginBtn.disabled  = false;
    submitLoginBtn.innerHTML = '<i class="ph-bold ph-sign-in"></i> Sign In';
  }
});

/* ── Upload ──────────────────────────────────────────────── */

function resetUpload() {
  upTitle.value = ''; upDesc.value = ''; upCourse.value = '';
  fileInput.value = '';
  selFile.style.display = 'none';
  progWrap.classList.remove('on');
  progBar.style.width = '0%';
  progPct.textContent = '0%';
  ['fTitle','fCourse','fFile'].forEach(id => $(id).classList.remove('err'));
}

$('closeUploadModal').addEventListener('click', () => { closeModal(uploadModal); resetUpload(); });
$('cancelUploadBtn').addEventListener('click',  () => { closeModal(uploadModal); resetUpload(); });

fileInput.addEventListener('change', () => {
  const f = fileInput.files[0];
  if (f) {
    selFile.textContent = `✓ ${f.name} (${fmtBytes(f.size)})`;
    selFile.style.display = 'block';
    $('fFile').classList.remove('err');
  }
});

dropZone.addEventListener('dragover',  e => { e.preventDefault(); dropZone.classList.add('dragover'); });
dropZone.addEventListener('dragleave', ()  => dropZone.classList.remove('dragover'));
dropZone.addEventListener('drop', e => {
  e.preventDefault(); dropZone.classList.remove('dragover');
  const f = e.dataTransfer.files[0];
  if (f?.type === 'application/pdf') {
    const dt = new DataTransfer(); dt.items.add(f); fileInput.files = dt.files;
    selFile.textContent = `✓ ${f.name} (${fmtBytes(f.size)})`;
    selFile.style.display = 'block';
  } else {
    showToast('Only PDF files accepted.', 'error');
  }
});

submitUploadBtn.addEventListener('click', async () => {
  if (!currentUser) { showToast('You must be signed in.', 'error'); return; }

  let ok = true;
  if (!upTitle.value.trim())  { $('fTitle').classList.add('err');  ok = false; }
  else                          $('fTitle').classList.remove('err');
  if (!upCourse.value.trim()) { $('fCourse').classList.add('err'); ok = false; }
  else                          $('fCourse').classList.remove('err');

  const file = fileInput.files[0];
  if (!file) {
    $('fFile').classList.add('err'); $('fileErr').textContent = 'Please select a PDF file.'; ok = false;
  } else if (file.size > 20971520) {
    $('fFile').classList.add('err'); $('fileErr').textContent = 'File exceeds 20 MB.'; ok = false;
  } else {
    $('fFile').classList.remove('err');
  }
  if (!ok) return;

  submitUploadBtn.disabled = true;
  submitUploadBtn.innerHTML = '<i class="ph ph-circle-notch" style="animation:spin .7s linear infinite"></i> Uploading…';
  progWrap.classList.add('on');

  const resetBtn = () => {
    submitUploadBtn.disabled  = false;
    submitUploadBtn.innerHTML = '<i class="ph-bold ph-cloud-arrow-up"></i> Upload';
  };
  let path = null;
  try {
    // 1) really a PDF? (checks the file's first bytes, not just its name)
    const head = new Uint8Array(await file.slice(0, 5).arrayBuffer());
    if (String.fromCharCode(...head) !== '%PDF-') throw new Error('That file is not a valid PDF.');

    // 2) safe, unique file name
    const base = file.name.replace(/\.pdf$/i, '').normalize('NFKD').replace(/[^A-Za-z0-9._-]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 80) || 'document';
    path = `pdfs/${Date.now()}_${Math.random().toString(36).slice(2, 8)}_${base}.pdf`;

    // 3) upload with a live progress bar
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) throw new Error('Your session expired. Please sign in again.');
    await uploadWithProgress(path, file, session.access_token, p => {
      progBar.style.width = `${p}%`;
      progPct.textContent = `${p}%`;
    });

    // 4) save the details in the database (if this fails, remove the orphan file)
    const { error } = await supabase.from('pdfs').insert({
      title:       upTitle.value.trim().replace(/\s+/g, ' '),
      description: upDesc.value.trim(),
      course:      upCourse.value.trim().replace(/\s+/g, ' '),
      file_path:   path,
      file_size:   file.size
    });
    if (error) { await supabase.storage.from(BUCKET).remove([path]).catch(() => {}); throw error; }

    showToast(`"${upTitle.value.trim()}" uploaded!`, 'success');
    closeModal(uploadModal);
    resetUpload();
    loadPdfs();
  } catch (err) {
    showToast('Upload failed: ' + (err.message || 'unknown error'), 'error');
    progWrap.classList.remove('on');
  } finally {
    resetBtn();
  }
});

/* Upload through the Storage REST endpoint so we can show real progress */
function uploadWithProgress(path, file, token, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${path}`);
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.setRequestHeader('apikey', SUPABASE_ANON_KEY);
    xhr.setRequestHeader('Content-Type', 'application/pdf');
    xhr.setRequestHeader('x-upsert', 'false');
    xhr.setRequestHeader('cache-control', 'max-age=31536000');
    xhr.upload.onprogress = e => { if (e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100)); };
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) return resolve();
      let msg = 'Upload was rejected.';
      try { msg = JSON.parse(xhr.responseText).message || msg; } catch (_) {}
      if (xhr.status === 401 || xhr.status === 403) msg = 'You do not have permission to upload.';
      reject(new Error(msg));
    };
    xhr.onerror   = () => reject(new Error('Network error. Check your connection.'));
    xhr.ontimeout = () => reject(new Error('Upload timed out.'));
    xhr.send(file);
  });
}

/* ── Render PDF cards ────────────────────────────────────── */
function render() {
  pdfGrid.innerHTML = '';

  let entries = Object.entries(allDocs).map(([id, d]) => ({ id, ...d }));

  // Filter by active course
  if (activeFilter !== 'all')
    entries = entries.filter(d => d.course === activeFilter);

  // Filter by search query
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    entries = entries.filter(d =>
      (d.title       || '').toLowerCase().includes(q) ||
      (d.description || '').toLowerCase().includes(q) ||
      (d.course      || '').toLowerCase().includes(q)
    );
  }

  // Sort
  switch (sortMode) {
    case 'oldest': entries.sort((a,b) => (a.uploadedAt||0) - (b.uploadedAt||0)); break;
    case 'az':     entries.sort((a,b) => (a.title||'').localeCompare(b.title||'')); break;
    case 'za':     entries.sort((a,b) => (b.title||'').localeCompare(a.title||'')); break;
    default:       entries.sort((a,b) => (b.uploadedAt||0) - (a.uploadedAt||0));
  }

  docCount.textContent = `${entries.length} doc${entries.length !== 1 ? 's' : ''}`;

  if (!entries.length) {
    pdfGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon"><i class="ph ph-file-dashed"></i></div>
        <h3 class="empty-title">No documents found</h3>
        <p class="empty-sub">${searchQuery
          ? `No results for "<em>${esc(searchQuery)}</em>".`
          : 'No PDFs have been uploaded yet.'
        }</p>
      </div>`;
    return;
  }

  entries.forEach((doc, i) => {
    const card = document.createElement('article');
    card.className = 'pdf-card';
    card.style.setProperty('--i', i);

    const date = doc.uploadedAt
      ? new Date(doc.uploadedAt).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' })
      : '—';

    card.innerHTML = `
      <div class="card-thumb">
        <div class="card-thumb-bg"></div>
        <i class="ph-bold ph-file-pdf card-thumb-icon"></i>
        ${doc.course ? `<span class="card-course-badge">${esc(doc.course)}</span>` : ''}
      </div>
      <div class="card-body">
        <h3 class="card-title">${esc(doc.title || 'Untitled')}</h3>
        <p class="card-desc">${esc(doc.description || 'No description provided.')}</p>
        <div class="card-meta">
          <span class="card-meta-item">
            <i class="ph ph-calendar-blank"></i>${date}
          </span>
        </div>
      </div>
      <div class="card-footer">
        <a
          class="card-download-btn"
          href="${esc(doc.downloadURL)}"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <i class="ph-bold ph-download-simple"></i> Download PDF
        </a>
        <button
          class="card-delete"
          data-action="delete"
          data-id="${doc.id}"
          aria-label="Delete document"
        >
          <i class="ph ph-trash"></i>
        </button>
      </div>`;

    pdfGrid.appendChild(card);

    // Lazy-load: stagger each card's reveal via IntersectionObserver
    const delay = (i % 8) * 60; // reset stagger every 8 cards
    cardObserver.observe(card);
    card._lazyDelay = delay;
  });
}

/* ── Card event delegation (delete) ─────────────────────── */
pdfGrid.addEventListener('click', async e => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const { action, id } = el.dataset;
  const doc = allDocs[id];
  if (!doc) return;

  if (action === 'delete') {
    if (!currentUser) return;
    if (!confirm(`Delete "${doc.title}"?\nThis cannot be undone.`)) return;
    try {
      const { data, error } = await supabase.from('pdfs').delete().eq('id', id).select('id');
      if (error) throw error;
      if (!data || !data.length) throw new Error('You do not have permission to delete this.');
      if (doc.filePath) {
        const { error: fe } = await supabase.storage.from(BUCKET).remove([doc.filePath]);
        if (fe) console.warn('[vault] file could not be removed from storage:', fe.message);
      }
      showToast(`"${doc.title}" deleted.`, 'info');
      loadPdfs();
    } catch (err) {
      showToast('Delete failed: ' + err.message, 'error');
    }
  }
});

/* ── Course filter pills ─────────────────────────────────── */
function buildPills() {
  const courses = [...new Set(
    Object.values(allDocs).map(d => d.course).filter(Boolean)
  )].sort();

  filterPills.innerHTML = `
    <button class="pill ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">All</button>`;

  courses.forEach(c => {
    const p = document.createElement('button');
    p.className = `pill ${activeFilter === c ? 'active' : ''}`;
    p.dataset.filter = c;
    p.textContent = c;
    filterPills.appendChild(p);
  });
}

filterPills.addEventListener('click', e => {
  const p = e.target.closest('.pill');
  if (!p) return;
  filterPills.querySelectorAll('.pill').forEach(x => x.classList.remove('active'));
  p.classList.add('active');
  activeFilter = p.dataset.filter;
  render();
});

sortSelect.addEventListener('change', () => { sortMode = sortSelect.value; render(); });

/* ── Animated stats ──────────────────────────────────────── */
function updateStats() {
  const v = Object.values(allDocs);
  animateNum(statFiles,   v.length);
  animateNum(statCourses, new Set(v.map(d => d.course).filter(Boolean)).size);
}

/* ── Search with suggestions ─────────────────────────────── */
heroSearch.addEventListener('input', () => {
  searchQuery = heroSearch.value;
  render();
  clearTimeout(suggTimer);
  if (!searchQuery.trim()) { searchSugg.classList.remove('open'); return; }
  suggTimer = setTimeout(() => showSuggestions(searchQuery), 180);
});

heroSearch.addEventListener('focus', () => {
  if (searchQuery.trim()) showSuggestions(searchQuery);
});

document.addEventListener('click', e => {
  if (!$('searchHeroWrap').contains(e.target)) searchSugg.classList.remove('open');
});

$('heroSearchBtn').addEventListener('click', () => {
  render();
  searchSugg.classList.remove('open');
});

heroSearch.addEventListener('keydown', e => {
  if (e.key === 'Enter') { render(); searchSugg.classList.remove('open'); }
});

function showSuggestions(q) {
  const lq = q.toLowerCase();
  const docs = Object.values(allDocs);

  const titles  = docs.filter(d => (d.title  || '').toLowerCase().includes(lq)).slice(0, 4);
  const courses = [...new Set(
    docs.map(d => d.course).filter(c => c && c.toLowerCase().includes(lq))
  )].slice(0, 3);

  if (!titles.length && !courses.length) {
    searchSugg.classList.remove('open'); return;
  }

  searchSugg.innerHTML = '';

  if (titles.length) {
    searchSugg.innerHTML += `<div class="sugg-section-title">Documents</div>`;
    titles.forEach(t => {
      const div = document.createElement('div');
      div.className = 'sugg-item';
      div.innerHTML = `<i class="ph ph-file-pdf"></i>${esc(t.title)}`;
      div.addEventListener('mousedown', e => {
        e.preventDefault();
        heroSearch.value = t.title;
        searchQuery = t.title;
        render();
        searchSugg.classList.remove('open');
      });
      searchSugg.appendChild(div);
    });
  }

  if (courses.length) {
    if (titles.length) searchSugg.innerHTML += `<div class="sugg-divider"></div>`;
    searchSugg.innerHTML += `<div class="sugg-section-title">Courses</div>`;
    courses.forEach(c => {
      const div = document.createElement('div');
      div.className = 'sugg-item';
      div.innerHTML = `<i class="ph ph-books"></i>${esc(c)}`;
      div.addEventListener('mousedown', e => {
        e.preventDefault();
        heroSearch.value = c;
        searchQuery = c;
        render();
        searchSugg.classList.remove('open');
      });
      searchSugg.appendChild(div);
    });
  }

  searchSugg.classList.add('open');
}

/* ── Footer year ─────────────────────────────────────────── */
$('footerYear').textContent = new Date().getFullYear();
