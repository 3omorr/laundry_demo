// Select all anchor links that point to an ID
const anchors = document.querySelectorAll('a[href^="#"]');

// Add a click event listener to each anchor link
anchors.forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    // Get the ID from the anchor link's href attribute
    const id = this.getAttribute('href');

    // Scroll to the element with the ID
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      duration: 1000
    });
  });
});

