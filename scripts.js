document.addEventListener('DOMContentLoaded', function () {
    // Espera a que todo el contenido HTML se cargue completamente antes de ejecutar el código (+)

    // Obtiene el formulario de registro por su ID
    const registerForm = document.getElementById('registerForm');
    
    // Verifica si el formulario de registro existe en la página (-)
    if (registerForm) {
        // Agrega un evento de escucha cuando se intenta enviar el formulario
        registerForm.addEventListener('submit', function (event) {
            // Previene que el formulario se envíe de la forma tradicional
            event.preventDefault();

            // Captura los valores de cada campo del formulario (+)
            const username = document.getElementById('username').value;  // Nombre de usuario
            const Apellidos = document.getElementById('Apellidos').value;  // Apellidos
            const genero = document.getElementById('genero').value;  // Género
            const correo = document.getElementById('correo').value;  // Correo electrónico
            const password = document.getElementById('password').value;  // Contraseña

            // Verifica que todos los campos estén llenos (+)
            if (username && Apellidos && genero && correo && password) {
                // Guarda cada dato en el almacenamiento local del navegador
                // Esto permite que la información persista incluso al cerrar el navegador (+)
                localStorage.setItem('username', username);
                localStorage.setItem('Apellidos', Apellidos);
                localStorage.setItem('genero', genero);
                localStorage.setItem('correo', correo);
                localStorage.setItem('password', password);

                // Muestra un mensaje de éxito al usuario (+)
                document.getElementById('registerMessage').textContent = '¡Cuenta creada con éxito !';
                document.getElementById('registerMessage').style.color = 'white';

                // Redirige a otra página después de 2 segundos (+)
                setTimeout(() => {
                    // Cambia a la página de inicio
                    window.location.href = 'inicio/inicio.html';
                }, 2000); // 2000 milisegundos = 2 segundos
            }
        });
    } else {
        // Si no encuentra el formulario, muestra un error en la consola (-)
        console.error("Formulario de registro no encontrado");
    }

    // Obtiene el formulario de inicio de sesión (+)
    const loginForm = document.getElementById('loginForm');
    
    // Verifica si el formulario de login existe (-)
    if (loginForm) {
        // Agrega un evento de escucha cuando se intenta iniciar sesión
        loginForm.addEventListener('submit', function (event) {
            // Previene el envío tradicional del formulario
            event.preventDefault();

            // Captura los valores del formulario de inicio de sesión (+)
            const loginUsername = document.getElementById('email').value;  // Correo ingresado
            const loginPassword = document.getElementById('passwordd').value;  // Contraseña ingresada

            // Recupera los datos almacenados previamente 
            const storedUsername = localStorage.getItem('correo');  // Correo guardado
            const storedPassword = localStorage.getItem('password');  // Contraseña guardada

            // Compara si el correo y contraseña coinciden con los almacenados (+)
            if (loginUsername === storedUsername && loginPassword === storedPassword) {
                // Si coinciden, muestra mensaje de inicio de sesión exitoso (+)
                document.getElementById('loginMessage').innerHTML = 'Inicio de sesión exitoso.<br>Redirigiendo a la página de inicio...';
                document.getElementById('loginMessage').style.color = 'white';
                
                // Redirige a la página principal después de 2 segundos (+)
                setTimeout(() => {
                    window.location.href = 'principal/principal.html';
                }, 2000);
            } else {
                // Si no coinciden, muestra mensaje de error (+)
                document.getElementById('loginMessage').innerHTML = 'Nombre de usuario o contraseña incorrectos<br>Por favor, intenta nuevamente.';
                document.getElementById('loginMessage').style.color = 'red';
            }
        });
    } else {
        // Si no encuentra el formulario de login, muestra un error en la consola (-)
        console.error("Formulario de inicio de sesión no encontrado");
    }
});