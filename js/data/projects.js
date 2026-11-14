/* =========================================================
   PROJE VERILERI - Portfolyoda gorunen tum oyunlar.
   Yeni oyun eklemek icin sadece bu dosyayi duzenlemeniz yeterli
   (en alttaki sablona bakin). Gorseller: assets/images/projects/<id>/
   Ikonlar Google Fonts Material Symbols Outlined adlaridir.
   ========================================================= */

const projectsData = [
    {
        id: "broken-dice", // URL'de gorunecek id (bosluksuz, kucuk harf, ingilizce karakter)
        title: "Broken Dice", // Oyunun basligi
        engine: "Unity", // Kullanilan motor (orn: Unity, Unreal, GameMaker)
        platform: "PC", // Platform (orn: PC, Mobile, Web)
        genre: {
            en: "Roguelite Dungeon Crawler",
            tr: "Roguelite Dungeon Crawler"
        },
        role: {
            en: "UI & Game Designer",
            tr: "UI & Oyun Tasarımcısı"
        },
        thumbnail: "assets/images/projects/broken-dice/cover.webp", // Ana sayfada kartta gorunecek resmin dosya yolu
        thumbnailPosition: "center 72%",
        externalLink: "#", // Indirme / Magaza linki
        media: [
            // Galeri icin resimler veya videolar ekleyin. Ilk siradaki varsayilan olarak buyuk ekranda acilir.
            { type: "image", url: "assets/images/projects/broken-dice/cover.webp" },
            { type: "video", url: "https://www.youtube.com/embed/watch?v=8ptYMUUyPTo" }
        ],
        overview: {
            en: "A roguelite dungeon crawler experience. Throw your dice and clear the level.",
            tr: "Roguelite dungeon crawler tecrübesi. Zarlarını fırlat ve seviyeyi temizle."
        },
        mechanics: {
            en: [
                { title: "Throwing Dice", desc: "There is no sword or any weapon, only dice!", icon: "casino" },
                { title: "Positioning", desc: "Dodge all the enemy attacks and survive.", icon: "my_location" }
            ],
            tr: [
                { title: "Zar Fırlatma", desc: "Bir kılıcın veya herhangi bir silahın yok, sadece zarlar!", icon: "casino" },
                { title: "Pozisyon Alma", desc: "Düşman saldırılarının tümünden kaçın ve hayatta kal.", icon: "my_location" }
            ]
        }
    },
    {
        id: "firuze",
        title: "Firuze",
        engine: "Unity",
        platform: "PC",
        isFeatured: true,
        genre: {
            en: "Simulation & Shop Management",
            tr: "Simülasyon & Dükkan Yönetimi"
        },
        role: {
            en: "UI & Game Designer",
            tr: "UI & Oyun Tasarımcısı"
        },
        thumbnail: "assets/images/projects/firuze/cover.webp",
        featuredImage: "assets/images/projects/firuze/screenshot-2.webp",
        externalLink: "https://gedikmemoli.itch.io/firuze",
        media: [
            { type: "image", url: "assets/images/projects/firuze/screenshot-1.webp" },
            { type: "video", url: "https://www.youtube.com/embed/watch?v=8ptYMUUyPTo" },
            { type: "image", url: "assets/images/projects/firuze/screenshot-2.webp" },
            { type: "image", url: "assets/images/projects/firuze/screenshot-3.webp" },
            { type: "image", url: "assets/images/projects/firuze/screenshot-4.webp" },
            { type: "image", url: "assets/images/projects/firuze/screenshot-5.webp" },
            { type: "image", url: "assets/images/projects/firuze/screenshot-6.webp" },
            { type: "image", url: "assets/images/projects/firuze/screenshot-7.webp" },
            { type: "image", url: "assets/images/projects/firuze/screenshot-8.webp" }
        ],
        overview: {
            en: "A Turkic clay pot shop management simulation.",
            tr: "Türk çini dükkanı yönetimi simülasyonu."
        },
        mechanics: {
            en: [
                { title: "Painting", desc: "Paint with many shapes or just with brush.", icon: "palette" },
                { title: "Shop", desc: "Sell your own designs.", icon: "storefront" }
            ],
            tr: [
                { title: "Boyama", desc: "Çeşitli şekillerle ya da fırçanla boya.", icon: "palette" },
                { title: "Dükkan", desc: "Kendi tasarımlarını sat.", icon: "storefront" }
            ]
        }
    },
    {
        id: "living-cells",
        title: "Living Cells",
        engine: "GameMaker",
        platform: "PC",
        genre: { en: "Platformer Adventure", tr: "Platform Macera" },
        role: { en: "Game Designer & Developer", tr: "Oyun Tasarımcısı & Geliştirici" },
        thumbnail: "assets/images/projects/living-cells/cover.png",
        externalLink: "https://gedikmemoli.itch.io/living-cells",
        media: [
            { type: "image", url: "assets/images/projects/living-cells/cover.png" }
        ],
        overview: {
            en: "A platformer adventure game where the main objective is to defeat the final boss and set the captive souls free.",
            tr: "Ana hedefin son patronu yenmek ve esir ruhları serbest bırakmak olduğu, platform türünde bir macera oyunu."
        },
        mechanics: {
            en: [
                { title: "Core Loop", desc: "Navigate challenging platforms, defeat enemies, and collect souls.", icon: "autorenew" },
                { title: "Combat", desc: "Fast-paced melee attacks and dodge mechanics.", icon: "swords" },
                { title: "Boss Fights", desc: "Intense boss battle requiring pattern recognition.", icon: "skull" }
            ],
            tr: [
                { title: "Temel Döngü", desc: "Zorlu platformları aş, düşmanları yen ve ruhları topla.", icon: "autorenew" },
                { title: "Savaş", desc: "Hızlı yakın dövüş saldırıları ve kaçınma mekanikleri.", icon: "swords" },
                { title: "Patron Savaşları", desc: "Desen tanıma gerektiren yoğun boss savaşı.", icon: "skull" }
            ]
        }
    },
    {
        id: "kelime-oyunu-plus",
        title: "Kelime Oyunu +",
        engine: "Unity",
        platform: "PC",
        genre: { en: "Word Game Editor", tr: "Kelime Oyunu Editörü" },
        role: { en: "Game Designer & Developer", tr: "Oyun Tasarımcısı & Geliştirici" },
        thumbnail: "assets/images/projects/kelime-oyunu-plus/cover.png",
        externalLink: "#",
        media: [
            { type: "image", url: "assets/images/projects/kelime-oyunu-plus/cover.png" }
        ],
        overview: {
            en: "A word game experience featuring an admin panel. One person acts as the game master while the others play, offering an interactive group activity.",
            tr: "Admin paneli içeren bir kelime oyunu deneyimi. Bir kişinin oyunu yönettiği, diğerlerinin ise oyuncu olduğu interaktif bir grup aktivitesi sunuyor."
        },
        mechanics: {
            en: [
                { title: "Game Master Mode", desc: "Dedicated admin panel to control the flow and questions.", icon: "crown" },
                { title: "Scoring System", desc: "Dynamic score calculation based on speed and accuracy.", icon: "scoreboard" }
            ],
            tr: [
                { title: "Oyun Yöneticisi Modu", desc: "Akışı ve soruları kontrol etmek için özel admin paneli.", icon: "crown" },
                { title: "Puanlama Sistemi", desc: "Hız ve doğruluğa dayalı dinamik puan hesaplama.", icon: "scoreboard" }
            ]
        }
    },
    {
        id: "mind-cafe",
        title: "Mind Café",
        engine: "Unity",
        platform: "Mobile",
        genre: { en: "Simulation / Management", tr: "Simülasyon / Yönetim" },
        role: { en: "Game Designer & Developer", tr: "Oyun Tasarımcısı & Geliştirici" },
        thumbnail: "assets/images/projects/mind-cafe/cover.png",
        externalLink: "https://play.google.com/store/apps/details?id=com.istiklal.doga.y2026.mindcafe",
        media: [
            { type: "image", url: "assets/images/projects/mind-cafe/cover.png" }
        ],
        overview: {
            en: "A mobile cafe management concept offering players a peaceful experience. Manage the kitchen, prepare the right drinks according to orders, and serve your customers in a relaxing atmosphere.",
            tr: "Oyunculara huzurlu bir deneyim sunan mobil bir kafe yönetim konsepti. Mutfağı yönetin, siparişlere uygun içecekleri hazırlayın ve dinlendirici bir atmosferde müşterilerinize servis yapın."
        },
        mechanics: {
            en: [
                { title: "Order Management", desc: "Queue and prioritize customer orders efficiently.", icon: "receipt_long" },
                { title: "Crafting", desc: "Mix specific ingredients to create requested beverages.", icon: "local_cafe" },
                { title: "Atmosphere", desc: "Relaxing UI/UX and audio design to promote calmness.", icon: "auto_awesome" }
            ],
            tr: [
                { title: "Sipariş Yönetimi", desc: "Müşteri siparişlerini sıraya koyun ve verimli bir şekilde yönetin.", icon: "receipt_long" },
                { title: "Üretim", desc: "İstenen içecekleri oluşturmak için belirli malzemeleri karıştırın.", icon: "local_cafe" },
                { title: "Atmosfer", desc: "Sakinliği teşvik eden rahatlatıcı arayüz ve ses tasarımı.", icon: "auto_awesome" }
            ]
        }
    },
    {
        id: "kelime-kultur-kemer",
        title: "Kelime Kültür Kemer",
        engine: "Unity",
        platform: "Mobile",
        genre: { en: "Puzzle / Crossword", tr: "Çengel Bulmaca" },
        role: { en: "Game Designer & Developer", tr: "Oyun Tasarımcısı & Geliştirici" },
        thumbnail: "assets/images/projects/kelime-kultur-kemer/cover.webp",
        externalLink: "#",
        media: [
            { type: "image", url: "assets/images/projects/kelime-kultur-kemer/cover.webp" }
        ],
        overview: {
            en: "A crossword-style puzzle game where players test their vocabulary by finding the correct words to fill in the blank tiles.",
            tr: "Oyuncuların boş karolara gelmesi gereken doğru kelimeleri bularak kelime dağarcıklarını test ettikleri çengel bulmaca tarzı bir oyun."
        },
        mechanics: {
            en: [
                { title: "Grid System", desc: "Dynamic crossword grid that scales with difficulty.", icon: "grid_on" },
                { title: "Progression", desc: "Increasingly complex words and larger boards.", icon: "trending_up" },
                { title: "Hints", desc: "Resource management for revealing letters when stuck.", icon: "lightbulb" }
            ],
            tr: [
                { title: "Izgara Sistemi", desc: "Zorlukla ölçeklenen dinamik çengel bulmaca ızgarası.", icon: "grid_on" },
                { title: "İlerleme", desc: "Giderek karmaşıklaşan kelimeler ve daha büyük panolar.", icon: "trending_up" },
                { title: "İpuçları", desc: "Sıkışıldığında harfleri ortaya çıkarmak için kaynak yönetimi.", icon: "lightbulb" }
            ]
        }
    }
    /*
    =========================================
    YENI OYUN EKLEME SABLONU (TEMPLATE)
    =========================================
    Asagidaki yorum satirindaki blogu kopyalayip hemen ustte biten '}' satirindan sonra virgul ekleyip
    yapistirarak kendi oyununuzu kolayca ekleyebilirsiniz. HTML koduna dokunmaniza gerek yoktur.
    Ikonlar icin Google Fonts Material Symbols adlarini kullanin (orn: "swords", "rocket_launch").

    ,
    {
        id: "yeni-oyun-benzersiz-id", // URL'de gorunecek id (bosluksuz, kucuk harf, ingilizce karakter)
        title: "Oyunun Adi", // Oyunun basligi
        engine: "Unity", // Kullanilan motor (orn: Unity, Unreal, GameMaker)
        platform: "PC", // Platform (orn: PC, Mobile, Web)
        genre: {
            en: "Genre in English",
            tr: "Turkce Tur"
        },
        role: {
            en: "Your Role (e.g., Game Designer)",
            tr: "Rolunuz (orn., Oyun Tasarimcisi)"
        },
        thumbnail: "assets/images/projects/yeni-oyun-benzersiz-id/cover.png",
        // thumbnailPosition: "center center", // (Opsiyonel) Kartta gorsel odak noktasi (orn: "center 70%")
        // featuredImage: "assets/images/projects/yeni-oyun-benzersiz-id/screenshot-1.png", // (Opsiyonel) One cikan vitrinde ayri gorsel
        externalLink: "https://store-link.com", // Indirme / Magaza linki
        media: [
            { type: "image", url: "assets/images/projects/yeni-oyun-benzersiz-id/screenshot-1.png" },
            { type: "image", url: "assets/images/projects/yeni-oyun-benzersiz-id/screenshot-2.png" }
            // Video eklemek isterseniz ornek:
            // { type: "video", url: "https://www.youtube.com/embed/YOUR_VIDEO_ID" }
        ],
        overview: {
            en: "Short description of the game in English.",
            tr: "Oyunun Turkce kisa aciklamasi ve ozeti."
        },
        mechanics: {
            en: [
                { title: "Mechanic 1", desc: "Description of mechanic 1.", icon: "swords" },
                { title: "Feature 2", desc: "Description of feature 2.", icon: "rocket_launch" }
            ],
            tr: [
                { title: "Mekanik 1", desc: "Mekanik 1 in aciklamasi.", icon: "swords" },
                { title: "Ozellik 2", desc: "Ozellik 2 nin aciklamasi.", icon: "rocket_launch" }
            ]
        }
    }
    */
];
