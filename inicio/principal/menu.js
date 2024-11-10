document.addEventListener('DOMContentLoaded', function() {
    // Crear y agregar el botón de menú hamburguesa
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    navbar.appendChild(menuToggle);

    // Obtener el menú
    const menu = document.querySelector('.menu');

    // Función para alternar el menú
    function toggleMenu() {
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    }

    // Event listeners
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Cerrar menú al hacer click en un enlace
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
        if (menu.classList.contains('active') && 
            !menu.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    // Evitar que los clicks dentro del menú lo cierren
    menu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});


document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.main-menu').classList.toggle('active');
});