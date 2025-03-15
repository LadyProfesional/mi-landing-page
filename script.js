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
