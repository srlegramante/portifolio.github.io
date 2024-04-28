// Função para mostrar o pop-up
function showPopup(content) {
    var popup = document.getElementById("popup");
    var popupContent = document.getElementById("popup-content");
    
    popupContent.innerHTML = content; 

    popup.style.display = "block";
}

// Função para ocultar o pop-up
function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

// coluna imagens
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active-slide');
  });
  slides[index].classList.add('active-slide');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// Função para avançar automaticamente os slides a cada 3 segundos
function autoPlay() {
  setInterval(() => {
    nextSlide();
  }, 3000); // Intervalo de 3 segundos (3000 milissegundos)
}

// Iniciar a reprodução automática ao carregar a página
autoPlay();
