/* ===================================================================
   VECTOR — Security & Electrical Services
   Shared app logic. Loaded AFTER i18n.js on every page.
   Pages may set `window.CURRENT_SERVICE` (one of SERVICE_ORDER) BEFORE
   this file runs to get the auto-generated service detail page, or
   `window.CURRENT_PAGE = "home"` to render the homepage services grid.
=================================================================== */

const LANGS = [{ code: "ge", label: "GE" }, { code: "en", label: "EN" }, { code: "ru", label: "RU" }];

function getLang() {
  return localStorage.getItem("vector_lang") || "ge";
}

function t(path, lang) {
  lang = lang || getLang();
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), translations[lang]);
}

/* ------------------------------------------------------------------ */
/* SEARCH — live filter across services + blog posts                   */
/* ------------------------------------------------------------------ */

function buildSearchIndex() {
  const items = [];
  SERVICE_ORDER.forEach(id => {
    const s = t(`services.${id}`);
    items.push({ title: s.title, subtitle: t("common.nav.services"), href: SERVICE_META[id].page, icon: SERVICE_META[id].icon });
  });
  BLOG_ORDER.forEach(id => {
    const p = t(`blog.posts.${id}`);
    items.push({ title: p.title, subtitle: t("blog.eyebrow"), href: BLOG_META[id].page, icon: "file-text" });
  });
  return items;
}

function renderSearchResults(query) {
  const resultsEl = document.getElementById("search-results");
  if (!resultsEl) return;
  const q = query.trim().toLowerCase();
  if (!q) { resultsEl.innerHTML = ""; resultsEl.classList.add("hidden"); return; }
  const matches = buildSearchIndex().filter(item => item.title.toLowerCase().includes(q)).slice(0, 6);
  resultsEl.classList.remove("hidden");
  resultsEl.innerHTML = matches.length
    ? matches.map(m => `
      <a href="${m.href}" class="flex items-center gap-3 px-4 py-3 transition-colors" style="border-bottom:1px solid #F0F2F5;">
        <span class="flex items-center justify-center rounded-lg shrink-0" style="width:32px;height:32px;background:var(--paper);">
          <i data-lucide="${m.icon}" class="w-4 h-4" style="color:var(--emerald-dark);"></i>
        </span>
        <div class="min-w-0">
          <div class="text-sm font-medium truncate" style="color:var(--navy);">${m.title}</div>
          <div class="text-xs" style="color:var(--text-muted);">${m.subtitle}</div>
        </div>
      </a>`).join("")
    : `<div class="px-4 py-5 text-sm text-center" style="color:var(--text-muted);">${t("common.searchNoResults")}</div>`;
  if (window.lucide) lucide.createIcons();
}

function closeSearchPanel() {
  const panel = document.getElementById("search-panel");
  if (panel) panel.classList.add("hidden");
}

/* ------------------------------------------------------------------ */
/* HEADER / FOOTER                                                     */
/* ------------------------------------------------------------------ */

function renderHeader() {
  const el = document.getElementById("app-header");
  if (!el) return;
  const ann = t("home.announcement");
  const dismissed = localStorage.getItem("vector_announcement_dismissed") === "1";

  el.innerHTML = `
  <div id="header-wrapper" class="fixed top-0 left-0 right-0 z-50">
    <div id="announcement-bar" class="${dismissed ? "collapsed" : ""}" style="background:linear-gradient(90deg,#0a8a54,var(--emerald));">
      <div class="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-center gap-3 text-center" style="height:40px;">
        <span class="text-xs md:text-sm font-medium" style="color:#08111F;">${ann.text}</span>
        <a href="tel:${PHONE_TEL}" class="hidden sm:inline-flex items-center gap-1 text-xs font-bold underline shrink-0" style="color:#08111F;">${ann.cta}</a>
        <button id="dismiss-announcement" aria-label="close" class="shrink-0 p-0.5" style="color:#08111F;opacity:0.7;">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>

    <header id="site-header" class="relative">
      <div class="max-w-7xl mx-auto px-5 md:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          <a href="index.html" class="flex items-center gap-2.5 shrink-0">
            <span class="flex items-center justify-center rounded-md" style="width:38px;height:38px;background:linear-gradient(135deg,var(--emerald) 0%,#0a8a54 100%);">
              <i data-lucide="shield-check" style="color:#0B1424;" class="w-5 h-5"></i>
            </span>
            <span class="flex flex-col items-start leading-none">
              <span class="text-lg md:text-xl font-bold tracking-tight text-white font-display" style="letter-spacing:.02em;">VECTOR</span>
              <span class="hidden sm:block text-[10px] tracking-widest uppercase" style="color:var(--emerald);" data-i18n="common.brandTag"></span>
            </span>
          </a>

          <nav class="hidden lg:flex items-center gap-8">
            <a href="index.html" class="nav-link text-sm font-medium tracking-wide" data-i18n="common.nav.home"></a>
            <a href="index.html#services" class="nav-link text-sm font-medium tracking-wide" data-i18n="common.nav.services"></a>
            <a href="blog.html" class="nav-link text-sm font-medium tracking-wide" data-i18n="common.nav.blog"></a>
            <a href="index.html#contact" class="nav-link text-sm font-medium tracking-wide" data-i18n="common.nav.contact"></a>
          </nav>

          <div class="flex items-center gap-2 md:gap-3">
            <button id="search-toggle" aria-label="search" class="text-white p-1.5 rounded-full transition-colors" style="background:rgba(255,255,255,0.08);">
              <i data-lucide="search" class="w-4 h-4"></i>
            </button>
            <div class="hidden md:flex items-center rounded-full p-1" style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);">
              ${LANGS.map(l => `<button class="lang-btn" data-lang="${l.code}">${l.label}</button>`).join("")}
            </div>
            <button id="open-contact-modal" class="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold btn-outline">
              <i data-lucide="send" class="w-3.5 h-3.5"></i><span data-i18n="common.requestCallback"></span>
            </button>
            <a href="tel:${PHONE_TEL}" class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold btn-primary">
              <i data-lucide="phone" class="w-4 h-4"></i><span>${PHONE_DISPLAY}</span>
            </a>
            <button id="menu-toggle" class="lg:hidden text-white p-1.5" aria-label="menu">
              <i data-lucide="menu" class="w-6 h-6" id="menu-icon-open"></i>
              <i data-lucide="x" class="w-6 h-6 hidden" id="menu-icon-close"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- search panel -->
      <div id="search-panel" class="hidden absolute left-0 right-0 top-full px-5 md:px-0">
        <div class="max-w-lg mx-auto rounded-2xl overflow-hidden mt-2" style="background:#fff;box-shadow:0 24px 55px -20px rgba(0,0,0,0.35);">
          <div class="flex items-center gap-2 px-4 py-3" style="border-bottom:1px solid #F0F2F5;">
            <i data-lucide="search" class="w-4 h-4 shrink-0" style="color:var(--text-muted);"></i>
            <input id="search-input" type="text" autocomplete="off" placeholder="${t("common.searchPlaceholder")}" class="w-full text-sm outline-none" style="color:var(--navy);">
          </div>
          <div id="search-results" class="hidden max-h-80 overflow-y-auto"></div>
        </div>
      </div>

      <div id="mobile-menu" class="lg:hidden hidden border-t" style="background:rgba(10,18,32,0.98);border-color:rgba(255,255,255,0.08);">
        <div class="px-5 py-4 flex flex-col gap-1">
          <a href="index.html" class="text-left py-2.5 text-sm font-medium text-white/85 border-b border-white/5" data-i18n="common.nav.home"></a>
          <a href="index.html#services" class="text-left py-2.5 text-sm font-medium text-white/85 border-b border-white/5" data-i18n="common.nav.services"></a>
          <a href="blog.html" class="text-left py-2.5 text-sm font-medium text-white/85 border-b border-white/5" data-i18n="common.nav.blog"></a>
          <a href="index.html#contact" class="text-left py-2.5 text-sm font-medium text-white/85 border-b border-white/5" data-i18n="common.nav.contact"></a>
          <div class="flex items-center gap-1.5 mt-2">
            ${LANGS.map(l => `<button class="lang-btn" data-lang="${l.code}" style="padding:6px 14px;">${l.label}</button>`).join("")}
          </div>
          <button id="open-contact-modal-mobile" class="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold btn-outline">
            <i data-lucide="send" class="w-4 h-4"></i><span data-i18n="common.requestCallback"></span>
          </button>
          <a href="tel:${PHONE_TEL}" class="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold btn-primary">
            <i data-lucide="phone" class="w-4 h-4"></i><span>${PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </header>
  </div>`;

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const openIcon = document.getElementById("menu-icon-open");
  const closeIcon = document.getElementById("menu-icon-close");
  toggle.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    openIcon.classList.toggle("hidden", !isOpen);
    closeIcon.classList.toggle("hidden", isOpen);
  });

  document.getElementById("open-contact-modal").addEventListener("click", openContactModal);
  document.getElementById("open-contact-modal-mobile").addEventListener("click", () => {
    menu.classList.add("hidden");
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    openContactModal();
  });

  document.getElementById("dismiss-announcement").addEventListener("click", () => {
    document.getElementById("announcement-bar").classList.add("collapsed");
    localStorage.setItem("vector_announcement_dismissed", "1");
  });

  const searchToggle = document.getElementById("search-toggle");
  const searchPanel = document.getElementById("search-panel");
  const searchInput = document.getElementById("search-input");
  searchToggle.addEventListener("click", e => {
    e.stopPropagation();
    searchPanel.classList.toggle("hidden");
    if (!searchPanel.classList.contains("hidden")) searchInput.focus();
  });
  searchInput.addEventListener("input", () => renderSearchResults(searchInput.value));
  searchPanel.addEventListener("click", e => e.stopPropagation());
  document.addEventListener("click", () => closeSearchPanel());
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeSearchPanel(); });

  const header = document.getElementById("site-header");
  const annBar = document.getElementById("announcement-bar");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 12;
    header.classList.toggle("scrolled", scrolled);
    if (scrolled) annBar.classList.add("collapsed");
    else if (localStorage.getItem("vector_announcement_dismissed") !== "1") annBar.classList.remove("collapsed");
  });
}

