let currentIndex = 0;

const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showSlide(index) {
    const offset = -index * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showSlide(currentIndex);
}

// Opcional: Auto-slide cada 5 segundos
setInterval(nextSlide, 5000);
