/* =========================================================
   ROUTER - Hash tabanlı sayfa geçişi (#project-<id>) ve bölüm yer imleri
   ========================================================= */

const SECTION_HASHES = new Set(['#games', '#about', '#contact', '#top']);

function scrollToSectionId(sectionId) {
    if (!sectionId || sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function setActiveNavLink(sectionId) {
    document.querySelectorAll('.nav-link[data-nav]').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-nav') === sectionId);
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
        setActiveNavLink('');
        window.scrollTo(0, 0);
    } else {
        const wasProjectOpen = projectView.classList.contains('active');
        projectView.classList.remove('active');
        homeView.classList.add('active');

        if (SECTION_HASHES.has(hash)) {
            const sectionId = hash.slice(1);
            setActiveNavLink(sectionId === 'top' ? '' : sectionId);
            requestAnimationFrame(() => {
                scrollToSectionId(sectionId);
            });
        } else if (wasProjectOpen) {
            setActiveNavLink('');
            window.scrollTo(0, 0);
        }
    }
}
