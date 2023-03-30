// Obtenemos todos los elementos de imagen del documento
const images = document.getElementsByTagName('img');

// Añadimos un evento click a cada imagen para que se muestre un modal con la imagen ampliada
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalImage = document.createElement('img');
    modalImage.src = this.src;
    modalImage.alt = this.alt;

    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    // Añadimos un evento click al modal para que se cierre al hacer clic fuera de la imagen
    modal.addEventListener('click', function() {
      modal.remove();
    });
  });
}

// Obtenemos todos los elementos de tabla del documento
const tables = document.getElementsByTagName('table');

// Añadimos un evento click a cada celda de precio para que se muestre el precio en un mensaje emergente
for (let i = 0; i < tables.length; i++) {
  const cells = tables[i].getElementsByTagName('td');
  for (let j = 0; j < cells.length; j++) {
    if (cells[j].textContent.startsWith('$')) {
      cells[j].addEventListener('click', function() {
        alert('El precio es ' + cells[j].textContent);
      });
    }
  }
}
