document.addEventListener("DOMContentLoaded", function () {
    const libros = [
        { nombre: "1984", precio: "$5", imagen: "gallery/1864.jpg", sinopsis: "En una sociedad totalitaria, un hombre lucha contra el régimen opresivo.", reseña: "Un clásico de la distopía, que aborda temas de vigilancia y control social." },
        { nombre: "Cien Años de Soledad", precio: "$6", imagen: "gallery/cien.jpeg", sinopsis: "La historia de la familia Buendía en un pueblo ficticio llamado Macondo.", reseña: "Una de las obras más influyentes de la literatura latinoamericana, con elementos mágicos y políticos." },
        { nombre: "El Principito", precio: "$4", imagen: "gallery/principito.jpeg", sinopsis: "Un niño pequeño que viaja por planetas y aprende sobre la vida y el amor.", reseña: "Una fábula sobre la pureza de los niños y la importancia de las relaciones humanas." },
        { nombre: "Moby Dick", precio: "$7", imagen: "gallery/moby.jpeg", sinopsis: "La obsesión de un capitán por cazar a una ballena gigante.", reseña: "Una profunda reflexión sobre la venganza, la obsesión y la naturaleza humana." },
        { nombre: "Orgullo y Prejuicio", precio: "$5", imagen: "gallery/orgullo.jpeg", sinopsis: "El romance entre Elizabeth Bennet y Mr. Darcy, que enfrenta las diferencias sociales y de clase.", reseña: "Una de las obras más queridas, que explora las complejidades de la sociedad victoriana." },
        { nombre: "Don Quijote de la Mancha", precio: "$6", imagen: "gallery/quijote.jpeg", sinopsis: "Las aventuras de un caballero y su fiel escudero, quienes luchan contra molinos de viento.", reseña: "Una sátira sobre la locura y la nobleza de los ideales." },
        { nombre: "La Odisea", precio: "$5", imagen: "gallery/odisea.jpg", sinopsis: "Las peripecias del héroe Odiseo en su largo viaje de regreso a casa.", reseña: "Una de las epopeyas más importantes de la literatura clásica." },
        { nombre: "Ulises", precio: "$7", imagen: "gallery/ulises.webp", sinopsis: "La historia de un día en la vida de Leopold Bloom en Dublín.", reseña: "Una obra innovadora en la narrativa, que explora la conciencia humana." },
        { nombre: "Crimen y Castigo", precio: "$8", imagen: "gallery/crimen.jpeg", sinopsis: "Un joven estudiante asesina a una anciana y se enfrenta a las consecuencias de sus acciones.", reseña: "Una profunda exploración de la moralidad y la culpa." },
        { nombre: "El Gran Gatsby", precio: "$5", imagen: "gallery/gatsby.jpeg", sinopsis: "La historia de un hombre que persigue el sueño americano a través del amor y la riqueza.", reseña: "Una reflexión sobre la desilusión del sueño americano y las tragedias personales." }
    ];

    const contenedorLibros = document.getElementById("libros-container");
    const verCatalogoBtn = document.getElementById("ver-catalogo-btn");
    const alquilerForm = document.getElementById("alquiler-form");
    const libroSelect = document.getElementById("libro");
    const formulario = document.getElementById("formulario");
    const sinopsisContenido = document.getElementById("sinopsis-contenido");
    const sinopsisSeccion = document.getElementById("sinopsis");
    const volverBtn = document.getElementById("volver-btn");

    libros.forEach(libro => {
        const divLibro = document.createElement("div");
        divLibro.classList.add("libro");
        divLibro.innerHTML = `
            <img src="${libro.imagen}" alt="${libro.nombre}">
            <h3>${libro.nombre}</h3>
            <p>${libro.precio}</p>
            <button class="boton-alquilar" data-sinopsis="${libro.sinopsis}" data-resena="${libro.reseña}" data-nombre="${libro.nombre}">Alquilar</button>
        `;
        contenedorLibros.appendChild(divLibro);

        const alquilarBtn = divLibro.querySelector(".boton-alquilar");
        alquilarBtn.addEventListener("click", function () {
            sinopsisContenido.innerHTML = `
                <h3>${libro.nombre}</h3>
                <p><strong>Sinopsis:</strong> ${libro.sinopsis}</p>
                <p><strong>Reseña:</strong> ${libro.reseña}</p>
            `;
            libroSelect.innerHTML = `<option value="${libro.nombre}">${libro.nombre}</option>`; // Añadir solo el libro seleccionado
            formulario.style.display = "block";
            sinopsisSeccion.style.display = "block";

            // Desplazarse automáticamente hacia el formulario de alquiler
            window.scrollTo({
                top: formulario.offsetTop - 50, // Desplazarse un poco antes de llegar al formulario
                behavior: 'smooth'
            });
        });
    });

    verCatalogoBtn.addEventListener("click", function () {
        contenedorLibros.style.display = "flex";
        verCatalogoBtn.style.display = "none";
        libros.forEach((libro, index) => {
            setTimeout(() => {
                contenedorLibros.children[index].classList.add("show");
            }, index * 100);
        });
    });

    volverBtn.addEventListener("click", function () {
        sinopsisSeccion.style.display = "none";
        formulario.style.display = "none";
        verCatalogoBtn.style.display = "block";
    });

    alquilerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("¡Gracias por tu alquiler!");
        alquilerForm.reset();
    });
});