function renderFooter() {
  const el = document.getElementById("app-footer");
  if (!el) return;
  el.innerHTML = `
  <footer style="background:#0B1424;">
    <div class="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-8">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div class="flex items-center gap-2.5 mb-4">
            <span class="flex items-center justify-center rounded-md" style="width:34px;height:34px;background:linear-gradient(135deg,var(--emerald) 0%,#0a8a54 100%);">
              <i data-lucide="shield-check" style="width:18px;height:18px;color:#0B1424;"></i>
            </span>
            <span class="text-lg font-bold text-white font-display">VECTOR</span>
          </div>
          <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.45);" data-i18n="common.footer.about"></p>
        </div>

        <div>
          <h5 class="text-white text-sm font-semibold tracking-wide uppercase mb-4" data-i18n="common.footer.quickLinks"></h5>
          <ul class="flex flex-col gap-2.5">
            <li><a href="index.html" class="text-sm flex items-center gap-1.5" style="color:rgba(255,255,255,0.5);"><i data-lucide="chevron-right" class="w-3.5 h-3.5"></i><span data-i18n="common.nav.home"></span></a></li>
            <li><a href="index.html#services" class="text-sm flex items-center gap-1.5" style="color:rgba(255,255,255,0.5);"><i data-lucide="chevron-right" class="w-3.5 h-3.5"></i><span data-i18n="common.nav.services"></span></a></li>
            <li><a href="blog.html" class="text-sm flex items-center gap-1.5" style="color:rgba(255,255,255,0.5);"><i data-lucide="chevron-right" class="w-3.5 h-3.5"></i><span data-i18n="common.nav.blog"></span></a></li>
            <li><a href="index.html#contact" class="text-sm flex items-center gap-1.5" style="color:rgba(255,255,255,0.5);"><i data-lucide="chevron-right" class="w-3.5 h-3.5"></i><span data-i18n="common.nav.contact"></span></a></li>
          </ul>
        </div>

        <div>
          <h5 class="text-white text-sm font-semibold tracking-wide uppercase mb-4" data-i18n="common.footer.servicesTitle"></h5>
          <ul id="footer-services" class="flex flex-col gap-2.5"></ul>
        </div>

        <div>
          <h5 class="text-white text-sm font-semibold tracking-wide uppercase mb-4" data-i18n="common.footer.contactTitle"></h5>
          <ul class="flex flex-col gap-3">
            <li class="flex items-start gap-2.5 text-sm" style="color:rgba(255,255,255,0.5);">
              <i data-lucide="phone" class="w-3.5 h-3.5 mt-0.5 shrink-0" style="color:var(--emerald);"></i>
              <a href="tel:${PHONE_TEL}" class="hover:text-white">${PHONE_DISPLAY}</a>
            </li>
            <li class="flex items-start gap-2.5 text-sm" style="color:rgba(255,255,255,0.5);">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 mt-0.5 shrink-0" style="color:var(--emerald);"></i>
              <span data-i18n="common.contact.area"></span>
            </li>
            <li class="flex items-start gap-2.5 text-sm" style="color:rgba(255,255,255,0.5);">
              <i data-lucide="clock" class="w-3.5 h-3.5 mt-0.5 shrink-0" style="color:var(--emerald);"></i>
              <span data-i18n="common.contact.hoursWeek"></span>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style="border-top:1px solid rgba(255,255,255,0.08);">
        <span class="text-xs" style="color:rgba(255,255,255,0.35);">© <span id="year"></span> VECTOR. <span data-i18n="common.footer.rights"></span></span>
        <div class="flex items-center gap-1.5">
          ${LANGS.map(l => `<button class="lang-btn lang-btn-footer" data-lang="${l.code}">${l.label}</button>`).join("")}
        </div>
      </div>
    </div>
  </footer>`;
  document.getElementById("year").textContent = new Date().getFullYear();
}

function renderFooterServices() {
  const wrap = document.getElementById("footer-services");
  if (!wrap) return;
  wrap.innerHTML = SERVICE_ORDER.map(id => {
    const s = t(`services.${id}`);
    const meta = SERVICE_META[id];
    return `<li><a href="${meta.page}" class="text-sm flex items-center gap-1.5" style="color:rgba(255,255,255,0.5);"><i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>${s.title}</a></li>`;
  }).join("");
}

/* ------------------------------------------------------------------ */
/* HOMEPAGE — services grid                                           */
/* ------------------------------------------------------------------ */

function renderHomeServicesGrid() {
  const wrap = document.getElementById("services-grid");
  if (!wrap) return;
  wrap.innerHTML = SERVICE_ORDER.map(id => {
    const s = t(`services.${id}`);
    const meta = SERVICE_META[id];
    return `
    <div class="rounded-2xl overflow-hidden bg-white flex flex-col" style="border:1px solid #E3E7EC;box-shadow:0 12px 30px -18px rgba(11,20,36,0.18);">
      <div class="relative" style="aspect-ratio:16/10;">
        <div class="img-wrap">
          <img src="${meta.img}" alt="${s.title} ${t('common.locationSuffix')}" loading="lazy" width="800" height="500" onerror="this.classList.add('broken')">
          <div class="img-fallback"><i data-lucide="${meta.icon}" style="width:40px;height:40px;color:var(--emerald);" stroke-width="1.25"></i></div>
        </div>
        <div class="absolute inset-0" style="background:linear-gradient(180deg,transparent 50%,rgba(11,20,36,0.5) 100%);"></div>
        <div class="absolute bottom-3 left-3 flex items-center justify-center rounded-lg" style="width:36px;height:36px;background:rgba(11,20,36,0.85);">
          <i data-lucide="${meta.icon}" style="width:17px;height:17px;color:var(--emerald);"></i>
        </div>
      </div>
      <div class="p-6 flex flex-col flex-1">
        <h3 class="text-lg font-bold mb-2 font-display" style="color:var(--navy);">${s.title}</h3>
        <p class="text-sm leading-relaxed mb-5 flex-1" style="color:var(--text-muted);">${s.summary}</p>
        <a href="${meta.page}" class="inline-flex items-center gap-1.5 text-sm font-semibold" style="color:var(--emerald-dark);">
          ${t("common.learnMore")} <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>`;
  }).join("");
}

