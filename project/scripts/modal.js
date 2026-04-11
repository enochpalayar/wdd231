export function setupImageModal() {
    const modal = document.querySelector('#item-modal');
    const modalImg = document.querySelector('#modal-img');
    const closeBtn = document.querySelector('#close-modal');

    if (!modal) return;

    const openModal = (src) => {
        if (modalImg) modalImg.src = src;
        modal.showModal();
    };

    return { openModal };
}