/* =========================================================
   MAIN — Uygulamanın başlangıç noktası ve olay dinleyicileri.
   Bu dosya her zaman EN SON yüklenmelidir.
   ========================================================= */

function updateActiveSectionOnScroll() {
    const homeView = document.getElementById('home-view');
    if (!homeView.classList.contains('active')) return;

    const sections = ['games', 'about', 'contact'];
    const header = document.querySelector('.site-header');
    const offset = (header ? header.offsetHeight : 68) + 60;
    const scrollPos = window.scrollY + offset;

    // Sayfanın en altındaysa son bölümü aktif göster
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
        setActiveNavLink('contact');
        return;
    }

    let currentSection = '';
    for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
            currentSection = id;
        }
    }
    setActiveNavLink(currentSection);
}

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

    // Navbar yer imleri: aynı hash'e tekrar tıklansa bile ilgili bölüme kaydırır
    document.querySelectorAll('.nav-link[data-nav], .nav-brand').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;

            const sectionId = href.slice(1);
            if (window.location.hash === href) {
                e.preventDefault();
                scrollToSectionId(sectionId);
                if (sectionId !== 'top') {
                    setActiveNavLink(sectionId);
                }
            }
        });
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

    // Scroll spy
    window.addEventListener('scroll', updateActiveSectionOnScroll, { passive: true });
    updateActiveSectionOnScroll();

    // Lightbox close
    document.querySelector('.lightbox-close').addEventListener('click', () => {
        document.getElementById('lightbox').classList.remove('active');
    });
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') {
            document.getElementById('lightbox').classList.remove('active');
        }
    });
});
