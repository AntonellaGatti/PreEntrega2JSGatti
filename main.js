let carrito = []

//FUNCION PARA CARGAR ITEMS


function cargarUnItem() {
    const nuevoItem = new itemCarga();
    nuevoItem.tipoDeEmbalaje = prompt("Por favor ingrese tipo de embalaje");
    nuevoItem.largo = parseFloat(prompt("Por favor ingrese LARGO en Metros"));
    // VALIDACION LARGO
    while (nuevoItem.largo <= 0) {
        nuevoItem.largo = prompt("La medida seleccionada es inválida. Ingrese un valor mayor a 0, por favor");
    }

    nuevoItem.ancho = parseFloat(prompt("Por favor ingrese ANCHO en Metros"));
    // VALIDACION LARGO
    while (nuevoItem.ancho <= 0) {
        nuevoItem.ancho = prompt("La medida seleccionada es inválida. Ingrese un valor mayor a 0, por favor");
    }

    nuevoItem.alto = parseFloat(prompt("Por favor ingrese ALTO en Metros"));
    // VALIDACION ALTO
    while (nuevoItem.alto <= 0) {
        nuevoItem.alto = prompt("La medida seleccionada es inválida. Ingrese un valor mayor a 0, por favor");
    }

    nuevoItem.cbm = nuevoItem.largo * nuevoItem.ancho * nuevoItem.alto;

    nuevoItem.cantidadKm = parseFloat(prompt("Por favor ingrese cantidad de Km"));
    // VALIDACION KM
    while (nuevoItem.cantidadKm <= 0) {
        nuevoItem.cantidadKm = prompt("La cantidad de Kil[ometros seleccionados son inválidos. Ingrese un valor mayor a 0, por favor");
    }

    nuevoItem.precioTransporte = parseFloat(prompt("Por favor ingrese precio transporte en USD"));
    // VALIDACION PRECIO TRANSPORTE
    while (nuevoItem.largo <= 0) {
        nuevoItem.largo = prompt("La medida seleccionada es inválido. Ingrese un valor mayor a 0, por favor");
    }


    carrito.push(nuevoItem)
    console.log(carrito)
}

// FUNCION PARA AGREGAR ITEMS A LA COTIZACION
const continuarCarga = () => {
    let continuar;
    do {
        cargarUnItem();
        continuar = prompt("Desea continuar cargando otra mercaderia? Por favor, ingresar Si/No");
    }
    while (continuar == "Si")
}

// FUNCION PARA MOSTRAR LA COTIZACION
function mostrarCotizacion() {
    let cotizacion = "";
    let totalCotizacion = 0
    carrito.forEach((itemCarga) => {
        cotizacion = cotizacion + `DEJAMOS DEBAJO LOS DETALLES INGRESADOS x Item \n Tipo de Embalaje: ${itemCarga.tipoDeEmbalaje} \n Largo: ${itemCarga.largo} m \n Ancho: ${itemCarga.ancho} m \n Alto: ${itemCarga.alto} m \n Volumen de la carga: ${itemCarga.cbm} cbm \n Cantidad de Km: ${itemCarga.cantidadKm} Km \n Cotizacion x Item: USD ${itemCarga.cotizacionItemCarga()} \n \n `

    });

    totalCotizacion = carrito.reduce((total, itemCarga) => {
        return total + itemCarga.cotizacionItemCarga();
    }, 0);

    alert(cotizacion + `\n EL TOTAL DE LA COTIZACION ES DE: USD ${totalCotizacion}`)
}

continuarCarga()
mostrarCotizacion()

// // FUNCION PARA BUSCAR UN ITEM EN EL ARRAY Y ELIMINARLO
let btnBuscarYBorrar = document.getElementById("borrarItem");
btnBuscarYBorrar.addEventListener("click",buscarYBorrarItem);

function buscarYBorrarItem() {
    const itemABuscar = prompt("Ingrese el tipo de Embalaje a buscar en el carrito");
    let indiceAEliminar = -1;
    carrito.forEach((item, index) => {
      if (item.tipoDeEmbalaje === itemABuscar) {
        indiceAEliminar = index;
      }
    });
    
    if (indiceAEliminar > -1) {
      carrito.splice(indiceAEliminar, 1);
      alert(`Se eliminó el elemento con tipo de embalaje "${itemABuscar}" del carrito`);
    } else {
      alert(`No se encontró ningún elemento con tipo de embalaje "${itemABuscar}" en el carrito`);
    }
  }
  


