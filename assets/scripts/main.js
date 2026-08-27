/* ==========================================================================
   Page behaviour: the language switch and the theme toggle.

   Both settings are already resolved and applied by the boot script in
   index.html before first paint; this file only reads what it decided, wires
   up the buttons, and persists later choices. Depends on TRANSLATIONS from
   assets/scripts/translations.js, which loads first.
   ========================================================================== */

(function () {
  "use strict";

  /* Repeated in the boot script in index.html, which has to run before this
     file loads. Keep the two in sync. */
  const STORAGE_KEY_LANG = "lang";
  const STORAGE_KEY_THEME = "theme";

  /* Matches <meta name="theme-color">, which follows the active palette. */
  const THEME_COLOR_TOKEN = "--color-bg";

  const root = document.documentElement;

  /* The English copy, captured before the first translation overwrites it.
     Switching back to English restores from here. */
  const translatable = document.querySelectorAll("[data-i18n]");
  const englishCopy = new Map();
  translatable.forEach((node) => englishCopy.set(node, node.innerHTML));

  /**
   * Render the page in `lang` and remember the choice.
   * Unknown keys fall back to the English copy in the markup.
   */
  function setLang(lang) {
    root.lang = lang;
    const pack = TRANSLATIONS[lang];

    translatable.forEach((node) => {
      const translated = pack && pack[node.dataset.i18n];
      node.innerHTML = translated || englishCopy.get(node);
    });

    /* Links that point at a translated page of their own. */
    document.querySelectorAll("[data-href-lang]").forEach((link) => {
      link.href = link.dataset.hrefLang.replace("{lang}", lang);
    });

    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.setLang === lang));
    });

    store(STORAGE_KEY_LANG, lang);
  }

  /**
   * Switch to the "light" or "dark" palette and remember the choice.
   * The palettes themselves live in assets/styles/tokens.css.
   */
  function setTheme(theme) {
    root.dataset.theme = theme;

    /* Keep the browser chrome on the page's background colour. */
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.content = getComputedStyle(root).getPropertyValue(THEME_COLOR_TOKEN).trim();
    }

    store(STORAGE_KEY_THEME, theme);
  }

  /* Private browsing and blocked storage both throw; the page works without
     persistence, so a failed write is not worth reporting. */
  function store(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      /* ignore */
    }
  }

  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.addEventListener("click", () => setLang(button.dataset.setLang));
  });

  document.querySelector(".theme").addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  document.getElementById("year").textContent = String(new Date().getFullYear());

  /* Apply what the boot script resolved, now that the buttons and the
     theme-color meta can follow along. */
  setLang(root.lang);
  setTheme(root.dataset.theme);
})();
