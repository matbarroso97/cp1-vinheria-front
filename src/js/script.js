// Método para trocar de imagem no Banner
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#carousel img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    let current = 0;
    let interval;
  
    function showImage(index) {
      images.forEach(img => img.classList.remove('active'));
      images[index].classList.add('active');
    }
  
    function nextImage() {
      current = (current + 1) % images.length;
      showImage(current);
    }
  
    function prevImage() {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    }
  
    nextBtn.addEventListener('click', () => {
      nextImage();
    });
  
    prevBtn.addEventListener('click', () => {
      prevImage();
    });
  
    function startAutoPlay() {
      interval = setInterval(nextImage, 5000); // muda a cada 5 segundos
    }
  
    function stopAutoPlay() {
      clearInterval(interval);
    }
  
    const carousel = document.getElementById('carousel');
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
  
    showImage(current);
    startAutoPlay();
  });

// Método para apagar o campo de busca
document.addEventListener('DOMContentLoaded', () => {
    const formBusca = document.getElementById('form-busca');
    const campoBusca = document.getElementById('campo-busca');
  
    formBusca.addEventListener('submit', (event) => {
      event.preventDefault();
      campoBusca.value = '';  
    });
  });

// Efeito da barra de Menu
document.addEventListener('DOMContentLoaded', () => {
  let page = window.location.pathname.split('/').pop();
  if (!page) page = 'index.html';

  document.querySelectorAll('nav a.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});