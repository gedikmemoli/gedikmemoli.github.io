const projectsData = [
    {
        id: "living-cells",
        title: "Living Cells",
        engine: "GameMaker",
        platform: "PC",
        isFeatured: true,
        genre: { en: "Platformer Adventure", tr: "Platform Macera" },
        role: { en: "Game Designer & Developer", tr: "Oyun Tasarımcısı ve Geliştirici" },
        thumbnail: "living-cells.png",
        externalLink: "https://gedikmemoli.itch.io/living-cells",
        media: [
            { type: "image", url: "living-cells.png" }
            // Add video URL like { type: "video", url: "https://www.youtube.com/embed/XXXXX" }
        ],
        overview: {
            en: "A platformer adventure game where the main objective is to defeat the final boss and set the captive souls free.",
            tr: "Ana hedefin son patronu yenmek ve esir ruhları serbest bırakmak olduğu, platform türünde bir macera oyunu."
        },
        mechanics: {
            en: [
                { title: "Core Loop", desc: "Navigate challenging platforms, defeat enemies, and collect souls.", icon: "🔄" },
                { title: "Combat", desc: "Fast-paced melee attacks and dodge mechanics.", icon: "⚔️" },
                { title: "Boss Fights", desc: "Intense multi-phase boss battle requiring pattern recognition.", icon: "👹" }
            ],
            tr: [
                { title: "Temel Döngü", desc: "Zorlu platformları aş, düşmanları yen ve ruhları topla.", icon: "🔄" },
                { title: "Savaş", desc: "Hızlı yakın dövüş saldırıları ve kaçınma mekanikleri.", icon: "⚔️" },
                { title: "Patron Savaşları", desc: "Desen tanıma gerektiren yoğun çok aşamalı patron savaşı.", icon: "👹" }
            ]
        }
    },
    {
        id: "kelime-oyunu-plus",
        title: "Kelime Oyunu +",
        engine: "Unity",
        platform: "PC",
        genre: { en: "Multiplayer Word Game", tr: "Çok Oyunculu Kelime Oyunu" },
        role: { en: "Game Designer", tr: "Oyun Tasarımcısı" },
        thumbnail: "kelime-oyunu.png",
        externalLink: "#",
        media: [
            { type: "image", url: "kelime-oyunu.png" }
        ],
        overview: {
            en: "A multiplayer word game experience featuring an admin panel. One person acts as the game master while the others play, offering an interactive group activity.",
            tr: "Admin paneli içeren, çok oyunculu bir kelime oyunu deneyimi. Bir kişinin oyunu yönettiği, diğerlerinin ise oyuncu olduğu interaktif bir grup aktivitesi sunuyor."
        },
        mechanics: {
            en: [
                { title: "Game Master Mode", desc: "Dedicated admin panel to control the flow and questions.", icon: "👑" },
                { title: "Multiplayer", desc: "Real-time synchronization between the host and players.", icon: "👥" },
                { title: "Scoring System", desc: "Dynamic score calculation based on speed and accuracy.", icon: "💯" }
            ],
            tr: [
                { title: "Oyun Yöneticisi Modu", desc: "Akışı ve soruları kontrol etmek için özel admin paneli.", icon: "👑" },
                { title: "Çok Oyunculu", desc: "Sunucu ve oyuncular arasında gerçek zamanlı senkronizasyon.", icon: "👥" },
                { title: "Puanlama Sistemi", desc: "Hız ve doğruluğa dayalı dinamik puan hesaplama.", icon: "💯" }
            ]
        }
    },
    {
        id: "mind-cafe",
        title: "Mind Café",
        engine: "Unity",
        platform: "Mobile",
        genre: { en: "Simulation / Management", tr: "Simülasyon / Yönetim" },
        role: { en: "Game Designer", tr: "Oyun Tasarımcısı" },
        thumbnail: "mind-cafe.png",
        externalLink: "https://play.google.com/store/apps/details?id=com.istiklal.doga.y2026.mindcafe",
        media: [
            { type: "image", url: "mind-cafe.png" }
        ],
        overview: {
            en: "A mobile cafe management concept offering players a peaceful experience. Manage the kitchen, prepare the right drinks according to orders, and serve your customers in a relaxing atmosphere.",
            tr: "Oyunculara huzurlu bir deneyim sunan mobil bir kafe yönetim konsepti. Mutfağı yönetin, siparişlere uygun içecekleri hazırlayın ve dinlendirici bir atmosferde müşterilerinize servis yapın."
        },
        mechanics: {
            en: [
                { title: "Order Management", desc: "Queue and prioritize customer orders efficiently.", icon: "📋" },
                { title: "Crafting", desc: "Mix specific ingredients to create requested beverages.", icon: "☕" },
                { title: "Atmosphere", desc: "Relaxing UI/UX and audio design to promote calmness.", icon: "✨" }
            ],
            tr: [
                { title: "Sipariş Yönetimi", desc: "Müşteri siparişlerini sıraya koyun ve verimli bir şekilde yönetin.", icon: "📋" },
                { title: "Üretim", desc: "İstenen içecekleri oluşturmak için belirli malzemeleri karıştırın.", icon: "☕" },
                { title: "Atmosfer", desc: "Sakinliği teşvik eden rahatlatıcı arayüz ve ses tasarımı.", icon: "✨" }
            ]
        }
    },
    {
        id: "kelime-kultur-kemer",
        title: "Kelime Kültür Kemer",
        engine: "Unity",
        platform: "Mobile",
        genre: { en: "Puzzle / Crossword", tr: "Bulmaca / Çengel" },
        role: { en: "Game Designer", tr: "Oyun Tasarımcısı" },
        thumbnail: "1kelimekültürkemer1.webp",
        externalLink: "#",
        media: [
            { type: "image", url: "1kelimekültürkemer1.webp" }
        ],
        overview: {
            en: "A crossword-style puzzle game where players test their vocabulary by finding the correct words to fill in the blank tiles.",
            tr: "Oyuncuların boş karolara gelmesi gereken doğru kelimeleri bularak kelime dağarcıklarını test ettikleri çengel bulmaca tarzı bir oyun."
        },
        mechanics: {
            en: [
                { title: "Grid System", desc: "Dynamic crossword grid that scales with difficulty.", icon: "🔠" },
                { title: "Progression", desc: "Increasingly complex words and larger boards.", icon: "📈" },
                { title: "Hints", desc: "Resource management for revealing letters when stuck.", icon: "💡" }
            ],
            tr: [
                { title: "Izgara Sistemi", desc: "Zorlukla ölçeklenen dinamik çengel bulmaca ızgarası.", icon: "🔠" },
                { title: "İlerleme", desc: "Giderek karmaşıklaşan kelimeler ve daha büyük panolar.", icon: "📈" },
                { title: "İpuçları", desc: "Sıkışıldığında harfleri ortaya çıkarmak için kaynak yönetimi.", icon: "💡" }
            ]
        }
    },
    /*
    =========================================
    👉 YENİ OYUN EKLEME ŞABLONU (TEMPLATE) 👈
    =========================================
    Aşağıdaki yorum satırındaki bloğu kopyalayıp hemen üstte biten '}' virgülünden sonra yapıştırarak
    kendi oyununuzu kolayca ekleyebilirsiniz. HTML koduna dokunmanıza gerek yoktur.

    {
        id: "yeni-oyun-benzersiz-id", // URL'de görünecek id (boşluksuz, küçük harf, ingilizce karakter)
        title: "Oyunun Adı", // Oyunun başlığı
        engine: "Unity", // Kullanılan motor (örn: Unity, Unreal, GameMaker)
        platform: "PC", // Platform (örn: PC, Mobile, Web)
        genre: {
            en: "Genre in English",
            tr: "Türkçe Tür"
        },
        role: {
            en: "Your Role (e.g., Game Designer)",
            tr: "Rolünüz (örn., Oyun Tasarımcısı)"
        },
        thumbnail: "resim-adi.png", // Ana sayfada kartta görünecek resmin dosya yolu
        externalLink: "https://store-link.com", // İndirme / Mağaza linki
        media: [
            // Galeri için resimler veya videolar ekleyin. İlk sıradaki varsayılan olarak büyük ekranda açılır.
            { type: "image", url: "resim1.png" },
            { type: "image", url: "resim2.png" }
            // Video eklemek isterseniz örnek:
            // { type: "video", url: "https://www.youtube.com/embed/YOUR_VIDEO_ID" }
        ],
        overview: {
            en: "Short description of the game in English.",
            tr: "Oyunun Türkçe kısa açıklaması ve özeti."
        },
        mechanics: {
            en: [
                { title: "Mechanic 1", desc: "Description of mechanic 1.", icon: "⚔️" },
                { title: "Feature 2", desc: "Description of feature 2.", icon: "🚀" }
            ],
            tr: [
                { title: "Mekanik 1", desc: "Mekanik 1 in açıklaması.", icon: "⚔️" },
                { title: "Özellik 2", desc: "Özellik 2 nin açıklaması.", icon: "🚀" }
            ]
        }
    }
    */
];

