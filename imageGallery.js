var gallerySets = [
    {
        text: '<br> Hi! <br> My name is Zi Di, I\'m a citizen of planet Earth. I like art, music, games, design and programming. I have many ideas and sometimes I try to make things that could be useful, thought-provoking or simply fun.',
        images: [
            'images/me/me_spotted.png',
            'images/me/moose.jpg',
            'images/me.jpg',
            'images/me/me_ngl.png'
        ]
    },
    {
        text: 'Kiki<br> That\'s my Bunny!',
        images: [
            'images/kiki/kiki_bow.JPG',
            'images/kiki/kiki_ball.png'
        ]
    }
];

var displayDuration = 7000; // Duration to display each image in the slideshow (in milliseconds)

var currentSetIndex = 0;  // Index for the current text set
var currentImageIndex = 0;  // Index for the current image in the set
var slideshowInterval; // Interval ID for the slideshow

// Reset the keyframes for the image fade effect
function resetImageFade() {
    var imgElement = document.getElementById('current-image');
    imgElement.style.animation = 'none'; // Remove the animation
    imgElement.offsetHeight; // Trigger a reflow to ensure the previous animation is fully removed
    imgElement.style.animation = ''; // Reapply the animation
}


function initializeGallery() {
    showSet(currentSetIndex); // Show the first set initially
}

// Show images and text from a specific set
function showSet(setIndex) {
    var imgElement = document.getElementById('current-image');
    var textElement = document.getElementById('image-text');
    stopSlideshow(); // Stop the slideshow if it's running
    // Update text and start the slideshow
    textElement.innerHTML = gallerySets[setIndex].text;
    currentImageIndex = 0;
    imgElement.src = gallerySets[setIndex].images[currentImageIndex];
    resetImageFade();
    startSlideshow();
}

// Show the current image in the set
function showImage(index) {
    var imgElement = document.getElementById('current-image');
    imgElement.classList.remove('visible');
    imgElement.classList.add('hidden');
    imgElement.src = gallerySets[currentSetIndex].images[index];
    resetImageFade();
}

// Navigate to the previous image in the current set
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + gallerySets[currentSetIndex].images.length) % gallerySets[currentSetIndex].images.length;
    showImage(currentImageIndex);
}

// Navigate to the next image in the current set
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % gallerySets[currentSetIndex].images.length;
    showImage(currentImageIndex);
}

// Navigate to the previous text set
function prevSet() {
    currentSetIndex = (currentSetIndex - 1 + gallerySets.length) % gallerySets.length;
    showSet(currentSetIndex);
}

// Navigate to the next text set
function nextSet() {
    currentSetIndex = (currentSetIndex + 1) % gallerySets.length;
    showSet(currentSetIndex);
}

// Start the slideshow
function startSlideshow() {
    var imgElement = document.getElementById('current-image');
    var images = gallerySets[currentSetIndex].images;

    // Clear any existing interval
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
    }

    // Set the slideshow interval
    slideshowInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }, displayDuration); 
}

// Stop the slideshow
function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
    }
}
