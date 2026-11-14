/* =========================================================
   RENDER - Ana sayfa proje kartları, proje detay sayfası ve medya galerisi
   ========================================================= */

let currentFilter = "all";

function renderProjects() {
    const featuredContainer = document.getElementById('featured-project-container');
    const container = document.getElementById('projects-container');

    featuredContainer.innerHTML = '';
    container.innerHTML = '';

    // Öne Çıkan Proje (Oyunlar bölümünün en başında ayrı vitrin olarak yer alır)
    const featuredProject = projectsData.find(p => p.isFeatured);
    if (featuredProject) {
        const showcaseImg = featuredProject.featuredImage || featuredProject.thumbnail;
        featuredContainer.innerHTML = `
            <div class="featured-card">
                <div class="featured-content">
                    <div class="featured-badge">${translations[currentLang].featuredBadge}</div>
                    <h3 class="featured-title">${featuredProject.title}</h3>
                    <p class="featured-desc">${featuredProject.overview[currentLang]}</p>
                    <div class="featured-tags">
                        <span class="tag">${featuredProject.engine}</span>
                        <span class="tag">${featuredProject.platform}</span>
                    </div>
                    <a href="#project-${featuredProject.id}" class="featured-btn">${translations[currentLang].viewBtn} &rarr;</a>
                </div>
                <a href="#project-${featuredProject.id}" class="featured-media" aria-label="${featuredProject.title}">
                    <img src="${showcaseImg}" alt="${featuredProject.title}" class="featured-img">
                </a>
            </div>
        `;
    }

    // Tüm oyunlar (Öne Çıkan proje de kartlar arasında yer alır)
    const filteredProjects = projectsData.filter(p => {
        if (currentFilter === 'all') return true;
        return p.platform === currentFilter || p.engine === currentFilter;
    });

    filteredProjects.forEach(p => {
        const card = document.createElement('a');
        card.href = `#project-${p.id}`;
        card.className = 'project-card';

        const imgPosStyle = p.thumbnailPosition ? ` style="object-position: ${p.thumbnailPosition};"` : '';
        const featuredPill = p.isFeatured
            ? `<span class="card-featured-pill">${translations[currentLang].featuredPill}</span>`
            : '';

        card.innerHTML = `
            <div class="project-thumb-wrap">
                <img src="${p.thumbnail}" alt="${p.title}" class="project-img"${imgPosStyle}>
                ${featuredPill}
            </div>
            <div class="project-body">
                <h3 class="project-title">${p.title}</h3>
                <div class="project-tags">
                    <span class="tag">${p.engine}</span>
                    <span class="tag">${p.platform}</span>
                </div>
                <p class="project-desc">${p.overview[currentLang]}</p>
                <span class="project-card-action">${translations[currentLang].viewBtn} &rarr;</span>
            </div>
        `;
        container.appendChild(card);
    });
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
    if (project.externalLink === "#") {
        extLink.style.display = 'none';
    } else {
        extLink.style.display = 'inline-flex';
    }

    // Media Gallery
    const strip = document.getElementById('thumbnail-strip');
    strip.innerHTML = '';

    if (project.media.length > 0) {
        setMainStage(project.media[0]);

        project.media.forEach((m) => {
            const thumb = document.createElement('div');
            thumb.className = 'thumbnail';
            if (m.type === 'video') {
                thumb.innerHTML = `<div class="video-thumb-icon"><span class="material-symbols-outlined" aria-hidden="true">play_arrow</span></div>`;
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
                <div class="bento-icon"><span class="material-symbols-outlined" aria-hidden="true">${mech.icon}</span></div>
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
        let videoUrl = mediaItem.url;
        if (videoUrl.includes('embed/watch?v=')) {
            videoUrl = videoUrl.replace('embed/watch?v=', 'embed/');
        }
        stage.innerHTML = `<iframe src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    }
}
