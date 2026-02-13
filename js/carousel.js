// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);

  // News section toggle functionality
  const newsSection = document.querySelector('.news-section');
  const newsHeading = newsSection ? newsSection.querySelector('h2') : null;
  
  if (newsHeading) {
    newsHeading.addEventListener('click', function() {
      newsSection.classList.toggle('collapsed');
    });
  }
});
