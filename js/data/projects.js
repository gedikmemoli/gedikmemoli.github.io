/* =========================================================
   PROJE VERİLERİ — Portfolyoda görünen tüm oyunlar.
   Yeni oyun eklemek için sadece bu dosyayı düzenlemeniz yeterli
   (en alttaki şablona bakın). Görseller: assets/images/projects/<id>/
   ========================================================= */

const projectsData = [
    {
        id: "broken-dice", // URL'de görünecek id (boşluksuz, küçük harf, ingilizce karakter)
        title: "Broken Dice", // Oyunun başlığı
        engine: "Unity", // Kullanılan motor (örn: Unity, Unreal, GameMaker)
        platform: "PC", // Platform (örn: PC, Mobile, Web)
        genre: {
            en: "Roguelite Dungeon Crawler",
            tr: "Roguelite Dungeon Crawler"
        },
        role: {
            en: "UI & Game Designer",
            tr: "UI & Oyun Tasarımcısı"
        },
        thumbnail: "assets/images/projects/broken-dice/cover.webp", // Ana sayfada kartta görünecek resmin dosya yolu
        thumbnailPosition: "center 72%",
        externalLink: "#", // İndirme / Mağaza linki
        media: [
            // Galeri için resimler veya videolar ekleyin. İlk sıradaki varsayılan olarak büyük ekranda açılır.
            { type: "image", url: "assets/images/projects/broken-dice/cover.webp" },
            { type: "video", url: "https://www.youtube.com/embed/watch?v=8ptYMUUyPTo" }
            // Video eklemek isterseniz örnek:
            // { type: "video", url: "https://www.youtube.com/embed/YOUR_VIDEO_ID" }
        ],
        overview: {
            en: "A roguelite dungeon crawler experience. Throw your dice and clear the level.",
            tr: "Roguelite dungeon crawler tecrübesi. Zarlarını fırlat ve seviyeyi temizle."
        },
        mechanics: {
            en: [
                { title: "Throwing Dice", desc: "There is no sword or any weapon, only dice!", icon: "🎲" },
                { title: "Positioning", desc: "Dodge all the enemy attacks and survive.", icon: "♟️" }
            ],
            tr: [
                { title: "Zar Fırlatma", desc: "Bir kılıcın veya herhangi bir silahın yok, sadce zarlar!", icon: "🎲" },
                { title: "Pozisyon Alma", desc: "Düşman saldırılarının tümünden kaçın ve hayatta kal.", icon: "♟️" }
            ]
        }
    },
    {
        id: "firuze", // URL'de görünecek id (boşluksuz, küçük harf, ingilizce karakter)
        title: "Firuze", // Oyunun başlığı
        engine: "Unity", // Kullanılan motor (örn: Unity, Unreal, GameMaker)
        platform: "PC", // Platform (örn: PC, Mobile, Web)
        isFeatured: true,
        genre: {
            en: "Simulation & Shop Management",
            tr: "Simülasyon & Dükkan Yönetimi"
        },
        role: {
            en: "UI & Game Designer",
            tr: "UI & Oyun Tasarımcısı"
        },
        thumbnail: "assets/images/projects/firuze/cover.webp", // Ana sayfada kartta görünecek resmin dosya yolu
        featuredImage: "assets/images/projects/firuze/screenshot-2.webp", // Öne çıkan vitrinde sağda görünecek görsel
        externalLink: "https://gedikmemoli.itch.io/firuze", // İndirme / Mağaza linki
        media: [
            // Galeri için resimler veya videolar ekleyin. İlk sıradaki varsayılan olarak büyük ekranda açılır.
            { type: "image", url: "assets/images/projects/firuze/screenshot-1.webp" },
            { type: "video", url: "https://www.youtube.com/embed/watch?v=8ptYMUUyPTo" },
            { type: "image", url: "assets/images/projects/firuze/screenshot-2.webp" },
            { type: "image", url: "assets/images/projects/firuze/screenshot-3.webp" },
            { type: "image", url: "assets/images/projects/firuze/screenshot-4.webp" },
            { type: "image", url: "assets/images/projects/firuze/screenshot-5.webp" },
            { type: "image", url: "assets/images/projects/firuze/screenshot-6.webp" },
            { type: "image", url: "assets/images/projects/firuze/screenshot-7.webp" },
            { type: "image", url: "assets/images/projects/firuze/screenshot-8.webp" }
            // Video eklemek isterseniz örnek:
            // { type: "video", url: "https://www.youtube.com/embed/YOUR_VIDEO_ID" }
        ],
        overview: {
            en: "A Turkic clay pot shop management simulation.",
            tr: "Türk çini dükkanı yönetimi simülasyonu."
        },
        mechanics: {
            en: [
                { title: "Painting", desc: "Paint with many shapes or just with brush.", icon: "🎨" },
                { title: "Shop", desc: "Sell your own designes.", icon: "💵" }
            ],
            tr: [
                { title: "Boyama", desc: "Çeşitli şekillerle ya da fırçanla boya.", icon: "🎨" },
                { title: "Pozisyon Alma", desc: "Kendi tasarımlarını sat.", icon: "💵" }
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
                { title: "Boss Fights", desc: "Intense boss battle requiring pattern recognition.", icon: "👹" }
            ],
            tr: [
                { title: "Temel Döngü", desc: "Zorlu platformları aş, düşmanları yen ve ruhları topla.", icon: "🔄" },
                { title: "Savaş", desc: "Hızlı yakın dövüş saldırıları ve kaçınma mekanikleri.", icon: "⚔️" },
                { title: "Patron Savaşları", desc: "Desen tanıma gerektiren yoğun boss savaşı.", icon: "👹" }
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
                { title: "Game Master Mode", desc: "Dedicated admin panel to control the flow and questions.", icon: "👑" },
                { title: "Scoring System", desc: "Dynamic score calculation based on speed and accuracy.", icon: "💯" }
            ],
            tr: [
                { title: "Oyun Yöneticisi Modu", desc: "Akışı ve soruları kontrol etmek için özel admin paneli.", icon: "👑" },
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
        thumbnail: "assets/images/projects/yeni-oyun-benzersiz-id/cover.png", // Ana sayfada kartta görünecek resmin dosya yolu
        // thumbnailPosition: "center center", // (Opsiyonel) Kartta görsel odak noktası (örn: "center 70%")
        // featuredImage: "assets/images/projects/yeni-oyun-benzersiz-id/screenshot-1.png", // (Opsiyonel) Öne çıkan vitrinde kullanılacak ayrı görsel
        externalLink: "https://store-link.com", // İndirme / Mağaza linki
        media: [
            // Galeri için resimler veya videolar ekleyin. İlk sıradaki varsayılan olarak büyük ekranda açılır.
            { type: "image", url: "assets/images/projects/yeni-oyun-benzersiz-id/screenshot-1.png" },
            { type: "image", url: "assets/images/projects/yeni-oyun-benzersiz-id/screenshot-2.png" }
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
