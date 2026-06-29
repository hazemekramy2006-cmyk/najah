/* =====================================================
   NAJAH MADANI — ANIMATIONS.JS
   GSAP · ScrollTrigger · 3D scrolling · Luxury reveals
   ===================================================== */

(() => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP / ScrollTrigger not loaded — falling back to IntersectionObserver');
    fallbackReveal();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // ---------- 1. PRE-INIT ----------
  // Reveal helper sets initial state
  gsap.set('.reveal', { opacity: 0, y: 60 });
  gsap.set('.reveal-3d', { opacity: 0, y: 60, rotateX: 15, transformPerspective: 800 });

  // ---------- 2. HERO INTRO ----------
  const heroTl = gsap.timeline({ delay: 0.8 });

  heroTl
    .from('.hero-badge', { opacity: 0, y: 30, duration: 0.9, ease: 'power3.out' })
    .from('.hero-title .title-text', {
      opacity: 0,
      y: 80,
      rotateX: -25,
      stagger: 0.1,
      duration: 1.1,
      ease: 'expo.out'
    }, '-=0.5')
    .from('.hero-sub', { opacity: 0, y: 30, duration: 0.9, ease: 'power3.out' }, '-=0.6')
    .from('.hero-actions', { opacity: 0, y: 30, duration: 0.9, ease: 'power3.out' }, '-=0.7')
    .from('.hero-meta .meta-item', {
      opacity: 0,
      y: 30,
      stagger: 0.08,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.7')
    .from('.hero-3d-scene', {
      opacity: 0,
      x: 100,
      rotateY: -25,
      transformPerspective: 800,
      duration: 1.4,
      ease: 'expo.out'
    }, '-=1.2');

  // Floating 3D card
  gsap.to('.tilt-card-inner', {
    y: -16,
    duration: 4,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
  });

  // ---------- 3. SECTIONS · scroll-driven 3D reveal ----------
  const revealElems = gsap.utils.toArray('.reveal');
  revealElems.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
        toggleActions: 'play none none none'
      }
    });
  });

  const reveal3dElems = gsap.utils.toArray('.reveal-3d');
  reveal3dElems.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 1.4,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true,
        toggleActions: 'play none none none'
      }
    });
  });

  // ---------- 4. ABOUT · STAGGER ----------
  gsap.utils.toArray('.about-card').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      rotateX: -10,
      transformPerspective: 800,
      duration: 0.9,
      delay: i * 0.04,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
        once: true,
        toggleActions: 'play none none none'
      }
    });
  });

  // ---------- 5. PROJECT CARDS · parallax + 3D ----------
  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 80,
      rotateY: -10,
      transformPerspective: 800,
      duration: 1.0,
      delay: (i % 6) * 0.05,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // ---------- 6. PARALLAX HERO BG ----------
  gsap.to('.hero-grid-bg', {
    y: 80,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  gsap.to('.hero-3d-scene', {
    y: 40,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // ---------- 7. SECTION PARALLAX for section-head ----------
  gsap.utils.toArray('.section-head').forEach(head => {
    gsap.from(head, {
      opacity: 0,
      y: 50,
      duration: 1.1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: head,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // ---------- 8. DETAIL SECTIONS ----------
  gsap.utils.toArray('.pdetail').forEach((detail, i) => {
    const head = detail.querySelector('.pd-head');
    const cols = detail.querySelectorAll('.pd-col');
    const stats = detail.querySelectorAll('.pd-stat');
    const ui = detail.querySelector('.pd-ui');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: detail,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });

    if (head) tl.from(head.children, { opacity: 0, y: 40, stagger: 0.1, duration: 0.9, ease: 'power3.out' });
    if (cols.length) tl.from(cols, { opacity: 0, y: 50, stagger: 0.1, duration: 0.9, ease: 'power3.out' }, '-=0.6');
    if (stats.length) tl.from(stats, { opacity: 0, scale: 0.7, stagger: 0.06, duration: 0.7, ease: 'back.out(1.6)' }, '-=0.5');
    if (ui) tl.from(ui, { opacity: 0, y: 60, rotateX: 8, transformPerspective: 800, duration: 1.1, ease: 'expo.out' }, '-=0.5');
  });

  // ---------- 9. UI MOCKUP-SPECIFIC ANIMATIONS ----------

  // Project 1: Gantt bars animation on scroll
  gsap.utils.toArray('.gantt-bar').forEach(bar => {
    gsap.from(bar, {
      scaleX: 0,
      transformOrigin: 'left',
      duration: 1.2,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: bar,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Project 2: VUI messages typewriter-like stagger
  gsap.utils.toArray('.vui-msg').forEach((msg, i) => {
    gsap.from(msg, {
      opacity: 0,
      x: -30,
      duration: 0.6,
      delay: i * 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: msg,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Project 8: Menu items pop-in
  gsap.utils.toArray('.menu-item').forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      scale: 0.7,
      y: 20,
      duration: 0.6,
      delay: i * 0.06,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: item,
        start: 'top 92%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Project 10: Personas flip-in
  gsap.utils.toArray('.persona').forEach((p, i) => {
    gsap.from(p, {
      opacity: 0,
      rotateY: -25,
      duration: 0.9,
      delay: i * 0.1,
      transformPerspective: 800,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: p,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Project 10: Journey steps fade
  gsap.utils.toArray('.j-step').forEach((s, i) => {
    gsap.from(s, {
      opacity: 0,
      x: -30,
      duration: 0.7,
      delay: i * 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: s,
        start: 'top 92%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Project 11: Layaqah cards lift
  gsap.utils.toArray('.lay-card').forEach((c, i) => {
    gsap.from(c, {
      opacity: 0,
      y: 60,
      rotateX: -10,
      transformPerspective: 800,
      duration: 1.0,
      delay: i * 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: c,
        start: 'top 88%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Project 12: Hajj phone tilt-in
  gsap.utils.toArray('.mobile-frame, .wrist-wrap').forEach((p, i) => {
    gsap.from(p, {
      opacity: 0,
      y: 60,
      rotateX: 10,
      transformPerspective: 800,
      duration: 0.9,
      delay: i * 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: p,
        start: 'top 92%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // ---------- 10. SVG-cursor smooth follow (already done in main.js) ----------

  // ---------- 11. STATS COUNTER ----------
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.fromTo(el,
          { textContent: 0 },
          {
            textContent: target,
            duration: 1.6,
            ease: 'power2.out',
            snap: { textContent: 1 },
            onUpdate: function() {
              el.textContent = Math.floor(parseFloat(el.textContent));
            }
          }
        );
      }
    });
  });

  // ---------- 12. CONTACT CARDS ----------
  gsap.utils.toArray('.contact-card').forEach((c, i) => {
    gsap.from(c, {
      opacity: 0,
      y: 40,
      scale: 0.9,
      duration: 0.7,
      delay: i * 0.06,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: c,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Refresh after layout settles
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });

  // ---------- FALLBACK ----------
  function fallbackReveal() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal, .reveal-3d').forEach(el => io.observe(el));
  }
})();
