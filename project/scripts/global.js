document.querySelector('#last-modified').textContent = document.lastModified;

const ham = document.querySelector('#hamburger');
const nav = document.querySelector('#primary-nav');

if (ham && nav) {
    ham.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('show');
        ham.textContent = isOpen ? '✕' : '☰';
    });
}

const modal = document.querySelector('#order-guide');
const openBtn = document.querySelector('#open-guide');
const closeBtn = document.querySelector('#close-guide');

if (modal && openBtn && closeBtn) {
    openBtn.addEventListener('click', () => modal.showModal());
    closeBtn.addEventListener('click', () => modal.close());
}