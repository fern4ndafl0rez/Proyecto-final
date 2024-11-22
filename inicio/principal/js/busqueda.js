// Crear archivo search.js y agregar este código
document.addEventListener('DOMContentLoaded', function() {
  // Verificar que los elementos existen
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchButton = document.querySelector('.btn-search');

  if (!searchInput || !searchResults || !searchButton) {
      console.error('No se encontraron elementos de búsqueda');
      return;
  }

  // Contenido buscable
  const searchableContent = [
      {
          title: "Nosotros",
          id: "nosotros",
          keywords: ["nosotros", "empresa", "misión", "visión", "patacomanía"]
      },
      {
          title: "Productos",
          id: "productos",
          keywords: ["productos", "patacones", "patacón", "supremo", "tradicional"]
      },
      {
          title: "Ubicaciones",
          id: "ubicaciones",
          keywords: ["ubicaciones", "dirección", "local", "encontrarnos"]
      },
      {
          title: "Contacto",
          id: "contacto",
          keywords: ["contacto", "teléfono", "redes", "whatsapp"]
      },
      {
          title: "Especiales",
          id: "especiales",
          keywords: ["especiales", "adicionales", "ripio", "tocineta"]
      }
  ];

  // Función simple de búsqueda
  function search(query) {
      return searchableContent.filter(item => {
          const searchStr = query.toLowerCase();
          return item.title.toLowerCase().includes(searchStr) ||
                 item.keywords.some(keyword => keyword.toLowerCase().includes(searchStr));
      });
  }

  // Mostrar resultados
  function showResults(results) {
      // Limpiar resultados anteriores
      searchResults.innerHTML = '';
      
      if (results.length === 0) {
          searchResults.style.display = 'none';
          return;
      }

      // Crear elementos de resultado
      results.forEach(result => {
          const div = document.createElement('div');
          div.className = 'search-result-item';
          div.textContent = result.title;
          
          div.addEventListener('click', () => {
              const element = document.getElementById(result.id);
              if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  searchResults.style.display = 'none';
                  searchInput.value = '';
              }
          });

          searchResults.appendChild(div);
      });

      // Mostrar resultados
      searchResults.style.display = 'block';
  }

  // Event listeners
  searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      if (query.length > 0) {
          const results = search(query);
          showResults(results);
      } else {
          searchResults.style.display = 'none';
      }
  });

  searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query.length > 0) {
          const results = search(query);
          showResults(results);
      }
  });

  // Cerrar resultados al hacer clic fuera
  document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && 
          !searchResults.contains(e.target) && 
          !searchButton.contains(e.target)) {
          searchResults.style.display = 'none';
      }
  });
});