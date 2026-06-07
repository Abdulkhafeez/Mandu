/* ====================================================================
   MANDU MANTI — bilingual (UZ/RU) static site logic
   To plug in real data: edit the MENU and BRANCHES arrays below.
   ==================================================================== */

const TG = "https://t.me/Mandumanti_bot";

/* ---------- i18n dictionary for static strings ---------- */
const I18N = {
  uz: {
    "nav.menu": "Menyu", "nav.why": "Nega biz", "nav.branches": "Filiallar",
    "nav.delivery": "Yetkazib berish", "nav.reviews": "Sharhlar",
    "cta.order": "Buyurtma berish",
    "hero.reviews": "46 sharh",
    "hero.title": "9 xil mantining lazzatini tatib ko'ring",
    "hero.sub": "Qo'lda tayyorlangan, bug'da pishirilgan. Tez va issiq yetkazib berish — har kuni 10:00 dan 22:00 gacha.",
    "hero.viewMenu": "Menyuni ko'rish", "hero.telegram": "Telegram bot",
    "trust.varieties": "xil manti", "trust.branches": "ta filial",
    "trust.followers": "obunachi", "trust.rating": "reyting", "trust.hours": "har kuni",
    "menu.eyebrow": "Bizning menyu", "menu.title": "Yangi va mazali",
    "menu.lead": "Har bir manti qo'lda yopiladi va bug'da pishiriladi. Narxlar UZS da.",
    "menu.note": "* Menyu va narxlar namuna sifatida ko'rsatilgan. Aniq narxlar uchun Telegram bot yoki qo'ng'iroq qiling.",
    "why.eyebrow": "Nega aynan biz", "why.title": "MANDU MANTI farqi",
    "why.f1.t": "Qo'lda tayyorlangan", "why.f1.d": "Har kuni yangi xamir va to'ldirma. Yarim tayyor mahsulot yo'q.",
    "why.f2.t": "Tez va issiq", "why.f2.d": "Buyurtmangiz issiqligicha, maxsus idishlarda yetkazib beriladi.",
    "why.f3.t": "9 xil tanlov", "why.f3.d": "Klassikdan qovoqli va koreyscha manduga qadar — har kim o'ziga mosini topadi.",
    "branches.eyebrow": "Manzillar", "branches.title": "5 ta filial",
    "branches.lead": "Toshkent bo'ylab eng yaqin filialni tanlang. Har kuni 10:00–22:00.",
    "delivery.title": "Tez va issiq yetkazib berish 🚀",
    "delivery.sub": "Telegram bot orqali bir necha soniyada buyurtma bering yoki bizga qo'ng'iroq qiling.",
    "delivery.bot": "Telegram bot",
    "reviews.eyebrow": "Mijozlar fikri", "reviews.title": "4.3★ Google reytingi",
    "reviews.lead": "46+ sharh asosida. Mana mijozlarimiz nima deydi.",
    "footer.tagline": "9 xil mantining lazzatini tatib ko'ring.",
    "footer.contact": "Aloqa", "footer.hours": "Ish vaqti",
    "footer.hoursVal": "Har kuni: 10:00 – 22:00", "footer.delivery": "Yetkazib berish: kuniga",
    "footer.rights": "Barcha huquqlar himoyalangan",
    "branch.call": "Qo'ng'iroq", "branch.map": "Xaritada", "dish.order": "Buyurtma",
    "branch.main": "Asosiy", "branch.soon": "Tez orada"
  },
  ru: {
    "nav.menu": "Меню", "nav.why": "Почему мы", "nav.branches": "Филиалы",
    "nav.delivery": "Доставка", "nav.reviews": "Отзывы",
    "cta.order": "Заказать",
    "hero.reviews": "46 отзывов",
    "hero.title": "Попробуйте 9 видов вкуснейших мантов",
    "hero.sub": "Лепим вручную, готовим на пару. Быстрая и горячая доставка — каждый день с 10:00 до 22:00.",
    "hero.viewMenu": "Смотреть меню", "hero.telegram": "Telegram-бот",
    "trust.varieties": "видов мантов", "trust.branches": "филиалов",
    "trust.followers": "подписчиков", "trust.rating": "рейтинг", "trust.hours": "ежедневно",
    "menu.eyebrow": "Наше меню", "menu.title": "Свежо и вкусно",
    "menu.lead": "Каждый мант лепится вручную и готовится на пару. Цены в UZS.",
    "menu.note": "* Меню и цены показаны для примера. Актуальные цены — в Telegram-боте или по телефону.",
    "why.eyebrow": "Почему именно мы", "why.title": "В чём отличие MANDU MANTI",
    "why.f1.t": "Ручная лепка", "why.f1.d": "Свежее тесто и начинка каждый день. Никаких полуфабрикатов.",
    "why.f2.t": "Быстро и горячо", "why.f2.d": "Заказ доставляем горячим, в специальной упаковке.",
    "why.f3.t": "9 видов на выбор", "why.f3.d": "От классики до тыквенных и корейского манду — каждый найдёт своё.",
    "branches.eyebrow": "Адреса", "branches.title": "5 филиалов",
    "branches.lead": "Выберите ближайший филиал по Ташкенту. Ежедневно 10:00–22:00.",
    "delivery.title": "Быстрая и горячая доставка 🚀",
    "delivery.sub": "Закажите за пару секунд через Telegram-бот или позвоните нам.",
    "delivery.bot": "Telegram-бот",
    "reviews.eyebrow": "Мнение гостей", "reviews.title": "Рейтинг 4.3★ в Google",
    "reviews.lead": "На основе 46+ отзывов. Вот что говорят наши гости.",
    "footer.tagline": "Попробуйте 9 видов вкуснейших мантов.",
    "footer.contact": "Контакты", "footer.hours": "Время работы",
    "footer.hoursVal": "Ежедневно: 10:00 – 22:00", "footer.delivery": "Доставка: ежедневно",
    "footer.rights": "Все права защищены",
    "branch.call": "Позвонить", "branch.map": "На карте", "dish.order": "Заказать",
    "branch.main": "Главный", "branch.soon": "Скоро"
  }
};

