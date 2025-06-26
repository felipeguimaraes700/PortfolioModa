
function openNav() {
    document.querySelector(".abrir").style.display = "none";
    document.querySelector(".fechar").style.display = "block";
    document.querySelector(".links-nav-mobile").style.width = "60%";
    document.querySelector(".menu-overlay").style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    document.querySelector(".abrir").style.display = "block";
    document.querySelector(".fechar").style.display = "none";
    document.querySelector(".links-nav-mobile").style.width = "0%";
    document.querySelector(".menu-overlay").style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Fecha o menu ao clicar em qualquer link dentro do menu mobile
  document.querySelectorAll('.links-nav-mobile a').forEach(link => {
    link.addEventListener('click', () => {
      closeNav();
    });
  });


//SCROLL DO NAV
   window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }
  });



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
const btnLeft = document.querySelector('.carousel-btn-video.left');
const btnRight = document.querySelector('.carousel-btn-video.right');

videos.forEach(video => {
  // 1. Clique no vídeo = play/pause
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  // 2. Esconder botões quando está tocando
  video.addEventListener('play', () => {
    btnLeft.style.opacity = '0';
    btnRight.style.opacity = '0';
    btnLeft.style.pointerEvents = 'none';
    btnRight.style.pointerEvents = 'none';
  });

  // 3. Mostrar botões quando está pausado
  video.addEventListener('pause', () => {
    btnLeft.style.opacity = '1';
    btnRight.style.opacity = '1';
    btnLeft.style.pointerEvents = 'auto';
    btnRight.style.pointerEvents = 'auto';
  });
});

// 4. Pause automático ao sair da tela
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;
    if (!entry.isIntersecting) {
      video.pause();
    }
  });
}, {
  threshold: 0.6
});

videos.forEach(video => observer.observe(video));