const translations = {
    en: {
        pageTitle: "Mehmet Ali Gedik | Game Designer",
        subtitle: "Game Designer",
        bioText: "Game Designer specializing in core mechanics, systems design, and interactive gameplay. Currently studying Digital Game Design at Kahramanmaraş Sütçü İmam University and based in Kemer, Antalya. Passionate about bringing engaging PC and mobile experiences to life using Unity.",
        gamesTitle: "GAMES & PROJECTS",
        filterAll: "All",
        filterPC: "PC",
        filterMobile: "Mobile",
        filterUnity: "Unity",
        viewBtn: "View Details",
        wipLabel: "🚧 Currently Working On 🚧",
        wipDesc: "2D Roguelike Card Game",
        contactBtn: "Contact Me",
        footerText: "&copy; 2026 Gedik Games. All rights reserved.",
        backBtnText: "Back to Portfolio",
        breakdownTitle: "Game Design Breakdown",
        gameInfoTitle: "Game Info",
        roleLabel: "Role:",
        engineLabel: "Engine:",
        platformLabel: "Platform:",
        genreLabel: "Genre:",
        playGameBtn: "Play Game",
        featuredBadge: "👑 Featured Project"
    },
    tr: {
        pageTitle: "Mehmet Ali Gedik | Game Designer",
        subtitle: "Oyun Tasarımcısı",
        bioText: "Temel mekanikler, sistem tasarımı ve etkileşimli oynanış üzerine uzmanlaşan Oyun Tasarımcısı. Şu anda Kahramanmaraş Sütçü İmam Üniversitesi'nde Dijital Oyun Tasarımı bölümünde eğitimime devam ediyorum ve Antalya, Kemer'de yaşıyorum. Unity kullanarak sürükleyici bilgisayar ve mobil deneyimlerini hayata geçirme konusunda tutkuluyum.",
        gamesTitle: "OYUNLAR VE PROJELER",
        filterAll: "Tümü",
        filterPC: "PC",
        filterMobile: "Mobil",
        filterUnity: "Unity",
        viewBtn: "İncele",
        wipLabel: "🚧 Şu An Üzerinde Çalıştığım 🚧",
        wipDesc: "2D Roguelike Kart Oyunu",
        contactBtn: "İletişime Geç",
        footerText: "&copy; 2026 Gedik Games. Tüm hakları saklıdır.",
        backBtnText: "Ana Sayfaya Dön",
        breakdownTitle: "Tasarım Detayları",
        gameInfoTitle: "Oyun Künyesi",
        roleLabel: "Rol:",
        engineLabel: "Motor:",
        platformLabel: "Platform:",
        genreLabel: "Tür:",
        playGameBtn: "Oyunu Oyna",
        featuredBadge: "👑 Öne Çıkan Oyun"
    }
};

