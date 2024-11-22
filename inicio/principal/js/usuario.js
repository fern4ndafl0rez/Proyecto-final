document.addEventListener('DOMContentLoaded', () => {
    const perfilBtn = document.querySelector('.bxs-user');
    const menuPerfil = document.getElementById('menuPerfil');
    const cerrarPerfil = document.getElementById('cerrarPerfil');
    const nombreUsuarioSpan = document.getElementById('nombreUsuario');
    const passwordUsuarioSpan = document.getElementById('passwordUsuario'); // Agregado
    
    if (perfilBtn && menuPerfil) {
        // Obtener datos del usuario del localStorage
        const username = localStorage.getItem('username');
        const Apellidos = localStorage.getItem('Apellidos');
        const password = localStorage.getItem('password'); // Agregado
        
        // Actualizar el nombre en el perfil
        if (nombreUsuarioSpan) {
            if (username && Apellidos) {
                nombreUsuarioSpan.textContent = `${username} ${Apellidos}`;
            } else {
                nombreUsuarioSpan.textContent = 'Invitado';
            }
        }

        // Actualizar la contraseña con asteriscos (Agregado)
        if (passwordUsuarioSpan && password) {
            passwordUsuarioSpan.textContent = '*'.repeat(password.length);
        }

        // Actualizar el saludo en la página principal si existe
        const saludoElement = document.getElementById('saludo');
        if (saludoElement && username && Apellidos) {
            saludoElement.innerHTML = `¡Bienvenid@, ${username} ${Apellidos}!`;
        }

        // Mostrar el menú al hacer clic en el ícono de usuario
        perfilBtn.addEventListener('click', () => {
            menuPerfil.classList.toggle('mostrarmenu');
            
            // Actualizar la información cada vez que se abre el menú
            if (nombreUsuarioSpan && username && Apellidos) {
                nombreUsuarioSpan.textContent = `${username} ${Apellidos}`;
            }
            // Actualizar la contraseña cada vez que se abre el menú (Agregado)
            if (passwordUsuarioSpan && password) {
                passwordUsuarioSpan.textContent = '*'.repeat(password.length);
            }
        });

        // Cerrar el menú al hacer clic en el botón de cerrar
        if (cerrarPerfil) {
            cerrarPerfil.addEventListener('click', () => {
                menuPerfil.classList.remove('mostrarmenu');
            });
        }

        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener('click', (e) => {
            if (!menuPerfil.contains(e.target) && e.target !== perfilBtn) {
                menuPerfil.classList.remove('mostrarmenu');
            }
        });
    } else {
        console.log('Algunos elementos no fueron encontrados');
    }
});