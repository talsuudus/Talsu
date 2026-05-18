/* ── CURTAIN ──────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const curtain = document.getElementById('curtain');
    if (curtain) {
      curtain.style.transition = 'opacity 0.6s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)';
      curtain.style.opacity    = '0';
      curtain.style.transform  = 'scaleY(0)';
      curtain.style.transformOrigin = 'top';
      setTimeout(() => curtain.remove(), 700);
    }
    const navbar = document.getElementById('navbar');
    if (navbar) setTimeout(() => navbar.classList.add('show'), 300);
  }, 1600);
});

/* ── NAVBAR SCROLL ─────────────────────────────────── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav && window.scrollY > 60) nav.classList.add('scrolled');
  else if (nav) nav.classList.remove('scrolled');
});

/* ── SLIDE PANEL ──────────────────────────────────── */
const panel   = document.getElementById('panel');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

function openMenu() {
  if (panel && overlay) {
    panel.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}
function closeMenu() {
  if (panel && overlay) {
    panel.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }
}

if (openBtn) openBtn.addEventListener('click', openMenu);
if (closeBtn) closeBtn.addEventListener('click', closeMenu);
if (overlay) overlay.addEventListener('click', closeMenu);

/* Menu items — active highlight then navigate */
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    setTimeout(closeMenu, 160);
  });
});

/* ── BOTTOM NAV — active state ────────────────────── */
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ── SCROLL REVEAL ─────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('vis');
      revealObserver.unobserve(en.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));

const wObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('vis');
      wObs.unobserve(en.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.welcome-left, .welcome-right').forEach(el => wObs.observe(el));

const cardObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      setTimeout(() => en.target.classList.add('vis'), 0);
      cardObs.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.scroll-card').forEach(el => cardObs.observe(el));

const pillarObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('vis');
      pillarObs.unobserve(en.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.scroll-pillar').forEach(el => pillarObs.observe(el));

/* ── PARTICLE CANVAS ───────────────────────────────── */
(function() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx    = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 10;
      this.r = Math.random() * 1.2 + 0.3;
      this.speed   = Math.random() * 0.4 + 0.1;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.drift   = (Math.random() - 0.5) * 0.3;
    }
    update() {
      this.y -= this.speed;
      this.x += this.drift;
      if (this.y < -10) this.reset(false);
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,149,58,${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 70; i++) particles.push(new Particle());
  function loop() {
    if (!ctx) return;
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ── HERO PARALLAX ─────────────────────────────────── */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector('.hero-content');
  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.22}px)`;
    hero.style.opacity   = 1 - scrolled / (window.innerHeight * 0.75);
  } else if (hero && scrolled >= window.innerHeight) {
    hero.style.transform = '';
    hero.style.opacity = '';
  }
});
