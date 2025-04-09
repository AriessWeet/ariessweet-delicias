document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // evita que el formulario recargue la página

    const nombre = document.getElementById("nombre").value.trim();

    if (nombre !== "") {
      // Podés guardar el nombre en localStorage si querés usarlo después
      localStorage.setItem("usuario", nombre);

      // Redirige a home.html
      window.location.href = "home.html";
    } else {
      alert("Por favor, escribí tu nombre");
    }
  });
});