/* ------------------------------------------------------------------ */
/* HOMEPAGE — why us / process / faq / floating actions                */
/* ------------------------------------------------------------------ */

function renderHomeWhyUs() {
  const wrap = document.getElementById("why-grid");
  if (!wrap) return;
  const data = t("home.whyUs");
  wrap.innerHTML = data.items.map(item => `
    <div class="p-6 rounded-2xl" style="background:var(--paper);border:1px solid #E3E7EC;">
      <div class="flex items-center justify-center rounded-xl mb-5" style="width:44px;height:44px;background:rgba(18,183,106,0.12);">
        <i data-lucide="${item.icon}" style="width:20px;height:20px;color:var(--emerald-dark);"></i>
      </div>
      <h4 class="font-semibold mb-2 font-display" style="color:var(--navy);">${item.title}</h4>
      <p class="text-sm leading-relaxed" style="color:var(--text-muted);">${item.desc}</p>
    </div>`).join("");
}

function renderHomeProcess() {
  const wrap = document.getElementById("process-steps");
  if (!wrap) return;
  const data = t("home.process");
  wrap.innerHTML = data.steps.map((step, i) => `
    <div class="relative flex-1 flex flex-col items-start">
      <div class="flex items-center gap-3 mb-4">
        <span class="flex items-center justify-center rounded-full shrink-0" style="width:44px;height:44px;background:var(--navy);">
          <i data-lucide="${step.icon}" style="width:19px;height:19px;color:var(--emerald);"></i>
        </span>
        <span class="text-xs font-bold tracking-widest uppercase font-display" style="color:var(--emerald);">0${i + 1}</span>
      </div>
      <h4 class="font-semibold mb-2 font-display" style="color:var(--navy);">${step.title}</h4>
      <p class="text-sm leading-relaxed" style="color:var(--text-muted);">${step.desc}</p>
    </div>`).join("");
}

function renderHomeFAQ() {
  const wrap = document.getElementById("faq-list");
  if (!wrap) return;
  const data = t("home.faq");
  wrap.innerHTML = data.items.map((item, i) => `
    <div class="rounded-xl bg-white overflow-hidden" style="border:1px solid #E3E7EC;">
      <button class="faq-toggle w-full flex items-center justify-between gap-4 text-left px-5 py-4" data-faq="${i}">
        <span class="text-sm md:text-base font-medium" style="color:var(--navy);">${item.q}</span>
        <i data-lucide="chevron-down" class="faq-icon w-4 h-4 shrink-0 transition-transform" style="color:var(--emerald-dark);"></i>
      </button>
      <div class="faq-answer hidden px-5 pb-4">
        <p class="text-sm leading-relaxed" style="color:var(--text-muted);">${item.a}</p>
      </div>
    </div>`).join("");
}

/* ------------------------------------------------------------------ */
/* SPACE SELECTOR — 4-tab interactive kit recommender                  */
/* ------------------------------------------------------------------ */

let activeSpace = "home";

function renderSpaceSelector() {
  const wrap = document.getElementById("space-selector-root");
  if (!wrap) return;
  const data = t("home.selector");
  const space = data.spaces[activeSpace];

  wrap.innerHTML = `
    <div class="flex flex-wrap justify-center gap-2 mb-10">
      ${SPACE_ORDER.map(id => `
        <button class="space-tab inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
          data-space="${id}"
          style="${id === activeSpace
            ? "background:var(--emerald);color:#08111F;"
            : "background:#fff;color:var(--charcoal);border:1px solid #E3E7EC;"}">
          <i data-lucide="${SPACE_META[id].icon}" class="w-4 h-4"></i>
          ${data.tabs[id]}
        </button>`).join("")}
    </div>
    <div class="rounded-2xl p-7 md:p-10 transition-all duration-300" style="background:#fff;border:1px solid #E3E7EC;box-shadow:0 20px 45px -28px rgba(11,20,36,0.25);">
      <div class="grid md:grid-cols-[1fr_1.3fr] gap-8 items-center">
        <div>
          <div class="inline-flex items-center justify-center rounded-xl mb-4" style="width:48px;height:48px;background:rgba(18,183,106,0.12);">
            <i data-lucide="${SPACE_META[activeSpace].icon}" style="width:22px;height:22px;color:var(--emerald-dark);"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-bold mb-2 font-display" style="color:var(--navy);">${space.title}</h3>
          <p class="text-sm leading-relaxed" style="color:var(--text-muted);">${space.desc}</p>
        </div>
        <div class="grid sm:grid-cols-2 gap-3">
          ${space.kit.map(item => `
            <div class="flex items-start gap-2.5 text-sm p-3 rounded-lg" style="background:var(--paper);color:var(--charcoal);">
              <i data-lucide="check-circle-2" class="w-4 h-4 mt-0.5 shrink-0" style="color:var(--emerald);"></i>
              <span>${item}</span>
            </div>`).join("")}
        </div>
      </div>
    </div>`;
  if (window.lucide) lucide.createIcons();
}

/* ------------------------------------------------------------------ */
/* BUNDLED PACKAGES GRID                                               */
/* ------------------------------------------------------------------ */

function renderPackages() {
  const wrap = document.getElementById("packages-grid");
  if (!wrap) return;
  const data = t("home.packages");
  const order = ["home", "office", "smart"];
  wrap.innerHTML = order.map(id => {
    const pkg = data.items[id];
    const icon = id === "home" ? "home" : id === "office" ? "building-2" : "cpu";
    return `
    <div class="relative rounded-2xl p-7 flex flex-col" style="background:#fff;border:${pkg.popular ? "2px solid var(--emerald)" : "1px solid #E3E7EC"};box-shadow:0 16px 36px -24px rgba(11,20,36,0.22);">
      ${pkg.popular ? `<span class="absolute -top-3 left-7 px-3 py-1 rounded-full text-[11px] font-bold" style="background:var(--emerald);color:#08111F;">${data.popularBadge}</span>` : ""}
      <div class="inline-flex items-center justify-center rounded-xl mb-5" style="width:48px;height:48px;background:rgba(18,183,106,0.12);">
        <i data-lucide="${icon}" style="width:22px;height:22px;color:var(--emerald-dark);"></i>
      </div>
      <h3 class="text-lg font-bold mb-1.5 font-display" style="color:var(--navy);">${pkg.title}</h3>
      <p class="text-sm mb-5" style="color:var(--text-muted);">${pkg.tagline}</p>
      <ul class="flex flex-col gap-2.5 mb-6 flex-1">
        ${pkg.equipment.map(e => `
          <li class="flex items-start gap-2.5 text-sm" style="color:var(--charcoal);">
            <i data-lucide="check-circle-2" class="w-4 h-4 mt-0.5 shrink-0" style="color:var(--emerald);"></i>${e}
          </li>`).join("")}
      </ul>
      <div class="flex items-center gap-1.5 text-xs font-medium mb-5" style="color:var(--emerald-dark);">
        <i data-lucide="badge-check" class="w-3.5 h-3.5"></i>${data.freeInspection}
      </div>
      <button class="open-contact-modal-trigger inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold btn-primary">
        <i data-lucide="send" class="w-4 h-4"></i>${data.ctaBtn}
      </button>
    </div>`;
  }).join("");
}

/* ------------------------------------------------------------------ */
/* WARRANTY & SERVICE BADGES                                           */
/* ------------------------------------------------------------------ */

function renderWarrantyBadges() {
  const wrap = document.getElementById("warranty-badges-root");
  if (!wrap) return;
  const data = t("home.warrantyBadges");
  wrap.innerHTML = data.items.map(item => `
    <div class="flex items-center gap-4 p-5 rounded-2xl" style="background:var(--paper);border:1px solid #E3E7EC;">
      <span class="flex items-center justify-center rounded-xl shrink-0" style="width:48px;height:48px;background:rgba(18,183,106,0.14);">
        <i data-lucide="${item.icon}" style="width:22px;height:22px;color:var(--emerald-dark);"></i>
      </span>
      <div>
        <div class="text-sm font-bold font-display mb-0.5" style="color:var(--navy);">${item.title}</div>
        <p class="text-xs leading-relaxed" style="color:var(--text-muted);">${item.desc}</p>
      </div>
    </div>`).join("");
}