let currentLang = localStorage.getItem("lang") || "en";
let currentFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
    renderProjects();
    handleRouting();

    // Event Listeners for language
    document.getElementById("lang-en").addEventListener("click", (e) => {
        e.preventDefault();
        setLanguage("en");
    });

    document.getElementById("lang-tr").addEventListener("click", (e) => {
        e.preventDefault();
        setLanguage("tr");
    });

    // Event Listeners for filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.getAttribute('data-filter');
            renderProjects();
        });
    });

    // Routing
    window.addEventListener('hashchange', handleRouting);
    document.getElementById('backBtn').addEventListener('click', () => {
        window.location.hash = '';
    });

    // Lightbox close
    document.querySelector('.lightbox-close').addEventListener('click', () => {
        document.getElementById('lightbox').classList.remove('active');
    });
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if(e.target.id === 'lightbox') {
            document.getElementById('lightbox').classList.remove('active');
        }
    });
});

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

function revealEmail() {
    const btn = document.getElementById('contactBtn');
    btn.innerHTML = '<a href="mailto:mehmetali@gedik.games">mehmetali@gedik.games</a>';
    btn.classList.add('expanded');
    btn.onclick = null;
    btn.removeAttribute("data-i18n");
}

function renderProjects() {
    const featuredContainer = document.getElementById('featured-project-container');
    const container = document.getElementById('projects-container');

    featuredContainer.innerHTML = '';
    container.innerHTML = '';

    // Render Featured Project
    const featuredProject = projectsData.find(p => p.isFeatured);
    if (featuredProject) {
        featuredContainer.innerHTML = `
            <div class="featured-card" style="background-image: url('${featuredProject.thumbnail}');">
                <div class="featured-overlay">
                    <div class="featured-badge">${translations[currentLang].featuredBadge}</div>
                    <h2 class="featured-title">${featuredProject.title}</h2>
                    <p class="featured-desc">${featuredProject.overview[currentLang]}</p>
                    <div class="featured-tags">
                        <span class="tag">${featuredProject.engine}</span>
                        <span class="tag">${featuredProject.platform}</span>
                    </div>
                    <a href="#project-${featuredProject.id}" class="play-btn featured-btn">${translations[currentLang].viewBtn}</a>
                </div>
            </div>
        `;
    }

    // Render remaining projects based on filter
    const filteredProjects = projectsData.filter(p => {
        if (p.isFeatured) return false; // Exclude featured from main grid
        if (currentFilter === 'all') return true;
        return p.platform === currentFilter || p.engine === currentFilter;
    });

    filteredProjects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${p.thumbnail}" alt="${p.title}" class="project-img">
            <h3 class="project-title">${p.title}</h3>
            <div class="project-tags">
                <span class="tag">${p.engine}</span>
                <span class="tag">${p.platform}</span>
            </div>
            <p class="project-desc">${p.overview[currentLang]}</p>
            <a href="#project-${p.id}" class="play-btn">${translations[currentLang].viewBtn}</a>
        `;
        container.appendChild(card);
    });
}

function handleRouting() {
    const hash = window.location.hash;
    const homeView = document.getElementById('home-view');
    const projectView = document.getElementById('project-view');

    if (hash.startsWith('#project-')) {
        const projectId = hash.replace('#project-', '');
        renderProjectDetail(projectId);

        homeView.classList.remove('active');
        projectView.classList.add('active');
        window.scrollTo(0,0);
    } else {
        projectView.classList.remove('active');
        homeView.classList.add('active');
    }
}

function renderProjectDetail(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) {
        window.location.hash = '';
        return;
    }

    document.getElementById('pd-title').innerText = project.title;
    document.getElementById('pd-overview').innerText = project.overview[currentLang];
    document.getElementById('pd-role').innerText = project.role[currentLang];
    document.getElementById('pd-engine').innerText = project.engine;
    document.getElementById('pd-platform').innerText = project.platform;
    document.getElementById('pd-genre').innerText = project.genre[currentLang];

    const extLink = document.getElementById('pd-external-link');
    extLink.href = project.externalLink;
    if(project.externalLink === "#") {
        extLink.style.display = 'none';
    } else {
        extLink.style.display = 'inline-flex';
    }

    // Media Gallery
    const stage = document.getElementById('main-stage');
    const strip = document.getElementById('thumbnail-strip');
    strip.innerHTML = '';

    if (project.media.length > 0) {
        setMainStage(project.media[0]);

        project.media.forEach((m, idx) => {
            const thumb = document.createElement('div');
            thumb.className = 'thumbnail';
            if (m.type === 'video') {
                // If it's a youtube embed, try to extract ID for a thumbnail, else just put a placeholder play icon
                thumb.innerHTML = `<div class="video-thumb-icon">▶</div>`;
                thumb.style.backgroundColor = '#333';
            } else {
                thumb.innerHTML = `<img src="${m.url}" alt="thumbnail">`;
            }

            thumb.onclick = () => setMainStage(m);
            strip.appendChild(thumb);
        });
    }

    // Bento Grid Mechanics
    const bento = document.getElementById('bento-grid');
    bento.innerHTML = '';
    project.mechanics[currentLang].forEach(mech => {
        bento.innerHTML += `
            <div class="bento-card">
                <div class="bento-icon">${mech.icon}</div>
                <h4 class="bento-title">${mech.title}</h4>
                <p class="bento-desc">${mech.desc}</p>
            </div>
        `;
    });
}

function setMainStage(mediaItem) {
    const stage = document.getElementById('main-stage');
    if (mediaItem.type === 'image') {
        stage.innerHTML = `<img src="${mediaItem.url}" alt="Media" onclick="openLightbox('${mediaItem.url}')" style="cursor: zoom-in;">`;
    } else if (mediaItem.type === 'video') {
        stage.innerHTML = `<iframe src="${mediaItem.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    }
}

window.openLightbox = function(url) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = url;
    lb.classList.add('active');
}
