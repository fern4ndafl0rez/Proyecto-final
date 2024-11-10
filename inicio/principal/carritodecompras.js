document.addEventListener('DOMContentLoaded', () =>{
    const carrito = document.getElementById('agregarcarrito');
    const lista = document.getElementById('listacarrito');
    const cerraricono = document.getElementById('cerrarcarrito');

    carrito.addEventListener('click', () => {
        lista.classList.add('mostrarmenu');
    });

    
   cerraricono.addEventListener('click', () => {
    lista.classList.remove('mostrarmenu');
   });

})