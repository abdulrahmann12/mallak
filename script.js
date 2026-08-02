/* ==========================================================================
   Cozy Birthday Card Logic
   ========================================================================== */

function openModal(imgSrc, captionText) {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');

    if (modal && modalImg) {
        modalImg.src = imgSrc;
        if (captionText) {
            modalCaption.textContent = captionText;
            modalCaption.style.display = 'block';
        } else {
            modalCaption.style.display = 'none';
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(event) {
    if (event.target.id === 'photoModal') {
        closeModalDirect();
    }
}

function closeModalDirect() {
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}
