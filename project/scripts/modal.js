export function setupImageModal() {
    const modal = document.querySelector('#image-modal');
    const modalImg = document.querySelector('#modal-img');
    const closeBtn = document.querySelector('#close-modal');

    if (!modal) return;

    const openModal = (src) => {
        modalImg.src = src;
        modal.showModal();
    };

    closeBtn.onclick = () => modal.close();
    modal.onclick = (event) => {
        if (event.target === modal) modal.close();
    };

    return { openModal };
}