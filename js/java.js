document.addEventListener("DOMContentLoaded", function() {
    // Mostrar/ocultar el bio-popup al hacer clic en "Sobre mí"
    document.getElementById("toggleBio").addEventListener("click", function (e) {
        e.preventDefault(); // Evitar el comportamiento por defecto del enlace
        const bioPopup = document.getElementById("bioPopup");
        bioPopup.classList.toggle("active"); // Cambia entre mostrar/ocultar

        // Evitar desplazamiento del fondo cuando el popup está activo
        if (bioPopup.classList.contains("active")) {
            document.body.classList.add("modal-open"); // Deshabilitar scroll en el body
        } else {
            document.body.classList.remove("modal-open"); // Habilitar scroll en el body
        }
    });

    // Cerrar el bio-popup al hacer clic en la X
    document.getElementById("closeBio").addEventListener("click", function () {
        const bioPopup = document.getElementById("bioPopup");
        bioPopup.classList.remove("active"); // Cierra el popup
        document.body.classList.remove("modal-open"); // Habilitar scroll en el body
    });

    // Cierra el popup si se hace clic fuera de él
    document.addEventListener("click", function (e) {
        const bioPopup = document.getElementById("bioPopup");
        const toggleBio = document.getElementById("toggleBio");

        if (bioPopup.classList.contains("active") && !bioPopup.contains(e.target) && !toggleBio.contains(e.target)) {
            bioPopup.classList.remove("active"); // Cierra el popup al hacer clic fuera de él
            document.body.classList.remove("modal-open"); // Habilitar scroll en el body
        }
    });
});