/* ---------- Menu data (placeholder — swap real names/prices here) ---------- */
const CATS = [
  { id: "manti",   uz: "Manti",          ru: "Манты" },
  { id: "pelmeni", uz: "Pelmeni",        ru: "Пельмени" },
  { id: "main",    uz: "Asosiy taomlar", ru: "Основные блюда" },
  { id: "drink",   uz: "Ichimliklar",    ru: "Напитки" }
];

const MENU = [
  // ----- 9 manti varieties -----
  { cat: "manti", emoji: "🥟", bg: "#FFF1C2", price: 38000, popular: true,
    uz: ["Klassik manti (mol go'shti)", "An'anaviy mol go'shti va piyoz bilan, qo'lda yopilgan."],
    ru: ["Классические манты (говядина)", "Традиционно с говядиной и луком, ручная лепка."] },
  { cat: "manti", emoji: "🥟", bg: "#FCE7C2", price: 42000,
    uz: ["Qo'y go'shtli manti", "Yumshoq qo'y go'shti va dumba yog'i bilan."],
    ru: ["Манты с бараниной", "Нежная баранина с курдючным жиром."] },
  { cat: "manti", emoji: "🎃", bg: "#FFE6B8", price: 34000, popular: true,
    uz: ["Qovoqli manti", "Shirin qovoq va piyoz bilan — vegetarian tanlov."],
    ru: ["Манты с тыквой", "Сладкая тыква с луком — вегетарианский выбор."] },
  { cat: "manti", emoji: "🥔", bg: "#FFEFD0", price: 32000,
    uz: ["Kartoshkali manti", "Kartoshka va ziravorlar bilan, juda to'yimli."],
    ru: ["Манты с картошкой", "С картофелем и специями, очень сытно."] },
  { cat: "manti", emoji: "🍖", bg: "#F7DDB0", price: 40000,
    uz: ["Jizzali manti", "Mol go'shti va jizza bilan — boy ta'm."],
    ru: ["Манты со шкварками", "Говядина со шкварками — насыщенный вкус."] },
  { cat: "manti", emoji: "🐔", bg: "#FFF1C2", price: 36000,
    uz: ["Tovuqli manti", "Yengil tovuq go'shti va ko'katlar bilan."],
    ru: ["Манты с курицей", "Лёгкая куриная начинка с зеленью."] },
  { cat: "manti", emoji: "🥟", bg: "#FCE7C2", price: 39000,
    uz: ["Aralash manti (go'sht + qovoq)", "Go'sht va qovoqning mukammal uyg'unligi."],
    ru: ["Манты ассорти (мясо + тыква)", "Идеальное сочетание мяса и тыквы."] },
  { cat: "manti", emoji: "🌀", bg: "#FFE6B8", price: 41000,
    uz: ["Qatlama manti", "Qatlama xamirdan, ayniqsa yumshoq va shirali."],
    ru: ["Слоёные манты (катлама)", "Из слоёного теста, особенно нежные и сочные."] },
  { cat: "manti", emoji: "🥢", bg: "#FFEFD0", price: 37000, popular: true,
    uz: ["Mandu (koreyscha)", "Koreyscha uslubda, achchiqroq sous bilan."],
    ru: ["Манду (по-корейски)", "В корейском стиле, с острым соусом."] },

  // ----- Pelmeni -----
  { cat: "pelmeni", emoji: "🥟", bg: "#FFF1C2", price: 30000, popular: true,
    uz: ["Uy pelmeni (mol go'shti)", "Klassik uy pelmenisi, smetana bilan."],
    ru: ["Домашние пельмени (говядина)", "Классические домашние пельмени, со сметаной."] },
  { cat: "pelmeni", emoji: "🎃", bg: "#FFE6B8", price: 28000,
    uz: ["Qovoqli pelmeni", "Shirin qovoq bilan — yengil va mazali."],
    ru: ["Пельмени с тыквой", "Со сладкой тыквой — легко и вкусно."] },
  { cat: "pelmeni", emoji: "🐔", bg: "#FCE7C2", price: 29000,
    uz: ["Tovuqli pelmeni", "Tovuq go'shti va ziravorlar bilan."],
    ru: ["Пельмени с курицей", "С курицей и специями."] },

  // ----- Mains -----
  { cat: "main", emoji: "🍚", bg: "#FFEFD0", price: 45000, popular: true,
    uz: ["Beef Fried Rice", "Mol go'shti, guruch va sabzavotlar bilan qovurma."],
    ru: ["Жареный рис с говядиной", "Обжаренный рис с говядиной и овощами."] },
  { cat: "main", emoji: "🍜", bg: "#FFF1C2", price: 42000,
    uz: ["Lag'mon", "Qo'lda cho'zilgan ugra, go'sht va sabzavot bilan."],
    ru: ["Лагман", "Тянутая лапша с мясом и овощами."] },
  { cat: "main", emoji: "🍲", bg: "#F7DDB0", price: 35000,
    uz: ["Mastava", "Issiq guruchli sho'rva — qishga ideal."],
    ru: ["Мастава", "Горячий рисовый суп — идеально зимой."] },
  { cat: "main", emoji: "🥗", bg: "#FFE6B8", price: 22000,
    uz: ["Achchiq-chuchuk salat", "Pomidor, piyoz va achchiq qalampir."],
    ru: ["Салат ачик-чучук", "Помидоры, лук и острый перец."] },

  // ----- Drinks -----
  { cat: "drink", emoji: "🍵", bg: "#FFF1C2", price: 8000,
    uz: ["Choy (ko'k / qora)", "An'anaviy choynak choy."],
    ru: ["Чай (зелёный / чёрный)", "Традиционный чай в чайнике."] },
  { cat: "drink", emoji: "🥛", bg: "#FCE7C2", price: 12000,
    uz: ["Ayron", "Sovuq, tetiklashtiruvchi ichimlik."],
    ru: ["Айран", "Холодный освежающий напиток."] },
  { cat: "drink", emoji: "🥤", bg: "#FFE6B8", price: 10000,
    uz: ["Coca-Cola", "0.5 l, sovuq."],
    ru: ["Кока-кола", "0.5 л, холодная."] },
  { cat: "drink", emoji: "🧃", bg: "#FFEFD0", price: 9000,
    uz: ["Kompot", "Mavsumiy mevalardan uy kompoti."],
    ru: ["Компот", "Домашний компот из сезонных фруктов."] }
];

