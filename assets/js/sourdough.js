(function () {
  "use strict";

  var i18n = {
    en: {
      pageTitle: "Easy Sourdough Planner",
      subtitle: "Adjust hydration, starter, and flour mix, then get ingredients and a full baking schedule.",
      themeDark: "Dark mode",
      themeLight: "Light mode",
      reset: "Reset",
      print: "Print Recipe",
      tabRecipe: "Recipe",
      tabSchedule: "Schedule",
      doughSettingsTitle: "Dough Settings",
      doughSettingsText: "Set your dough inputs and tune the recipe.",
      totalFlourLabel: "Total flour (g)",
      loafCountLabel: "Loaf count",
      loafOption1: "1 loaf",
      loafOption2: "2 loaves",
      loafOption3: "3 loaves",
      loafOption4: "4 loaves",
      flourMixLabel: "Flour mix",
      flourOptionWheat: "100% Wheat",
      flourOptionWheatRye: "60% Wheat / 40% Rye",
      flourOptionCountry: "85% Bread Flour / 15% Whole Wheat",
      hydrationLabel: "Hydration",
      starterPercentLabel: "Starter percentage",
      saltPercentLabel: "Salt percentage",
      glanceTitle: "At A Glance",
      glanceText: "Calculated recipe totals.",
      totalDoughLabel: "Total dough",
      perLoafLabel: "Per loaf",
      waterLabel: "Water",
      starterLabel: "Starter",
      ingredientsTitle: "Ingredients",
      ingredientsBasedOn: "Based on {preset}.",
      flourBreakdownTitle: "Flour breakdown",
      prefermentSummary: "Preferment / starter build",
      finalMixSummary: "Final dough mix",
      bakePlanTitle: "Bake Plan",
      bakePlanText: "Choose your bake date/time and the timeline updates automatically.",
      bakeDateLabel: "Bake date",
      bakeTimeLabel: "Bake time",
      starterLeadLabel: "Starter lead time",
      autolyseLabel: "Autolyse",
      bulkLabel: "Bulk fermentation",
      coldProofLabel: "Cold proof",
      timelineTitle: "Timeline",
      timelineText: "A step-by-step plan from starter feed to bake.",
      noteText: "Practical sourdough recipe math with adjustable ingredients and timeline planning.",
      flourWheat: "Wheat flour",
      flourRye: "Rye flour",
      flourBread: "Bread flour",
      flourWholeWheat: "Whole wheat flour",
      matureStarter: "Mature starter",
      flour: "Flour",
      water: "Water",
      salt: "Salt",
      ripeStarter: "Ripe starter",
      stepFeedTitle: "Feed Starter",
      stepFeedDesc: "Feed your starter so it peaks by mixing time.",
      stepAutolyseTitle: "Autolyse",
      stepAutolyseDesc: "Mix flour and water, then rest before adding starter and salt.",
      stepBulkTitle: "Bulk Fermentation",
      stepBulkDesc: "Add starter and salt, then ferment at room temperature.",
      stepColdTitle: "Cold Proof",
      stepColdDesc: "Shape the dough, refrigerate, and bake straight from cold.",
      stepBakeTitle: "Bake",
      stepBakeDesc: "Score, steam, and bake until deeply browned.",
      hourShort: "h"
    },
    de: {
      pageTitle: "Einfacher Sauerteig-Planer",
      subtitle: "Passe Hydration, Starter und Mehlmischung an und erhalte Zutaten sowie einen kompletten Backplan.",
      themeDark: "Dunkelmodus",
      themeLight: "Hellmodus",
      reset: "Zuruecksetzen",
      print: "Drucken",
      tabRecipe: "Rezept",
      tabSchedule: "Zeitplan",
      doughSettingsTitle: "Teig-Einstellungen",
      doughSettingsText: "Stelle die Teigwerte ein und passe das Rezept an.",
      totalFlourLabel: "Gesamtmehl (g)",
      loafCountLabel: "Anzahl Brote",
      loafOption1: "1 Brot",
      loafOption2: "2 Brote",
      loafOption3: "3 Brote",
      loafOption4: "4 Brote",
      flourMixLabel: "Mehlmischung",
      flourOptionWheat: "100% Weizen",
      flourOptionWheatRye: "60% Weizen / 40% Roggen",
      flourOptionCountry: "85% Brotmehl / 15% Vollkornweizen",
      hydrationLabel: "Hydration",
      starterPercentLabel: "Starter-Anteil",
      saltPercentLabel: "Salz-Anteil",
      glanceTitle: "Uebersicht",
      glanceText: "Berechnete Rezeptwerte.",
      totalDoughLabel: "Gesamtteig",
      perLoafLabel: "Pro Brot",
      waterLabel: "Wasser",
      starterLabel: "Starter",
      ingredientsTitle: "Zutaten",
      ingredientsBasedOn: "Basierend auf {preset}.",
      flourBreakdownTitle: "Mehl-Aufteilung",
      prefermentSummary: "Vorteig / Starter-Aufbau",
      finalMixSummary: "Finaler Teigmix",
      bakePlanTitle: "Backplan",
      bakePlanText: "Waehle Backdatum und Uhrzeit, der Zeitplan wird automatisch aktualisiert.",
      bakeDateLabel: "Backdatum",
      bakeTimeLabel: "Backzeit",
      starterLeadLabel: "Starter-Vorlauf",
      autolyseLabel: "Autolyse",
      bulkLabel: "Stockgare",
      coldProofLabel: "Kalte Gare",
      timelineTitle: "Zeitablauf",
      timelineText: "Schritt-fuer-Schritt vom Starter bis zum Backen.",
      noteText: "Praktische Sauerteig-Rezeptberechnung mit anpassbaren Zutaten und Zeitplanung.",
      flourWheat: "Weizenmehl",
      flourRye: "Roggenmehl",
      flourBread: "Brotmehl",
      flourWholeWheat: "Vollkornweizenmehl",
      matureStarter: "Reifer Starter",
      flour: "Mehl",
      water: "Wasser",
      salt: "Salz",
      ripeStarter: "Reifer Starter",
      stepFeedTitle: "Starter fuettern",
      stepFeedDesc: "Fuettere den Starter so, dass er zum Mischzeitpunkt den Peak erreicht.",
      stepAutolyseTitle: "Autolyse",
      stepAutolyseDesc: "Mehl und Wasser mischen, dann vor Zugabe von Starter und Salz ruhen lassen.",
      stepBulkTitle: "Stockgare",
      stepBulkDesc: "Starter und Salz einarbeiten, dann bei Raumtemperatur fermentieren.",
      stepColdTitle: "Kalte Gare",
      stepColdDesc: "Teig formen, kuehlen und direkt aus dem Kuehlschrank backen.",
      stepBakeTitle: "Backen",
      stepBakeDesc: "Einschneiden, schwaden und bis zur kraeftigen Braeunung backen.",
      hourShort: "Std."
    }
  };

  var flourLabels = {
    en: {
      wheat: "100% Wheat",
      "wheat-rye": "60% Wheat / 40% Rye",
      country: "85% Bread Flour / 15% Whole Wheat"
    },
    de: {
      wheat: "100% Weizen",
      "wheat-rye": "60% Weizen / 40% Roggen",
      country: "85% Brotmehl / 15% Vollkornweizen"
    }
  };

  function getInitialLang() {
    var stored = localStorage.getItem("sourdough_lang");
    return stored === "de" ? "de" : "en";
  }

  function getInitialTheme() {
    var stored = localStorage.getItem("sourdough_theme");
    if (stored === "dark" || stored === "light") {
      return stored;
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function createDefaultState() {
    var now = new Date();
    var bake = new Date(now);
    bake.setDate(bake.getDate() + 2);
    bake.setHours(10, 0, 0, 0);

    return {
      lang: getInitialLang(),
      theme: getInitialTheme(),
      bakeDate: bake.toISOString().slice(0, 10),
      bakeTime: "10:00",
      totalFlour: 1000,
      hydration: 70,
      starterPercent: 26,
      saltPercent: 2,
      loafCount: 2,
      coldFermentHours: 20,
      autolyseHours: 1,
      bulkHours: 5,
      starterLeadHours: 12,
      flourPreset: "wheat-rye"
    };
  }

  function addHours(date, hours) {
    return new Date(date.getTime() + hours * 60 * 60 * 1000);
  }

  function localeForLang(lang) {
    return lang === "de" ? "de-DE" : "en-GB";
  }

  function formatDate(date, lang) {
    return date.toLocaleDateString(localeForLang(lang), {
      weekday: "short",
      day: "2-digit",
      month: "short"
    });
  }

  function formatTime(date, lang) {
    return date.toLocaleTimeString(localeForLang(lang), {
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  function round(n) {
    return Math.round(n);
  }

  function toNumber(value, fallback) {
    var n = Number(value);
    return Number.isFinite(n) ? n : fallback;
  }

  function template(str, map) {
    return str.replace(/\{(\w+)\}/g, function (_, key) {
      return Object.prototype.hasOwnProperty.call(map, key) ? map[key] : "";
    });
  }

  var state = createDefaultState();

  var refs = {
    html: document.documentElement,
    titleTag: document.querySelector("title"),
    titleText: document.getElementById("titleText"),
    subtitleText: document.getElementById("subtitleText"),
    resetButton: document.getElementById("resetButton"),
    printButton: document.getElementById("printButton"),
    themeToggleButton: document.getElementById("themeToggleButton"),
    langEnButton: document.getElementById("langEnButton"),
    langDeButton: document.getElementById("langDeButton"),
    tabRecipeButton: document.getElementById("tabRecipeButton"),
    tabScheduleButton: document.getElementById("tabScheduleButton"),
    doughSettingsTitle: document.getElementById("doughSettingsTitle"),
    doughSettingsText: document.getElementById("doughSettingsText"),
    totalFlourLabel: document.getElementById("totalFlourLabel"),
    loafCountLabel: document.getElementById("loafCountLabel"),
    loafOption1: document.getElementById("loafOption1"),
    loafOption2: document.getElementById("loafOption2"),
    loafOption3: document.getElementById("loafOption3"),
    loafOption4: document.getElementById("loafOption4"),
    flourMixLabel: document.getElementById("flourMixLabel"),
    flourOptionWheat: document.getElementById("flourOptionWheat"),
    flourOptionWheatRye: document.getElementById("flourOptionWheatRye"),
    flourOptionCountry: document.getElementById("flourOptionCountry"),
    hydrationLabel: document.getElementById("hydrationLabel"),
    starterPercentLabel: document.getElementById("starterPercentLabel"),
    saltPercentLabel: document.getElementById("saltPercentLabel"),
    glanceTitle: document.getElementById("glanceTitle"),
    glanceText: document.getElementById("glanceText"),
    totalDoughLabel: document.getElementById("totalDoughLabel"),
    perLoafLabel: document.getElementById("perLoafLabel"),
    waterLabel: document.getElementById("waterLabel"),
    starterLabel: document.getElementById("starterLabel"),
    ingredientsTitle: document.getElementById("ingredientsTitle"),
    ingredientsMuted: document.getElementById("ingredientsMuted"),
    flourBreakdownTitle: document.getElementById("flourBreakdownTitle"),
    prefermentSummary: document.getElementById("prefermentSummary"),
    finalMixSummary: document.getElementById("finalMixSummary"),
    bakePlanTitle: document.getElementById("bakePlanTitle"),
    bakePlanText: document.getElementById("bakePlanText"),
    bakeDateLabel: document.getElementById("bakeDateLabel"),
    bakeTimeLabel: document.getElementById("bakeTimeLabel"),
    starterLeadLabel: document.getElementById("starterLeadLabel"),
    autolyseLabel: document.getElementById("autolyseLabel"),
    bulkLabel: document.getElementById("bulkLabel"),
    coldProofLabel: document.getElementById("coldProofLabel"),
    timelineTitle: document.getElementById("timelineTitle"),
    timelineText: document.getElementById("timelineText"),
    noteText: document.getElementById("noteText"),
    totalFlourInput: document.getElementById("totalFlourInput"),
    loafCountSelect: document.getElementById("loafCountSelect"),
    flourPresetSelect: document.getElementById("flourPresetSelect"),
    hydrationRange: document.getElementById("hydrationRange"),
    hydrationValue: document.getElementById("hydrationValue"),
    starterRange: document.getElementById("starterRange"),
    starterValue: document.getElementById("starterValue"),
    saltRange: document.getElementById("saltRange"),
    saltValue: document.getElementById("saltValue"),
    bakeDateInput: document.getElementById("bakeDateInput"),
    bakeTimeInput: document.getElementById("bakeTimeInput"),
    starterLeadRange: document.getElementById("starterLeadRange"),
    starterLeadValue: document.getElementById("starterLeadValue"),
    autolyseRange: document.getElementById("autolyseRange"),
    autolyseValue: document.getElementById("autolyseValue"),
    bulkRange: document.getElementById("bulkRange"),
    bulkValue: document.getElementById("bulkValue"),
    coldRange: document.getElementById("coldRange"),
    coldValue: document.getElementById("coldValue"),
    totalDoughOutput: document.getElementById("totalDoughOutput"),
    perLoafOutput: document.getElementById("perLoafOutput"),
    waterOutput: document.getElementById("waterOutput"),
    starterOutput: document.getElementById("starterOutput"),
    flourBreakdownList: document.getElementById("flourBreakdownList"),
    prefermentList: document.getElementById("prefermentList"),
    finalMixList: document.getElementById("finalMixList"),
    timelineList: document.getElementById("timelineList")
  };

  function t(key) {
    return i18n[state.lang][key] || i18n.en[key] || key;
  }

  function setText(refKey, textKey) {
    refs[refKey].textContent = t(textKey);
  }

  function applyTranslations() {
    refs.html.setAttribute("lang", state.lang === "de" ? "de" : "en");
    refs.titleTag.textContent = t("pageTitle");

    setText("titleText", "pageTitle");
    setText("subtitleText", "subtitle");
    setText("resetButton", "reset");
    setText("printButton", "print");
    setText("tabRecipeButton", "tabRecipe");
    setText("tabScheduleButton", "tabSchedule");
    setText("doughSettingsTitle", "doughSettingsTitle");
    setText("doughSettingsText", "doughSettingsText");
    setText("totalFlourLabel", "totalFlourLabel");
    setText("loafCountLabel", "loafCountLabel");
    setText("loafOption1", "loafOption1");
    setText("loafOption2", "loafOption2");
    setText("loafOption3", "loafOption3");
    setText("loafOption4", "loafOption4");
    setText("flourMixLabel", "flourMixLabel");
    setText("flourOptionWheat", "flourOptionWheat");
    setText("flourOptionWheatRye", "flourOptionWheatRye");
    setText("flourOptionCountry", "flourOptionCountry");
    setText("hydrationLabel", "hydrationLabel");
    setText("starterPercentLabel", "starterPercentLabel");
    setText("saltPercentLabel", "saltPercentLabel");
    setText("glanceTitle", "glanceTitle");
    setText("glanceText", "glanceText");
    setText("totalDoughLabel", "totalDoughLabel");
    setText("perLoafLabel", "perLoafLabel");
    setText("waterLabel", "waterLabel");
    setText("starterLabel", "starterLabel");
    setText("ingredientsTitle", "ingredientsTitle");
    setText("flourBreakdownTitle", "flourBreakdownTitle");
    setText("prefermentSummary", "prefermentSummary");
    setText("finalMixSummary", "finalMixSummary");
    setText("bakePlanTitle", "bakePlanTitle");
    setText("bakePlanText", "bakePlanText");
    setText("bakeDateLabel", "bakeDateLabel");
    setText("bakeTimeLabel", "bakeTimeLabel");
    setText("starterLeadLabel", "starterLeadLabel");
    setText("autolyseLabel", "autolyseLabel");
    setText("bulkLabel", "bulkLabel");
    setText("coldProofLabel", "coldProofLabel");
    setText("timelineTitle", "timelineTitle");
    setText("timelineText", "timelineText");
    setText("noteText", "noteText");

    refs.langEnButton.classList.toggle("is-active", state.lang === "en");
    refs.langDeButton.classList.toggle("is-active", state.lang === "de");
  }

  function applyThemeUI() {
    refs.html.setAttribute("data-sourdough-theme", state.theme);
    refs.themeToggleButton.textContent = state.theme === "dark" ? t("themeLight") : t("themeDark");
  }

  function computeRecipe() {
    var flour = state.totalFlour;
    var water = flour * (state.hydration / 100);
    var starter = flour * (state.starterPercent / 100);
    var salt = flour * (state.saltPercent / 100);
    var totalDough = flour + water + starter + salt;
    var perLoaf = totalDough / Math.max(state.loafCount, 1);

    var flourBreakdown = [{ name: t("flourWheat"), grams: flour }];
    if (state.flourPreset === "wheat-rye") {
      flourBreakdown = [
        { name: t("flourWheat"), grams: flour * 0.6 },
        { name: t("flourRye"), grams: flour * 0.4 }
      ];
    }
    if (state.flourPreset === "country") {
      flourBreakdown = [
        { name: t("flourBread"), grams: flour * 0.85 },
        { name: t("flourWholeWheat"), grams: flour * 0.15 }
      ];
    }

    var starterFlour = starter / 2;
    var starterWater = starter / 2;
    var finalMixFlour = flour - starterFlour;
    var finalMixWater = water - starterWater;

    return {
      water: water,
      starter: starter,
      totalDough: totalDough,
      perLoaf: perLoaf,
      flourBreakdown: flourBreakdown.map(function (item) {
        return { name: item.name, grams: round(item.grams) };
      }),
      preferment: [
        { name: t("matureStarter"), grams: round(starter * 0.2) },
        { name: t("flour"), grams: round(starterFlour * 0.8) },
        { name: t("water"), grams: round(starterWater * 0.8) }
      ],
      finalMix: [
        { name: t("flour"), grams: round(finalMixFlour) },
        { name: t("water"), grams: round(finalMixWater) },
        { name: t("salt"), grams: round(salt) },
        { name: t("ripeStarter"), grams: round(starter) }
      ]
    };
  }

  function computeTimeline() {
    var bakeDateTime = new Date(state.bakeDate + "T" + state.bakeTime + ":00");
    var bake = Number.isNaN(bakeDateTime.getTime()) ? new Date() : bakeDateTime;
    var coldStart = addHours(bake, -state.coldFermentHours);
    var shapeTime = addHours(coldStart, -0.5);
    var bulkStart = addHours(shapeTime, -state.bulkHours);
    var autolyseStart = addHours(bulkStart, -state.autolyseHours);
    var starterFeed = addHours(autolyseStart, -state.starterLeadHours);

    return [
      {
        icon: "🌱",
        title: t("stepFeedTitle"),
        description: t("stepFeedDesc"),
        date: starterFeed
      },
      {
        icon: "💧",
        title: t("stepAutolyseTitle"),
        description: t("stepAutolyseDesc"),
        date: autolyseStart
      },
      {
        icon: "☀️",
        title: t("stepBulkTitle"),
        description: t("stepBulkDesc"),
        date: bulkStart
      },
      {
        icon: "❄️",
        title: t("stepColdTitle") + " - " + state.coldFermentHours + t("hourShort"),
        description: t("stepColdDesc"),
        date: coldStart
      },
      {
        icon: "🔥",
        title: t("stepBakeTitle"),
        description: t("stepBakeDesc"),
        date: bake
      }
    ];
  }

  function renderRows(element, rows) {
    element.innerHTML = rows
      .map(function (item) {
        return "<li><span>" + item.name + "</span><strong>" + item.grams + " g</strong></li>";
      })
      .join("");
  }

  function renderTimeline(items) {
    refs.timelineList.innerHTML = items
      .map(function (item) {
        return (
          "<li class=\"timeline-item\">" +
          "<div>" +
          "<h3>" + item.icon + " " + item.title + "</h3>" +
          "<p>" + item.description + "</p>" +
          "</div>" +
          "<div class=\"timeline-time\">" +
          "<strong>" + formatTime(item.date, state.lang) + "</strong>" +
          "<span>" + formatDate(item.date, state.lang) + "</span>" +
          "</div>" +
          "</li>"
        );
      })
      .join("");
  }

  function syncControls() {
    refs.totalFlourInput.value = String(state.totalFlour);
    refs.loafCountSelect.value = String(state.loafCount);
    refs.flourPresetSelect.value = state.flourPreset;
    refs.hydrationRange.value = String(state.hydration);
    refs.starterRange.value = String(state.starterPercent);
    refs.saltRange.value = String(state.saltPercent);
    refs.bakeDateInput.value = state.bakeDate;
    refs.bakeTimeInput.value = state.bakeTime;
    refs.starterLeadRange.value = String(state.starterLeadHours);
    refs.autolyseRange.value = String(state.autolyseHours);
    refs.bulkRange.value = String(state.bulkHours);
    refs.coldRange.value = String(state.coldFermentHours);

    refs.hydrationValue.textContent = state.hydration + "%";
    refs.starterValue.textContent = state.starterPercent + "%";
    refs.saltValue.textContent = state.saltPercent + "%";
    refs.starterLeadValue.textContent = state.starterLeadHours + t("hourShort");
    refs.autolyseValue.textContent = state.autolyseHours + t("hourShort");
    refs.bulkValue.textContent = state.bulkHours + t("hourShort");
    refs.coldValue.textContent = state.coldFermentHours + t("hourShort");
  }

  function render() {
    applyTranslations();
    applyThemeUI();
    syncControls();

    var recipe = computeRecipe();
    var timeline = computeTimeline();
    var preset = flourLabels[state.lang][state.flourPreset];

    refs.totalDoughOutput.textContent = round(recipe.totalDough) + " g";
    refs.perLoafOutput.textContent = round(recipe.perLoaf) + " g";
    refs.waterOutput.textContent = round(recipe.water) + " g";
    refs.starterOutput.textContent = round(recipe.starter) + " g";
    refs.ingredientsMuted.textContent = template(t("ingredientsBasedOn"), { preset: preset });

    renderRows(refs.flourBreakdownList, recipe.flourBreakdown);
    renderRows(refs.prefermentList, recipe.preferment);
    renderRows(refs.finalMixList, recipe.finalMix);
    renderTimeline(timeline);
  }

  function wireTabs() {
    var tabs = document.querySelectorAll("[data-tab-target]");
    var panels = document.querySelectorAll("[data-tab-panel]");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var target = tab.getAttribute("data-tab-target");
        tabs.forEach(function (button) {
          var active = button === tab;
          button.classList.toggle("is-active", active);
          button.setAttribute("aria-selected", active ? "true" : "false");
        });
        panels.forEach(function (panel) {
          panel.classList.toggle("is-active", panel.getAttribute("data-tab-panel") === target);
        });
      });
    });
  }

  function wireControls() {
    refs.totalFlourInput.addEventListener("input", function () {
      state.totalFlour = Math.max(100, toNumber(refs.totalFlourInput.value, 1000));
      render();
    });

    refs.loafCountSelect.addEventListener("change", function () {
      state.loafCount = Math.max(1, toNumber(refs.loafCountSelect.value, 2));
      render();
    });

    refs.flourPresetSelect.addEventListener("change", function () {
      state.flourPreset = refs.flourPresetSelect.value;
      render();
    });

    refs.hydrationRange.addEventListener("input", function () {
      state.hydration = toNumber(refs.hydrationRange.value, 70);
      render();
    });

    refs.starterRange.addEventListener("input", function () {
      state.starterPercent = toNumber(refs.starterRange.value, 26);
      render();
    });

    refs.saltRange.addEventListener("input", function () {
      state.saltPercent = toNumber(refs.saltRange.value, 2);
      render();
    });

    refs.bakeDateInput.addEventListener("change", function () {
      state.bakeDate = refs.bakeDateInput.value || state.bakeDate;
      render();
    });

    refs.bakeTimeInput.addEventListener("change", function () {
      state.bakeTime = refs.bakeTimeInput.value || state.bakeTime;
      render();
    });

    refs.starterLeadRange.addEventListener("input", function () {
      state.starterLeadHours = toNumber(refs.starterLeadRange.value, 12);
      render();
    });

    refs.autolyseRange.addEventListener("input", function () {
      state.autolyseHours = toNumber(refs.autolyseRange.value, 1);
      render();
    });

    refs.bulkRange.addEventListener("input", function () {
      state.bulkHours = toNumber(refs.bulkRange.value, 5);
      render();
    });

    refs.coldRange.addEventListener("input", function () {
      state.coldFermentHours = toNumber(refs.coldRange.value, 20);
      render();
    });

    refs.resetButton.addEventListener("click", function () {
      var lang = state.lang;
      var theme = state.theme;
      state = createDefaultState();
      state.lang = lang;
      state.theme = theme;
      render();
    });

    refs.printButton.addEventListener("click", function () {
      window.print();
    });

    refs.langEnButton.addEventListener("click", function () {
      state.lang = "en";
      localStorage.setItem("sourdough_lang", "en");
      render();
    });

    refs.langDeButton.addEventListener("click", function () {
      state.lang = "de";
      localStorage.setItem("sourdough_lang", "de");
      render();
    });

    refs.themeToggleButton.addEventListener("click", function () {
      state.theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("sourdough_theme", state.theme);
      render();
    });
  }

  wireTabs();
  wireControls();
  render();
})();
