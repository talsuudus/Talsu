/* ──────────────────────────────────────────────────────────────
   HOW TO ADD A MEMBER
   1. Copy the last line block below, paste it just before the closing "];"
      (put a comma after the block above it), then edit the details.
   2. level  → "Graduated" | "500" | "400" | "300" | "200" | "100"   (spelling matters!)
   3. id     → any unique number (it is shown as S/N). New members can use the next number.
   4. img    → paste the Cloudinary photo link, or "" for an automatic initials avatar.
   Order is automatic: Graduated first, then 500, 400, 300, 200, 100 — no need to move things around.

   Graduated example:
     bio:"Computer Science · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Computer Science."
   100 Level example:
     bio:"Course · 100 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Course at 100 Level. Academic Session: 2026/2027."
   ────────────────────────────────────────────────────────────── */
/* Current academic session — shown on every member profile. Change it here once a year. */
const SESSION = '2026/2027';

const membersData = [
    { id:1, name:"Muhammad Bashir Umar", course:"Agriculture", level:"Graduated", phone:"08061729025",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792620916/Muhammadgdmd_sg3val.webp",
      bio:"Agriculture · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Agriculture." },
    { id:2, name:"Ibrahim Umar", course:"Nursing Sciences", level:"Graduated", phone:"08065989069",
      img:"",
      bio:"Nursing Sciences · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Nursing Sciences." },
    { id:3, name:"Jafar Isma'il", course:"MLS", level:"Graduated", phone:"08104944991",
      img:"",
      bio:"Medical Lab Science · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Medical Laboratory Science (MLS)." },
    { id:4, name:"Kamal Sadiq Tangaza", course:"DVM", level:"Graduated", phone:"09062777275",
      img:"",
      bio:"Veterinary Medicine · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Doctor of Veterinary Medicine (DVM)." },
    { id:5, name:"Ahmad Ukasha", course:"MLS", level:"Graduated", phone:"08105720644",
      img:"",
      bio:"Medical Lab Science · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Medical Laboratory Science (MLS)." },
    { id:6, name:"Abdullahi Muhammad", course:"Pharmacy", level:"Graduated", phone:"07062245855",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792563278/Abdullahi_tkvide.webp",
      bio:"Pharmacy · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Pharmacy." },
    { id:7, name:"Saratu Ahmad", course:"Education English", level:"Graduated", phone:"08038690382",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792305270/Saratu_el5ze5.webp",
      bio:"Education English · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Education English." },
    { id:8, name:"Hauwa'u Mukhtar", course:"MCB", level:"Graduated", phone:"08087728209",
      img:"",
      bio:"Microbiology · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Microbiology (MCB)." },
    { id:9, name:"Habibu Garba", course:"Pure Chemistry", level:"Graduated", phone:"08134133203",
      img:"",
      bio:"Pure Chemistry · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Pure Chemistry." },
    { id:10, name:"Abubakar Danladi", course:"PED", level:"Graduated", phone:"09039215557",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792305269/Abba_ed1w0n.webp",
      bio:"Physical & Health Education · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduate in Primary Education (PED)." },
    { id:11, name:"Maryam Muhammad", course:"Nutrition", level:"Graduated", phone:"09160746263",
      img:"",
      bio:"Nutrition & Dietetics · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Nutrition." },
    { id:12, name:"Nusaiba Umar", course:"Biology", level:"Graduated", phone:"09013646133",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792563279/Nusaiba_ludyk4.webp",
      bio:"Biology · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Biology." },
    { id:13, name:"Abdulganiyyu Abubakar Ayama", course:"Agriculture", level:"Graduated", phone:"08130719667",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792620916/Abdul_j21jqg.webp",
      bio:"Agriculture · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Agriculture." },
    { id:14, name:"Abbas Abubakar Ayama", course:"Pure Chemistry", level:"Graduated", phone:"08144185515",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792589710/Abbas_tkziwo.webp",
      bio:"Pure Chemistry · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Pure Chemistry." },
    { id:15, name:"Huzaif Abdulqadir", course:"Physiotherapy", level:"Graduated", phone:"08161266780",
      img:"",
      bio:"Physiotherapy · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Physiotherapy." },
    { id:16, name:"Abdulrahman Abubakar", course:"Applied Chemistry", level:"Graduated", phone:"08068575161",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792589709/Abdurrahman_r3ttpu.webp",
      bio:"Applied Chemistry · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Applied Chemistry." },
    { id:17, name:"Salamatu Usman", course:"Edu Chemistry", level:"Graduated", phone:"07067882254",
      img:"",
      bio:"Education Chemistry · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Education Chemistry." },
    { id:18, name:"Imrana Ardo Abubakar", course:"Computer Science", level:"Graduated", phone:"09032629420",
      img:"",
      bio:"Computer Science · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Computer Science." },
    { id:19, name:"Mubarak Abdullahi", course:"Linguistics", level:"Graduated", phone:"08036285343",
      img:"",
      bio:"Linguistics · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Linguistics." },
    { id:20, name:"Uzairu Nasiru", course:"Political Science", level:"Graduated", phone:"07062777275",
      img:"",
      bio:"Political Science · Graduate", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Graduated in Political Science." },
    { id:21, name:"Nasir Attahiru", course:"MBBS", level:"500", phone:"08165618146",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792563278/Nasir_jjgrh6.webp",
      bio:"Medicine & Surgery · 500 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying MBBS (Medicine & Surgery) at 500 Level." },
    { id:22, name:"Aliyu Nana Khadija", course:"Agriculture", level:"500", phone:"09037011543",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792305269/Nanakhadija_widkqs.webp",
      bio:"Agriculture · 500 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Agriculture at 500 Level. Academic Session: 2026/2027." },
    { id:23, name:"Lawal Garba", course:"LLB", level:"500", phone:"07068547440",
      img:"",
      bio:"Law · 500 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Law (LLB) at 500 Level. Academic Session: 2026/2027." },
    { id:24, name:"Junaidu Usman Ausa", course:"MBBS", level:"500", phone:"08104372231",
      img:"",
      bio:"Medicine & Surgery · 500 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying MBBS at 500 Level. Academic Session: 2026/2027." },
    { id:25, name:"Kamal Ahmad", course:"Agriculture", level:"500", phone:"08106995489",
      img:"",
      bio:"Agriculture · 500 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Agriculture at 500 Level. Academic Session: 2026/2027." },
    { id:26, name:"Hafiz Auwal", course:"Fisheries", level:"500", phone:"08030495902",
      img:"",
      bio:"Fisheries · 500 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Fisheries at 500 Level. Academic Session: 2026/2027." },
    { id:27, name:"Abdulqadir Amina Ruwah", course:"Fisheries", level:"400", phone:"08107338972",
      img:"",
      bio:"Fisheries · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Fisheries at 400 Level. Academic Session: 2026/2027." },
    { id:28, name:"Usman Aliyu", course:"Nursing", level:"400", phone:"09041303074",
      img:"",
      bio:"Nursing · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Nursing at 400 Level. Academic Session: 2025/2026." },
    { id:29, name:"Yahaya Isa", course:"DVM", level:"400", phone:"08103630651",
      img:"",
      bio:"Veterinary Medicine · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Doctor of Veterinary Medicine (DVM) at 400 Level. Academic Session: 2025/2026." },
    { id:30, name:"Sudais Ahmad", course:"Physiotherapy", level:"400", phone:"09038953714",
      img:"",
      bio:"Physiotherapy · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Physiotherapy at 400 Level. Academic Session: 2026/2027." },
    { id:31, name:"Auwal Sharif", course:"Radiography", level:"400", phone:"07060713262",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792305271/Sharif_pe0x1z.webp",
      bio:"Radiography · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Radiography at 400 Level. Academic Session: 2026/2027." },
    { id:32, name:"Saminu Murtala Tangaza", course:"Computer Science", level:"400", phone:"09066654171",
      img:"",
      bio:"Computer Science · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Computer Science at 400 Level. Academic Session: 2026/2027." },
    { id:33, name:"Aliyu Ahmad", course:"Computer Science", level:"400", phone:"07034326656",
      img:"",
      bio:"Computer Science · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Computer Science at 400 Level. Academic Session: 2026/2027." },
    { id:34, name:"Nabila Abdullahi", course:"MBBS", level:"400", phone:"08108719139",
      img:"",
      bio:"Medicine & Surgery · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying MBBS at 400 Level. Academic Session: 2026/2027." },
    { id:35, name:"Ikrama Abdullahi", course:"DVM", level:"400", phone:"07048245192",
      img:"",
      bio:"Veterinary Medicine · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Doctor of Veterinary Medicine (DVM) at 400 Level. Academic Session: 2026/2027." },
    { id:36, name:"Ahmad Aminu Gidado", course:"MLS", level:"400", phone:"09033298066",
      img:"",
      bio:"Medical Lab Science · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Medical Laboratory Science (MLS) at 400 Level. Academic Session: 2026/2027." },
    { id:37, name:"Umar Saifullahi Muhammad", course:"MBBS", level:"400", phone:"09063739003",
      img:"",
      bio:"Medicine & Surgery · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying MBBS at 400 Level. Academic Session: 2026/2027." },
    { id:38, name:"Sumayya Muhammad", course:"Edu Biology", level:"400", phone:"08148643201",
      img:"",
      bio:"Education Biology · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Education Biology at 400 Level. Academic Session: 2026/2027." },
    { id:39, name:"Kasim Abdulmalik Usman", course:"Political Science", level:"400", phone:"07034251468",
      img:"",
      bio:"Political Science · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Political Science at 400 Level. Academic Session: 2026/2027." },
    { id:40, name:"Sahabi Muhammad", course:"Economics", level:"400", phone:"08064919454",
      img:"",
      bio:"Economics · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Economics at 400 Level. Academic Session: 2026/2027." },
    { id:41, name:"Umar Faruku Jambale", course:"Education Computer", level:"400", phone:"07038481769",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792589709/Umar_qdvrrs.webp",
      bio:"Education Computer · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Education Computer at 400 Level. Academic Session: 2026/2027." },
    { id:42, name:"Salim Abubakar", course:"Education Computer", level:"400", phone:"08143005494",
      img:"",
      bio:"Education Computer · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Education Computer at 400 Level. Academic Session: 2026/2027." },
    { id:43, name:"Aliyu Sadik", course:"Biology", level:"300", phone:"07070950953",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792620917/Aliyusadik_svcfno.webp",
      bio:"Biology · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Biology at 300 Level. Academic Session: 2026/2027." },
    { id:44, name:"Ibrahim Mohammad Marafa", course:"Computer Science", level:"300", phone:"09063326045",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792305270/Ibrahim_iqmdel.webp",
      bio:"Computer Science · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Computer Science at 300 Level. Academic Session: 2026/2027." },
    { id:45, name:"Bashar Aliyu", course:"Statistics", level:"300", phone:"08136341768",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792589707/Bashow_afqaux.webp",
      bio:"Statistics · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Statistics at 300 Level. Academic Session: 2026/2027." },
    { id:46, name:"Zainab Muhammad Abubakar", course:"Microbiology", level:"300", phone:"09039912009",
      img:"",
      bio:"Microbiology · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Microbiology at 300 Level. Academic Session: 2026/2027." },
    { id:47, name:"Usman Yushau Kasim", course:"Business Administration", level:"300", phone:"08168553418",
      img:"",
      bio:"Business Administration · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Business Administration at 300 Level. Academic Session: 2026/2027." },
    { id:48, name:"Umar Zainab Nafisat", course:"MLS", level:"300", phone:"08140864550",
      img:"",
      bio:"Medical Lab Science · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Medical Laboratory Science (MLS) at 300 Level. Academic Session: 2026/2027." },
    { id:49, name:"Adamu Sanusi", course:"ICT", level:"300", phone:"08109336425",
      img:"",
      bio:"Information & Comm. Technology · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying ICT at 300 Level. Academic Session: 2026/2027." },
    { id:50, name:"Abdul'aziz Mukhtar", course:"Forestry", level:"300", phone:"09162363565",
      img:"",
      bio:"Forestry · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Forestry at 300 Level. Academic Session: 2026/2027." },
    { id:51, name:"Zabura Nuhu", course:"Computer Science", level:"300", phone:"08036698980",
      img:"",
      bio:"Computer Science · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Computer Science at 300 Level. Academic Session: 2026/2027." },
    { id:52, name:"Sulaiman Usman", course:"MBBS", level:"300", phone:"09137981510",
      img:"",
      bio:"Medicine & Surgery · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying MBBS at 300 Level. Academic Session: 2026/2027." },
    { id:53, name:"Sa'ad Auwal", course:"Software Engineering", level:"300", phone:"09038666754",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792305271/Sultan_lsasdt.webp",
      bio:"Software Engineering · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Software Engineering at 300 Level. Academic Session: 2026/2027." },
    { id:54, name:"Marwan Umar G-madi", course:"Software Engineering", level:"300", phone:"09167088689",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792620916/Marwanumar_ttt93z.webp",
      bio:"Software Engineering · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Software Engineering at 300 Level. Academic Session: 2026/2027." },
    { id:55, name:"Nura Ismail", course:"Shari'ah", level:"300", phone:"08132273140",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792305270/Nura_l2oow4.webp",
      bio:"Shari'ah · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Shari'a at 300 Level. Academic Session: 2026/2027." },
    { id:56, name:"Yusuf Aliyu", course:"Guidance & Counselling", level:"300", phone:"07060433578",
      img:"",
      bio:"Guidance & Counselling · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Guidance & Counselling at 300 Level. Academic Session: 2026/2027." },
    { id:57, name:"Sani Yahayya", course:"Library & Information Science", level:"300", phone:"08139017141",
      img:"",
      bio:"Library & Information Science · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Library & Information Science at 300 Level. Academic Session: 2026/2027." },
    { id:58, name:"Hussaini Bello", course:"MBBS", level:"100", phone:"08136826156",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/v1792305269/Hussaini_wbnyjf.webp",
      bio:"Medicine & Surgery · 100 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Medicine & Surgery at 100 Level. Academic Session: 2026/2027." }
  ];

  const levelColors = {
    '100':       { bg:'be185d', badge:'level-badge-100',  chipCls:'cc-lvl-chip-100' },
    '200':       { bg:'b45309', badge:'level-badge-200',  chipCls:'cc-lvl-chip-200' },
    '300':       { bg:'1d4ed8', badge:'level-badge-300',  chipCls:'cc-lvl-chip-300' },
    '400':       { bg:'0d9488', badge:'level-badge-400',  chipCls:'cc-lvl-chip-400' },
    '500':       { bg:'7c3aed', badge:'level-badge-500',  chipCls:'cc-lvl-chip-500' },
    'Graduated': { bg:'475569', badge:'level-badge-grad', chipCls:'cc-lvl-chip-grad' }
  };
  const REPORT_EMAIL = 'talsuudus@gmail.com';
  const levelLabel = lv => lv === 'Graduated' ? 'Graduated' : lv + ' Level';
  const levelShort = lv => lv === 'Graduated' ? 'Grad' : lv + 'L';
  const esc = str => String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  // Initials avatar drawn locally (works offline; member names are not sent to any other website)
  const avatarUrl = (m) => {
    const w = String(m.name).trim().split(/\s+/);
    const ini = ((w[0] || '?')[0] + (w[1] ? w[1][0] : '')).toUpperCase();
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#' + levelColors[m.level].bg + '"/>' +
      '<text x="100" y="100" dy=".35em" font-family="Arial,Helvetica,sans-serif" font-size="70" font-weight="700" text-anchor="middle" fill="#fff">' + esc(ini) + '</text></svg>';
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  };
  /* Cloudinary face-aware crop: Cloudinary finds the face and crops the photo
     around it to exactly w×h, so faces stay centred and fully visible.
     Non-Cloudinary links (or ones that already have a transformation) are left alone. */
  const faceCrop = (url, w, h) => {
    const marker = '/image/upload/';
    if (!url || url.indexOf('res.cloudinary.com') === -1 || url.indexOf(marker) === -1) return url;
    const [head, rest] = [url.slice(0, url.indexOf(marker) + marker.length), url.slice(url.indexOf(marker) + marker.length)];
    if (/^([a-z]{1,3}_[^\/,]+,?)+\//.test(rest)) return url;   // already transformed
    return head + 'c_fill,g_face,w_' + w + ',h_' + h + ',q_auto/' + rest;
  };

  /* ── Safety net + automatic order ──────────────────────────────
     • A member with a mistyped level / missing name is skipped (and reported in the
       browser console) instead of breaking the whole page.
     • Order: Graduated → 500 → 400 → 300 → 200 → 100 (keeps your order inside each group). */
  const LEVEL_ORDER = ['Graduated', '500', '400', '300', '200', '100'];
  (function prepareMembers() {
    const seen = new Set();
    for (let i = membersData.length - 1; i >= 0; i--) {
      const m = membersData[i];
      if (m && typeof m.level === 'string') {
        m.level = m.level.trim();
        if (m.level.toLowerCase() === 'graduated' || m.level.toLowerCase() === 'graduate') m.level = 'Graduated';
      }
      const problem = !m || !m.name ? 'missing name'
        : !levelColors[m.level] ? 'unknown level "' + (m && m.level) + '" (use Graduated, 500, 400, 300, 200 or 100)'
        : null;
      if (problem) { console.warn('[members] skipped entry #' + (i + 1) + ' (' + ((m && m.name) || 'no name') + '): ' + problem); membersData.splice(i, 1); continue; }
      m.course = m.course || ''; m.bio = m.bio || ''; m.fullBio = m.fullBio || '';
    }
    membersData.forEach(m => { if (seen.has(m.id)) console.warn('[members] duplicate id ' + m.id + ' (' + m.name + ')'); seen.add(m.id); });
    const idx = new Map(membersData.map((m, i) => [m, i]));
    membersData.sort((a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level) || idx.get(a) - idx.get(b));
  })();

  const membersGrid  = document.getElementById('membersGrid');
  const filterBtns   = document.querySelectorAll('.pill-filter');
  const filterBar    = document.getElementById('filterBar');
  const searchInput  = document.getElementById('searchInput');
  const resultsCount = document.getElementById('resultsCount');
  const resultsLabel = document.getElementById('resultsLabel');
  let activeFilter   = 'all';
  let searchQuery    = '';
  let currentView    = 'members';

  /* ── Render Members ── */
  function renderCards() {
    const filtered = membersData.filter(m => {
      const matchFilter = activeFilter === 'all' || m.level === activeFilter;
      const matchSearch = !searchQuery ||
        m.name.toLowerCase().includes(searchQuery) ||
        m.course.toLowerCase().includes(searchQuery) ||
        levelLabel(m.level).toLowerCase().includes(searchQuery);
      return matchFilter && matchSearch;
    });
    resultsCount.textContent = filtered.length;
    resultsLabel.textContent = 'members';
    membersGrid.className = 'members-grid';
    membersGrid.innerHTML = '';

    if (!filtered.length) {
      const emptyMsg = (!searchQuery && activeFilter !== 'all')
        ? `No ${activeFilter === 'Graduated' ? 'graduated' : activeFilter + ' level'} members have been listed yet.`
        : 'Try a different name or course.';
      membersGrid.innerHTML = `<div class="no-results"><h3>${(!searchQuery && activeFilter !== 'all') ? 'Nothing here yet' : 'No results found'}</h3><p>${emptyMsg}</p></div>`;
      return;
    }
    filtered.forEach((m, i) => {
      const lc = levelColors[m.level];
      const card = document.createElement('div');
      card.className = 'member-card';
      card.dataset.level = m.level;
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', 'View profile of ' + m.name);
      card.style.animationDelay = `${i * 0.05}s`;
      const rawImg = m.img || '';
      const imgUrl = rawImg ? faceCrop(rawImg, 320, 320) : avatarUrl(m, 200);
      card.innerHTML = `
        <div class="card-accent"></div>
        <div class="card-inner-row">
          <div class="card-img-area">
            <div class="skeleton-shimmer"></div>
            <img class="member-img" src="${esc(imgUrl)}" alt="${esc(m.name)}" loading="lazy">
          </div>
          <div class="card-text-area">
            <div class="member-name">${esc(m.name)}</div>
            <div class="member-role">${esc(m.course)}</div>
            <div class="level-badge ${lc.badge}">${levelLabel(m.level)}</div>
            <div class="preview-bio">${esc(m.bio)}</div>
          </div>
        </div>
        <div class="expand-trigger">
          <span>View Profile</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a7a4c" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </div>`;
      const img = card.querySelector('.member-img');
      img.addEventListener('load', () => img.classList.add('loaded'));
      // if the photo link is broken, fall back to the initials avatar
      img.addEventListener('error', () => {
        // 1st failure → try the original photo link, 2nd → initials avatar
        if (!img.dataset.fallback && rawImg && img.src !== rawImg) { img.dataset.fallback = '1'; img.src = rawImg; return; }
        if (img.dataset.fallback !== '2') { img.dataset.fallback = '2'; img.src = avatarUrl(m, 200); return; }
        img.classList.add('loaded');
      });
      if (img.complete && img.naturalWidth) img.classList.add('loaded');
      card.addEventListener('click', () => openModal(m));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(m); } });
      membersGrid.appendChild(card);
    });
  }

  /* ── Render Courses ── */
  function renderCourses() {
    const courseMap = {};
    membersData.forEach(m => {
      if (!courseMap[m.course]) courseMap[m.course] = { members:[], levels: new Set() };
      courseMap[m.course].members.push(m);
      courseMap[m.course].levels.add(m.level);
    });
    const sortedCourses = Object.entries(courseMap).sort((a,b) => a[0].localeCompare(b[0]));
    resultsCount.textContent = sortedCourses.length;
    resultsLabel.textContent = 'courses';
    membersGrid.className = 'courses-grid';
    membersGrid.innerHTML = '';
    sortedCourses.forEach(([course, data], i) => {
      const card = document.createElement('div');
      card.className = 'course-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.style.animationDelay = `${i * 0.04}s`;
      const levelsHtml = [...data.levels].sort((a, b) => LEVEL_ORDER.indexOf(a) - LEVEL_ORDER.indexOf(b)).map(lv =>
        `<span class="cc-lvl-chip ${levelColors[lv].chipCls}">${levelShort(lv)}</span>`).join('');
      card.innerHTML = `
        <div class="cc-name">${esc(course)}</div>
        <div class="cc-count">${data.members.length}</div>
        <div class="cc-count-label">member${data.members.length > 1 ? 's' : ''}</div>
        <div class="cc-levels">${levelsHtml}</div>
        <div class="cc-tap-hint">↗ Tap to see members</div>`;
      const openCourse = () => {
        switchToMembers();
        searchInput.value = course;
        searchQuery = course.toLowerCase();
        activeFilter = 'all';
        filterBtns.forEach(b => b.classList.remove('active'));
        document.querySelector('[data-filter="all"]').classList.add('active');
        renderCards();
      };
      card.addEventListener('click', openCourse);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCourse(); } });
      membersGrid.appendChild(card);
    });
  }

  /* ── View switching ── */
  const viewMembersBtn = document.getElementById('viewMembersBtn');
  const viewCoursesBtn = document.getElementById('viewCoursesBtn');

  function switchToMembers() {
    currentView = 'members';
    viewMembersBtn.classList.add('active');
    viewCoursesBtn.classList.remove('active');
    filterBar.style.display = 'flex';
    searchInput.placeholder = 'Search by name or course…';
    renderCards();
  }
  function switchToCourses() {
    currentView = 'courses';
    viewCoursesBtn.classList.add('active');
    viewMembersBtn.classList.remove('active');
    filterBar.style.display = 'none';
    searchInput.placeholder = 'Courses view — tap a card to filter members';
    renderCourses();
  }
  viewMembersBtn.addEventListener('click', switchToMembers);
  viewCoursesBtn.addEventListener('click', switchToCourses);

  /* ── Modal ── */
  const detailModal  = document.getElementById('detailModal');
  const modalContent = document.getElementById('modalDynamicContent');

  function openModal(m) {
    const lc = levelColors[m.level];
    // crop size matches the picture frame: wide on phones, tall on desktop
    const tall = window.matchMedia('(min-width: 768px)').matches;
    const rawImg = m.img || '';
    const imgUrl = rawImg ? faceCrop(rawImg, tall ? 600 : 780, tall ? 840 : 600) : avatarUrl(m, 400);
    const phoneLink = m.phone && m.phone !== 'N/A' ? `<a href="tel:${esc(m.phone)}">${esc(m.phone)}</a>` : 'Not available';
    const subject = 'Correction request — ' + m.name + ' (S/N #' + m.id + ')';
    const body = 'Hi TALSUUDUS,\n\nI would like to report incorrect information on the member listing below:\n\nName: ' + m.name +
                 '\nCourse: ' + m.course + '\nLevel: ' + levelLabel(m.level) + '\nSerial No: ' + m.id +
                 '\n\nWhat needs to be corrected:\n';
    const mailto = 'mailto:' + REPORT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    const gmail  = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(REPORT_EMAIL) +
                   '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    const status = m.level === 'Graduated' ? 'Alumni' : 'UDUS';
    modalContent.innerHTML = `
      <div class="modal-drag-handle"></div>
      <div class="modal-layout">
        <div class="modal-media">
          <img class="modal-img-full" src="${esc(imgUrl)}" alt="${esc(m.name)}">
        </div>
        <div class="modal-body">
          <div>
            <span class="modal-course-badge">${esc(m.course)}</span>
            <span class="modal-level-badge ${lc.badge}">${levelLabel(m.level)}</span>
          </div>
          <div class="modal-name" id="modalTitle">${esc(m.name)}</div>
          <p class="modal-bio">${esc(m.fullBio)}</p>
          <div class="contact-panel">
            <div class="contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a7a4c" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .99h3a2 2 0 012 1.72c.13 1 .36 1.98.7 2.93a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.95.34 1.93.57 2.93.7A2 2 0 0122 16.92z"/></svg>
              ${phoneLink}
            </div>
            <div class="contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a7a4c" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
              ${status} · Tangaza LGA · ${SESSION}
            </div>
            <div class="contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a7a4c" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              S/N #${esc(m.id)} on Official Register
            </div>
          </div>
          <a class="report-link" href="${mailto}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
            Report incorrect info
          </a>
          <a class="report-alt" href="${gmail}" target="_blank" rel="noopener">No email app? Open in Gmail</a>
          <div class="modal-close-row">
            <button class="close-modal-btn" id="closeModalBtn" aria-label="Close member details">✕</button>
          </div>
        </div>
      </div>`;
    const img = modalContent.querySelector('.modal-img-full');
    img.addEventListener('error', () => {
      if (!img.dataset.fallback && rawImg && img.src !== rawImg) { img.dataset.fallback = '1'; img.src = rawImg; return; }
      if (img.dataset.fallback !== '2') { img.dataset.fallback = '2'; img.src = avatarUrl(m, 400); }
    });
    detailModal.classList.add('active');
    detailModal.setAttribute('role', 'dialog');
    detailModal.setAttribute('aria-modal', 'true');
    detailModal.setAttribute('aria-labelledby', 'modalTitle');
    document.body.style.overflow = 'hidden';
    const closeBtnEl = document.getElementById('closeModalBtn');
    closeBtnEl.addEventListener('click', closeModal);
    closeBtnEl.focus();
  }
  function closeModal() { detailModal.classList.remove('active'); document.body.style.overflow = ''; }
  detailModal.addEventListener('click', e => { if (e.target === detailModal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeMenu(); } });

  /* ── Filters & Search ── */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      if (currentView === 'members') renderCards();
    });
  });
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.toLowerCase().trim();
    if (currentView === 'members') renderCards();
  });

  /* ── Slide Menu ── */
  const panel   = document.getElementById('panel');
  const overlay = document.getElementById('overlay');
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');

  function openMenu()  { panel.classList.add('open'); overlay.classList.add('show'); }
  function closeMenu() { panel.classList.remove('open'); overlay.classList.remove('show'); }
  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      const href = item.getAttribute('data-href');
      if (href) setTimeout(() => { window.location.href = href; }, 200);
      else setTimeout(closeMenu, 180);
    });
  });
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const href = btn.getAttribute('data-href');
      if (href) setTimeout(() => { window.location.href = href; }, 150);
    });
  });

  renderCards();
