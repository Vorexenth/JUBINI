// Carousel functionality for NOHS website
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const slideCount = slides.length;
  let currentSlide = 0;

  // Hide all slides initially
  slides.forEach(slide => {
    slide.classList.remove('active');
    slide.style.opacity = '0';
  });

  // Show first slide
  slides[0].classList.add('active');
  slides[0].style.opacity = '1';

  // Function to show next slide
  function showNextSlide() {
    // Hide current slide
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].style.opacity = '0';

    // Move to next slide
    currentSlide = (currentSlide + 1) % slideCount;

    // Show next slide
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.opacity = '1';
  }

  // Auto-advance carousel every 3 seconds
  setInterval(showNextSlide, 3000);
});
