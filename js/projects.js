// 1. Data Inventory
const projectInventory = {
    elevation: ['elevation-1.avif','elevation-2.avif','elevation-3.avif','elevation-4.avif','elevation-5.avif','elevation-6.avif','elevation-7.avif','elevation-8.avif','elevation-9.avif'],
    kitchen: ['kitchen-1.jpg', 'kitchen-2.jpg', 'kitchen-3.jpg', 'kitchen-4.jpg', 'kitchen-5.jpg', 'kitchen-6.jpg', 'kitchen-7.jpg', 'kitchen-8.jpg', 'kitchen-9.jpg', 'kitchen-10.jpg', 'kitchen-11.jpg', 'kitchen-12.jpg', 'kitchen-13.jpg', 'kitchen-14.jpg'],
    bedroom: ['bedroom-1.jpeg', 'bedroom-2.jpeg', 'bedroom-3.jpeg', 'bedroom-4.jpeg', 'bedroom-5.jpeg', 'bedroom-6.jpeg'],
    bathroom: ['bath-1.JPG','bath-2.JPG','bath-3.JPG','bath-4.jpg','bath-5.jpg','bath-6.jpg','bath-7.jpg'],
    living: ['living-1.jpg', 'living-2.jpg', 'living-3.jpg', 'living-4.jpg', 'living-5.jpeg'],
    wetbar: ['bar-1.jpg','bar-2.jpg','bar-3.jpg']
};

document.addEventListener('DOMContentLoaded', () => {
    const galleryWrapper = document.getElementById('gallery-wrapper');
    const tabs = document.querySelectorAll('.tab-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentCategory = 'kitchen';
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
    renderCategory('kitchen');
});