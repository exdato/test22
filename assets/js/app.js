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
/* HEADER / FOOTER                                                     */
/* ------------------------------------------------------------------ */

function renderHeader() {
  const el = document.getElementById("app-header");
  if (!el) return;
  el.innerHTML = `
  <header id="site-header" class="fixed top-0 left-0 right-0 z-50">
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

        <div class="flex items-center gap-3">
          <div class="flex items-center rounded-full p-1" style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);">
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

    <div id="mobile-menu" class="lg:hidden hidden border-t" style="background:rgba(10,18,32,0.98);border-color:rgba(255,255,255,0.08);">
      <div class="px-5 py-4 flex flex-col gap-1">
        <a href="index.html" class="text-left py-2.5 text-sm font-medium text-white/85 border-b border-white/5" data-i18n="common.nav.home"></a>
        <a href="index.html#services" class="text-left py-2.5 text-sm font-medium text-white/85 border-b border-white/5" data-i18n="common.nav.services"></a>
        <a href="blog.html" class="text-left py-2.5 text-sm font-medium text-white/85 border-b border-white/5" data-i18n="common.nav.blog"></a>
        <a href="index.html#contact" class="text-left py-2.5 text-sm font-medium text-white/85 border-b border-white/5" data-i18n="common.nav.contact"></a>
        <button id="open-contact-modal-mobile" class="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold btn-outline">
          <i data-lucide="send" class="w-4 h-4"></i><span data-i18n="common.requestCallback"></span>
        </button>
        <a href="tel:${PHONE_TEL}" class="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold btn-primary">
          <i data-lucide="phone" class="w-4 h-4"></i><span>${PHONE_DISPLAY}</span>
        </a>
      </div>
    </div>
  </header>`;

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

  const header = document.getElementById("site-header");
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 12));
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
  }
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
    }
  });
});
