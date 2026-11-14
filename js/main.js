/* =========================================================
   MAIN — Uygulamanın başlangıç noktası ve olay dinleyicileri.
   Bu dosya her zaman EN SON yüklenmelidir.
   ========================================================= */

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
