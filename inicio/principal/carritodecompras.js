document.addEventListener('DOMContentLoaded', () => {
    const carrito = document.getElementById('agregarcarrito');
    const lista = document.getElementById('listacarrito');
    const cerraricono = document.getElementById('cerrarcarrito');
    const counter = document.getElementById('contador');
    const compras = document.getElementById('carrito-items');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    const totalElement = document.getElementById('total-carrito');

    let carritoProductos = {};

    carrito.addEventListener('click', () => {
        lista.classList.add('mostrarmenu');
    });

    cerraricono.addEventListener('click', () => {
        lista.classList.remove('mostrarmenu');
    });

    function vaciarCarrito() {
        carritoProductos = {};
        actualizarCarrito();
        actualizarTotal();
    }

    function actualizarTotal() {
        let total = 0;
        for (let producto in carritoProductos) {
            const cantidad = carritoProductos[producto].cantidad;
            const precio = carritoProductos[producto].precio;
            total += cantidad * precio;
        }
        totalElement.innerHTML = `Total: <span style="color: #fc4c00;">$${total.toLocaleString('es-CO')}</span>`;
    }

    function actualizarCarrito() {
        compras.innerHTML = ''; 

        let totalProductos = 0;
        for (let producto in carritoProductos) {
            const cantidad = carritoProductos[producto].cantidad;
            const precio = carritoProductos[producto].precio;
            totalProductos += cantidad;

            const item = document.createElement('li');
            item.innerHTML = `
                <span style="color: #ff4500; margin-right: 8px;">•</span>
                ${cantidad} <span style="color: #ff4500;">x</span> ${producto}  
                <span style="color: #ff4500;">$${precio.toLocaleString('es-CO')}</span>`;
            item.style.listStyle = 'none';
            compras.appendChild(item);
        }

        counter.textContent = totalProductos;
        actualizarTotal();
    }

    function agregarProducto(e) {
        const producto = e.target.getAttribute('data-producto');
        const precio = parseFloat(e.target.getAttribute('data-precio'));

        if (carritoProductos[producto]) {
            carritoProductos[producto].cantidad++;
        } else {
            carritoProductos[producto] = { precio, cantidad: 1 };
        }

        actualizarCarrito();
    }

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    const btnagregar = document.querySelectorAll(".btn");
    btnagregar.forEach(button => {
        button.addEventListener('click', agregarProducto);
    });
})