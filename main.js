// Get a reference to the scroll button
const scrollButton = document.getElementById('scroll-btn');

// Add a click event listener to the button
scrollButton.addEventListener('click', function() {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: Add smooth scrolling effect
    });
});
