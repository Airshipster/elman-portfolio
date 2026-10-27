(function () {
  const overrides = {
    "Телеканал": "Bilik",
    "о знаниях": "telekanalı",
    "Рабочая концепция": "İşçi konsepsiya",
    "Я занимаюсь научпопом 15 лет и знаю этот рынок изнутри": "15 ildir elmi-populyarlaşdırma ilə məşğulam və bu sahəni içəridən tanıyıram",
    "работы с научпопом": "elmi-populyarlaşdırma təcrübəsi",
    "От собственных материалов до работы с авторами и заказчиками.": "Öz layihələrimdən müəlliflər və sifarişçilərlə işə qədər.",
    "Постсоветский регион": "Postsovet məkanı",
    "Азербайджан — 57-е место в рейтинге 2026 года": "Azərbaycan 2026-cı il reytinqində 57-ci yerdədir",
    "48 рубрик уже разложены по механикам": "48 rubrika mexanika üzrə ayrılıb",
    "Чтение": "Oxu",
    "PISA 2025 · 15-летние школьники": "PISA 2025 · 15 yaşlı məktəblilər",
    "Каждый второй не достигает базового уровня в естественных науках": "Hər iki şagirddən biri təbiət elmlərində baza səviyyəsinə çatmır",
    "Средний балл скрывает масштаб проблемы": "Orta göstərici problemin miqyasını gizlədir",
    "Самый большой разрыв — в чтении: 87 баллов до среднего OECD.": "Ən böyük fərq oxu üzrədir: OECD ortalamasına 87 bal çatmır.",
    "достигли базы по чтению": "oxu üzrə baza səviyyəsinə çatıb",
    "вышли на высокий уровень": "yüksək səviyyəyə çatıb",
    "Из 12,4 лет учёбы в реальные знания превращаются 8,3": "12,4 illik təhsilin yalnız 8,3 ili real biliyə çevrilir",
    "формального образования теряются из-за качества усвоения.": "formal təhsil mənimsəmə keyfiyyətinə görə itirilir.",
    "Условия жизни слишком сильно решают за ребёнка": "Uşağın nəticəsini yaşayış şəraiti həddindən artıq müəyyən edir",
    "Доход семьи даёт разрыв примерно в три года обучения": "Ailənin gəliri təxminən üç tədris ili fərq yaradır",
    "Азербайджан — 63-й из 166 стран по образовательному капиталу": "Azərbaycan təhsil kapitalına görə 166 ölkə arasında 63-cü yerdədir",
    "В ограниченном онлайн-тесте мы не впереди": "Məhdud onlayn testdə ön sıralarda deyilik",
    "Среднее OECD": "OECD ortalaması",
    "Лидер (B-S-J-Z, Китай)": "Lider (B-S-J-Z, Çin)",
    "Лидер: B-S-J-Z (Китай)": "Lider: B-S-J-Z (Çin)",
    "Эстония": "Estoniya",
    "Турция": "Türkiyə",
    "Монголия": "Monqolustan",
    "Куба": "Kuba",
    "Китай": "Çin",
    "Сейшелы": "Seyşel adaları",
    "Саудовская Аравия": "Səudiyyə Ərəbistanı",
    "Албания": "Albaniya",
    "Малайзия": "Malayziya",
    "Мальта": "Malta",
    "Бруней": "Bruney",
    "Греция": "Yunanıstan",
    "Молдова": "Moldova",
    "Таиланд": "Tailand",
    "Япония": "Yaponiya",
    "Южная Корея": "Cənubi Koreya",
    "Гонконг": "Honkonq",
    "Ирландия": "İrlandiya",
    "Северная Македония": "Şimali Makedoniya",
    "94-е место по инновациям. По результатам — 112-е": "İnnovasiyalar üzrə 94-cü yer. Nəticələr üzrə isə 112-ci",
    "Азербайджан находится в нижней трети рейтинга инновационных систем.": "Azərbaycan innovasiya sistemləri reytinqinin aşağı üçdəbirindədir.",
    "условия для инноваций": "innovasiya üçün şərait",
    "результаты инноваций": "innovasiya nəticələri",
    "Знания, технологии и творческие продукты превращаются в результат хуже, чем позволяют исходные условия.": "Bilik, texnologiya və yaradıcı məhsullar mövcud şəraitin imkan verdiyindən daha zəif nəticəyə çevrilir.",
    "Современный мир нельзя объяснить четырьмя школьными предметами": "Müasir dünyanı dörd məktəb fənni ilə izah etmək mümkün deyil",
    "Это не шесть программ. Это десятки повторяемых механик": "Söhbət altı proqramdan yox, onlarla təkrarlanan formatdan gedir",
    "Что будет, если…": "Əgər… nə baş verər?",
    "Мифы не заканчиваются астрологией": "Miflər astrologiya ilə bitmir",
    "Наведите или нажмите на тему": "Mövzunun üzərinə gəlin və ya klikləyin",
    "Наведите или нажмите на рубрику": "Rubrikanın üzərinə gəlin və ya klikləyin",
    "Наведите: тезис, проверка, источник": "Üzərinə gəlin: iddia, yoxlama, mənbə",
    "Подробности": "Ətraflı",
    "Закрыть": "Bağla"
  };
  const translations = Object.assign({}, window.DECK_TRANSLATIONS || {}, overrides);
  const originals = new WeakMap();
  const datasetOriginals = new WeakMap();
  let language = "az";

  function textNodes() {
    const result = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const parent = node.parentElement;
      if (!parent || parent.closest("script,style")) continue;
      if (!node.nodeValue.trim()) continue;
      result.push(node);
    }
    return result;
  }

  function translateText(value) {
    const leading = value.match(/^\s*/)?.[0] || "";
    const trailing = value.match(/\s*$/)?.[0] || "";
    const core = value.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
    return leading + (translations[core] || core) + trailing;
  }

  function applyLanguage(next) {
    language = next;
    textNodes().forEach((node) => {
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      const original = originals.get(node);
      node.nodeValue = language === "az" ? translateText(original) : original;
    });
    document.querySelectorAll("[data-title],[data-detail],[data-source-label]").forEach((element) => {
      if (!datasetOriginals.has(element)) datasetOriginals.set(element, {
        title: element.dataset.title || "",
        detail: element.dataset.detail || "",
        sourceLabel: element.dataset.sourceLabel || ""
      });
      const original = datasetOriginals.get(element);
      element.dataset.title = language === "az" ? (translations[original.title] || original.title) : original.title;
      element.dataset.detail = language === "az" ? (translations[original.detail] || original.detail) : original.detail;
      element.dataset.sourceLabel = language === "az" ? (translations[original.sourceLabel] || original.sourceLabel) : original.sourceLabel;
    });
    document.documentElement.lang = language;
    const chip = document.querySelector("#language-chip");
    if (chip) chip.textContent = language.toUpperCase();
    parent.postMessage({ source: "knowledge-deck", type: "language", language }, "*");
  }

  function toggleLanguage() {
    applyLanguage(language === "az" ? "ru" : "az");
  }

  window.addEventListener("keydown", (event) => {
    if (event.code !== "KeyM" || event.ctrlKey || event.metaKey || event.altKey || event.repeat) return;
    event.preventDefault();
    toggleLanguage();
  }, true);
  window.addEventListener("message", (event) => {
    if (event.data?.source === "knowledge-deck" && event.data?.type === "toggle-language") toggleLanguage();
  });
  window.deckLanguage = { toggle: toggleLanguage, set: applyLanguage, get: () => language };
  applyLanguage("az");
})();
