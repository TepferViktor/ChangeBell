/* ChangeBell — UI strings.
 * Part of a modified version of Check4Change by Ronen Zilberman (GPLv3).
 *
 * chrome.i18n always follows the browser UI language and cannot be switched at
 * runtime, so the extension keeps its own dictionary. The chosen language is
 * stored in chrome.storage.local under "uiLang": "auto" | "en" | "ru".
 *
 * Loaded into the service worker, content scripts and extension pages, so only
 * `var` and function declarations are used (safe to evaluate twice).
 */

// Product name, used as {brand} in the strings below.
var C4C_BRAND = "ChangeBell";

var C4C_I18N = {
    en: {
        brandName: "{brand}",
        basedOn: "Based on Check4Change by Ronen Zilberman \u00B7 GNU GPL v3",

        // context menu
        menuStop: "Stop monitoring in this tab",
        menuMark: "Mark monitored text",
        menuQuick: "Check every {n} {unit}",
        menuCustom: "Custom settings...",
        menuUpdate: "Update settings...",

        // time
        waiting: "waiting...",
        short_seconds: "s",
        short_minutes: "m",
        short_hours: "h",

        // notifications
        notifyTitle: "Change found!",
        textLost: "The monitored text was not found on the page.",
        textEmpty: "(empty)",
        cannotRunHere: "{brand} can't work on this page. Browser pages and the add-ons store are closed to extensions.",

        // tutorial
        tutIntro: "First select the text you want to watch on this page.",
        tutUsage: "How it works:",
        tutStep1: "Select the fragment with the mouse: a price, an order status or an \"Out of stock\" label.",
        tutStep2: "Click the {brand} button (the bell) on the toolbar and set the interval, or pick one right away from the right-click menu.",
        tutStep3: "Keep the tab open. {brand} will reload the page and alert you with a sound and a notification when the selected text changes.",
        ok: "OK",

        // overlay
        lookFor: "Look for changes to this text",
        nextReload: "Next reload in:",
        monitoringNow: "{brand} is now monitoring this tab for changes.",
        leaveRunning: "Leave this tab running in the background and you'll be notified when a change is found.",
        stop: "Stop",
        reloadNow: "Reload now",
        updateSettings: "Update settings",
        hideDialog: "Hide this dialog",

        // settings dialog
        reloadEvery: "Reload this page every",
        unitSeconds: "Seconds",
        unitMinutes: "Minutes",
        unitHours: "Hours",
        tabNotifications: "Notifications",
        tabAdvanced: "Advanced options",
        whenChange: "When a change is found:",
        playSound: "Play a sound clip",
        sound1: "Chime",
        sound2: "Ding",
        sound3: "Double beep",
        sound4: "Rising",
        sound5: "Alarm",
        sound6: "Marimba",
        selectFile: "Select file...",
        volume: "Volume",
        play: "\u25B6\uFE0E Play",
        animateIcon: "Animate tab icon",
        showNotification: "Show a notification",
        bringToFront: "Bring tab to foreground",
        doContinue: "Continue monitoring after first change",
        dontReload: "Don't reload. Page updates itself.",
        checkHTML: "Monitor the HTML of the selection",
        noOverlay: "Always hide status dialog while monitoring",
        audioLoop: "Play audio in a loop",
        doRandom: "Randomize wait time between reloads by",
        delayDuration: "Seconds to wait after page loads before checking",
        start: "Start",
        update: "Update",
        saveDefaults: "Save current parameters",
        saved: "Saved",
        language: "Language",
        langAuto: "Auto",
        fileTooBig: "The file is too large (maximum {mb} MB).",
        fileReadError: "Could not read the file."
    },

    ru: {
        brandName: "{brand}",
        basedOn: "Основано на Check4Change, автор Ronen Zilberman \u00B7 GNU GPL v3",

        menuStop: "Остановить отслеживание в этой вкладке",
        menuMark: "Выделить отслеживаемый текст",
        menuQuick: "Проверять каждые {n} {unit}",
        menuCustom: "Настройки...",
        menuUpdate: "Изменить настройки...",

        waiting: "ожидание...",
        short_seconds: "с",
        short_minutes: "м",
        short_hours: "ч",

        notifyTitle: "Найдено изменение!",
        textLost: "Отслеживаемый текст не найден на странице.",
        textEmpty: "(пусто)",
        cannotRunHere: "{brand} не может работать на этой странице. Служебные страницы браузера и магазин расширений закрыты для расширений.",

        tutIntro: "Сначала выделите на странице текст, за которым нужно следить.",
        tutUsage: "Как это работает:",
        tutStep1: "Выделите мышью нужный фрагмент: цену, статус заказа или надпись «Нет в наличии».",
        tutStep2: "Нажмите кнопку {brand} (колокольчик) на панели и задайте интервал или сразу выберите его в меню по правому клику.",
        tutStep3: "Оставьте вкладку открытой. {brand} будет перезагружать страницу и сообщит звуком и уведомлением, когда выделенный текст изменится.",
        ok: "ОК",

        lookFor: "Следить за изменениями этого текста",
        nextReload: "Следующая перезагрузка через:",
        monitoringNow: "{brand} отслеживает изменения в этой вкладке.",
        leaveRunning: "Оставьте вкладку открытой в фоне — вы получите уведомление, когда текст изменится.",
        stop: "Остановить",
        reloadNow: "Перезагрузить сейчас",
        updateSettings: "Изменить настройки",
        hideDialog: "Скрыть это окно",

        reloadEvery: "Перезагружать страницу каждые",
        unitSeconds: "секунд",
        unitMinutes: "минут",
        unitHours: "часов",
        tabNotifications: "Уведомления",
        tabAdvanced: "Дополнительно",
        whenChange: "Когда найдено изменение:",
        playSound: "Проиграть звук",
        sound1: "Перезвон",
        sound2: "Динь",
        sound3: "Двойной сигнал",
        sound4: "Восходящий",
        sound5: "Тревога",
        sound6: "Маримба",
        selectFile: "Выбрать файл...",
        volume: "Громкость",
        play: "\u25B6\uFE0E Прослушать",
        animateIcon: "Анимировать значок вкладки",
        showNotification: "Показать уведомление",
        bringToFront: "Переключиться на вкладку",
        doContinue: "Продолжать отслеживание после первого изменения",
        dontReload: "Не перезагружать — страница обновляется сама",
        checkHTML: "Отслеживать HTML выделенного фрагмента",
        noOverlay: "Не показывать окно статуса во время отслеживания",
        audioLoop: "Повторять звук по кругу",
        doRandom: "Случайно менять интервал между перезагрузками на ±",
        delayDuration: "Пауза после загрузки страницы перед проверкой, секунд",
        start: "Запустить",
        update: "Обновить",
        saveDefaults: "Сохранить как параметры по умолчанию",
        saved: "Сохранено",
        language: "Язык",
        langAuto: "Авто",
        fileTooBig: "Файл слишком большой (максимум {mb} МБ).",
        fileReadError: "Не удалось прочитать файл."
    }
};

