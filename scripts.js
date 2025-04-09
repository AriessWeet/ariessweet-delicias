document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  if (nombre.trim() !== "") {
    window.location.href = "home.html";
  }
});
