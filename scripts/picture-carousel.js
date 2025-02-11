const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const descriptionP = document.querySelector('.description');
const images = document.querySelectorAll('.carousel-images img');
const imageWidth = document.querySelector('.carousel-images img').offsetWidth;
let currentIndex = 0;

function updateCarousel() {
    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    descriptionP.textContent = images[currentIndex].dataset.description;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-images img').length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel-images img').length) % document.querySelectorAll('.carousel-images img').length;
    updateCarousel();
});

// Another carousel

const secondCarouselImages = document.querySelector('.second-carousel-images');
const prevSecondBtn = document.querySelector('.second-prev-btn');
const nextSecondBtn = document.querySelector('.second-next-btn');
const secondDescriptionP = document.querySelector('.second-description');
const secondImages = document.querySelectorAll('.second-carousel-images img');
const secondImageWidth = document.querySelector('.second-carousel-images img').offsetWidth;
let currentIndex2 = 0;

function updateSecondCarousel() {
    secondCarouselImages.style.transform = `translateX(-${currentIndex2 * 500}px)`;
    secondDescriptionP.textContent = secondImages[currentIndex2].dataset.description;
}

nextSecondBtn.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 + 1) % document.querySelectorAll('.second-carousel-images img').length;
    updateSecondCarousel();
});

prevSecondBtn.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 - 1 + document.querySelectorAll('.second-carousel-images img').length) % document.querySelectorAll('.second-carousel-images img').length;
    updateSecondCarousel();
});

// // Optional: Auto-sliding
// setInterval(() => {
//     nextBtn.click();
// }, 6000); // Slides every 6 seconds