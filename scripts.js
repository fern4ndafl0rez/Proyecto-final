// // Función para mostrar el saludo al cargar la página
// window.onload = function () {
//     // Obtener el nombre de usuario almacenado
//     const username = localStorage.getItem('username');

//     // Saludar al usuario si se encuentra el nombre
//     if (username) {
//         document.getElementById('greeting').innerHTML = `¡Bienvenido,&nbsp;${username}!`;
//     } else {
//         document.getElementById('greeting').textContent = '¡Saludos!';  // Mensaje por defecto si no hay usuario
//     }
// };

// Función para registrar al usuario
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Guardar en localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Mostrar mensaje de éxito
        document.getElementById('registerMessage').textContent = '¡Cuenta creada con éxito!';
        document.getElementById('registerMessage').style.color = 'green';
       // Redirigir a otra página
       setTimeout(() => {
        window.location.href = 'inicio/inicio.html'; // Cambia esta URL a la que desees redirigir
    }, 2000); // 2 segundo para mostrar el mensaje antes de redirigir
    }
});

// Función para iniciar sesión
// document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const loginUsername = document.getElementById('email').value;
//     const loginPassword = document.getElementById('passwordd').value;

//     // Corregir el uso de las claves adecuadas en localStorage
//     const storedUsername = localStorage.getItem('username'); // Cambiado de 'correo' a 'username'
//     const storedPassword = localStorage.getItem('password');

//     // Verificación sensible a mayúsculas y minúsculas
//     if (loginUsername === storedUsername && loginPassword === storedPassword) {
//         document.getElementById('loginMessage').innerHTML = 'Inicio de sesión exitoso.<br>Redirigiendo a la página de inicio...';
//         document.getElementById('loginMessage').style.color = 'green';

//         // Redirigir a otra página
//         setTimeout(() => {
//             window.location.href = 'principal/principal.html'; // Cambia esta URL a la que desees redirigir
//         }, 2000); // 2 segundos para mostrar el mensaje antes de redirigir
//     } else {
//         document.getElementById('loginMessage').innerHTML = 'Nombre de usuario o contraseña incorrectos<br>Por favor, intenta nuevamente.';
//         document.getElementById('loginMessage').style.color = 'red';
//     }
// });