/* ------------------------------------------------------------------ */
/* EMERGENCY CALL-OUT BANNER                                           */
/* ------------------------------------------------------------------ */

function renderEmergencyBanner() {
  const wrap = document.getElementById("emergency-banner-root");
  if (!wrap) return;
  const data = t("home.emergency");
  wrap.innerHTML = `
    <div class="flex flex-col md:flex-row items-center gap-5 md:gap-6 rounded-2xl p-6 md:p-7" style="background:#1A0F0F;border:1px solid rgba(239,68,68,0.35);">
      <span class="flex items-center justify-center rounded-xl shrink-0" style="width:52px;height:52px;background:rgba(239,68,68,0.15);">
        <i data-lucide="siren" style="width:24px;height:24px;color:#EF4444;"></i>
      </span>
      <div class="flex-1 text-center md:text-left">
        <div class="text-xs font-bold tracking-widest uppercase mb-1" style="color:#EF4444;">${data.eyebrow}</div>
        <h3 class="text-base md:text-lg font-bold text-white mb-1 font-display">${data.title}</h3>
        <p class="text-sm" style="color:rgba(255,255,255,0.6);">${data.subtitle}</p>
      </div>
      <a href="tel:${PHONE_TEL}" class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold shrink-0 transition-transform hover:scale-[1.03]" style="background:#EF4444;color:#fff;">
        <i data-lucide="phone-call" class="w-4 h-4"></i>${data.cta}
      </a>
    </div>`;
}

/* ------------------------------------------------------------------ */
/* BRAND TRUST SLIDER — auto-scrolling marquee                         */
/* ------------------------------------------------------------------ */

function renderBrandSlider() {
  const wrap = document.getElementById("brand-slider-root");
  if (!wrap) return;
  const doubled = [...BRAND_LIST, ...BRAND_LIST];
  wrap.innerHTML = `
    <div class="brand-marquee-mask">
      <div class="brand-marquee-track">
        ${doubled.map(name => `<span class="brand-chip">${name}</span>`).join("")}
      </div>
    </div>`;
}

/* ------------------------------------------------------------------ */
/* COST ESTIMATOR — size + service checkboxes -> rough price range     */
/* ------------------------------------------------------------------ */

let estimatorState = { size: "medium", services: ["cctv"] };

function renderCostEstimator() {
  const wrap = document.getElementById("estimator-root");
  if (!wrap) return;
  const data = t("home.estimator");
  const sizeOrder = ["small", "medium", "large"];

  wrap.innerHTML = `
    <div class="rounded-2xl p-7 md:p-10" style="background:#fff;border:1px solid #E3E7EC;box-shadow:0 20px 45px -28px rgba(11,20,36,0.25);">
      <div class="grid md:grid-cols-2 gap-10">
        <div>
          <div class="mb-7">
            <div class="text-xs font-semibold uppercase tracking-wide mb-3" style="color:var(--text-muted);">${data.sizeLabel}</div>
            <div class="flex flex-wrap gap-2">
              ${sizeOrder.map(sz => `
                <button class="estimator-size-btn px-4 py-2 rounded-full text-sm font-medium transition-all duration-200" data-size="${sz}"
                  style="${sz === estimatorState.size ? "background:var(--emerald);color:#08111F;" : "background:var(--paper);color:var(--charcoal);border:1px solid #E3E7EC;"}">
                  ${data.sizeOptions[sz]}
                </button>`).join("")}
            </div>
          </div>
          <div>
            <div class="text-xs font-semibold uppercase tracking-wide mb-3" style="color:var(--text-muted);">${data.servicesLabel}</div>
            <div class="grid grid-cols-2 gap-2">
              ${SERVICE_ORDER.map(id => {
                const svc = t(`services.${id}`);
                const checked = estimatorState.services.includes(id);
                return `
                <button type="button" class="estimator-service-opt flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium text-left transition-all duration-150" data-service="${id}"
                  style="${checked ? "background:rgba(18,183,106,0.1);border:1px solid var(--emerald);color:var(--navy);" : "background:var(--paper);border:1px solid #E3E7EC;color:var(--charcoal);"}">
                  <i data-lucide="${checked ? "check-square" : "square"}" class="w-3.5 h-3.5 shrink-0" style="color:${checked ? "var(--emerald-dark)" : "var(--text-muted)"};"></i>
                  <span class="truncate">${svc.title}</span>
                </button>`;
              }).join("")}
            </div>
          </div>
        </div>

        <div class="rounded-2xl p-6 flex flex-col justify-center" style="background:var(--navy);">
          <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-4 self-start" style="background:rgba(18,183,106,0.18);">
            <i data-lucide="sparkles" class="w-3 h-3" style="color:var(--emerald);"></i>
            <span class="text-[10px] font-bold uppercase tracking-wide" style="color:var(--emerald);">${t("common.pricingBadge")}</span>
          </div>
          <div class="text-xs font-medium mb-1" style="color:rgba(255,255,255,0.55);">${data.resultLabel}</div>
          <div id="estimator-result" class="text-3xl md:text-4xl font-bold text-white mb-4 font-display"></div>
          <p class="text-xs leading-relaxed mb-6" style="color:rgba(255,255,255,0.45);">${t("common.pricingDisclaimer")}</p>
          <button id="estimator-cta" class="open-contact-modal-trigger inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold btn-primary mb-2.5">
            <i data-lucide="send" class="w-4 h-4"></i>${data.ctaBtn}
          </button>
          <a href="${PRICE_LIST_PDF}" download class="inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold" style="border:1px solid rgba(255,255,255,0.25);color:#fff;">
            <i data-lucide="download" class="w-4 h-4"></i>${t("common.downloadPriceList")}
          </a>
        </div>
      </div>
    </div>`;
  updateEstimatorResult();
  if (window.lucide) lucide.createIcons();
}

function updateEstimatorResult() {
  const resultEl = document.getElementById("estimator-result");
  if (!resultEl) return;
  const data = t("home.estimator");
  if (!estimatorState.services.length) {
    resultEl.textContent = "";
    resultEl.innerHTML = `<span class="text-base font-medium" style="color:rgba(255,255,255,0.5);">${data.emptyState}</span>`;
    return;
  }
  const multiplier = ESTIMATOR_SIZE_MULTIPLIER[estimatorState.size];
  const total = estimatorState.services.reduce((sum, id) => sum + ESTIMATOR_BASE_PRICE[id], 0) * multiplier;
  const rounded = Math.round(total / 10) * 10;
  resultEl.textContent = `${rounded} GEL+`;
}

/* ------------------------------------------------------------------ */
/* INTERACTIVE PROPERTY MAP — building illustration with hotspots      */
/* ------------------------------------------------------------------ */

