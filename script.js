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

// Interactive Ending Wish Card & Candle blowing logic
document.addEventListener('DOMContentLoaded', () => {
    const wishEnvelope = document.getElementById('wishEnvelope');
    const envelopeCover = document.getElementById('envelopeCover');
    const candleWrapper = document.getElementById('candleWrapper');
    const candleFlame = document.getElementById('candleFlame');
    const candleInstruction = document.getElementById('candleInstruction');
    const hiddenWishMessage = document.getElementById('hiddenWishMessage');

    if (envelopeCover && wishEnvelope) {
        envelopeCover.addEventListener('click', (e) => {
            e.stopPropagation();
            wishEnvelope.classList.add('opened');
        });
    }

    function blowOut() {
        if (candleFlame && !candleFlame.classList.contains('extinguished')) {
            candleFlame.classList.add('extinguished');
            if (candleInstruction) candleInstruction.classList.add('hidden');
            if (hiddenWishMessage) hiddenWishMessage.classList.add('visible');
            triggerConfetti();
        }
    }

    if (candleFlame) candleFlame.addEventListener('click', blowOut);
    if (candleWrapper) candleWrapper.addEventListener('click', blowOut);

    function triggerConfetti() {
        const colors = ['#F48FB1', '#CE93D8', '#FFF8FA', '#FFEB3B', '#FFF'];
        for (let i = 0; i < 35; i++) {
            const dot = document.createElement('div');
            dot.style.position = 'fixed';
            dot.style.width = '8px';
            dot.style.height = '8px';
            dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            dot.style.left = `${Math.random() * 100}vw`;
            dot.style.top = '-10px';
            dot.style.borderRadius = '50%';
            dot.style.zIndex = '9999';
            dot.style.transition = `transform ${Math.random() * 1.5 + 1.5}s linear, opacity 2s ease`;

            document.body.appendChild(dot);

            setTimeout(() => {
                dot.style.transform = `translateY(${window.innerHeight + 20}px) rotate(${Math.random() * 360}deg)`;
                dot.style.opacity = '0';
            }, 50);

            setTimeout(() => dot.remove(), 3000);
        }
    }
});

