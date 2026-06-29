/* =====================================================
   NAJAH MADANI — MAIN.JS
   Theme toggle · Cursor · Navigation · Magnetic · Tilt
   ===================================================== */

(() => {
  // ---------- 1. LOADER ----------
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
      setTimeout(() => loader.classList.add('is-gone'), 700);
    }
  });

  // ---------- 2. THEME TOGGLE ----------
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const STORAGE_KEY = 'najah_theme';

  // Apply saved theme on load
  const savedTheme = localStorage.getItem(STORAGE_KEY) || 'light';
  root.setAttribute('data-theme', savedTheme);

  themeToggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);

    // Smooth color transition flash
    root.style.transition = 'background 0.6s var(--ease), color 0.6s var(--ease)';
  });

  // ---------- 3. CUSTOM CURSOR ----------
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  let cursorX = 0, cursorY = 0;
  let ringX = 0, ringY = 0;

  if (cursorDot && cursorRing && window.matchMedia('(min-width: 761px)').matches) {
    document.addEventListener('mousemove', (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      cursorDot.style.left = cursorX + 'px';
      cursorDot.style.top = cursorY + 'px';
    });

    function animateRing() {
      ringX += (cursorX - ringX) * 0.16;
      ringY += (cursorY - ringY) * 0.16;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover state on interactive elements
    const hoverSelectors = 'a, button, .project-card, .contact-card, .skill-card, .about-card, .btn, [data-magnetic], [data-tilt]';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverSelectors)) {
        cursorDot.classList.add('is-hover');
        cursorRing.classList.add('is-hover');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverSelectors)) {
        cursorDot.classList.remove('is-hover');
        cursorRing.classList.remove('is-hover');
      }
    });
  } else {
    cursorDot?.remove();
    cursorRing?.remove();
  }

  // ---------- 4. NAV SCROLL STATE & BACK TO TOP ----------
  const nav = document.getElementById('nav');
  const toTop = document.getElementById('toTop');
  let lastY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 80);
    toTop.classList.toggle('is-visible', y > 600);
    lastY = y;
  });

  toTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---------- 5. MOBILE MENU ----------
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn?.addEventListener('click', () => {
    menuBtn.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
  });

  // Close mobile menu when a link is clicked
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuBtn.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
    });
  });

  // ---------- 6. MAGNETIC BUTTONS ----------
  const magneticStrength = 0.32;
  document.querySelectorAll('[data-magnetic]').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * magneticStrength}px, ${y * magneticStrength}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  // ---------- 7. 3D TILT CARD ----------
  document.querySelectorAll('[data-tilt]').forEach(el => {
    const inner = el.querySelector('.tilt-card-inner') || el;
    let flipped = false;
    el.addEventListener('mousemove', (e) => {
      if (flipped) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - y) * 18;
      const ry = (x - 0.5) * 18;
      inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    el.addEventListener('mouseleave', () => {
      if (flipped) return;
      inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
    el.addEventListener('click', () => {
      flipped = !flipped;
      el.classList.toggle('is-flipped', flipped);
    });
  });

  // ---------- 8. SMOOTH SCROLL FOR NAV LINKS ----------
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#' || href.length <= 1) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = nav.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ---------- 9. PROJECT CARD CLICK → SCROLL TO DETAIL ----------
  const projectsRail = document.getElementById('projectsRail');
  projectsRail?.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (!card) return;
    const id = card.dataset.project;
    const detail = document.getElementById('pdetail-' + id);
    if (detail) {
      const offset = nav.offsetHeight;
      const top = detail.getBoundingClientRect().top + window.scrollY - offset - 20;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });

  // Add hover lift on cards (handled by CSS but we add for parallax)
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-10px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ---------- 10. COUNTER ANIMATION FOR HERO META ----------
  const counters = document.querySelectorAll('[data-count]');
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        let cur = 0;
        const step = Math.max(1, Math.ceil(target / 30));
        const tick = () => {
          cur += step;
          if (cur >= target) { el.textContent = target; return; }
          el.textContent = cur;
          requestAnimationFrame(tick);
        };
        tick();
        counterObs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));

  // ---------- 11. KEYBOARD SHORTCUT FOR THEME ----------
  window.addEventListener('keydown', (e) => {
    if (e.key === 't' && !e.target.matches('input, textarea')) {
      themeToggle?.click();
    }
  });

  // ---------- 12. PARALLAX HERO ON MOUSE MOVE ----------
  const heroContent = document.querySelector('.hero-content');
  const hero3d = document.querySelector('.hero-3d-scene');
  if (heroContent && hero3d && window.matchMedia('(min-width: 980px)').matches) {
    document.querySelector('.hero')?.addEventListener('mousemove', (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroContent.style.transform = `translate(${x * -10}px, ${y * -10}px)`;
      hero3d.style.transform = `translate(${x * 18}px, ${y * 18}px)`;
    });
    document.querySelector('.hero')?.addEventListener('mouseleave', () => {
      heroContent.style.transform = '';
      hero3d.style.transform = '';
    });
  }
})();