function renderHotspots() {
  const wrap = document.getElementById("hotspots-root");
  if (!wrap) return;
  const data = t("home.hotspots");

  const svg = `
  <svg viewBox="0 0 480 400" class="w-full h-auto block" role="img" aria-label="Building illustration">
    <line x1="0" y1="368" x2="480" y2="368" stroke="var(--navy)" stroke-opacity="0.15" stroke-width="2"/>
    <rect x="70" y="100" width="300" height="268" fill="var(--paper)" stroke="var(--navy)" stroke-width="2"/>
    <rect x="60" y="80" width="320" height="22" fill="var(--navy)"/>
    <rect x="95" y="135" width="50" height="45" fill="#fff" stroke="var(--emerald)" stroke-width="2"/>
    <rect x="200" y="135" width="50" height="45" fill="#fff" stroke="var(--emerald)" stroke-width="2"/>
    <rect x="305" y="135" width="50" height="45" fill="#fff" stroke="var(--emerald)" stroke-width="2"/>
    <rect x="95" y="195" width="50" height="45" fill="#fff" stroke="var(--emerald)" stroke-width="2"/>
    <rect x="200" y="195" width="50" height="45" fill="#fff" stroke="var(--emerald)" stroke-width="2"/>
    <rect x="305" y="195" width="50" height="45" fill="#fff" stroke="var(--emerald)" stroke-width="2"/>
    <rect x="195" y="278" width="60" height="90" rx="4" fill="var(--navy)"/>
    <circle cx="242" cy="323" r="2.5" fill="var(--emerald)"/>
    <line x1="390" y1="80" x2="390" y2="45" stroke="var(--navy)" stroke-width="3"/>
    <rect x="378" y="33" width="24" height="14" rx="2" fill="var(--navy)"/>
    <rect x="15" y="300" width="45" height="68" fill="var(--navy)" fill-opacity="0.12" stroke="var(--navy)" stroke-width="2"/>
    <line x1="28" y1="300" x2="28" y2="368" stroke="var(--navy)" stroke-opacity="0.4" stroke-width="2"/>
    <line x1="47" y1="300" x2="47" y2="368" stroke="var(--navy)" stroke-opacity="0.4" stroke-width="2"/>
    <rect x="385" y="310" width="40" height="58" fill="var(--navy)" fill-opacity="0.12" stroke="var(--navy)" stroke-width="2"/>
    <rect x="397" y="325" width="16" height="20" fill="var(--navy)" fill-opacity="0.4"/>
  </svg>`;

  const dots = HOTSPOT_ORDER.map(id => {
    const pos = HOTSPOT_META[id];
    const item = data.items[id];
    return `
    <div class="absolute" style="left:${pos.x}%;top:${pos.y}%;transform:translate(-50%,-50%);">
      <button class="hotspot-dot relative flex items-center justify-center" data-hotspot="${id}" aria-label="${item.title}">
        <span class="badge-dot" style="transform:scale(2.2);"><span class="ping"></span><span class="dot"></span></span>
      </button>
      <div class="hotspot-tooltip hidden absolute z-10 rounded-xl p-4" data-tooltip="${id}"
           style="width:220px; ${pos.y > 55 ? "bottom:22px;" : "top:22px;"} left:50%; transform:translateX(-50%); background:var(--navy); box-shadow:0 20px 45px -18px rgba(0,0,0,0.5);">
        <div class="flex items-center gap-2 mb-1.5">
          <i data-lucide="${pos.icon}" class="w-4 h-4" style="color:var(--emerald);"></i>
          <span class="text-sm font-semibold text-white">${item.title}</span>
        </div>
        <p class="text-xs leading-relaxed" style="color:rgba(255,255,255,0.65);">${item.desc}</p>
      </div>
    </div>`;
  }).join("");

  wrap.innerHTML = `
    <div class="relative max-w-2xl mx-auto rounded-2xl p-4 md:p-8" style="background:#fff;border:1px solid #E3E7EC;">
      ${svg}
      ${dots}
    </div>`;
  if (window.lucide) lucide.createIcons();
}

/* ------------------------------------------------------------------ */
/* 30-SECOND SOLUTION QUIZ — modal with 2 questions + result            */
/* ------------------------------------------------------------------ */

let quizState = { step: 1, space: null, priority: null };

function renderQuizBanner() {
  const wrap = document.getElementById("quiz-banner-root");
  if (!wrap) return;
  const q = t("home.quiz");
  wrap.innerHTML = `
    <div class="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
         style="background:linear-gradient(120deg,#0B1424 0%,#123A2C 130%);">
      <div>
        <div class="text-xs font-semibold tracking-widest uppercase mb-2" style="color:var(--emerald);">${q.bannerEyebrow}</div>
        <h3 class="text-xl md:text-2xl font-bold text-white mb-1.5 font-display">${q.bannerTitle}</h3>
        <p class="text-sm" style="color:rgba(255,255,255,0.65);">${q.bannerSubtitle}</p>
      </div>
      <button id="open-quiz-modal" class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold btn-primary shrink-0">
        <i data-lucide="sparkles" class="w-4 h-4"></i>${q.bannerBtn}
      </button>
    </div>`;
  if (window.lucide) lucide.createIcons();
}

function renderQuizModal() {
  const el = ensureContainer("quiz-modal-root");
  const q = t("home.quiz");
  const selectorTabs = t("home.selector").tabs;

  el.innerHTML = `
  <div id="quiz-modal-overlay" class="fixed inset-0 z-[60] hidden items-center justify-center p-4" style="background:rgba(11,20,36,0.7);backdrop-filter:blur(4px);">
    <div class="w-full rounded-2xl bg-white relative" style="max-width:460px;box-shadow:0 30px 70px -20px rgba(0,0,0,0.4);">
      <button id="close-quiz-modal" aria-label="${q.closeLabel}" class="absolute top-4 right-4 p-1.5 rounded-full" style="color:var(--text-muted);">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      <div class="p-6 md:p-8">
        <div class="flex items-center justify-center gap-2 mb-6">
          <span class="quiz-dot h-1.5 rounded-full transition-all" data-dot="1" style="width:28px;background:var(--emerald);"></span>
          <span class="quiz-dot h-1.5 rounded-full transition-all" data-dot="2" style="width:14px;background:#E3E7EC;"></span>
          <span class="quiz-dot h-1.5 rounded-full transition-all" data-dot="3" style="width:14px;background:#E3E7EC;"></span>
        </div>

        <div class="quiz-step" data-step="1">
          <h3 class="text-lg font-bold mb-5 text-center font-display" style="color:var(--navy);">${q.step1Title}</h3>
          <div class="grid grid-cols-2 gap-3">
            ${SPACE_ORDER.map(id => `
              <button class="quiz-space-option flex flex-col items-center gap-2 p-4 rounded-xl text-center transition-colors" data-value="${id}" style="border:1px solid #E3E7EC;">
                <i data-lucide="${SPACE_META[id].icon}" class="w-5 h-5" style="color:var(--emerald-dark);"></i>
                <span class="text-xs font-medium" style="color:var(--charcoal);">${selectorTabs[id]}</span>
              </button>`).join("")}
          </div>
        </div>

        <div class="quiz-step hidden" data-step="2">
          <h3 class="text-lg font-bold mb-5 text-center font-display" style="color:var(--navy);">${q.step2Title}</h3>
          <div class="flex flex-col gap-2.5">
            ${QUIZ_PRIORITY_ORDER.map(id => `
              <button class="quiz-priority-option flex items-center gap-3 p-3.5 rounded-xl text-left transition-colors" data-value="${id}" style="border:1px solid #E3E7EC;">
                <i data-lucide="${QUIZ_PRIORITY_META[id].icon}" class="w-4.5 h-4.5 shrink-0" style="color:var(--emerald-dark);"></i>
                <span class="text-sm font-medium" style="color:var(--charcoal);">${q.priorities[id]}</span>
              </button>`).join("")}
          </div>
        </div>

        <div class="quiz-step hidden" data-step="3">
          <div id="quiz-result-content"></div>
        </div>
      </div>
    </div>
  </div>`;

  document.getElementById("close-quiz-modal").addEventListener("click", closeQuizModal);
  const overlay = document.getElementById("quiz-modal-overlay");
  overlay.addEventListener("click", e => { if (e.target === overlay) closeQuizModal(); });

  if (window.lucide) lucide.createIcons();
}

function updateQuizStep() {
  document.querySelectorAll(".quiz-step").forEach(stepEl => {
    stepEl.classList.toggle("hidden", Number(stepEl.getAttribute("data-step")) !== quizState.step);
  });
  document.querySelectorAll(".quiz-dot").forEach(dot => {
    const n = Number(dot.getAttribute("data-dot"));
    const active = n <= quizState.step;
    dot.style.background = active ? "var(--emerald)" : "#E3E7EC";
    dot.style.width = n === quizState.step ? "28px" : "14px";
  });
}

