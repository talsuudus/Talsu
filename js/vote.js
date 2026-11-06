/* TALSUUDUS online voting portal: verify, vote, live results. Talks to the voting Supabase project (js/vote-config.js). */
(function () {
  const C = window.VOTE_CONFIG || {}, $ = s => document.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  if (!C.url || !C.key || /PASTE/.test(C.url + C.key)) { $('#vMain').hidden = true; $('#vOff').hidden = false; return; }
  if (!window.supabase) { $('#vMain').hidden = true; $('#vOff').hidden = false; $('#vOff').innerHTML = '<h2>Could not load the voting tools</h2><p>Check your internet connection and refresh the page.</p>'; return; }
  const db = supabase.createClient(C.url, C.key);
  let serial = null, POS = [], live = null, rvAt = 0;

  function toast(t, bad) { const e = $('#vToast'); e.textContent = t; e.className = 'v-toast show' + (bad ? ' bad' : ''); clearTimeout(toast.t); toast.t = setTimeout(() => e.className = 'v-toast', 3500); }
  function pollState(s) {
    const n = Date.now(), a = s.starts_at ? new Date(s.starts_at) : 0, b = s.ends_at ? new Date(s.ends_at) : 0;
    if (!s.is_open) return { k: 'off', t: 'Voting is closed' };
    if (a && n < a) return { k: 'wait', t: 'Voting opens ' + a.toLocaleString() };
    if (b && n > b) return { k: 'end', t: 'Voting has ended' };
    return { k: 'live', t: b ? 'Voting is open · closes ' + b.toLocaleString() : 'Voting is open' };
  }
  const show = id => {
    document.querySelectorAll('.v-step').forEach(e => e.hidden = e.id !== id);
    document.querySelectorAll('.v-steps li').forEach(l => l.classList.toggle('on', l.dataset.s === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  async function resultsHTML() {
    const [{ data: rows }, { data: pos }, { data: s }, { data: t }] = await Promise.all([
      db.rpc('get_results'),
      db.from('positions').select('id,title,candidates(id,name,photo_url)').order('sort'),
      db.from('settings').select('results_mode,ends_at').single(),
      db.rpc('turnout')]);
    const out = (t && t.total) ? `<div class="v-turn"><b>Turnout</b> · ${Math.round(100 * t.voted / t.total)}% of members have voted</div>` : '';
    if (!rows || !rows.length) {
      if (s.results_mode === 'after_close') return out + `<div class="v-card"><h3>Results will be revealed when voting closes</h3>${s.ends_at ? `<div id="vCd" class="v-cd" data-end="${s.ends_at}"></div>` : ''}</div>`;
      return out + '<div class="v-card"><p>Results are not shown to voters for this election.</p></div>';
    }
    return out + pos.map(p => {
      const rs = p.candidates.map(c => ({ ...c, ...(rows.find(r => r.candidate_id === c.id) || {}) })).sort((a, b) => (b.pct || 0) - (a.pct || 0));
      const tot = rs.some(c => c.votes == null) ? null : rs.reduce((x, c) => x + (+c.votes || 0), 0);
      return `<section class="v-card"><div class="v-rt"><h3>${esc(p.title)}</h3>${tot != null ? `<small>${tot} vote${tot == 1 ? '' : 's'} cast</small>` : ''}</div>` +
        rs.map((c, i) => `<div class="v-rrow${i === 0 && c.pct > 0 ? ' r1' : ''}"><span class="v-rk">${i + 1}</span><img class="v-av" src="${esc(c.photo_url)}" alt="" onerror="this.style.visibility='hidden'"><div class="v-rb"><div class="v-rn"><b>${esc(c.name)}</b><span>${c.votes != null ? c.votes + (c.votes == 1 ? ' vote · ' : ' votes · ') : ''}${c.pct || 0}%</span></div><div class="v-track"><i style="width:${c.pct || 0}%"></i></div></div></div>`).join('') + '</section>';
    }).join('');
  }
  setInterval(() => {
    const e = $('#vCd'); if (!e) return; const ms = new Date(e.dataset.end) - Date.now();
    if (ms <= 0) { e.textContent = 'Revealing results…'; if (Date.now() - rvAt > 5000) { rvAt = Date.now(); refresh(); } return; }
    const d = Math.floor(ms / 864e5), h = Math.floor(ms % 864e5 / 36e5), m = Math.floor(ms % 36e5 / 6e4), x = Math.floor(ms % 6e4 / 1e3);
    e.textContent = `${d}d ${h}h ${m}m ${x}s`;
  }, 1000);
  const refresh = async () => { $('#vRes').innerHTML = await resultsHTML(); };
  async function showResults(t, sub) {
    $('#vDt').textContent = t; $('#vDsub').textContent = sub; await refresh(); show('vDone');
    clearInterval(live); live = setInterval(refresh, 15000);
  }

  (async () => {
    const { data: s } = await db.from('settings').select('*').single(); if (!s) return;
    $('#vSub').textContent = s.title + ': verify your membership, choose your candidates and see the live result.';
    const p = pollState(s); $('#vPill').className = 'v-pill ' + p.k; $('#vPill').innerHTML = '<i class="v-dot"></i>' + esc(p.t);
  })();

  async function verify(s) {
    s = (s || '').trim().toUpperCase(); if (!s) return toast('Enter your voting code', 1);
    const { data, error } = await db.rpc('verify_member', { p_serial: s });
    if (error || !data?.ok) return toast(data?.error || 'Verification failed', 1);
    if (data.voted) return showResults('You have already voted', 'Here are the live poll results.');
    serial = s; $('#vWho').textContent = data.name;
    const { data: pos } = await db.from('positions').select('id,title,candidates(id,name,photo_url,department,level,bio)').order('sort'); POS = pos || [];
    $('#vBallot').innerHTML = POS.map(p => `<section class="v-card"><div class="v-ph"><h3>${esc(p.title)}</h3></div><div class="v-grid">` + p.candidates.map(c =>
      `<div class="v-cn"><label class="v-cand"><input type="radio" name="${p.id}" value="${c.id}"><div class="v-pick"><img src="${esc(c.photo_url)}" alt="" onerror="this.style.visibility='hidden'"><div><b>${esc(c.name)}</b><small>${esc([c.department, c.level].filter(Boolean).join(' · '))}</small></div></div></label>${c.bio ? `<details><summary>View profile</summary><p>${esc(c.bio)}</p></details>` : ''}</div>`).join('') + '</div></section>').join('');
    count(); show('vBallotWrap');
  }
  const picks = () => { const c = {}; document.querySelectorAll('#vBallot input:checked').forEach(i => c[i.name] = i.value); return c; };
  const count = () => $('#vCnt').textContent = `${Object.keys(picks()).length} of ${POS.length} chosen`;
  $('#vBallot').addEventListener('change', count);
  $('#vGo').onclick = () => verify($('#vSerial').value);
  $('#vSerial').addEventListener('keydown', e => { if (e.key === 'Enter') verify(e.target.value); });
  const loadZX = () => window.ZXing ? Promise.resolve() : new Promise((ok, no) => { const t = document.createElement('script'); t.src = 'https://cdn.jsdelivr.net/npm/@zxing/library@0.21.3/umd/index.min.js'; t.onload = ok; t.onerror = no; document.head.appendChild(t); });
  $('#vFile').onchange = async e => {
    const f = e.target.files[0]; if (!f) return; const u = URL.createObjectURL(f);
    try { await loadZX(); const h = new Map(); h.set(ZXing.DecodeHintType.TRY_HARDER, true); verify((await new ZXing.BrowserMultiFormatReader(h).decodeFromImageUrl(u)).getText()); }
    catch { toast('Could not read the card. Try a clearer photo or type your code.', 1); }
  };
  $('#vSubmit').onclick = () => {
    const c = picks(); if (!Object.keys(c).length) return toast('Choose at least one nominee', 1);
    $('#vRvl').innerHTML = POS.map(p => { const n = p.candidates.find(x => x.id === c[p.id]); return `<div class="v-rv"><span>${esc(p.title)}</span><b>${n ? esc(n.name) : '<i>No vote</i>'}</b></div>`; }).join('');
    $('#vRv').hidden = false;
  };
  $('#vRvx').onclick = () => $('#vRv').hidden = true;
  $('#vRvok').onclick = async () => {
    const { data, error } = await db.rpc('cast_vote', { p_serial: serial, p_choices: picks() }); $('#vRv').hidden = true;
    if (error || !data?.ok) return toast(data?.error || 'Vote failed', 1);
    showResults('Vote recorded. Thank you!', 'Live poll results update automatically.');
  };
})();
