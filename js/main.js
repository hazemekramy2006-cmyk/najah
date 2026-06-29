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
  const themeToggleEl = document.getElementById('themeToggle');
  const LANGUAGE_KEY = 'najah_lang';

  const keyedTranslations = {
    en: {
      title: 'Najah Rami Madani — HCI & Software Engineering Portfolio',
      ariaLangToggle: 'Toggle language',
      ariaThemeToggle: 'Toggle theme',
      navAbout: 'About',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navContact: 'Contact',
      heroBadge: 'HCI · Software Engineering · UX Research',
      heroSub: `Hi, I'm <strong>Najah Rami Madani</strong> — a Software Engineering student at Umm Al-Qura University, specializing in <em>Human-Computer Interaction</em>. Below are 12 projects spanning UX research, accessibility, voice interfaces, information architecture, and full-stack development.`,
      btnProjects: 'View Projects',
      btnContact: 'Get in touch',
      btnCV: 'CV',
      heroScroll: 'Scroll',
      metaProjects: 'Projects',
      metaGraduation: 'Graduation',
      metaHajjSeasons: 'Hajj Seasons',
      metaUniversity: 'University',
      aboutContactHeading: 'Contact',
      contactEmailLabel: 'Email',
      contactPhoneLabel: 'Phone',
      contactBasedInLabel: 'Based in',
      contactUniversityLabel: 'University',
      aboutSectionTag: '01 — About',
      aboutSectionTitle: `A student of <span class="italic">interfaces</span>, not just <span class="gradient-text">screens</span>.`,
      skillsSectionTag: '02 — Skills',
      skillsSectionTitle: `A toolkit built on <span class="italic">research</span> & <span class="gradient-text">craft</span>.`,
      projectsSectionTag: '03 — Projects',
      projectsSectionTitle: `Twelve projects.<br/><span class="gradient-text">One journey through HCI.</span>`,
      contactSectionTag: '04 — Contact',
      contactSectionTitle: `Let's build <span class="italic">something</span> <span class="gradient-text">human</span>.`,
      footerCrafted: 'Crafted with care · Makkah - jadaa, KSA',
      footerNote: '© 2026 Najah Rami Madani · HCI Portfolio · 12 Projects',
      langSummary: 'Good at two languages'
    },
    ar: {
      title: 'Najah Rami Madani — محفظة HCI وهندسة البرمجيات',
      ariaLangToggle: 'تبديل اللغة',
      ariaThemeToggle: 'تبديل النمط',
      navAbout: 'من أنا',
      navSkills: 'المهارات',
      navProjects: 'المشاريع',
      navContact: 'تواصل',
      aboutSectionTag: '01 — من أنا',
      aboutSectionTitle: `طالبة <span class="italic">واجهات</span>، ليس فقط <span class="gradient-text">شاشات</span>.`,
      skillsSectionTag: '02 — المهارات',
      skillsSectionTitle: `مجموعة أدوات مبنية على <span class="italic">البحث</span> و <span class="gradient-text">الصنعة</span>.`,
      projectsSectionTag: '03 — المشاريع',
      projectsSectionTitle: `اثنا عشر مشروعاً.<br/><span class="gradient-text">رحلة واحدة في HCI.</span>`,
      contactSectionTag: '04 — تواصل',
      heroBadge: 'التفاعل بين الإنسان والحاسوب · هندسة البرمجيات · أبحاث تجربة المستخدم',
      heroSub: `مرحباً، أنا <strong>Najah Rami Madani</strong> — طالبة هندسة برمجيات في جامعة أم القرى، متخصصة في <em>التفاعل بين الإنسان والحاسوب</em>. فيما يلي 12 مشروعاً تشمل أبحاث UX، إمكانية الوصول، واجهات صوتية، هندسة المعلومات، وتطوير متكامل.`,
      btnProjects: 'عرض المشاريع',
      btnContact: 'تواصل معي',
      btnCV: 'السيرة الذاتية',
      heroScroll: 'التمرير',
      metaProjects: 'المشاريع',
      metaGraduation: 'التخرج',
      metaHajjSeasons: 'مواسم الحج',
      metaUniversity: 'الجامعة',
      aboutContactHeading: 'تواصل',
      contactEmailLabel: 'البريد الإلكتروني',
      contactPhoneLabel: 'الهاتف',
      contactBasedInLabel: 'مقرها',
      contactUniversityLabel: 'الجامعة',
      contactSectionTitle: `لنَبْنِ <span class="italic">شيئاً</span> <span class="gradient-text">بشرياً</span>.`,
      footerCrafted: 'صنع بحب · مكة - جدة، السعودية',
      footerNote: '© 2026 نجاح رامي مدني · محفظة HCI · 12 مشروعاً',
      langSummary: 'جيدة في لغتين'
    }
  };

  const textMapEnToAr = {
    'Loading Portfolio': 'جارٍ تحميل المحفظة',
    'About': 'من أنا',
    'Skills': 'المهارات',
    'Projects': 'المشاريع',
    'Contact': 'تواصل',
    'Scroll': 'التمرير',
    'HCI · Software Engineering · UX Research': 'التفاعل بين الإنسان والحاسوب · هندسة البرمجيات · أبحاث تجربة المستخدم',
    'Crafting': 'تصميم',
    'human': 'إنسان',
    'first': 'أول',
    'digital': 'رقمي',
    'experiences.': 'تجارب.',
    'Hi, I\'m': 'مرحباً، أنا',
    '— a Software Engineering student at Umm Al-Qura University,': '— طالبة هندسة برمجيات في جامعة أم القرى،',
    'specializing in': 'متخصصة في',
    'Human-Computer Interaction': 'التفاعل بين الإنسان والحاسوب',
    'Below are 12 projects spanning UX research, accessibility, voice interfaces, information architecture, and full-stack development.': 'فيما يلي 12 مشروعاً تشمل أبحاث UX، إمكانية الوصول، واجهات صوتية، هندسة المعلومات، وتطوير متكامل.',
    'View Projects': 'عرض المشاريع',
    'Get in touch': 'تواصل معي',
    'CV': 'السيرة الذاتية',
    'Graduation': 'التخرج',
    'Hajj Seasons': 'مواسم الحج',
    'University': 'الجامعة',
    'A student of': 'طالبة في',
    'interfaces': 'واجهات',
    'not just': 'ليس فقط',
    'screens': 'الشاشات',
    'Career Objective': 'الهدف الوظيفي',
    'Education': 'التعليم',
    'Work Experience': 'الخبرة العملية',
    'Languages': 'اللغات',
    'Arabic': 'العربية',
    'Fluent': 'طليقة',
    'English': 'الإنجليزية',
    'Good at two languages': 'جيدة في لغتين',
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
    'Low-fi to high-fi in Figma. Heuristic & accessibility-aware design.': 'من اللافي إلى العالي الوضوح في فيجما. التصميم وفقاً للملاحظات وقابلية الوصول.',
    'Information Architecture': 'هندسة المعلومات',
    'Sitemaps, navigation structures, organization schemes, content inventory.': 'خرائط الموقع، هياكل التنقل، مخططات التنظيم، جرد المحتوى.',
    'Voice UI': 'واجهة صوتية',
    'Dialogue flows, error handling, multimodal interaction, accessibility scenarios.': 'تدفقات الحوار، إدارة الأخطاء، التفاعل متعدد الوسائط، سيناريوهات إمكانية الوصول.',
    'Software Engineering': 'هندسة البرمجيات',
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
    'Umm Al-Qura University': 'جامعة أم القرى',
    '01 — About': '01 — من أنا',
    '02 — Skills': '02 — المهارات',
    '03 — Projects': '03 — المشاريع',
    '04 — Contact': '04 — تواصل',
    'UI Design': 'تصميم واجهة المستخدم',
    'Use cases': 'حالات الاستخدام',
    'Crafted with care · Makkah - jadaa, KSA': 'صنع بحب · مكة - جدة، السعودية',
    '© 2026 Najah Rami Madani · HCI Portfolio · 12 Projects': '© 2026 نجاح رامي مدني · محفظة HCI · 12 مشروعاً'
  };

  const textMapArToEn = Object.fromEntries(Object.entries(textMapEnToAr).map(([en, ar]) => [ar, en]));

  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&');
  const createTranslator = (map) => {
    const entries = Object.entries(map).sort((a, b) => b[0].length - a[0].length);
    return (text) => entries.reduce((acc, [from, to]) => acc.replace(new RegExp(escapeRegExp(from), 'g'), to), text);
  };

  const i18nElements = Array.from(document.querySelectorAll('[data-i18n]'));
  const translateMarked = (lang) => {
    const locale = keyedTranslations[lang] || keyedTranslations.en;
    i18nElements.forEach((el) => {
      const key = el.dataset.i18n;
      if (!key) return;
      const value = locale[key];
      if (value === undefined) return;
      if (el.dataset.i18nHtml === 'true') {
        el.innerHTML = value;
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = value;
      } else {
        el.textContent = value;
      }
    });
  };

  const translatePage = (lang) => {
    const map = lang === 'ar' ? textMapEnToAr : textMapArToEn;
    const translator = createTranslator(map);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentNode;
        if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.nodeName)) return NodeFilter.FILTER_REJECT;
        if (parent.closest('[data-i18n]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      node.nodeValue = translator(node.nodeValue);
    });
  };

  const setLanguage = (lang) => {
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');
    document.title = keyedTranslations[lang]?.title || keyedTranslations.en.title;
    langToggle?.setAttribute('aria-label', keyedTranslations[lang]?.ariaLangToggle || keyedTranslations.en.ariaLangToggle);
    themeToggleEl?.setAttribute('aria-label', keyedTranslations[lang]?.ariaThemeToggle || keyedTranslations.en.ariaThemeToggle);
    document.querySelector('.hero-scroll')?.setAttribute('aria-label', lang === 'ar' ? 'التمرير إلى قسم من أنا' : 'Scroll to about');

    translateMarked(lang);
    translatePage(lang);
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
