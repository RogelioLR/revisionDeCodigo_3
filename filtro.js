// Tenemos un listProduct de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]

const listProduct = document.getElementById("lista-de-productos"); // Se cambio a un nombre mas descriptivo
const input = document.querySelector('input'); // Corregir nombre de la referencia de input

const displayProductos = (productos) => {

  for (let i = 0; i < productos.length; i++) {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productos[i].nombre

    const imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    listProduct.appendChild(d);
  }

}

displayProductos(productos);
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  
  while (listProduct.firstChild) {
    listProduct.removeChild(listProduct.firstChild);
  }

  const texto = input.value;
  
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    listProduct.appendChild(d);
  }

  if(productosFiltrados.length == 0){
    const d = document.createElement("h3");
    d.innerHTML = "No hay coincidencias de tu busqueda :(";
    listProduct.appendChild(d);
  }

  input.value = "";
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  