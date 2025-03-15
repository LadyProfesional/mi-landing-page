// Seleccionar el botón y el body
const modoBtn = document.getElementById("modo-btn");
const body = document.body;

// Verificar si hay un modo guardado en el navegador
if (localStorage.getItem("modo") === "oscuro") {
    activarModoOscuro();
}

// Función para cambiar el tema
modoBtn.addEventListener("click", () => {
    if (body.classList.contains("oscuro")) {
        activarModoClaro();
    } else {
        activarModoOscuro();
    }
});

function activarModoOscuro() {
    body.classList.add("oscuro");
    modoBtn.textContent = "☀️ Modo Claro";
    localStorage.setItem("modo", "oscuro"); // Guardar preferencia en localStorage
}

function activarModoClaro() {
    body.classList.remove("oscuro");
    modoBtn.textContent = "🌙 Modo Oscuro";
    localStorage.setItem("modo", "claro"); // Guardar preferencia en localStorage
}
// Seleccionar el formulario y el mensaje de éxito
const formulario = document.getElementById("formulario-contacto");
const mensajeExito = document.getElementById("mensaje-exito");

// Manejar el envío del formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Simular envío (en un futuro aquí podríamos conectar con un backend)
    setTimeout(() => {
        mensajeExito.style.display = "block"; // Mostrar mensaje de éxito
        formulario.reset(); // Limpiar el formulario
    }, 1000); // Simulación de espera
});