function renderQuizResult() {
  const wrap = document.getElementById("quiz-result-content");
  if (!wrap || !quizState.space || !quizState.priority) return;
  const q = t("home.quiz");
  const spaceTitle = t("home.selector").tabs[quizState.space];
  const priorityLabel = q.priorities[quizState.priority];
  const recommendedIds = QUIZ_PRIORITY_META[quizState.priority].services;

  const waMsg = `${q.waMessageIntro}\n${q.spaceLabel}: ${spaceTitle}\n${q.priorityLabel}: ${priorityLabel}`;

  wrap.innerHTML = `
    <div class="text-center mb-5">
      <div class="inline-flex items-center justify-center rounded-full mb-3" style="width:48px;height:48px;background:rgba(18,183,106,0.14);">
        <i data-lucide="check-check" style="width:22px;height:22px;color:var(--emerald-dark);"></i>
      </div>
      <h3 class="text-lg font-bold mb-1 font-display" style="color:var(--navy);">${q.resultTitle}</h3>
      <p class="text-sm" style="color:var(--text-muted);">${q.resultSubtitle}</p>
    </div>
    <div class="flex flex-col gap-2.5 mb-6">
      ${recommendedIds.map(id => {
        const svc = t(`services.${id}`);
        return `
        <a href="${SERVICE_META[id].page}" class="flex items-center gap-3 p-3.5 rounded-xl transition-colors" style="background:var(--paper);">
          <i data-lucide="${SERVICE_META[id].icon}" class="w-4.5 h-4.5 shrink-0" style="color:var(--emerald-dark);"></i>
          <div>
            <div class="text-sm font-semibold" style="color:var(--navy);">${svc.title}</div>
          </div>
        </a>`;
      }).join("")}
    </div>
    <a href="https://wa.me/995595708300?text=${encodeURIComponent(waMsg)}" target="_blank" rel="noopener"
       class="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold btn-whatsapp mb-3">
      <i data-lucide="message-circle" class="w-4 h-4"></i>${q.waBtn}
    </a>
    <button id="quiz-restart" class="w-full text-xs font-medium text-center" style="color:var(--text-muted);">${q.restartBtn}</button>`;
  if (window.lucide) lucide.createIcons();
}

function openQuizModal() {
  quizState = { step: 1, space: null, priority: null };
  updateQuizStep();
  const overlay = document.getElementById("quiz-modal-overlay");
  if (!overlay) return;
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeQuizModal() {
  const overlay = document.getElementById("quiz-modal-overlay");
  if (!overlay) return;
  overlay.classList.add("hidden");
  overlay.classList.remove("flex");
  document.body.style.overflow = "";
}

function ensureContainer(id) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("div");
    el.id = id;
    document.body.appendChild(el);
  }
  return el;
}

function renderFloatingActions() {
  const el = ensureContainer("floating-actions");
  el.innerHTML = `
  <div class="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
    <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" aria-label="${t('common.whatsapp')}"
       class="flex items-center justify-center rounded-full btn-whatsapp shadow-lg" style="width:52px;height:52px;">
      <i data-lucide="message-circle" class="w-5 h-5"></i>
    </a>
    <a href="tel:${PHONE_TEL}" aria-label="${t('common.callNow')}"
       class="flex items-center justify-center rounded-full btn-primary shadow-lg" style="width:52px;height:52px;">
      <i data-lucide="phone" class="w-5 h-5"></i>
    </a>
  </div>`;
}

/* ------------------------------------------------------------------ */
/* CONTACT MODAL — lead-gen form (client-side, submits via WhatsApp)   */
/* ------------------------------------------------------------------ */

function renderContactModal() {
  const el = ensureContainer("contact-modal-root");
  const m = t("common.modal");
  const serviceOptions = SERVICE_ORDER.map(id => `<option value="${id}">${t(`services.${id}.title`)}</option>`).join("");

  el.innerHTML = `
  <div id="contact-modal-overlay" class="fixed inset-0 z-[60] hidden items-center justify-center p-4" style="background:rgba(11,20,36,0.7);backdrop-filter:blur(4px);">
    <div class="w-full rounded-2xl bg-white relative" style="max-width:440px;box-shadow:0 30px 70px -20px rgba(0,0,0,0.4);">
      <button id="close-contact-modal" aria-label="${m.closeLabel}" class="absolute top-4 right-4 p-1.5 rounded-full" style="color:var(--text-muted);">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      <div class="p-6 md:p-8">
        <h3 class="text-xl font-bold mb-1 font-display" style="color:var(--navy);">${m.title}</h3>
        <p class="text-sm mb-6" style="color:var(--text-muted);">${m.subtitle}</p>

        <form id="contact-form" novalidate>
          <div class="mb-4">
            <label class="block text-xs font-semibold uppercase tracking-wide mb-1.5" style="color:var(--text-muted);">${m.nameLabel}</label>
            <input type="text" id="cf-name" placeholder="${m.namePlaceholder}" class="w-full px-4 py-2.5 rounded-lg text-sm" style="border:1px solid #E3E7EC;">
            <p class="cf-error text-xs mt-1 hidden" style="color:#DC2626;" data-for="name">${m.errorName}</p>
          </div>
          <div class="mb-4">
            <label class="block text-xs font-semibold uppercase tracking-wide mb-1.5" style="color:var(--text-muted);">${m.phoneLabel}</label>
            <input type="tel" id="cf-phone" placeholder="${m.phonePlaceholder}" class="w-full px-4 py-2.5 rounded-lg text-sm" style="border:1px solid #E3E7EC;">
            <p class="cf-error text-xs mt-1 hidden" style="color:#DC2626;" data-for="phone">${m.errorPhone}</p>
          </div>
          <div class="mb-6">
            <label class="block text-xs font-semibold uppercase tracking-wide mb-1.5" style="color:var(--text-muted);">${m.serviceLabel}</label>
            <select id="cf-service" class="w-full px-4 py-2.5 rounded-lg text-sm bg-white" style="border:1px solid #E3E7EC;">
              <option value="">${m.serviceDefault}</option>
              ${serviceOptions}
            </select>
            <p class="cf-error text-xs mt-1 hidden" style="color:#DC2626;" data-for="service">${m.errorService}</p>
          </div>
          <button type="submit" class="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold btn-primary">
            <i data-lucide="send" class="w-4 h-4"></i><span>${m.submitBtn}</span>
          </button>
          <p class="text-xs text-center mt-3" style="color:var(--text-muted);">${m.note}</p>
        </form>
      </div>
    </div>
  </div>`;

  const overlay = document.getElementById("contact-modal-overlay");
  document.getElementById("close-contact-modal").addEventListener("click", closeContactModal);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeContactModal(); });

  document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    const nameEl = document.getElementById("cf-name");
    const phoneEl = document.getElementById("cf-phone");
    const serviceEl = document.getElementById("cf-service");
    const name = nameEl.value.trim();
    const phone = phoneEl.value.trim();
    const serviceId = serviceEl.value;

    let valid = true;
    const showError = (field, ok) => {
      const errEl = overlay.querySelector(`.cf-error[data-for="${field}"]`);
      if (errEl) errEl.classList.toggle("hidden", ok);
      if (!ok) valid = false;
    };
    showError("name", name.length >= 2);
    showError("phone", /^[0-9+\s\-()]{6,}$/.test(phone));
    showError("service", serviceId !== "");
    if (!valid) return;

    const serviceTitle = t(`services.${serviceId}.title`);
    const msg = `${t("common.modal.title")}\n${t("common.modal.nameLabel")}: ${name}\n${t("common.modal.phoneLabel")}: ${phone}\n${t("common.modal.serviceLabel")}: ${serviceTitle}`;
    window.open(`https://wa.me/995595708300?text=${encodeURIComponent(msg)}`, "_blank");
    closeContactModal();
    e.target.reset();
  });
}

function openContactModal() {
  const overlay = document.getElementById("contact-modal-overlay");
  if (!overlay) return;
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  const overlay = document.getElementById("contact-modal-overlay");
  if (!overlay) return;
  overlay.classList.add("hidden");
  overlay.classList.remove("flex");
  document.body.style.overflow = "";
}

/* ------------------------------------------------------------------ */
/* BLOG — hub grid + individual post                                   */
/* ------------------------------------------------------------------ */

