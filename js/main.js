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

  // ---------- 2.5. LANGUAGE TOGGLE ----------
  const langToggle = document.getElementById('langToggle');
  const LANGUAGE_KEY = 'najah_lang';

  const translations = {
    en: {
      title: 'Najah Rami Madani — HCI & Software Engineering Portfolio',
      ariaLangToggle: 'Toggle language',
      ariaThemeToggle: 'Toggle theme',
      textMap: {}
    },
    ar: {
      title: 'Najah Rami Madani — محفظة HCI وهندسة البرمجيات',
      ariaLangToggle: 'تبديل اللغة',
      ariaThemeToggle: 'تبديل النمط',
      textMap: {
        'Loading Portfolio': 'جارٍ تحميل المحفظة',
        'N': 'N',
        'Najah Madani': 'Najah Madani',
        'About': 'من أنا',
        'Skills': 'المهارات',
        'Projects': 'المشاريع',
        'Contact': 'تواصل',
        'HCI · Software Engineering · UX Research': 'التفاعل بين الإنسان والحاسوب · هندسة البرمجيات · أبحاث تجربة المستخدم',
        'Scroll': 'التمرير',
        'HCI Engineer in Training': 'مهندسة HCI متدربة',
        'Makkah · KSA': 'مكة · السعودية',
        '"Design that respects cognitive limits wins."': 'التصميم الذي يحترم حدود الإدراك يفوز.',
        'Career Objective': 'الهدف الوظيفي',
        'A student majoring in Human-Computer Interaction – Software Engineering at Umm Al-Qura University, seeking seasonal work opportunities during Hajj season to serve the Guests of Allah by using communication, organization, and teamwork skills, and to provide support to pilgrims to ensure a smooth and comfortable experience during their pilgrimage.': 'طالبة في التفاعل بين الإنسان والحاسوب — هندسة البرمجيات في جامعة أم القرى، تبحث عن فرص عمل موسمية خلال موسم الحج لخدمة ضيوف الله باستخدام مهارات الاتصال والتنظيم والعمل الجماعي، وتقديم الدعم للحجاج لضمان تجربة سلسة ومريحة أثناء الحج.',
        'Education': 'التعليم',
        'Umm Al-Qura University — Makkah / Jadaa': 'جامعة أم القرى — مكة / جدة',
        "Bachelor's Degree in Software Engineering — Human-Computer Interaction.": 'بكالوريوس هندسة برمجيات — التفاعل بين الإنسان والحاسوب.',
        'Expected Graduation: 2026': 'التخرج المتوقع: 2026',
        'Work Experience': 'الخبرة العملية',
        'Customer Service Representative — Hajj 1446H': 'ممثلة خدمة عملاء — حج 1446هـ',
        'Welcoming pilgrims, answering inquiries, providing service info.': 'استقبال الحجاج، الرد على الاستفسارات، تقديم معلومات الخدمة.',
        'Guiding pilgrims, organizing entry/exit at service points.': 'إرشاد الحجاج، تنظيم الدخول والخروج في نقاط الخدمة.',
        'Handling complaints and coordinating with specialized teams.': 'التعامل مع الشكاوى والتنسيق مع الفرق المتخصصة.',
        'Supporting pilgrims of different nationalities.': 'دعم الحجاج من جنسيات مختلفة.',
        'Hajj Season 1445H': 'موسم الحج 1445هـ',
        'Organizing pilgrim movement within service locations.': 'تنظيم حركة الحجاج داخل مواقع الخدمة.',
        'Supporting field teams in daily Hajj operations.': 'دعم الفرق الميدانية في عمليات الحج اليومية.',
        'Assisting pilgrims reach assigned locations and services.': 'مساعدة الحجاج في الوصول إلى المواقع والخدمات المخصصة.',
        'Languages': 'اللغات',
        'Arabic': 'العربية',
        'Fluent': 'طليقة',
        'English': 'الإنجليزية',
        'Good': 'جيدة',
        'Good at two languages': 'جيدة في لغتين',
        'Makkah Al-Mukarramah - Jadaa, KSA': 'مكة المكرمة - جدة، السعودية',
        'Customer Service & Communication': 'خدمة العملاء والتواصل',
        'Hands-on experience serving thousands of Hajj pilgrims.': 'خبرة عملية في خدمة آلاف الحجاج.',
        'Teamwork & Collaboration': 'العمل الجماعي والتعاون',
        'Co-authored 12+ team projects across UX, SRS, IA, VUI and full-stack.': 'شاركت في كتابة أكثر من 12 مشروعاً فريقياً عبر UX وSRS وIA وVUI والتطوير المتكامل.',
        'Organization & Time Management': 'التنظيم وإدارة الوقت',
        'From WBS to Gantt — I structure work into shippable milestones.': 'من WBS إلى جانت — أُبَيِّت العمل إلى مراحل قابلة للتسليم.',
        'Problem Solving': 'حل المشكلات',
        'Calm under pressure — proven across two Hajj seasons and rapid UX studies.': 'هادئ تحت الضغط — مثبت خلال موسمي حج ودراسات UX السريعة.',
        'UX Research': 'بحث تجربة المستخدم',
        'Surveys, contextual inquiry, persona dev, journey maps, content testing.': 'استبيانات، استعلام سياقي، تطوير شخصيات المستخدم، خرائط الرحلة، اختبار المحتوى.',
        'UI / Wireframing': 'تصميم واجهات/الأسلاك',
        'Low-fi to high-fi in Figma. Heuristic & accessibility-aware design.': 'من اللافي إلى العالي الوضوح في فيجما. تصميم وفقاً للملاحظات وقابلية الوصول.',
        'Information Architecture': 'هندسة المعلومات',
        'Sitemaps, navigation structures, organization schemes, content inventory.': 'خرائط الموقع، هياكل التنقل، مخططات التنظيم، جرد المحتوى.',
        'Voice UI': 'واجهة صوتية',
        'Dialogue flows, error handling, multimodal interaction, accessibility scenarios.': 'تدفقات الحوار، إدارة الأخطاء، التفاعل متعدد الوسائط، سيناريوهات إمكانية الوصول.',
        'Software Engineering': 'هندسة البرمجيات',
        'Vue 3, Node.js, Express, MongoDB Atlas, Mongoose, full-stack CRUD.': 'Vue 3، Node.js، Express، MongoDB Atlas، Mongoose، CRUD متكامل.',
        'SRS / Requirements': 'SRS / المتطلبات',
        'Stakeholder analysis, use cases, NFRs, functional specs, traceability.': 'تحليل أصحاب المصلحة، حالات الاستخدام، المتطلبات غير الوظيفية، المواصفات الوظيفية، التتبع.',
        'Accessibility (a11y)': 'إمكانية الوصول (a11y)',
        'WCAG-aware design, screen-reader flows, inclusive interaction patterns.': 'تصميم متوافق مع WCAG، تدفقات لقارئ الشاشة، أنماط تفاعل شاملة.',
        'Microsoft Office': 'ميكروسوفت أوفيس',
        'Reports, project docs, presentations, academic deliverables.': 'تقارير، مستندات المشاريع، عروض تقديمية، مخرجات أكاديمية.',
        'Twelve projects.': 'اثنا عشر مشروعاً.',
        'One journey through HCI.': 'رحلة واحدة في HCI.',
        'Each project below came from a real university course or research brief. Where a UI was part of the deliverable, you\'ll find an interactive, in-page prototype — not a static screenshot.': 'كل مشروع أدناه جاء من مقرَّر جامعي حقيقي أو مُلخَّص بحثي. عندما كان جزء من المُخرَج واجهة مستخدم، ستجد نموذجًا تفاعليًا داخل الصفحة — وليس لقطة شاشة ثابتة.',
        'Project Plan · WBS · Gantt': 'خطة المشروع · WBS · جانت',
        'The Ingredients App — Project Plan': 'تطبيق المكونات — خطة المشروع',
        'Mobile app that recommends recipes based on ingredients you have at home.': 'تطبيق جوال يوصي بوصفات بناءً على المكونات المتوفرة لديك في المنزل.',
        'Requirements': 'المتطلبات',
        'WBS': 'WBS',
        'Gantt': 'جانت',
        '990 SAR / 5 months': '990 ريال / 5 أشهر',
        'Voice UI Design': 'تصميم واجهة صوتية',
        'VUI — Barn\'s Coffee Drive-Thru Assistant': 'واجهة صوتية — مساعد بارنز كوفي للدفع',
        'Voice assistant that takes & confirms orders with explicit + implicit modes.': 'مساعد صوتي يأخذ ويؤكد الطلبات بأنماط صريحة + ضمنية.',
        'Dialogue flows': 'تدفقات الحوار',
        'Persona: BarnBot': 'شخصية: بارن بوت',
        'Multimodal': 'متعدد الوسائط',
        'The Ingredients Website — UX Research': 'موقع المكونات — بحث تجربة المستخدم',
        'Survey, personas, lo-fi / mid-fi / hi-fi, user flow & usability testing.': 'استبيان، شخصيات، لوفاي / ميدفاي / هاي فاي، تدفق المستخدم واختبار القابلية للاستخدام.',
        'Survey': 'استبيان',
        'Wireframes': 'إطارات سلكية',
        'User Flow': 'تدفق المستخدم',
        'Usability': 'قابلية الاستخدام',
        'User Research': 'بحث المستخدم',
        'Optimizing STC App Interface': 'تحسين واجهة تطبيق STC',
        'HCI research into STC app — colors, offers placement & recharging flow.': 'بحث HCI لتطبيق STC — الألوان، موضع العروض وتدفق الشحن.',
        '6 participants': '6 مشاركين',
        'Content testing': 'اختبار المحتوى',
        'Heuristics': 'الإرشادات',
        'Heuristic Evaluation': 'تقييم إرشادي',
        'Usability Evaluation — Ehsan & Tabaru': 'تقييم قابلية الاستخدام — إحسان وتبرع',
        'Nielsen\'s 10-heuristic evaluation of two Saudi charity platforms.': 'تقييم نيلسن لعشرة إرشادات لمنصتين خيريتين سعوديتين.',
        'Nielsen\'s 10': '10 نيلسن',
        'Severity ratings': 'تصنيفات الشدة',
        'Recommendations': 'التوصيات',
        'Event Hub — IA Redesign': 'مركز الفعالية — إعادة تصميم هندسة المعلومات',
        'Card sorting, sitemap, navigation structure for an event-booking app.': 'فرز البطاقات، خريطة الموقع، هيكل التنقل لتطبيق حجز الفعاليات.',
        'Sitemap': 'خريطة الموقع',
        'Card Sorting': 'فرز البطاقات',
        'Audit': 'تدقيق',
        'The Ingredients Website — UI Design': 'موقع المكونات — تصميم واجهة المستخدم',
        'Building the UI: lo-fi sketches → mid-fi → hi-fi, with user flow & tests.': 'بناء الواجهة: مخططات منخفضة الدقة → متوسطة الدقة → عالية الدقة، مع تدفق المستخدم والاختبارات.',
        'Lo-Fi': 'منخفض الدقة',
        'Mid-Fi': 'متوسط الدقة',
        'Hi-Fi': 'عالي الدقة',
        'Full-Stack Web App': 'تطبيق ويب كامل المكدس',
        'Digital Menu — Vue 3 · Node.js · MongoDB': 'قائمة رقمية — Vue 3 · Node.js · MongoDB',
        'Full-stack café digital menu with persistent cloud storage.': 'قائمة رقمية لمقهى كاملة المكدس مع تخزين سحابي دائم.',
        'Vue 3 SPA': 'Vue 3 SPA',
        'Express API': 'Express API',
        'MongoDB Atlas': 'MongoDB Atlas',
        'SRS Document': 'وثيقة SRS',
        'Order Delivery System (ODS) — SRS': 'نظام توصيل الطلبات (ODS) — SRS',
        'Software Requirements Specification with 6 UI mockups & use cases.': 'مواصفة متطلبات البرمجيات مع 6 نماذج واجهة مستخدم وحالات استخدام.',
        'Use Cases': 'حالات الاستخدام',
        '6 UI mockups': '6 نماذج واجهة مستخدم',
        'Jahez — Cancellation UX Research': 'جازِه — بحث تجربة المستخدم عن الإلغاء',
        'Improving the cancel-order experience in Jahez delivery app.': 'تحسين تجربة إلغاء الطلب في تطبيق جازِه للتوصيل.',
        '3 personas': '3 شخصيات',
        'Journey maps': 'خرائط الرحلة',
        'User stories': 'قصص المستخدم',
        'System Design · Implementation': 'تصميم النظام · التنفيذ',
        'LAYAQAH — Sports Injury Tracking (GP2)': 'لياقة — تتبع إصابات الرياضيين (GP2)',
        'Unified system for player/coach/doctor with dashboards & wireframes.': 'نظام موحد للاعب / مدرب / طبيب مع لوحات معلومات وإطارات سلكية.',
        '3 roles': '3 أدوار',
        '3 dashboards': '3 لوحات',
        'Context-Aware HCI': 'HCI مدرك للسياق',
        'Hajj & Umrah — Arafat Boundary Verification System': 'الحج والعمرة — نظام التحقق من حدود عرفات',
        'Smart wristband + mobile app with haptic-only alerts for pilgrim safety.': 'سوار ذكي + تطبيق جوال مع تنبيهات لمسية فقط لسلامة الحجاج.',
        '6 mobile screens': '6 شاشات محمولة',
        '7 wristband screens': '7 شاشات سوارية',
        'Haptic UX': 'تجربة مستخدم لمسية',
        'Email': 'البريد الإلكتروني',
        'Phone': 'الهاتف',
        'Based in': 'مقرها',
        'University': 'الجامعة',
        'Crafted with care · Makkah - jadaa, KSA': 'صنع بحب · مكة - جدة، السعودية',
        '© 2026 Najah Rami Madani · HCI Portfolio · 12 Projects': '© 2026 نجاح رامي مدني · محفظة HCI · 12 مشروعاً'
      }
    }
  };
  translations.en.textMap = Object.keys(translations.ar.textMap).reduce((acc, key) => { acc[key] = key; return acc; }, {});

  const i18nElements = Array.from(document.querySelectorAll('[data-i18n]'));
  const setLanguage = (lang) => {
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');
    const locale = translations[lang] || translations.en;

    i18nElements.forEach((el) => {
      const key = el.dataset.i18n;
      const htmlMode = el.dataset.i18nHtml === 'true';
      const value = locale[key];
      if (value === undefined) return;
      if (htmlMode) {
        el.innerHTML = value;
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = value;
      } else {
        el.textContent = value;
      }
    });
  };

  const savedLang = localStorage.getItem(LANGUAGE_KEY) || 'en';
  setLanguage(savedLang);

  langToggle?.addEventListener('click', () => {
    const current = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    const next = current === 'ar' ? 'en' : 'ar';
    setLanguage(next);
    localStorage.setItem(LANGUAGE_KEY, next);
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
