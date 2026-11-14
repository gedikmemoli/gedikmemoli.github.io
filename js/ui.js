/* =========================================================
   UI — İletişim butonu ve lightbox (görsel büyütme)
   ========================================================= */

function revealEmail() {
    const btn = document.getElementById('contactBtn');
    const email = 'gedikmemoli@gmail.com';
    btn.innerHTML = `<a href="mailto:${email}">${email}</a>`;
    btn.classList.add('expanded');
    btn.onclick = null;
    btn.removeAttribute("data-i18n");
}

window.openLightbox = function(url) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = url;
    lb.classList.add('active');
}
