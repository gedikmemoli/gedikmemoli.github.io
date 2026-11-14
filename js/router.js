/* =========================================================
   ROUTER — Hash tabanlı sayfa geçişi (#project-<id>)
   ========================================================= */

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
