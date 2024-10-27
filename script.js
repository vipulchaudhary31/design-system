// Initialize Swiper
var swiper = new Swiper('.swiper-container.two', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'c',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 390, // Default value for desktop
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
    },
});

// Function to update coverflowEffect based on card size
function updateCoverflowEffect() {
    const slides = document.querySelectorAll('.two .swiper-slide');
    const firstSlideWidth = slides[0] ? slides[0].offsetWidth : 0;

    if (firstSlideWidth <= 400) { // Check if the width is mobile size
        swiper.params.coverflowEffect.stretch = 100; // Mobile stretch value
    } else {
        swiper.params.coverflowEffect.stretch = 390; // Default stretch value
    }

    swiper.update(); // Update Swiper to apply changes
}

// Call the function on page load
updateCoverflowEffect();

// Call the function on window resize
window.addEventListener('resize', updateCoverflowEffect);
