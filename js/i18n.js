/* =========================================================
   I18N — Aktif dil ve dil değiştirme
   ========================================================= */

let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);

    if(lang === "tr") {
        document.getElementById("lang-tr").classList.add("active");
        document.getElementById("lang-en").classList.remove("active");
    } else {
        document.getElementById("lang-en").classList.add("active");
        document.getElementById("lang-tr").classList.remove("active");
    }

    document.title = translations[lang].pageTitle;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if(translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Re-render UI components to reflect language
    renderProjects();
    if(window.location.hash.startsWith('#project-')) {
        renderProjectDetail(window.location.hash.replace('#project-', ''));
    }
}
