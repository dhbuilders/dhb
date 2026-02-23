function moveSlide(button, step) {
    const container = button.parentElement;
    const slides = container.querySelectorAll('img');
    let activeIndex = Array.from(slides).findIndex(img => img.classList.contains('active'));

    slides[activeIndex].classList.remove('active');

    activeIndex += step;
    if (activeIndex >= slides.length) activeIndex = 0;
    if (activeIndex < 0) activeIndex = slides.length - 1;

    slides[activeIndex].classList.add('active');
}