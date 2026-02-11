// Carousel functionality for home page
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;

  // Only run if carousel slides exist (on home page)
  if (slides.length > 0) {
    function showSlide(index) {
      // Remove active class from all slides
      slides.forEach(slide => {
        slide.classList.remove('active');
      });

      // Add active class to current slide
      slides[index].classList.add('active');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    // Auto-advance slides every 4 seconds
    setInterval(nextSlide, 4000);

    // Initialize first slide
    showSlide(0);
  }

  // News section toggle functionality
  const newsSection = document.querySelector('.news-section');
  if (newsSection) {
    const newsHeading = newsSection.querySelector('h2');
    if (newsHeading) {
      newsHeading.addEventListener('click', function() {
        newsSection.classList.toggle('collapsed');
      });
    }
    
    // Hide news section if not on home page
    const homeSection = document.querySelector('.home-section');
    if (!homeSection || !homeSection.classList.contains('active')) {
      newsSection.style.display = 'none';
    }
  }
});
