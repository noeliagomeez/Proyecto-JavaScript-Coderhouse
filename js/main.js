
alert("¡Bienvenido a la tienda de CD's de Taylor Swift creada por Noelia Luciana Gomez!");


const cdsTaylorSwift = [
    { titulo: "1989", año: 2014, precio: 12},
    { titulo: "Midnights", año: 2022, precio: 14},
    { titulo: "Fearless", año: 2008, precio: 13}
  ];


let carrito = [];
let total = 0;


const deseaVerCatalogo = prompt("¿Deseas ver el catálogo de CD's de Taylor Swift? (Sí/No)");


if (deseaVerCatalogo.toLowerCase() === "si") {
  
  function mostrarCatalogo() {
    for (const cd of cdsTaylorSwift) {
      console.log(`Título: ${cd.titulo}, Año: ${cd.año}, Precio: $${cd.precio}`);
    }
  }

  
  mostrarCatalogo();

  
  while (true) {
    const tituloCD = prompt("Ingresa el título del CD que deseas agregar al carrito (o escribe 'Salir' para finalizar):");
  
    if (tituloCD.toLowerCase() === "salir") {
      console.log("Contenido del carrito:", carrito);
      console.log("Total de la compra: $" + total);
      console.log("Gracias por visitar la tienda. Hasta luego.");
      break;
    }
  
    
    const cdEncontrado = cdsTaylorSwift.find(cd => cd.titulo.toLowerCase() === tituloCD.toLowerCase());
  
    if (cdEncontrado) {
      carrito.push(cdEncontrado);
      total += cdEncontrado.precio; 
      console.log(`${tituloCD} añadido al carrito. Total actual: $${total}`);
    } else {
      console.log(`CD no encontrado.`);
    }
  }

} else {
  console.log("Gracias por visitar la tienda. Hasta luego.");
}