function renderBlogGrid() {
  const wrap = document.getElementById("blog-grid");
  if (!wrap) return;
  wrap.innerHTML = BLOG_ORDER.map(id => {
    const post = t(`blog.posts.${id}`);
    const meta = BLOG_META[id];
    const svcMeta = SERVICE_META[meta.service];
    return `
    <div class="rounded-2xl overflow-hidden bg-white flex flex-col" style="border:1px solid #E3E7EC;box-shadow:0 12px 30px -18px rgba(11,20,36,0.18);">
      <div class="relative" style="aspect-ratio:16/10;">
        <div class="img-wrap">
          <img src="${meta.img}" alt="${post.title} — VECTOR ${t('common.locationSuffix')}" loading="lazy" width="800" height="500" onerror="this.classList.add('broken')">
          <div class="img-fallback"><i data-lucide="${svcMeta.icon}" style="width:40px;height:40px;color:var(--emerald);" stroke-width="1.25"></i></div>
        </div>
        <div class="absolute inset-0" style="background:linear-gradient(180deg,transparent 55%,rgba(11,20,36,0.5) 100%);"></div>
        <div class="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full" style="background:rgba(11,20,36,0.8);">
          <i data-lucide="clock" style="width:11px;height:11px;color:var(--emerald);"></i>
          <span class="text-[10px] font-semibold text-white">${meta.minutes} ${t("blog.minReadSuffix")}</span>
        </div>
      </div>
      <div class="p-6 flex flex-col flex-1">
        <h3 class="text-base font-bold mb-2 font-display leading-snug" style="color:var(--navy);">${post.title}</h3>
        <p class="text-sm leading-relaxed mb-5 flex-1" style="color:var(--text-muted);">${post.excerpt}</p>
        <a href="${meta.page}" class="inline-flex items-center gap-1.5 text-sm font-semibold" style="color:var(--emerald-dark);">
          ${t("blog.readMore")} <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>`;
  }).join("");
}

function renderBlogPost() {
  const id = window.CURRENT_POST;
  const root = document.getElementById("blog-post");
  if (!id || !root) return;
  const post = t(`blog.posts.${id}`);
  const meta = BLOG_META[id];
  const svcMeta = SERVICE_META[meta.service];
  const svc = t(`services.${meta.service}`);

  root.innerHTML = `
  <!-- banner -->
  <section class="svc-banner" style="background-image:url('${meta.img}');">
    <div class="max-w-4xl mx-auto px-5 md:px-8 pt-32 pb-16 md:pt-40 md:pb-20 svc-banner-content">
      <div class="flex items-center gap-2 text-xs mb-5" style="color:rgba(255,255,255,0.6);">
        <a href="index.html" class="hover:text-white">${t("common.breadcrumbHome")}</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <a href="blog.html" class="hover:text-white">${t("blog.eyebrow")}</a>
      </div>
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5" style="background:rgba(18,183,106,0.15);border:1px solid rgba(18,183,106,0.3);">
        <i data-lucide="${svcMeta.icon}" style="width:14px;height:14px;color:var(--emerald);"></i>
        <span class="text-xs font-medium" style="color:var(--emerald);">${svc.title}</span>
      </div>
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-display max-w-2xl leading-tight">${post.title}</h1>
      <div class="flex items-center gap-2 text-xs" style="color:rgba(255,255,255,0.55);">
        <i data-lucide="clock" class="w-3.5 h-3.5"></i>
        <span>${meta.minutes} ${t("blog.minReadSuffix")}</span>
      </div>
    </div>
  </section>

  <!-- article -->
  <section class="py-16 md:py-20" style="background:var(--paper);">
    <div class="max-w-3xl mx-auto px-5 md:px-8">
      <p class="text-lg leading-relaxed mb-10" style="color:var(--charcoal);">${post.intro}</p>
      <div class="flex flex-col gap-8">
        ${post.sections.map(s => `
        <div>
          <h2 class="text-xl font-bold mb-2 font-display" style="color:var(--navy);">${s.h}</h2>
          <p class="text-base leading-relaxed" style="color:var(--text-muted);">${s.p}</p>
        </div>`).join("")}
      </div>
      <p class="text-base leading-relaxed mt-10 pt-8" style="color:var(--charcoal);border-top:1px solid #E3E7EC;">${post.conclusion}</p>

      <a href="blog.html" class="inline-flex items-center gap-1.5 mt-8 text-sm font-semibold" style="color:var(--emerald-dark);">
        <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i> ${t("blog.backToBlog")}
      </a>

      <!-- social share -->
      <div class="mt-10 pt-6 flex items-center gap-3" style="border-top:1px solid #E3E7EC;">
        <span class="text-xs font-semibold uppercase tracking-wide" style="color:var(--text-muted);">${t("common.shareLabel")}</span>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" rel="noopener" aria-label="Facebook"
           class="flex items-center justify-center rounded-full" style="width:36px;height:36px;background:var(--paper);border:1px solid #E3E7EC;color:var(--navy);">
          <i data-lucide="facebook" class="w-4 h-4"></i>
        </a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" target="_blank" rel="noopener" aria-label="LinkedIn"
           class="flex items-center justify-center rounded-full" style="width:36px;height:36px;background:var(--paper);border:1px solid #E3E7EC;color:var(--navy);">
          <i data-lucide="linkedin" class="w-4 h-4"></i>
        </a>
        <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' — ' + window.location.href)}" target="_blank" rel="noopener" aria-label="WhatsApp"
           class="flex items-center justify-center rounded-full" style="width:36px;height:36px;background:var(--paper);border:1px solid #E3E7EC;color:var(--navy);">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- related service cta -->
  <section class="relative overflow-hidden" style="background:linear-gradient(120deg,#0B1424 0%,#123A2C 130%);">
    <div class="blueprint-grid subtle"></div>
    <div class="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-16 relative flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <div>
        <div class="text-xs uppercase tracking-widest font-semibold mb-2" style="color:var(--emerald);">${svc.title}</div>
        <p style="color:rgba(255,255,255,0.65);">${svc.summary}</p>
      </div>
      <div class="flex items-center gap-3 shrink-0">
        <a href="${svcMeta.page}" class="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold btn-outline">
          <span>${t("common.viewService")}</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
        <a href="tel:${PHONE_TEL}" class="inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold btn-primary">
          <i data-lucide="phone" class="w-4 h-4"></i><span>${PHONE_DISPLAY}</span>
        </a>
      </div>
    </div>
  </section>`;
}

/* ------------------------------------------------------------------ */
/* SERVICE DETAIL PAGE                                                 */
/* ------------------------------------------------------------------ */

