const menuItems = [
  {
    name: "Hamburguesa XXL",
    description: "lechuga, tomate, jamón, queso, carne, aderezos, huevo",
    price: 2300,
    image: "hamburguesa-xxl.jpg"
  },
  {
    name: "Hamburguesa PERSONAL",
    description: "lechuga, tomate, queso cheddar, aderezo",
    price: 900,
    image: "hamburguesa-personal.jpg"
  },
  {
    name: "Lomo completo",
    description: "lechuga, tomate, huevo, jamón y queso, aderezos",
    price: 2000,
    image: "lomo-completo.jpg"
  },
  {
    name: "Lomopizza",
    description: "lechuga, tomate, huevo, jamón, aderezos",
    price: 3500,
    image: "lomopizza.jpg"
  },
  {
    name: "Medio Lomo pizza",
    description: "lechuga, tomate, huevo, jamón, queso, aderezos",
    price: 2000,
    image: "medio-lomo-pizza.jpg"
  },
  {
    name: "Muzza",
    description: "salsa y queso",
    price: 1000,
    image: "muzza.jpg"
  },
  {
    name: "Fugazzeta",
    description: "salsa, queso y cebolla cocida",
    price: 1100,
    image: "fugazzeta.jpg"
  },
  {
    name: "Napolitana",
    description: "salsa, queso, tomate y ajo",
    price: 1200,
    image: "napolitana.jpg"
  },
  {
    name: "Pepperoni",
    description: "salsa, queso y salame",
    price: 1300,
    image: "pepperoni.jpg"
  },
  {
    name: "Especial",
    description: "salsa, queso, jamón, morrón y huevo",
    price: 1300,
    image: "especial.jpg"
  },
  {
    name: "Pizza de Choclo",
    description: "salsa, queso, choclo y jamón",
    price: 1300,
    image: "pizzadechoclo.jpg"
  },
  {
    name: "Pizza Americana",
    description: "salsa, queso y huevo frito",
    price: 1400,
    image: "americana.jpg"
  },
  {
    name: "Super Pancho",
    description: "",
    price: 250,
    image: "superpancho.jpg"
  },
  {
    name: "Pancho con Poncho",
    description: "",
    price: 300,
    image: "panchoconponcho.jpg"
  },
  {
    name: "Porción de papas",
    description: "",
    price: 400,
    image: "porciondepapas.jpg"
  }
];

// crea la tabla del menú
function createMenuTable() {
  const table = document.createElement("table");
  table.classList.add("menu-table");
  
  const headerRow = document.createElement("tr");
  const headerName = document.createElement("th");
headerName.textContent = "Plato";
const headerDescription = document.createElement("th");
headerDescription.textContent = "Descripción";
const headerPrice = document.createElement("th");
headerPrice.textContent = "Precio";

headerRow.appendChild(headerName);
headerRow.appendChild(headerDescription);
headerRow.appendChild(headerPrice);
table.appendChild(headerRow);

for (let i = 0; i < menuItems.length; i++) {
const item = menuItems[i];
const row = document.createElement("tr");
  const nameCell = document.createElement("td");
nameCell.textContent = item.name;
const descriptionCell = document.createElement("td");
descriptionCell.textContent = item.description;
const priceCell = document.createElement("td");
priceCell.textContent = `$${item.price}`;

row.appendChild(nameCell);
row.appendChild(descriptionCell);
row.appendChild(priceCell);

table.appendChild(row);
}

return table;
}

// agrega la tabla del menú al DOM
const menuTableContainer = document.getElementById("menu-table-container");
menuTableContainer.appendChild(createMenuTable());
