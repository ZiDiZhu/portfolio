let slideIndex = 0;
showSlides();

var interval;

// Next/previous controls
function plusSlides(n) {
    slideIndex+=n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex>=slides.length) slideIndex =0;
    if (slideIndex< 0) slideIndex = slides.length-1;

    showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n-1;
    showSlides();
}

// Main function to display slides
function showSlides() {
    setautoplay();
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        if (slides[i].style.display === "block") {
            slides[i].classList.add("fade-out"); // Add fade-out effect
            setTimeout(() => {
                slides[i].style.display = "none"; // Hide after fade-out
                slides[i].classList.remove("fade-out"); // Clean up fade-out class
            }, 1500); // Match fade-out animation-duration in CSS
        } else {
            slides[i].style.display = "none"; // Hide non-active slides
        }
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide with fade-in effect
    slides[slideIndex ].style.display = "block";
    slides[slideIndex].classList.add("fade");
    dots[slideIndex].className += " active";
}

function setautoplay(){
    clearInterval(interval);
    interval = setInterval(() => {
        plusSlides(1);
    }, 4500);
}

setautoplay();
