

fetch("components/header.html")
  .then(respuesta => respuesta.text())
  .then(html => {
    document.getElementById("header-container").innerHTML = html;
  });

fetch("components/footer.html")
  .then(respuesta => respuesta.text())
  .then(html => {
    document.getElementById("footer-container").innerHTML = html;
  });




const productos = [
  {
    nombre: "Pizza Margarita",
    precio: "$32.000",
    descripcion: "Masa artesanal, salsa de tomate casera y mozzarella fresca."
  },
  {
    nombre: "Pollo Asado",
    precio: "$28.000",
    descripcion: "Pollo entero marinado con hierbas y asado al carbón."
  },
  {
    nombre: "Pasta Carbonara",
    precio: "$25.000",
    descripcion: "Espagueti con salsa cremosa, tocineta y parmesano."
  },
  {
    nombre: "Ensalada César",
    precio: "$18.000",
    descripcion: "Lechuga romana, crutones, pollo y aderezo césar clásico."
  },
  {
    nombre: "Tiramisú",
    precio: "$15.000",
    descripcion: "Postre italiano con café, mascarpone y cacao en polvo."
  },
  {
    nombre: "Limonada de Coco",
    precio: "$9.000",
    descripcion: "Limonada natural mezclada con crema de coco. Muy refrescante."
  }
];




class ProductCard extends HTMLElement {

  connectedCallback() {
    const nombre      = this.getAttribute("nombre");
    const precio      = this.getAttribute("precio");
    const descripcion = this.getAttribute("descripcion");

    this.innerHTML = `
      <h3>${nombre}</h3>
      <p>${descripcion}</p>
      <p class="precio">${precio}</p>
    `;
  }
}

customElements.define("product-card", ProductCard);




const catalogo = document.getElementById("catalogo");

for (let i = 0; i < productos.length; i++) {
  const tarjeta = document.createElement("product-card");

  tarjeta.setAttribute("nombre",      productos[i].nombre);
  tarjeta.setAttribute("precio",      productos[i].precio);
  tarjeta.setAttribute("descripcion", productos[i].descripcion);

  catalogo.appendChild(tarjeta);
}
