const membersData = [
    { id:1, name:"Muhammad Bashir Umar", course:"Agriculture", level:"500", phone:"08061729025",
img: "https://res.cloudinary.com/dgwinzauy/image/upload/Abdul_mwngzw.webp",

      bio:"Agriculture · Final Year (500 Level)", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Agriculture, currently in his final year at 500 Level. Academic Session: 2025/2026." },
    { id:2, name:"Nasir Attahiru", course:"MBBS", level:"500", phone:"08165618146",
      img:"https://res.cloudinary.com/dgwinzauy/image/upload/Abdul_mwngzw.webp",
      bio:"Medicine & Surgery · Final Year (500 Level)", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying MBBS (Medicine & Surgery), currently in 500 Level. Academic Session: 2025/2026." },
    { id:3, name:"Ibrahim Umar", course:"Nursing Sciences", level:"500", phone:"08065989069",
      img: "https://res.cloudinary.com/dgwinzauy/image/upload/Abdul_mwngzw.webp",

      bio:"Nursing Sciences · Final Year (500 Level)", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Nursing Sciences at 500 Level. Academic Session: 2025/2026." },
    { id:4, name:"Jafar Isma'il", course:"MLS", level:"500", phone:"08104944991",
img: "https://res.cloudinary.com/dgwinzauy/image/upload/Abdul_mwngzw.webp",

      bio:"Medical Lab Science · Final Year (500 Level)", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Medical Laboratory Science (MLS) at 500 Level. Academic Session: 2025/2026." },
    { id:5, name:"Kamal Sadiq Tangaza", course:"DVM", level:"500", phone:"09062777275",
img: "https://res.cloudinary.com/dgwinzauy/image/upload/Abdul_mwngzw.webp",

      bio:"Veterinary Medicine · Final Year (500 Level)", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Doctor of Veterinary Medicine (DVM) at 500 Level. Academic Session: 2025/2026." },
    { id:6, name:"Ahmad Ukasha", course:"MLS", level:"500", phone:"08105720644",
      img:"https://ui-avatars.com/api/?name=Ahmad+Ukasha&background=2d1a5e&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Medical Lab Science · Final Year (500 Level)", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Medical Laboratory Science (MLS) at 500 Level. Academic Session: 2025/2026." },
    { id:7, name:"Abdullahi Muhammad", course:"Pharmacy", level:"500", phone:"07062245855",
      img:"https://ui-avatars.com/api/?name=Abdullahi+Muhammad&background=2d1a5e&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Pharmacy · Final Year (500 Level)", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Pharmacy at 500 Level. Academic Session: 2025/2026." },
    { id:8, name:"Hauwa'u Mukhtar", course:"MCB", level:"400", phone:"08087728209",
      img:"https://ui-avatars.com/api/?name=Hauwa%27u+Mukhtar&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Microbiology · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Microbiology (MCB) at 400 Level. Academic Session: 2025/2026." },
    { id:9, name:"Aliyu Nana Khadija", course:"Agriculture", level:"400", phone:"09037011543",
      img:"https://ui-avatars.com/api/?name=Aliyu+Nana+Khadija&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Agriculture · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Agriculture at 400 Level. Academic Session: 2025/2026." },
    { id:10, name:"Lawal Garba", course:"LLB", level:"400", phone:"07068547440",
      img:"https://ui-avatars.com/api/?name=Lawal+Garba&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Law · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Law (LLB) at 400 Level. Academic Session: 2025/2026." },
    { id:11, name:"Junaidu Usman Ausa", course:"MBBS", level:"400", phone:"08104372231",
      img:"https://ui-avatars.com/api/?name=Junaidu+Usman+Ausa&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Medicine & Surgery · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying MBBS at 400 Level. Academic Session: 2025/2026." },
    { id:12, name:"Kamal Ahmad", course:"Agriculture", level:"400", phone:"08106995489",
      img:"https://ui-avatars.com/api/?name=Kamal+Ahmad&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Agriculture · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Agriculture at 400 Level. Academic Session: 2025/2026." },
    { id:13, name:"Hafiz Auwal", course:"Fisheries", level:"400", phone:"08030495902",
      img:"https://ui-avatars.com/api/?name=Hafiz+Auwal&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Fisheries · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Fisheries at 400 Level. Academic Session: 2025/2026." },
    { id:14, name:"Amina Abdlqadir Ruwah", course:"Fisheries", level:"400", phone:"08107338972",
      img:"https://ui-avatars.com/api/?name=Amina+Abdlqadir+Ruwah&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Fisheries · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Fisheries at 400 Level. Academic Session: 2025/2026." },
    { id:15, name:"Habibu Garba", course:"Pure Chemistry", level:"400", phone:"08134133203",
      img:"https://ui-avatars.com/api/?name=Habibu+Garba&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Pure Chemistry · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Pure Chemistry at 400 Level. Academic Session: 2025/2026." },
    { id:16, name:"Abubakar Danladi", course:"PED", level:"400", phone:"09039215557",
      img:"https://ui-avatars.com/api/?name=Abubakar+Danladi&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Physical & Health Education · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Physical Education (PED) at 400 Level. Academic Session: 2025/2026." },
    { id:17, name:"Maryam Muhammad", course:"Nutrition", level:"400", phone:"09160746263",
      img:"https://ui-avatars.com/api/?name=Maryam+Muhammad&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Nutrition & Dietetics · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Nutrition at 400 Level. Academic Session: 2025/2026." },
    { id:18, name:"Usman Aliyu", course:"Nursing", level:"400", phone:"09041303074",
      img:"https://ui-avatars.com/api/?name=Usman+Aliyu&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Nursing · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Nursing at 400 Level. Academic Session: 2025/2026." },
    { id:19, name:"Huzaif Abdulqadir", course:"Physiotherapy", level:"400", phone:"N/A",
      img:"https://ui-avatars.com/api/?name=Huzaif+Abdulqadir&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Physiotherapy · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Physiotherapy at 400 Level. Academic Session: 2025/2026." },
    { id:20, name:"Abdulrahman Abubakar", course:"Applied Chemistry", level:"400", phone:"08068575161",
      img:"https://ui-avatars.com/api/?name=Abdulrahman+Abubakar&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Applied Chemistry · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Applied Chemistry at 400 Level. Academic Session: 2025/2026." },
    { id:21, name:"Salamatu Usman", course:"Edu Chemistry", level:"400", phone:"07067882254",
      img:"https://ui-avatars.com/api/?name=Salamatu+Usman&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Education Chemistry · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Education Chemistry at 400 Level. Academic Session: 2025/2026." },
    { id:22, name:"Yahaya Isa", course:"DVM", level:"400", phone:"08103630651",
      img:"https://ui-avatars.com/api/?name=Yahaya+Isa&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Veterinary Medicine · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Doctor of Veterinary Medicine (DVM) at 400 Level. Academic Session: 2025/2026." },
    { id:23, name:"Imrana Ardo Abubakar", course:"Computer Science", level:"400", phone:"09032629420",
      img:"https://ui-avatars.com/api/?name=Imrana+Ardo+Abubakar&background=0a2e2b&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Computer Science · 400 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Computer Science at 400 Level. Academic Session: 2025/2026." },
    { id:24, name:"Mubarak Abdullahi", course:"Linguistics", level:"300", phone:"08036285343",
      img:"https://ui-avatars.com/api/?name=Mubarak+Abdullahi&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Linguistics · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Linguistics at 300 Level. Academic Session: 2025/2026." },
    { id:25, name:"Uzairu Nasiru", course:"Political Science", level:"300", phone:"07062777275",
      img:"https://ui-avatars.com/api/?name=Uzairu+Nasiru&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Political Science · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Political Science at 300 Level. Academic Session: 2025/2026." },
    { id:26, name:"Sudais Ahmad", course:"Physiotherapy", level:"300", phone:"09038953714",
      img:"https://ui-avatars.com/api/?name=Sudais+Ahmad&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Physiotherapy · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Physiotherapy at 300 Level. Academic Session: 2025/2026." },
    { id:27, name:"Auwal Sharif", course:"Radiography", level:"300", phone:"07060713262",
      img:"https://ui-avatars.com/api/?name=Auwal+Sharif&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Radiography · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Radiography at 300 Level. Academic Session: 2025/2026." },
    { id:28, name:"Saminu Murtala Tangaza", course:"Computer Science", level:"300", phone:"09066654171",
      img:"https://ui-avatars.com/api/?name=Saminu+Murtala+Tangaza&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Computer Science · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Computer Science at 300 Level. Academic Session: 2025/2026." },
    { id:29, name:"Aliyu Ahmad", course:"Computer Science", level:"300", phone:"07034326656",
      img:"https://ui-avatars.com/api/?name=Aliyu+Ahmad&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Computer Science · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Computer Science at 300 Level. Academic Session: 2025/2026." },
    { id:30, name:"Nabila Abdullahi", course:"MBBS", level:"300", phone:"08108719139",
      img:"https://ui-avatars.com/api/?name=Nabila+Abdullahi&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Medicine & Surgery · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying MBBS at 300 Level. Academic Session: 2025/2026." },
    { id:31, name:"Ikrama Abdullahi", course:"DVM", level:"300", phone:"07048245192",
      img:"https://ui-avatars.com/api/?name=Ikrama+Abdullahi&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Veterinary Medicine · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Doctor of Veterinary Medicine (DVM) at 300 Level. Academic Session: 2025/2026." },
    { id:32, name:"Ahmad Aminu Gidado", course:"MLS", level:"300", phone:"09033298066",
      img:"https://ui-avatars.com/api/?name=Ahmad+Aminu+Gidado&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Medical Lab Science · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Medical Laboratory Science (MLS) at 300 Level. Academic Session: 2025/2026." },
    { id:33, name:"Umar Saifullahi Muhammad", course:"MBBS", level:"300", phone:"09063739003",
      img:"https://ui-avatars.com/api/?name=Umar+Saifullahi+Muhammad&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Medicine & Surgery · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying MBBS at 300 Level. Academic Session: 2025/2026." },
    { id:34, name:"Sumayya Muhammad", course:"Edu Biology", level:"300", phone:"08148643201",
      img:"https://ui-avatars.com/api/?name=Sumayya+Muhammad&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Education Biology · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Education Biology at 300 Level. Academic Session: 2025/2026." },
    { id:35, name:"Kasim Abdulmalik Usman", course:"Political Science", level:"300", phone:"07034251468",
      img:"https://ui-avatars.com/api/?name=Kasim+Abdulmalik+Usman&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Political Science · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Political Science at 300 Level. Academic Session: 2025/2026." },
    { id:36, name:"Sahabi Muhammad", course:"Economics", level:"300", phone:"08064919454",
      img:"https://ui-avatars.com/api/?name=Sahabi+Muhammad&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Economics · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Economics at 300 Level. Academic Session: 2025/2026." },
    { id:37, name:"Ibrahim Mohammad Marafa", course:"Computer Science", level:"300", phone:"N/A",
      img:"https://ui-avatars.com/api/?name=Ibrahim+Mohammad+Marafa&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Computer Science · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Computer Science at 300 Level. Academic Session: 2025/2026." },
    { id:38, name:"Salim Abubakar", course:"Edu Computer", level:"300", phone:"08143005494",
      img:"https://ui-avatars.com/api/?name=Salim+Abubakar&background=0f2352&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Education Computer · 300 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Education Computer at 300 Level. Academic Session: 2025/2026." },
    { id:39, name:"Bashar Aliyu", course:"Statistics", level:"200", phone:"08136341768",
      img:"https://ui-avatars.com/api/?name=Bashar+Aliyu&background=3b1a06&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Statistics · 200 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Statistics at 200 Level. Academic Session: 2025/2026." },
    { id:40, name:"Zainab Muhammad Abubakar", course:"Microbiology", level:"200", phone:"09039912009",
      img:"https://ui-avatars.com/api/?name=Zainab+Muhammad+Abubakar&background=3b1a06&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Microbiology · 200 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Microbiology at 200 Level. Academic Session: 2025/2026." },
    { id:41, name:"Usman Yushau Kasim", course:"Business Administration", level:"200", phone:"08168553418",
      img:"https://ui-avatars.com/api/?name=Usman+Yushau+Kasim&background=3b1a06&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Business Administration · 200 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Business Administration at 200 Level. Academic Session: 2025/2026." },
    { id:42, name:"Umar Zainab Nafisat", course:"MLS", level:"200", phone:"08140864550",
      img:"https://ui-avatars.com/api/?name=Umar+Zainab+Nafisat&background=3b1a06&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Medical Lab Science · 200 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Medical Laboratory Science (MLS) at 200 Level. Academic Session: 2025/2026." },
    { id:43, name:"Adamu Sanusi", course:"ICT", level:"200", phone:"08109336425",
      img:"https://ui-avatars.com/api/?name=Adamu+Sanusi&background=3b1a06&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Information & Comm. Technology · 200 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying ICT at 200 Level. Academic Session: 2025/2026." },
    { id:44, name:"Abdul'aziz Mukhtar", course:"Forestry", level:"200", phone:"09162363565",
      img:"https://ui-avatars.com/api/?name=Abdul%27aziz+Mukhtar&background=3b1a06&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Forestry · 200 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Forestry at 200 Level. Academic Session: 2025/2026." },
    { id:45, name:"Zabura Nuhu", course:"Computer Science", level:"200", phone:"08036698980",
      img:"https://ui-avatars.com/api/?name=Zabura+Nuhu&background=3b1a06&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Computer Science · 200 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Computer Science at 200 Level. Academic Session: 2025/2026." },
    { id:46, name:"Sulaiman Usman", course:"MBBS", level:"200", phone:"09137981510",
      img:"https://ui-avatars.com/api/?name=Sulaiman+Usman&background=3b1a06&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Medicine & Surgery · 200 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying MBBS at 200 Level. Academic Session: 2025/2026." },
    { id:47, name:"Sa'ad Auwal", course:"Software Engineering", level:"200", phone:"09038666754",
      img:"https://ui-avatars.com/api/?name=Sa%27ad+Auwal&background=3b1a06&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Software Engineering · 200 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Software Engineering at 200 Level. Academic Session: 2025/2026." },
    { id:48, name:"Marwan Umar G-madi", course:"Software Engineering", level:"200", phone:"09167088689",
      img:"https://ui-avatars.com/api/?name=Marwan+Umar+G-madi&background=3b1a06&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Software Engineering · 200 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Software Engineering at 200 Level. Academic Session: 2025/2026." },
    { id:49, name:"Yusuf Aliyu", course:"Guidance & Counselling", level:"200", phone:"07060433578",
      img:"https://ui-avatars.com/api/?name=Yusuf+Aliyu&background=3b1a06&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Guidance & Counselling · 200 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Guidance & Counselling at 200 Level. Academic Session: 2025/2026." },
    { id:50, name:"Sani Yahayya", course:"Library & Information Science", level:"200", phone:"08139017141",
      img:"https://ui-avatars.com/api/?name=Sani+Yahayya&background=3b1a06&color=CBA258&size=400&bold=true&font-size=0.35",
      bio:"Library & Information Science · 200 Level", fullBio:"Member of Tangaza Local Government Students' Union at Usmanu Danfodiyo University Sokoto. Studying Library & Information Science at 200 Level. Academic Session: 2025/2026." }
  ];

  const levelColors = {
    '500': { bg:'#2d1a5e', badge:'level-badge-500', chipCls:'cc-lvl-chip-500' },
    '400': { bg:'#0a2e2b', badge:'level-badge-400', chipCls:'cc-lvl-chip-400' },
    '300': { bg:'#0f2352', badge:'level-badge-300', chipCls:'cc-lvl-chip-300' },
    '200': { bg:'#3b1a06', badge:'level-badge-200', chipCls:'cc-lvl-chip-200' }
  };

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
        m.course.toLowerCase().includes(searchQuery);
      return matchFilter && matchSearch;
    });
    resultsCount.textContent = filtered.length;
    resultsLabel.textContent = 'members';
    membersGrid.className = 'members-grid';
    membersGrid.innerHTML = '';

    if (!filtered.length) {
      membersGrid.innerHTML = `<div class="no-results"><h3>No results found</h3><p>Try a different name or course.</p></div>`;
      return;
    }
    filtered.forEach((m, i) => {
      const lc = levelColors[m.level];
      const card = document.createElement('div');
      card.className = 'member-card';
      card.dataset.level = m.level;
      card.style.animationDelay = `${i * 0.05}s`;
      const imgUrl = m.img || `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=${lc.bg.replace('#','')}&color=CBA258&size=200&bold=true&font-size=0.35`;
      card.innerHTML = `
        <div class="card-accent"></div>
        <div class="card-inner-row">
          <div class="card-img-area">
            <div class="skeleton-shimmer"></div>
            <img class="member-img" src="${imgUrl}" alt="${m.name}" loading="lazy">
          </div>
          <div class="card-text-area">
            <div class="member-name">${m.name}</div>
            <div class="member-role">${m.course}</div>
            <div class="level-badge ${lc.badge}">${m.level} Level</div>
            <div class="preview-bio">${m.bio}</div>
          </div>
        </div>
        <div class="expand-trigger">
          <span>View Profile</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CBA258" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </div>`;
      const img = card.querySelector('.member-img');
      img.addEventListener('load', () => img.classList.add('loaded'));
      if (img.complete) img.classList.add('loaded');
      card.addEventListener('click', () => openModal(m));
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
      card.style.animationDelay = `${i * 0.04}s`;
      const levelsHtml = [...data.levels].sort().map(lv =>
        `<span class="cc-lvl-chip ${levelColors[lv].chipCls}">${lv}L</span>`).join('');
      card.innerHTML = `
        <div class="cc-name">${course}</div>
        <div class="cc-count">${data.members.length}</div>
        <div class="cc-count-label">member${data.members.length > 1 ? 's' : ''}</div>
        <div class="cc-levels">${levelsHtml}</div>
        <div class="cc-tap-hint">↗ Tap to see members</div>`;
      card.addEventListener('click', () => {
        switchToMembers();
        searchInput.value = course;
        searchQuery = course.toLowerCase();
        activeFilter = 'all';
        filterBtns.forEach(b => b.classList.remove('active'));
        document.querySelector('[data-filter="all"]').classList.add('active');
        renderCards();
      });
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
    const imgUrl = m.img || `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=${lc.bg.replace('#','')}&color=CBA258&size=400&bold=true&font-size=0.35`;
    const phoneLink = m.phone !== 'N/A' ? `<a href="tel:${m.phone}">${m.phone}</a>` : 'Not available';
    modalContent.innerHTML = `
      <div class="modal-drag-handle"></div>
      <img class="modal-img-full" src="${imgUrl}" alt="${m.name}">
      <div class="modal-body">
        <div>
          <span class="modal-course-badge">${m.course}</span>
          <span class="modal-level-badge ${lc.badge}">${m.level} Level</span>
        </div>
        <div class="modal-name">${m.name}</div>
        <p class="modal-bio">${m.fullBio}</p>
        <div class="contact-panel">
          <div class="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CBA258" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .99h3a2 2 0 012 1.72c.13 1 .36 1.98.7 2.93a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.95.34 1.93.57 2.93.7A2 2 0 0122 16.92z"/></svg>
            ${phoneLink}
          </div>
          <div class="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CBA258" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
            UDUS · Tangaza LGA · 2025/2026
          </div>
          <div class="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CBA258" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            S/N #${m.id} on Official Register
          </div>
        </div>
        <div class="modal-close-row">
          <button class="close-modal-btn" id="closeModalBtn">✕</button>
        </div>
      </div>`;
    detailModal.classList.add('active');
    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
  }
  function closeModal() { detailModal.classList.remove('active'); }
  detailModal.addEventListener('click', e => { if (e.target === detailModal) closeModal(); });

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
