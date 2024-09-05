let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

function updateCarousel() {
    const inner = document.querySelector('.carousel-inner');
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
