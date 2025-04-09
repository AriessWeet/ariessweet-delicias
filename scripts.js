document.addEventListener("DOMContentLoaded", () => {
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
});
