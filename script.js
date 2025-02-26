const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll('.carousel-track img');

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = images[0].clientWidth;
    track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);