/* ---------- Branches (Hadra is real; others are placeholders) ---------- */
const BRANCHES = [
  { main: true, name: "Hadra", phone: "+998994995777",
    uz: "Massiv Hadra, 7, Toshkent", ru: "Массив Хадра, 7, Ташкент",
    map: "https://maps.google.com/?q=MANDU+MANTI+Hadra+Tashkent" },
  { name: "Chilonzor", phone: "+998994995777",
    uz: "Chilonzor tumani (manzil tez orada)", ru: "Чиланзарский район (адрес скоро)",
    map: "https://maps.google.com/?q=Chilonzor+Tashkent", soon: true },
  { name: "Yunusobod", phone: "+998994995777",
    uz: "Yunusobod tumani (manzil tez orada)", ru: "Юнусабадский район (адрес скоро)",
    map: "https://maps.google.com/?q=Yunusobod+Tashkent", soon: true },
  { name: "Sergeli", phone: "+998994995777",
    uz: "Sergeli tumani (manzil tez orada)", ru: "Сергелийский район (адрес скоро)",
    map: "https://maps.google.com/?q=Sergeli+Tashkent", soon: true },
  { name: "Mirzo Ulug'bek", phone: "+998994995777",
    uz: "Mirzo Ulug'bek tumani (manzil tez orada)", ru: "Мирзо-Улугбекский район (адрес скоро)",
    map: "https://maps.google.com/?q=Mirzo+Ulugbek+Tashkent", soon: true }
];

