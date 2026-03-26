// 1. Data Inventory
const projectInventory = {
    elevation: ['elevation-1.avif','elevation-2.avif','elevation-3.avif','elevation-4.avif','elevation-5.avif','elevation-6.avif','elevation-7.avif','elevation-8.avif','elevation-9.avif','elevation-10.webp','elevation-11.webp','elevation-12.webp','elevation-13.JPG'],
    kitchen: ['kitchen-1.jpg','kitchen-2.jpg','kitchen-3.jpg','kitchen-4.jpg','kitchen-5.jpg','kitchen-6.jpg','kitchen-7.jpg','kitchen-8.jpg','kitchen-9.jpg','kitchen-10.jpg','kitchen-11.jpg','kitchen-12.jpg','kitchen-13.jpg','kitchen-14.jpg','kitchen-15.JPG','kitchen-16.JPG','kitchen-17.JPG','kitchen-18.JPG','kitchen-19.JPG','kitchen-20.JPG','kitchen-21.JPG','kitchen-22.JPG','kitchen-23.JPG','kitchen-24.webp','kitchen-25.webp','kitchen-26.webp','kitchen-27.webp','kitchen-28.webp','kitchen-29.png','kitchen-30.webp','kitchen-31.webp','kitchen-32.webp','kitchen-33.jpg','kitchen-34.jpg'],
    bedroom: ['bedroom-1.jpg','bedroom-2.webp','bedroom-3.jpg','bedroom-4.jpg','bedroom-5.jpg','bedroom-6.jpg'],
    bathroom: ['bath-1.JPG','bath-2.JPG','bath-3.JPG','bath-4.jpg','bath-5.jpg','bath-6.jpg','bath-7.jpg','bath-8.JPG','bath-9.webp','bath-10.JPG','bath-11.webp','bath-12.webp','bath-13.webp','bath-14.webp','bath-15.webp','bath-16.webp','bath-17.JPG','bath-18.JPG'],
    living: ['living-1.jpg','living-2.jpg','living-3.jpg','living-4.jpg','living-5.jpg','living-6.jpg'],
    wetbar: ['wetbar1.webp','wetbar2.png','wetbar3.jpeg','wetbar4.webp','wetbar5.webp','wetbar6.webp'],
    interior: ['interior-1.jpg','interior-2.jpg','interior-3.jpg','interior-5.jpg','interior-6.jpg','interior-7.jpg','interior-8.jpg','interior-9.jpg']
};

document.addEventListener('DOMContentLoaded', () => {
    const galleryWrapper = document.getElementById('gallery-wrapper');
    const tabs = document.querySelectorAll('.tab-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentCategory = 'elevation';
    let currentIndex = 0;

    function renderCategory(category) {
        currentCategory = category;
        galleryWrapper.innerHTML = ''; // Clear current images

        projectInventory[category].forEach((imageName, index) => {
            const card = document.createElement('div');
            card.className = 'mini-slider-card';

            // FIX: Added the sub-category folder back into the path
            const imagePath = `images/projects/${category}/${imageName}`;

            card.innerHTML = `
            <div class="slider-container" style="cursor:pointer">
                <img src="${imagePath}" 
                     alt="${category} project" 
                     style="display: block !important; width: 100%; height: 100%; object-fit: cover;">
            </div>
        `;

            card.addEventListener('click', () => openLightbox(index));
            galleryWrapper.appendChild(card);
        });
    }

    function openLightbox(index) {
        currentIndex = index;
        updateLightboxImage();
        lightbox.style.display = 'flex';
    }

    function updateLightboxImage() {
        const images = projectInventory[currentCategory];
        // FIX: Added /${currentCategory}/ to the path here as well
        lightboxImg.src = `images/projects/${currentCategory}/${images[currentIndex]}`;
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    // Tab switching logic
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderCategory(tab.getAttribute('data-category'));
        });
    });

    // Lightbox Controls
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % projectInventory[currentCategory].length;
        updateLightboxImage();
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + projectInventory[currentCategory].length) % projectInventory[currentCategory].length;
        updateLightboxImage();
    });

    closeBtn.addEventListener('click', closeLightbox);

    // Initial Load
    renderCategory('elevation');
});