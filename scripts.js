document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const Apellidos = document.getElementById('Apellidos').value;
            const genero = document.getElementById('genero').value;
            const correo = document.getElementById('correo').value;
            const password = document.getElementById('password').value;

            if (username && Apellidos && genero && correo && password) {
                // Guardar en localStorage
                localStorage.setItem('username', username);
                localStorage.setItem('Apellidos', Apellidos);
                localStorage.setItem('genero', genero);
                localStorage.setItem('correo', correo);
                localStorage.setItem('password', password);

                // Mostrar mensaje de éxito
                document.getElementById('registerMessage').textContent ='¡Cuenta creada con éxito !';
                document.getElementById('registerMessage').style.color = 'white';

                // Redirigir a otra página
                setTimeout(() => {
                    window.location.href = 'inicio/inicio.html'; // Cambia esta URL a la que desees redirigir
                }, 2000); // 2 segundos para mostrar el mensaje antes de redirigir
            }
        });
    } else {
        console.error("Formulario de registro no encontrado");
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const loginUsername = document.getElementById('email').value;
            const loginPassword = document.getElementById('passwordd').value;
            const storedUsername = localStorage.getItem('correo');
            const storedPassword = localStorage.getItem('password');

            if (loginUsername === storedUsername && loginPassword === storedPassword) {
                document.getElementById('loginMessage').innerHTML = 'Inicio de sesión exitoso.<br>Redirigiendo a la página de inicio...';
                document.getElementById('loginMessage').style.color = 'white';
                setTimeout(() => {
                    window.location.href = 'principal/principal.html';
                }, 2000);
            } else {
                document.getElementById('loginMessage').innerHTML = 'Nombre de usuario o contraseña incorrectos<br>Por favor, intenta nuevamente.';
                document.getElementById('loginMessage').style.color = 'red';
            }
        });
    } else {
        console.error("Formulario de inicio de sesión no encontrado");
    }
});