/* ---------- Reviews (illustrative) ---------- */
const REVIEWS = [
  { name: "Dilnoza A.", initials: "DA", stars: 5,
    uz: "Qovoqli manti — zo'r! Yangi va issiq yetkazib berishdi. Tavsiya qilaman.",
    ru: "Манты с тыквой — супер! Привезли свежими и горячими. Рекомендую." },
  { name: "Sardor K.", initials: "SK", stars: 5,
    uz: "9 xil mantining hammasini tatib ko'rdik. Klassik va koreyschasi eng zo'ri.",
    ru: "Попробовали все 9 видов мантов. Классические и корейские — лучшие." },
  { name: "Madina R.", initials: "MR", stars: 4,
    uz: "Mazasi ajoyib, narxi ham hamyonbop. Telegram bot orqali buyurtma juda qulay.",
    ru: "Очень вкусно и по адекватной цене. Заказ через Telegram-бот очень удобный." },
  { name: "Jasur T.", initials: "JT", stars: 5,
    uz: "Oilaviy kechki ovqat uchun ideal joy. Xizmat tez, manti issiq.",
    ru: "Идеальное место для семейного ужина. Обслуживание быстрое, манты горячие." }
];

/* ==================== Rendering ==================== */
let currentLang = localStorage.getItem("mandu-lang") || "uz";
const fmtPrice = n => n.toLocaleString("ru-RU"); // 38 000

function t(key) { return (I18N[currentLang] && I18N[currentLang][key]) || key; }

function renderTabs() {
  const wrap = document.getElementById("menuTabs");
  wrap.innerHTML = CATS.map((c, i) =>
    `<button class="tab${i === 0 ? " is-active" : ""}" data-cat="${c.id}">${c[currentLang]}</button>`
  ).join("");
  wrap.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      wrap.querySelectorAll(".tab").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderMenu(btn.dataset.cat);
    });
  });
}

