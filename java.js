function filtrarCategoria(categoria) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (categoria === 'todas' || item.dataset.categoria === categoria) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
