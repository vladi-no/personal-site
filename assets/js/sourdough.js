// Loaded as a module (deferred, strict mode).
const i18n = {
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
        hydrationLabel: "Dough hydration",
        starterPercentLabel: "Prefermented flour",
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
        timelineText: "Step-by-step baking script with practical cues.",
        noteText: "Baker's percentages: starter assumes 100% hydration, and starter percentage is prefermented flour.",
        phaseEvening: "Evening",
        phaseMainDay: "Main Day",
        phaseBakeDay: "Bake Day",
        phaseColdProof: "Cold Proof",
        dayLabel: "Day",
        timelineDurUntil: "until {time} (~{hours}h)",
        flourWheat: "Wheat flour",
        flourRye: "Rye flour",
        flourBread: "Bread flour",
        flourWholeWheat: "Whole wheat flour",
        matureStarter: "Mature starter",
        flour: "Flour",
        water: "Water",
        salt: "Salt",
        ripeStarter: "Ripe starter",
        stepFeedTitle: "Build starter",
        stepFeedDesc: "Use ratio 1:6:6 (for example 20g starter + 120g flour + 120g water) so it peaks before autolyse.",
        stepStarterCheckTitle: "Starter check",
        stepStarterCheckDesc: "Should be doubled and bubbly. If weak, give it 20-30 min in a warmer spot.",
        stepAutolyseTitle: "Autolyse",
        stepAutolyseDesc: "Mix flour and water only. Rest dough before starter and salt.",
        stepAddStarterTitle: "Add starter + salt",
        stepAddStarterDesc: "Fold in ripe starter and salt until evenly combined, then let dough relax.",
        stepStretchFoldTitle: "Stretch & fold",
        stepStretchFoldDesc: "Do 3-4 rounds, each 30 min apart, until dough gains strength.",
        stepJiggleTitle: "Jiggle test",
        stepJiggleDesc: "Dough should wobble and pull from the bowl edges before shaping.",
        stepShapeTitle: "Shape",
        stepShapeDesc: "Pre-shape, bench rest, final shape, then place in proofing basket seam up.",
        stepColdTitle: "Cold Proof",
        stepColdDesc: "Refrigerate covered. Bake directly from cold for best scoring control.",
        stepPreheatTitle: "Preheat oven",
        stepPreheatDesc: "Preheat oven and dutch oven to 250 C at least 1 hour before bake.",
        stepBakeTitle: "Bake",
        stepBakeDesc: "Score, load into hot pot, add steam, bake 35 min at 250 C with lid, then 15-20 min at 200 C without lid.",
        stepCoolTitle: "Cool down",
        stepCoolDesc: "Cool on rack at least 1-2 hours before slicing.",
        durQuickCheck: "quick check right before autolyse",
        durAutolyse: "rest 30-60 min",
        durAddStarter: "mix + rest 30-60 min",
        durStretchFold: "3-4 rounds, every 30 min",
        durJiggle: "target: about 1h before shaping",
        durShape: "about 30 min total",
        durCold: "{hours}h",
        durPreheat: "start 1h before bake",
        durBake: "50-55 min",
        durCool: "1-2h",
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
        hydrationLabel: "Teig-Hydration",
        starterPercentLabel: "Versaeuertes Mehl",
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
        timelineText: "Schritt-fuer-Schritt Backskript mit praktischen Hinweisen.",
        noteText: "Baeckerprozente: Starter mit 100% Hydration, Starter-Prozent entspricht versaeuertem Mehl.",
        phaseEvening: "Vorabend",
        phaseMainDay: "Haupttag",
        phaseBakeDay: "Backtag",
        phaseColdProof: "Kalte Gare",
        dayLabel: "Tag",
        timelineDurUntil: "bis {time} (~{hours}Std.)",
        flourWheat: "Weizenmehl",
        flourRye: "Roggenmehl",
        flourBread: "Brotmehl",
        flourWholeWheat: "Vollkornweizenmehl",
        matureStarter: "Reifer Starter",
        flour: "Mehl",
        water: "Wasser",
        salt: "Salz",
        ripeStarter: "Reifer Starter",
        stepFeedTitle: "Starter ansetzen",
        stepFeedDesc: "Ratio 1:6:6 (z.B. 20g Starter + 120g Mehl + 120g Wasser), damit er vor der Autolyse am Peak ist.",
        stepStarterCheckTitle: "Starter-Check",
        stepStarterCheckDesc: "Sollte verdoppelt und blubbrig sein. Falls trage: 20-30 Min waermer stellen.",
        stepAutolyseTitle: "Autolyse",
        stepAutolyseDesc: "Nur Mehl und Wasser mischen. Vor Starter und Salz ruhen lassen.",
        stepAddStarterTitle: "Starter + Salz einarbeiten",
        stepAddStarterDesc: "Reifen Starter und Salz gleichmaessig einarbeiten, dann Teig entspannen lassen.",
        stepStretchFoldTitle: "Stretch & Fold",
        stepStretchFoldDesc: "3-4 Runden mit je 30 Min Abstand, bis der Teig Spannung aufbaut.",
        stepJiggleTitle: "Wackelpudding-Test",
        stepJiggleDesc: "Teig sollte wackeln und sich vom Schuesselrand loesen, erst dann formen.",
        stepShapeTitle: "Formen",
        stepShapeDesc: "Vorformen, Bankruhe, final formen, dann mit Schluss nach oben ins Gaerkorb.",
        stepColdTitle: "Kalte Gare",
        stepColdDesc: "Abgedeckt im Kuehlschrank lagern und direkt kalt backen.",
        stepPreheatTitle: "Ofen vorheizen",
        stepPreheatDesc: "Ofen und Topf mindestens 1 Stunde auf 250 C vorheizen.",
        stepBakeTitle: "Backen",
        stepBakeDesc: "Einschneiden, in heissen Topf setzen, schwaden: 35 Min bei 250 C mit Deckel, dann 15-20 Min bei 200 C ohne Deckel.",
        stepCoolTitle: "Auskuehlen",
        stepCoolDesc: "Vor dem Anschneiden mindestens 1-2 Stunden auf Gitter auskuehlen lassen.",
        durQuickCheck: "kurzer Check direkt vor Autolyse",
        durAutolyse: "30-60 Min Ruhe",
        durAddStarter: "mischen + 30-60 Min Ruhe",
        durStretchFold: "3-4 Runden, alle 30 Min",
        durJiggle: "Ziel: etwa 1h vor Formen",
        durShape: "insgesamt ca. 30 Min",
        durCold: "{hours}Std.",
        durPreheat: "1h vor Backen starten",
        durBake: "50-55 Min",
        durCool: "1-2h",
        hourShort: "Std."
    }
};

