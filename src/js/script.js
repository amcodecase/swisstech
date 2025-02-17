// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scroll-top');
    const scrollPosition = window.scrollY;
    
    // Show button when user has scrolled down 300px
    if (scrollPosition > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

// Smooth scroll to top when button is clicked
document.getElementById('scroll-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});