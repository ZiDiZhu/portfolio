document.addEventListener('DOMContentLoaded', () => {
    const galleryElement = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.querySelector('.close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const pageNumber = document.getElementById('page-number');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const images = [];
    const imagesPerPage = 10;
    let currentPage = 1;
    let currentImageIndex = 0;

    // Load images from different folders
    const folders = ['folder1', 'folder2', 'folder3']; // Example folders
    folders.forEach(folder => {
        for (let i = 1; i <= 10; i++) { // Assuming each folder has 10 images
            images.push(`images/${folder}/image${i}.jpg`);
        }
    });

    function displayImages(page) {
        galleryElement.innerHTML = '';
        const start = (page - 1) * imagesPerPage;
        const end = page * imagesPerPage;
        const paginatedImages = images.slice(start, end);

        paginatedImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.addEventListener('click', () => openLightbox(src));
            galleryElement.appendChild(img);
        });

        pageNumber.textContent = `Page ${page} of ${Math.ceil(images.length / imagesPerPage)}`;
    }

    function openLightbox(src) {
        lightbox.style.display = 'block';
        lightboxImage.src = src;
        currentImageIndex = images.indexOf(src);
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function navigateLightbox(direction) {
        currentImageIndex += direction;
        if (currentImageIndex < 0) currentImageIndex = images.length - 1;
        if (currentImageIndex >= images.length) currentImageIndex = 0;
        lightboxImage.src = images[currentImageIndex];
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayImages(currentPage);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < Math.ceil(images.length / imagesPerPage)) {
            currentPage++;
            displayImages(currentPage);
        }
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));

    displayImages(currentPage);
});
