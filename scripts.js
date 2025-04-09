document.addEventListener("DOMContentLoaded", () => {
  // Función de bienvenida desde index.html
  const formulario = document.getElementById("formulario");
  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();

      if (nombre !== "") {
        localStorage.setItem("usuario", nombre);
        window.location.href = "home.html";
      } else {
        alert("Por favor, escribí tu nombre");
      }
    });
  }

  // Mostrar saludo en home.html
  const saludo = document.getElementById("saludo-usuario");
  const nombre = localStorage.getItem("usuario");
  if (saludo && nombre) {
    saludo.textContent = `¡Hola, ${nombre}! Bienvenid@ nuevamente 💖`;
  }

  // Botón cerrar sesión
  const botonCerrarSesion = document.getElementById("cerrar-sesion");
  if (botonCerrarSesion) {
    botonCerrarSesion.addEventListener("click", () => {
      localStorage.removeItem("usuario");
      window.location.href = "index.html";
    });
  }
});
