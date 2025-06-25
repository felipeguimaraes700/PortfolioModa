const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.work');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let index = 0;

  function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);

function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    if (!carousel) return; // segurança extra
    const width = carousel.clientWidth;
    carousel.scrollLeft += direction * width;
  }

  window.addEventListener('load', () => {
    const carousel = document.getElementById('carousel');
    if (carousel) carousel.scrollLeft = 0;
  });



   const videos = document.querySelectorAll('#carousel video');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;

      if (entry.isIntersecting) {
        // Se quiser que o vídeo dê play automático:
        // video.play();
      } else {
        video.pause();
      }
    });
  }, {
    threshold: 0.6 // 60% visível = está ativo
  });

  videos.forEach(video => observer.observe(video));