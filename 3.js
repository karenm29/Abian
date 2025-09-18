function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  if (nombre === "" || email === "") {
    alert("Por favor completa todos los campos.");
    return false;
  }
  return true;
}
