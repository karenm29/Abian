function mostrarDetalle(src, descripcion, autor) {
  const detalle = document.getElementById("detalle");
  detalle.innerHTML = `
    <img src="${src}" class="img-fluid"/>
    <p>${descripcion}</p>
    <small>Autor: ${autor}</small>
  `;
}
