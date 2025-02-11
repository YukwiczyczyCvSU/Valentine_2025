const secondCarouselImages = document.querySelector('.second-carousel-images');
const prevSecondBtn = document.querySelector('.second-prev-btn');
const nextSecondBtn = document.querySelector('.second-next-btn');
const descriptionP = document.querySelector('.second-description');
const secondImages = document.querySelectorAll('.second-carousel-images img');
const secondImageWidth = document.querySelector('.second-carousel-images img').offsetWidth;
let currentIndex2 = 0;

function updateSecondCarousel() {
    secondCarouselImages.style.transform = `translateX(-${currentIndex2 * secondImageWidth}px)`;
    descriptionP.textContent = secondImages[currentIndex2].dataset.description;
}

nextSecondBtn.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 + 1) % document.querySelectorAll('.second-carousel-images img').length;
    updateSecondCarousel();
});

prevSecondBtn.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 - 1 + document.querySelectorAll('.second-carousel-images img').length) % document.querySelectorAll('.second-carousel-images img').length;
    updateSecondCarousel();
});
``
// // Optional: Auto-sliding
// setInterval(() => {
//     nextBtn.click();
// }, 6000); // Slides every 6 seconds