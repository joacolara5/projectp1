document.addEventListener("DOMContentLoaded", function () {
  const libros = [
      { nombre: "1984", precio: "$5", imagen: "gallery/1864.jpg" },
      { nombre: "Cien Años de Soledad", precio: "$6", imagen: "gallery/cien.jpeg" },
      { nombre: "El Principito", precio: "$4", imagen: "gallery/principito.jpeg" },
      { nombre: "Moby Dick", precio: "$7", imagen: "gallery/moby.jpeg" },
      { nombre: "Orgullo y Prejuicio", precio: "$5", imagen: "gallery/orgullo.jpeg" },
      { nombre: "Don Quijote de la Mancha", precio: "$6", imagen: "gallery/quijote.jpeg" },
      { nombre: "La Odisea", precio: "$5", imagen: "gallery/odisea.jpg" },
      { nombre: "Ulises", precio: "$7", imagen: "gallery/ulises.webp" },
      { nombre: "Crimen y Castigo", precio: "$8", imagen: "gallery/crimen.jpeg" },
      { nombre: "El Gran Gatsby", precio: "$5", imagen: "gallery/gatsby.jpeg" }
  ];

  const contenedorLibros = document.getElementById("libros-container");
  const verCatalogoBtn = document.getElementById("ver-catalogo-btn");
  const alquilerForm = document.getElementById("alquiler-form");
  const libroSelect = document.getElementById("libro");
  const formulario = document.getElementById("formulario");

  // Cargar libros en el contenedor
  libros.forEach(libro => {
      const divLibro = document.createElement("div");
      divLibro.classList.add("libro");
      divLibro.innerHTML = `
          <img src="${libro.imagen}" alt="${libro.nombre}">
          <h3>${libro.nombre}</h3>
          <p>Precio: ${libro.precio}</p>
          <button class="btn-alquilar" data-nombre="${libro.nombre}">Alquilar</button>
      `;
      contenedorLibros.appendChild(divLibro);
  });

  // Mostrar el catálogo de libros
  verCatalogoBtn.addEventListener("click", function () {
      contenedorLibros.style.display = "flex";  // Muestra los libros
  });

  // Mostrar el formulario de alquiler cuando se haga clic en "Alquilar"
  document.querySelectorAll(".btn-alquilar").forEach(button => {
      button.addEventListener("click", function () {
          const libroNombre = this.getAttribute("data-nombre");
          libroSelect.innerHTML = `<option value="${libroNombre}">${libroNombre}</option>`;
          formulario.style.display = "block";  // Mostrar el formulario
          window.scrollTo({ top: formulario.offsetTop, behavior: "smooth" });
      });
  });

  // Evitar el envío del formulario por defecto
  alquilerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert(`Has alquilado el libro: ${libroSelect.value}`);
      formulario.style.display = "none"; // Ocultar el formulario después del alquiler
  });
});