function renderMenu(cat = CATS[0].id) {
  const grid = document.getElementById("menuGrid");
  grid.innerHTML = MENU.filter(d => d.cat === cat).map(d => {
    const [name, desc] = d[currentLang];
    const badge = d.popular
      ? `<span class="dish__badge">${currentLang === "uz" ? "Ommabop" : "Популярное"}</span>` : "";
    return `
      <article class="dish">
        <div class="dish__media" style="--bg:${d.bg}">${badge}<span>${d.emoji}</span></div>
        <div class="dish__body">
          <h3 class="dish__name">${name}</h3>
          <p class="dish__desc">${desc}</p>
          <div class="dish__foot">
            <span class="dish__price">${fmtPrice(d.price)} <small>UZS</small></span>
            <a class="dish__order" href="${TG}" target="_blank" rel="noopener">${t("dish.order")}</a>
          </div>
        </div>
      </article>`;
  }).join("");
}

const pinSvg = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>';

function renderBranches() {
  const grid = document.getElementById("branchGrid");
  grid.innerHTML = BRANCHES.map(b => {
    const flag = b.main
      ? `<span class="branch__flag branch__flag--main">${t("branch.main")}</span>`
      : (b.soon ? `<span class="branch__flag branch__flag--soon">${t("branch.soon")}</span>` : "");
    return `
      <article class="branch reveal">
        <div class="branch__top">
          <h3 class="branch__name">${b.name}</h3>${flag}
        </div>
        <p class="branch__addr">${pinSvg}<span>${b[currentLang]}</span></p>
        <p class="branch__hours">10:00 – 22:00</p>
        <div class="branch__actions">
          <a class="btn btn--call" href="tel:${b.phone}">${t("branch.call")}</a>
          <a class="btn btn--ghost" href="${b.map}" target="_blank" rel="noopener">${t("branch.map")}</a>
        </div>
      </article>`;
  }).join("");
  observeReveals();
}

function renderReviews() {
  const grid = document.getElementById("reviewGrid");
  grid.innerHTML = REVIEWS.map(r => `
    <article class="review reveal">
      <div class="review__stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
      <p class="review__text">${r[currentLang]}</p>
      <div class="review__who">
        <div class="review__avatar">${r.initials}</div>
        <div>
          <div class="review__name">${r.name}</div>
          <div class="review__meta">Google · ${r.stars}.0</div>
        </div>
      </div>
    </article>`).join("");
  observeReveals();
}

/* ==================== i18n apply ==================== */
function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.documentElement.lang = currentLang;
  document.querySelectorAll(".langtoggle button").forEach(b =>
    b.classList.toggle("is-active", b.dataset.lang === currentLang));
}

function setLang(lang) {
  const activeCat = document.querySelector(".tab.is-active")?.dataset.cat || CATS[0].id;
  currentLang = lang;
  localStorage.setItem("mandu-lang", lang);
  applyStaticI18n();
  renderTabs();
  // restore previously selected category as active
  document.querySelectorAll(".tab").forEach(b => b.classList.toggle("is-active", b.dataset.cat === activeCat));
  renderMenu(activeCat);
  renderBranches();
  renderReviews();
}

/* ==================== Reveal on scroll ==================== */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); revealObserver.unobserve(e.target); } });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => revealObserver.observe(el));
}

/* ==================== Init ==================== */
document.addEventListener("DOMContentLoaded", () => {
  applyStaticI18n();
  renderTabs();
  renderMenu();
  renderBranches();
  renderReviews();
  observeReveals();

  // language toggle
  document.querySelectorAll(".langtoggle button").forEach(b =>
    b.addEventListener("click", () => setLang(b.dataset.lang)));

  // mobile nav
  const header = document.getElementById("header");
  const burger = document.getElementById("burger");
  burger.addEventListener("click", () => {
    const open = header.classList.toggle("nav-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll("#nav a").forEach(a =>
    a.addEventListener("click", () => {
      header.classList.remove("nav-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }));

  // header shadow on scroll
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // year
  document.getElementById("year").textContent = new Date().getFullYear();
});