// Unit words. Russian forms are for "через N ..." / "каждые N ...": 1 минуту, 2 минуты, 5 минут.
var C4C_UNIT_WORDS = {
    en: {
        seconds: ["second", "seconds"],
        minutes: ["minute", "minutes"],
        hours: ["hour", "hours"]
    },
    ru: {
        seconds: ["секунду", "секунды", "секунд"],
        minutes: ["минуту", "минуты", "минут"],
        hours: ["час", "часа", "часов"]
    }
};

// Currently resolved language ("en" or "ru").
var c4cLang = "en";

function c4cResolveLang(setting) {
    if (setting === "en" || setting === "ru") return setting;
    var ui = "";
    try { ui = chrome.i18n.getUILanguage() || ""; } catch (e) {}
    return ui.toLowerCase().indexOf("ru") === 0 ? "ru" : "en";
}

async function c4cLoadLang() {
    var setting = "auto";
    try {
        var r = await chrome.storage.local.get("uiLang");
        if (r && r.uiLang) setting = r.uiLang;
    } catch (e) {}
    c4cLang = c4cResolveLang(setting);
    return c4cLang;
}

// Calls cb(lang) whenever the language setting changes. Returns the listener.
function c4cOnLangChange(cb) {
    var listener = function (changes, area) {
        if (area !== "local" || !("uiLang" in changes)) return;
        c4cLang = c4cResolveLang(changes.uiLang.newValue);
        cb(c4cLang);
    };
    chrome.storage.onChanged.addListener(listener);
    return listener;
}

function c4cT(key, vars) {
    var dict = C4C_I18N[c4cLang] || C4C_I18N.en;
    var s = (key in dict) ? dict[key] : (C4C_I18N.en[key] || key);
    s = s.replace(/\{brand\}/g, C4C_BRAND);
    if (vars) {
        s = s.replace(/\{(\w+)\}/g, function (m, name) {
            return (name in vars) ? String(vars[name]) : m;
        });
    }
    return s;
}

function c4cPluralIndex(n, lang) {
    n = Math.abs(Math.round(n));
    if (lang === "ru") {
        var n100 = n % 100, n10 = n % 10;
        if (n100 > 10 && n100 < 20) return 2;
        if (n10 === 1) return 0;
        if (n10 > 1 && n10 < 5) return 1;
        return 2;
    }
    return n === 1 ? 0 : 1;
}

// unit: "seconds" | "minutes" | "hours"
function c4cUnitWord(n, unit) {
    var words = (C4C_UNIT_WORDS[c4cLang] || C4C_UNIT_WORDS.en)[unit];
    if (!words) return unit;
    return words[c4cPluralIndex(n, c4cLang)];
}

// Fills every element marked with data-i18n (text) and data-i18n-title.
// Optional JSON variables go into data-i18n-args.
function c4cApplyI18n(root) {
    root = root || document;
    var nodes = root.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        var args = null;
        if (el.hasAttribute("data-i18n-args")) {
            try { args = JSON.parse(el.getAttribute("data-i18n-args")); } catch (e) {}
        }
        el.textContent = c4cT(el.getAttribute("data-i18n"), args);
    }
    var titled = root.querySelectorAll("[data-i18n-title]");
    for (var j = 0; j < titled.length; j++) {
        titled[j].title = c4cT(titled[j].getAttribute("data-i18n-title"));
    }
    if (root.documentElement) root.documentElement.lang = c4cLang;
}
