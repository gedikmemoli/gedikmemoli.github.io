const translations = {
    en: {
        pageTitle: "Mehmet Ali Gedik | Game Designer",
        subtitle: "Game Designer",
        bioText: "Game Designer specializing in core mechanics, systems design, and interactive gameplay. Currently studying Digital Game Design at Kahramanmaraş Sütçü İmam University and based in Kemer, Antalya. Passionate about bringing engaging PC and mobile experiences to life using Unity.",
        gamesTitle: "GAMES & PROJECTS",
        pcGamesTitle: "💻 PC Games",
        mobileGamesTitle: "📱 Mobile Games",
        livingCellsDesc: "A platformer adventure game where the main objective is to defeat the final boss and set the captive souls free.",
        kelimeOyunuDesc: "A multiplayer word game experience featuring an admin panel. One person acts as the game master while the others play, offering an interactive group activity.",
        mindCafeDesc: "A mobile cafe management concept offering players a peaceful experience. Manage the kitchen, prepare the right drinks according to orders, and serve your customers in a relaxing atmosphere.",
        kelimeKulturDesc: "A crossword-style puzzle game where players test their vocabulary by finding the correct words to fill in the blank tiles.",
        viewBtn: "View",
        wipLabel: "🚧 Currently Working On 🚧",
        wipDesc: "2D Roguelike Card Game",
        contactBtn: "Contact Me",
        footerText: "&copy; 2026 Gedik Games. All rights reserved."
    },
    tr: {
        pageTitle: "Mehmet Ali Gedik | Game Designer",
        subtitle: "Oyun Tasarımcısı",
        bioText: "Temel mekanikler, sistem tasarımı ve etkileşimli oynanış üzerine uzmanlaşan Oyun Tasarımcısı. Şu anda Kahramanmaraş Sütçü İmam Üniversitesi'nde Dijital Oyun Tasarımı bölümünde eğitimime devam ediyorum ve Antalya, Kemer'de yaşıyorum. Unity kullanarak sürükleyici bilgisayar ve mobil deneyimlerini hayata geçirme konusunda tutkuluyum.",
        gamesTitle: "OYUNLAR VE PROJELER",
        pcGamesTitle: "💻 PC Oyunları",
        mobileGamesTitle: "📱 Mobil Oyunlar",
        livingCellsDesc: "Ana hedefin son patronu yenmek ve esir ruhları serbest bırakmak olduğu, platform türünde bir macera oyunu.",
        kelimeOyunuDesc: "Admin paneli içeren, çok oyunculu bir kelime oyunu deneyimi. Bir kişinin oyunu yönettiği, diğerlerinin ise oyuncu olduğu interaktif bir grup aktivitesi sunuyor.",
        mindCafeDesc: "Oyunculara huzurlu bir deneyim sunan mobil bir kafe yönetim konsepti. Mutfağı yönetin, siparişlere uygun içecekleri hazırlayın ve dinlendirici bir atmosferde müşterilerinize servis yapın.",
        kelimeKulturDesc: "Oyuncuların boş karolara gelmesi gereken doğru kelimeleri bularak kelime dağarcıklarını test ettikleri çengel bulmaca tarzı bir oyun.",
        viewBtn: "İncele",
        wipLabel: "🚧 Şu An Üzerinde Çalıştığım 🚧",
        wipDesc: "2D Roguelike Kart Oyunu",
        contactBtn: "İletişime Geç",
        footerText: "&copy; 2026 Gedik Games. Tüm hakları saklıdır."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Language preference
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);

    // 2. Attach events to lang switches
    document.getElementById("lang-en").addEventListener("click", (e) => {
        e.preventDefault();
        setLanguage("en");
    });

    document.getElementById("lang-tr").addEventListener("click", (e) => {
        e.preventDefault();
        setLanguage("tr");
    });
});

function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    // Update active class
    if(lang === "tr") {
        document.getElementById("lang-tr").classList.add("active");
        document.getElementById("lang-en").classList.remove("active");
    } else {
        document.getElementById("lang-en").classList.add("active");
        document.getElementById("lang-tr").classList.remove("active");
    }

    // Update texts
    document.title = translations[lang].pageTitle;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if(translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

function revealEmail() {
    const btn = document.getElementById('contactBtn');
    btn.innerHTML = '<a href="mailto:mehmetali@gedik.games">mehmetali@gedik.games</a>';
    btn.classList.add('expanded');
    btn.onclick = null; btn.removeAttribute("data-i18n");
}
