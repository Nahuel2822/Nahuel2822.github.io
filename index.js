// Definir variables para elementos del DOM
const menuItems = document.querySelectorAll(".menu-item");
const menu = document.querySelector(".menu");
const orderForm = document.querySelector("#order-form");
const orderButton = document.querySelector("#order-button");
const orderSummary = document.querySelector("#order-summary");

// Función para mostrar los detalles del pedido en el resumen
function displayOrderSummary(event) {
  event.preventDefault();
  let orderDetails = "";

  // Obtener los detalles de cada elemento seleccionado en el menú
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].value > 0) {
      orderDetails += `${menuItems[i].name}: ${menuItems[i].value} \n`;
    }
  }

  // Mostrar los detalles del pedido en el resumen
  orderSummary.innerHTML = orderDetails;
}

// Agregar evento al botón de ordenar
orderButton.addEventListener("click", displayOrderSummary);