function renderServiceDetail() {
  const id = window.CURRENT_SERVICE;
  const root = document.getElementById("service-detail");
  if (!id || !root) return;
  const s = t(`services.${id}`);
  const meta = SERVICE_META[id];

  root.innerHTML = `
  <!-- banner -->
  <section class="svc-banner" style="background-image:url('${meta.img}');">
    <div class="max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-16 md:pt-40 md:pb-20 svc-banner-content">
      <div class="flex items-center gap-2 text-xs mb-5" style="color:rgba(255,255,255,0.6);">
        <a href="index.html" class="hover:text-white">${t("common.breadcrumbHome")}</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <a href="index.html#services" class="hover:text-white">${t("common.breadcrumbServices")}</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span style="color:var(--emerald);">${s.title}</span>
      </div>
      <div class="flex items-center gap-2 mb-4">
        <span class="flex items-center justify-center rounded-xl" style="width:52px;height:52px;background:rgba(18,183,106,0.15);border:1px solid rgba(18,183,106,0.3);">
          <i data-lucide="${meta.icon}" style="width:24px;height:24px;color:var(--emerald);"></i>
        </span>
      </div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 font-display max-w-2xl">${s.title}</h1>
      <p class="text-base md:text-lg mb-8 max-w-xl" style="color:rgba(255,255,255,0.72);">${s.tag}</p>
      <a href="tel:${PHONE_TEL}" class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold btn-primary">
        <i data-lucide="phone" class="w-4 h-4"></i><span>${t("common.consultBtn")}</span>
      </a>
    </div>
  </section>

  <!-- overview -->
  <section class="py-16 md:py-20" style="background:var(--paper);">
    <div class="max-w-4xl mx-auto px-5 md:px-8">
      <p class="text-lg md:text-xl leading-relaxed" style="color:var(--charcoal);">${s.overview}</p>
    </div>
  </section>

  <!-- features -->
  <section class="pb-16 md:pb-20" style="background:var(--paper);">
    <div class="max-w-7xl mx-auto px-5 md:px-8">
      <div class="flex items-center gap-2 mb-8">
        <span class="eyebrow-dash"></span>
        <span class="text-xs font-semibold tracking-widest uppercase font-display" style="color:var(--emerald);">${t("common.featuresTitle")}</span>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        ${s.features.map(f => `
        <div class="flex items-start gap-3 p-5 rounded-xl bg-white" style="border:1px solid #E3E7EC;">
          <i data-lucide="check-circle-2" class="w-5 h-5 mt-0.5 shrink-0" style="color:var(--emerald);"></i>
          <span class="text-sm" style="color:var(--charcoal);">${f}</span>
        </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- equipment -->
  <section class="py-16 md:py-20" style="background:var(--charcoal);">
    <div class="max-w-7xl mx-auto px-5 md:px-8">
      <div class="flex items-center gap-2 mb-8">
        <span class="eyebrow-dash"></span>
        <span class="text-xs font-semibold tracking-widest uppercase font-display" style="color:var(--emerald);">${t("common.equipmentTitle")}</span>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        ${s.equipment.map(eq => `
        <div class="flex items-center gap-3 p-5 rounded-xl" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);">
          <span class="flex items-center justify-center rounded-lg shrink-0" style="width:36px;height:36px;background:rgba(18,183,106,0.14);">
            <i data-lucide="${meta.icon}" style="width:16px;height:16px;color:var(--emerald);"></i>
          </span>
          <span class="text-sm text-white">${eq}</span>
        </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- process -->
  <section class="py-16 md:py-20" style="background:var(--paper);">
    <div class="max-w-4xl mx-auto px-5 md:px-8">
      <div class="flex items-center gap-2 mb-8">
        <span class="eyebrow-dash"></span>
        <span class="text-xs font-semibold tracking-widest uppercase font-display" style="color:var(--emerald);">${t("common.processTitle")}</span>
      </div>
      <div class="flex flex-col gap-5">
        ${s.process.map((p, i) => `
        <div class="flex items-start gap-4">
          <span class="step-num">${i + 1}</span>
          <p class="text-sm md:text-base pt-1" style="color:var(--charcoal);">${p}</p>
        </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- cta banner -->
  <section class="relative overflow-hidden" style="background:linear-gradient(120deg,#0B1424 0%,#123A2C 130%);">
    <div class="blueprint-grid subtle"></div>
    <div class="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20 relative flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
      <div>
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-2 font-display">${t("common.ctaBannerTitle")}</h3>
        <p style="color:rgba(255,255,255,0.65);">${t("common.ctaBannerSubtitle")}</p>
      </div>
      <div class="flex items-center gap-3 shrink-0">
        <a href="tel:${PHONE_TEL}" class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold btn-primary">
          <i data-lucide="phone" class="w-4 h-4"></i><span>${PHONE_DISPLAY}</span>
        </a>
        <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold btn-whatsapp">
          <i data-lucide="message-circle" class="w-4 h-4"></i><span>${t("common.whatsapp")}</span>
        </a>
      </div>
    </div>
  </section>`;
}

/* ------------------------------------------------------------------ */
/* STATIC TEXT + LANGUAGE SWITCH                                       */
/* ------------------------------------------------------------------ */

function applyStaticText() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const val = t(el.getAttribute("data-i18n"));
    if (val !== null) el.textContent = val;
  });
}

function getPageSeo() {
  if (window.CURRENT_SERVICE) return t(`seo.services.${window.CURRENT_SERVICE}`);
  if (window.CURRENT_POST) return t(`seo.posts.${window.CURRENT_POST}`);
  if (window.CURRENT_PAGE === "home") return t("seo.index");
  if (window.CURRENT_PAGE === "blog") return t("seo.blog");
  return null;
}

function updateMetaTags() {
  const seo = getPageSeo();
  if (!seo) return;
  document.title = seo.title;
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.setAttribute("name", "description");
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute("content", seo.description);
  // Note: og:title / og:description / og:image stay static (server-rendered GE
  // copy) since social-media crawlers (Facebook/WhatsApp/LinkedIn) do not run
  // JS — only the visible <title> and meta description update live with the
  // in-page language switcher.
}

function setLanguage(lang) {
  localStorage.setItem("vector_lang", lang);
  document.documentElement.lang = lang === "ge" ? "ka" : lang;

  applyStaticText();
  updateMetaTags();
  renderFooterServices();
  renderFloatingActions();
  renderContactModal();
  if (window.CURRENT_PAGE === "home") {
    renderHomeServicesGrid();
    renderHomeWhyUs();
    renderHomeProcess();
    renderHomeFAQ();
    renderSpaceSelector();
    renderPackages();
    renderWarrantyBadges();
    renderEmergencyBanner();
    renderBrandSlider();
    renderCostEstimator();
    renderHotspots();
    renderQuizBanner();
  }
  renderQuizModal();
  if (window.CURRENT_PAGE === "blog") renderBlogGrid();
  if (window.CURRENT_SERVICE) renderServiceDetail();
  if (window.CURRENT_POST) renderBlogPost();

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  if (window.lucide) lucide.createIcons();
}

/* ------------------------------------------------------------------ */
/* INIT                                                                 */
/* ------------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  setLanguage(getLang());

  document.body.addEventListener("click", e => {
    const langBtn = e.target.closest(".lang-btn");
    if (langBtn) { setLanguage(langBtn.getAttribute("data-lang")); return; }

    const faqBtn = e.target.closest(".faq-toggle");
    if (faqBtn) {
      const answer = faqBtn.nextElementSibling;
      const icon = faqBtn.querySelector(".faq-icon");
      const isOpen = !answer.classList.contains("hidden");
      answer.classList.toggle("hidden", isOpen);
      icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
      return;
    }

    const spaceTab = e.target.closest(".space-tab");
    if (spaceTab) { activeSpace = spaceTab.getAttribute("data-space"); renderSpaceSelector(); return; }

    const sizeBtn = e.target.closest(".estimator-size-btn");
    if (sizeBtn) { estimatorState.size = sizeBtn.getAttribute("data-size"); renderCostEstimator(); return; }

    const serviceOpt = e.target.closest(".estimator-service-opt");
    if (serviceOpt) {
      const id = serviceOpt.getAttribute("data-service");
      const idx = estimatorState.services.indexOf(id);
      if (idx > -1) estimatorState.services.splice(idx, 1);
      else estimatorState.services.push(id);
      renderCostEstimator();
      return;
    }

    const pkgCta = e.target.closest(".open-contact-modal-trigger");
    if (pkgCta) { openContactModal(); return; }

    const hotspotDot = e.target.closest(".hotspot-dot");
    if (hotspotDot) {
      const id = hotspotDot.getAttribute("data-hotspot");
      const tooltip = document.querySelector(`.hotspot-tooltip[data-tooltip="${id}"]`);
      const wasHidden = tooltip.classList.contains("hidden");
      document.querySelectorAll(".hotspot-tooltip").forEach(tip => tip.classList.add("hidden"));
      if (wasHidden) tooltip.classList.remove("hidden");
      return;
    }
    if (!e.target.closest(".hotspot-tooltip")) {
      document.querySelectorAll(".hotspot-tooltip").forEach(tip => tip.classList.add("hidden"));
    }

    if (e.target.closest("#open-quiz-modal")) { openQuizModal(); return; }
    if (e.target.closest("#close-quiz-modal")) { closeQuizModal(); return; }
    if (e.target.closest("#quiz-restart")) { quizState = { step: 1, space: null, priority: null }; updateQuizStep(); return; }

    const spaceOpt = e.target.closest(".quiz-space-option");
    if (spaceOpt) { quizState.space = spaceOpt.getAttribute("data-value"); quizState.step = 2; updateQuizStep(); return; }

    const priorityOpt = e.target.closest(".quiz-priority-option");
    if (priorityOpt) { quizState.priority = priorityOpt.getAttribute("data-value"); quizState.step = 3; updateQuizStep(); renderQuizResult(); return; }
  });
});