const flourLabels = {
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

// Storage can throw (privacy modes, blocked site data); treat that as "nothing saved".
const readStorage = (key) => {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
};

const writeStorage = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch { }
};

// YYYY-MM-DD in local time (toISOString() would give the UTC date).
const toLocalDateString = (date) =>
    [date.getFullYear(), date.getMonth() + 1, date.getDate()]
        .map((part, i) => String(part).padStart(i === 0 ? 4 : 2, "0"))
        .join("-");

function getInitialLang() {
    const stored = readStorage("sourdough_lang");
    return stored === "de" ? "de" : "en";
}

function getInitialTheme() {
    const stored = readStorage("sourdough_theme");
    if (stored === "dark" || stored === "light") {
        return stored;
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }
    return "light";
}

function createDefaultState() {
    const now = new Date();
    const bake = new Date(now);
    bake.setDate(bake.getDate() + 2);
    bake.setHours(10, 0, 0, 0);

    return {
        lang: getInitialLang(),
        theme: getInitialTheme(),
        bakeDate: toLocalDateString(bake),
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

const addHours = (date, hours) => new Date(date.getTime() + hours * 60 * 60 * 1000);

const localeForLang = (lang) => (lang === "de" ? "de-DE" : "en-GB");

const formatDate = (date, lang) =>
    date.toLocaleDateString(localeForLang(lang), {
        weekday: "short",
        day: "2-digit",
        month: "short"
    });

const formatTime = (date, lang) =>
    date.toLocaleTimeString(localeForLang(lang), {
        hour: "2-digit",
        minute: "2-digit"
    });

const startOfDay = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
};

const round = (n) => Math.round(n);

const toNumber = (value, fallback) => {
    const n = Number(value);
    return Number.isFinite(n) ? n : fallback;
};

const template = (str, map) =>
    str.replace(/\{(\w+)\}/g, (_, key) => (Object.hasOwn(map, key) ? map[key] : ""));

let state = createDefaultState();

const byId = (id) => document.getElementById(id);

const refs = {
    html: document.documentElement,
    titleTag: document.querySelector("title"),
    titleText: byId("titleText"),
    subtitleText: byId("subtitleText"),
    resetButton: byId("resetButton"),
    printButton: byId("printButton"),
    themeToggleButton: byId("themeToggleButton"),
    langEnButton: byId("langEnButton"),
    langDeButton: byId("langDeButton"),
    tabRecipeButton: byId("tabRecipeButton"),
    tabScheduleButton: byId("tabScheduleButton"),
    doughSettingsTitle: byId("doughSettingsTitle"),
    doughSettingsText: byId("doughSettingsText"),
    totalFlourLabel: byId("totalFlourLabel"),
    loafCountLabel: byId("loafCountLabel"),
    loafOption1: byId("loafOption1"),
    loafOption2: byId("loafOption2"),
    loafOption3: byId("loafOption3"),
    loafOption4: byId("loafOption4"),
    flourMixLabel: byId("flourMixLabel"),
    flourOptionWheat: byId("flourOptionWheat"),
    flourOptionWheatRye: byId("flourOptionWheatRye"),
    flourOptionCountry: byId("flourOptionCountry"),
    hydrationLabel: byId("hydrationLabel"),
    starterPercentLabel: byId("starterPercentLabel"),
    saltPercentLabel: byId("saltPercentLabel"),
    glanceTitle: byId("glanceTitle"),
    glanceText: byId("glanceText"),
    totalDoughLabel: byId("totalDoughLabel"),
    perLoafLabel: byId("perLoafLabel"),
    waterLabel: byId("waterLabel"),
    starterLabel: byId("starterLabel"),
    ingredientsTitle: byId("ingredientsTitle"),
    ingredientsMuted: byId("ingredientsMuted"),
    flourBreakdownTitle: byId("flourBreakdownTitle"),
    prefermentSummary: byId("prefermentSummary"),
    finalMixSummary: byId("finalMixSummary"),
    bakePlanTitle: byId("bakePlanTitle"),
    bakePlanText: byId("bakePlanText"),
    bakeDateLabel: byId("bakeDateLabel"),
    bakeTimeLabel: byId("bakeTimeLabel"),
    starterLeadLabel: byId("starterLeadLabel"),
    autolyseLabel: byId("autolyseLabel"),
    bulkLabel: byId("bulkLabel"),
    coldProofLabel: byId("coldProofLabel"),
    timelineTitle: byId("timelineTitle"),
    timelineText: byId("timelineText"),
    noteText: byId("noteText"),
    totalFlourInput: byId("totalFlourInput"),
    loafCountSelect: byId("loafCountSelect"),
    flourPresetSelect: byId("flourPresetSelect"),
    hydrationRange: byId("hydrationRange"),
    hydrationValue: byId("hydrationValue"),
    starterRange: byId("starterRange"),
    starterValue: byId("starterValue"),
    saltRange: byId("saltRange"),
    saltValue: byId("saltValue"),
    bakeDateInput: byId("bakeDateInput"),
    bakeTimeInput: byId("bakeTimeInput"),
    starterLeadRange: byId("starterLeadRange"),
    starterLeadValue: byId("starterLeadValue"),
    autolyseRange: byId("autolyseRange"),
    autolyseValue: byId("autolyseValue"),
    bulkRange: byId("bulkRange"),
    bulkValue: byId("bulkValue"),
    coldRange: byId("coldRange"),
    coldValue: byId("coldValue"),
    totalDoughOutput: byId("totalDoughOutput"),
    perLoafOutput: byId("perLoafOutput"),
    waterOutput: byId("waterOutput"),
    starterOutput: byId("starterOutput"),
    flourBreakdownList: byId("flourBreakdownList"),
    prefermentList: byId("prefermentList"),
    finalMixList: byId("finalMixList"),
    timelineList: byId("timelineList")
};

const t = (key) => i18n[state.lang][key] || i18n.en[key] || key;

// Elements whose text is the translation of the key with the same name.
const translatedRefs = [
    "doughSettingsTitle", "doughSettingsText", "totalFlourLabel", "loafCountLabel",
    "loafOption1", "loafOption2", "loafOption3", "loafOption4",
    "flourMixLabel", "flourOptionWheat", "flourOptionWheatRye", "flourOptionCountry",
    "hydrationLabel", "starterPercentLabel", "saltPercentLabel",
    "glanceTitle", "glanceText", "totalDoughLabel", "perLoafLabel", "waterLabel", "starterLabel",
    "ingredientsTitle", "flourBreakdownTitle", "prefermentSummary", "finalMixSummary",
    "bakePlanTitle", "bakePlanText", "bakeDateLabel", "bakeTimeLabel",
    "starterLeadLabel", "autolyseLabel", "bulkLabel", "coldProofLabel",
    "timelineTitle", "timelineText", "noteText"
];

function applyTranslations() {
    refs.html.setAttribute("lang", state.lang === "de" ? "de" : "en");
    refs.titleTag.textContent = t("pageTitle");

    refs.titleText.textContent = t("pageTitle");
    refs.subtitleText.textContent = t("subtitle");
    refs.resetButton.textContent = t("reset");
    refs.printButton.textContent = t("print");
    refs.tabRecipeButton.textContent = t("tabRecipe");
    refs.tabScheduleButton.textContent = t("tabSchedule");
    for (const key of translatedRefs) {
        refs[key].textContent = t(key);
    }

    refs.langEnButton.classList.toggle("is-active", state.lang === "en");
    refs.langDeButton.classList.toggle("is-active", state.lang === "de");
}

function applyThemeUI() {
    refs.html.setAttribute("data-sourdough-theme", state.theme);
    refs.themeToggleButton.textContent = state.theme === "dark" ? t("themeLight") : t("themeDark");
}

function computeRecipe() {
    const flour = state.totalFlour;
    const totalWater = flour * (state.hydration / 100);
    const prefermentedFlour = flour * (state.starterPercent / 100);
    const starterFlour = prefermentedFlour;
    const starterWater = prefermentedFlour; // 100% hydration starter
    const starter = starterFlour + starterWater;
    const salt = flour * (state.saltPercent / 100);
    const totalDough = flour + totalWater + salt;
    const perLoaf = totalDough / Math.max(state.loafCount, 1);

    let flourBreakdown = [{ name: t("flourWheat"), grams: flour }];
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

    const finalMixFlour = flour - starterFlour;
    const finalMixWater = totalWater - starterWater;

    // Levain build at 1:6:6 (seed:flour:water), total parts = 13
    const levainSeed = starter / 13;
    const levainFlour = starter * (6 / 13);
    const levainWater = starter * (6 / 13);

    return {
        water: totalWater,
        starter,
        totalDough,
        perLoaf,
        flourBreakdown: flourBreakdown.map(({ name, grams }) => ({ name, grams: round(grams) })),
        preferment: [
            { name: t("matureStarter"), grams: round(levainSeed) },
            { name: t("flour"), grams: round(levainFlour) },
            { name: t("water"), grams: round(levainWater) }
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
    const bakeDateTime = new Date(`${state.bakeDate}T${state.bakeTime}:00`);
    const bake = Number.isNaN(bakeDateTime.getTime()) ? new Date() : bakeDateTime;
    const coldStart = addHours(bake, -state.coldFermentHours);
    const shapeTime = addHours(coldStart, -0.5);
    const bulkStart = addHours(shapeTime, -state.bulkHours);
    const autolyseStart = addHours(bulkStart, -state.autolyseHours);
    const starterFeed = addHours(autolyseStart, -state.starterLeadHours);
    const starterCheck = addHours(autolyseStart, -0.25);
    const addStarter = bulkStart;
    const stretchFold = addHours(addStarter, 0.5);
    const jiggle = addHours(shapeTime, -1);
    const preheat = addHours(bake, -1);
    const cool = addHours(bake, 0.9);

    const day1Start = startOfDay(starterFeed);
    const dayNumber = (date) => Math.floor((startOfDay(date).getTime() - day1Start.getTime()) / 86400000) + 1;
    const dayLabel = (date, phaseKey) =>
        `${t("dayLabel")} ${dayNumber(date)} - ${t(phaseKey)} · ${formatDate(date, state.lang)}`;

    const starterDurHours = Math.max(1, Math.round((autolyseStart.getTime() - starterFeed.getTime()) / 3600000));

    return [
        {
            label: dayLabel(starterFeed, "phaseEvening"),
            items: [
                {
                    icon: "🌱",
                    date: starterFeed,
                    title: t("stepFeedTitle"),
                    sub: t("stepFeedDesc"),
                    dur: template(t("timelineDurUntil"), { time: formatTime(autolyseStart, state.lang), hours: starterDurHours })
                }
            ]
        },
        {
            label: dayLabel(autolyseStart, "phaseMainDay"),
            items: [
                {
                    icon: "🫙",
                    date: starterCheck,
                    title: t("stepStarterCheckTitle"),
                    sub: t("stepStarterCheckDesc"),
                    dur: t("durQuickCheck")
                },
                {
                    icon: "💧",
                    date: autolyseStart,
                    title: t("stepAutolyseTitle"),
                    sub: t("stepAutolyseDesc"),
                    dur: t("durAutolyse")
                },
                {
                    icon: "☀️",
                    date: addStarter,
                    title: t("stepAddStarterTitle"),
                    sub: t("stepAddStarterDesc"),
                    dur: t("durAddStarter")
                },
                {
                    icon: "👐",
                    date: stretchFold,
                    title: t("stepStretchFoldTitle"),
                    sub: t("stepStretchFoldDesc"),
                    dur: t("durStretchFold")
                },
                {
                    icon: "🍮",
                    date: jiggle,
                    title: t("stepJiggleTitle"),
                    sub: t("stepJiggleDesc"),
                    dur: t("durJiggle")
                },
                {
                    icon: "🥖",
                    date: shapeTime,
                    title: t("stepShapeTitle"),
                    sub: t("stepShapeDesc"),
                    dur: t("durShape")
                }
            ]
        },
        {
            label: `${t("phaseColdProof")} - ${state.coldFermentHours}${t("hourShort")}`,
            items: [
                {
                    icon: "❄️",
                    date: coldStart,
                    title: t("stepColdTitle"),
                    sub: t("stepColdDesc"),
                    dur: template(t("durCold"), { hours: state.coldFermentHours })
                }
            ]
        },
        {
            label: dayLabel(bake, "phaseBakeDay"),
            items: [
                {
                    icon: "🔥",
                    date: preheat,
                    title: t("stepPreheatTitle"),
                    sub: t("stepPreheatDesc"),
                    dur: t("durPreheat")
                },
                {
                    icon: "🥐",
                    date: bake,
                    title: t("stepBakeTitle"),
                    sub: t("stepBakeDesc"),
                    dur: t("durBake")
                },
                {
                    icon: "🍞",
                    date: cool,
                    title: t("stepCoolTitle"),
                    sub: t("stepCoolDesc"),
                    dur: t("durCool")
                }
            ]
        }
    ];
}

function renderRows(element, rows) {
    element.innerHTML = rows
        .map(({ name, grams }) => `<li><span>${name}</span><strong>${grams} g</strong></li>`)
        .join("");
}

function renderTimeline(phases) {
    refs.timelineList.innerHTML = phases
        .map((phase) => {
            const itemsHtml = phase.items
                .map((item) =>
                    `<li class="timeline-item">` +
                    `<div class="timeline-copy">` +
                    `<h3>${item.icon} ${item.title}</h3>` +
                    `<p class="timeline-sub">${item.sub}</p>` +
                    `<p class="timeline-dur">${item.dur}</p>` +
                    `</div>` +
                    `<div class="timeline-time">` +
                    `<strong>${formatTime(item.date, state.lang)}</strong>` +
                    `<span>${formatDate(item.date, state.lang)}</span>` +
                    `</div>` +
                    `</li>`
                )
                .join("");

            return (
                `<section class="timeline-phase">` +
                `<div class="timeline-phase-label">${phase.label}</div>` +
                `<ul class="timeline">${itemsHtml}</ul>` +
                `</section>`
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

    refs.hydrationValue.textContent = `${state.hydration}%`;
    refs.starterValue.textContent = `${state.starterPercent}%`;
    refs.saltValue.textContent = `${state.saltPercent}%`;
    refs.starterLeadValue.textContent = state.starterLeadHours + t("hourShort");
    refs.autolyseValue.textContent = state.autolyseHours + t("hourShort");
    refs.bulkValue.textContent = state.bulkHours + t("hourShort");
    refs.coldValue.textContent = state.coldFermentHours + t("hourShort");
}

function render() {
    applyTranslations();
    applyThemeUI();
    syncControls();

    const recipe = computeRecipe();
    const timeline = computeTimeline();
    const preset = flourLabels[state.lang][state.flourPreset];

    refs.totalDoughOutput.textContent = `${round(recipe.totalDough)} g`;
    refs.perLoafOutput.textContent = `${round(recipe.perLoaf)} g`;
    refs.waterOutput.textContent = `${round(recipe.water)} g`;
    refs.starterOutput.textContent = `${round(recipe.starter)} g`;
    refs.ingredientsMuted.textContent = template(t("ingredientsBasedOn"), { preset });

    renderRows(refs.flourBreakdownList, recipe.flourBreakdown);
    renderRows(refs.prefermentList, recipe.preferment);
    renderRows(refs.finalMixList, recipe.finalMix);
    renderTimeline(timeline);
}

function wireTabs() {
    const tabs = document.querySelectorAll("[data-tab-target]");
    const panels = document.querySelectorAll("[data-tab-panel]");
    for (const tab of tabs) {
        tab.addEventListener("click", () => {
            const target = tab.getAttribute("data-tab-target");
            for (const button of tabs) {
                const active = button === tab;
                button.classList.toggle("is-active", active);
                button.setAttribute("aria-selected", active ? "true" : "false");
            }
            for (const panel of panels) {
                panel.classList.toggle("is-active", panel.getAttribute("data-tab-panel") === target);
            }
        });
    }
}

// [element, event, how to update state from the element's value]
const controlBindings = [
    [refs.totalFlourInput, "input", (value) => { state.totalFlour = Math.max(100, toNumber(value, 1000)); }],
    [refs.loafCountSelect, "change", (value) => { state.loafCount = Math.max(1, toNumber(value, 2)); }],
    [refs.flourPresetSelect, "change", (value) => { state.flourPreset = value; }],
    [refs.hydrationRange, "input", (value) => { state.hydration = toNumber(value, 70); }],
    [refs.starterRange, "input", (value) => { state.starterPercent = toNumber(value, 26); }],
    [refs.saltRange, "input", (value) => { state.saltPercent = toNumber(value, 2); }],
    [refs.bakeDateInput, "change", (value) => { state.bakeDate = value || state.bakeDate; }],
    [refs.bakeTimeInput, "change", (value) => { state.bakeTime = value || state.bakeTime; }],
    [refs.starterLeadRange, "input", (value) => { state.starterLeadHours = toNumber(value, 12); }],
    [refs.autolyseRange, "input", (value) => { state.autolyseHours = toNumber(value, 1); }],
    [refs.bulkRange, "input", (value) => { state.bulkHours = toNumber(value, 5); }],
    [refs.coldRange, "input", (value) => { state.coldFermentHours = toNumber(value, 20); }]
];

function wireControls() {
    for (const [element, eventName, update] of controlBindings) {
        element.addEventListener(eventName, () => {
            update(element.value);
            render();
        });
    }

    refs.resetButton.addEventListener("click", () => {
        const { lang, theme } = state;
        state = { ...createDefaultState(), lang, theme };
        render();
    });

    refs.printButton.addEventListener("click", () => window.print());

    refs.langEnButton.addEventListener("click", () => {
        state.lang = "en";
        writeStorage("sourdough_lang", "en");
        render();
    });

    refs.langDeButton.addEventListener("click", () => {
        state.lang = "de";
        writeStorage("sourdough_lang", "de");
        render();
    });

    refs.themeToggleButton.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        writeStorage("sourdough_theme", state.theme);
        render();
    });
}

wireTabs();
wireControls();
render();
