document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.project-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
    const slideInterval = 5000; // 5 seconds per slide

    // Create navigation dots
    const navDotsContainer = document.querySelector('.slider-nav-dots');
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.dataset.index = i;
        navDotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    // Automatic sliding
    let autoSlide = setInterval(goToNextSlide, slideInterval);

    // Manual navigation with dots
    navDotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            clearInterval(autoSlide); // Stop auto-slide on manual interaction
            currentIndex = parseInt(e.target.dataset.index);
            updateSlider();
            autoSlide = setInterval(goToNextSlide, slideInterval); // Restart auto-slide
        }
    });

    // Initial update
    updateSlider();
});