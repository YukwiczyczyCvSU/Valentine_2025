// This is the javascript for smooth scrolling in website.
function gotoSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
}

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
    secondCarouselImages.style.transform = `translateX(-${currentIndex2 * 300}px)`;
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

//Ask question
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}