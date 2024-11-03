// Función para mostrar el saludo al cargar la página
window.onload = function () {
    // Obtener el nombre de usuario almacenado
    const username = localStorage.getItem('username');
    const Apellidos = localStorage.getItem('Apellidos');

    // Saludar al usuario si se encuentra el nombre
    if (username && Apellidos) {
        document.getElementById('saludo').innerHTML = `¡Bienvenid@,&nbsp;${username} ${Apellidos}!`;
    } else {
        document.getElementById('saludo').textContent = '¡Saludos!';  // Mensaje por defecto si no hay usuario
    }
};


let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// Opcional: Autoplay
setInterval(() => moveSlide(1), 5000);


document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const arrow = question.querySelector('.faq-arrow');
      
      // Toggle active class for the current answer
      answer.classList.toggle('active');
      arrow.classList.toggle('active');
      
      // Close other answers
      document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
        if (otherAnswer !== answer) {
          otherAnswer.classList.remove('active');
          otherAnswer.previousElementSibling.querySelector('.faq-arrow').classList.remove('active');
        }
      });
    });
  });