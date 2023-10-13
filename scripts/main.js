
alert("VINCULADO OK");

/*---------------------------------------------------------*/
function agregarProductoAlCarrito(evt){
    if(evt.target.classList.contains("AgregarAlCarrito")){
        const producto =evt.target.parentElement
        const id =producto.querySelector("#card-id").textContent
        let productoEncontrado = galeria.buscarProductoPorId(id)
        carrito.agregarUnProducto(productoEncontrado)
        carrito.mostrarPorPantalla()
    }
}

function eliminarProductoDelCarrito(evt){
    
    if(evt.target.id==="borrarProducto"){
        idProductoABorrar =evt.target.getAttribute('data-id')
        carrito.eliminarUnProducto(idProductoABorrar)
        carrito.mostrarPorPantalla();

    }
}

function filtrarGaleria(){
    const nombreAFiltrar=document.querySelector("#busquedaNombre")
    const marcaAFiltrar=document.querySelector("#busquedaMarca")
    const tipoAFiltrar=document.querySelector("#busquedaTipo")
    const galeriaFiltrada = new GaleriaProductos(galeria.filtrarProductos(nombreAFiltrar.value,marcaAFiltrar.value,tipoAFiltrar.value));
    galeriaFiltrada.mostrarGaleriaPorPantalla()
}

function borrarFiltroCarrito(){
    const nombreAFiltrar=document.querySelector("#busquedaNombre")
    const marcaAFiltrar=document.querySelector("#busquedaMarca")
    const tipoAFiltrar=document.querySelector("#busquedaTipo")
    nombreAFiltrar.value= null
    marcaAFiltrar.value=null
    tipoAFiltrar.value=null
    galeria.mostrarGaleriaPorPantalla();

}



//Cargo una pequeña cantidad de productos a modo de base de datos.


const galeria = new GaleriaProductos(arregloDeProductos);
const carrito = new Carrito();
galeria.mostrarGaleriaPorPantalla();

const contendorProductosPagina= document.querySelector("#contendorProductos")
contendorProductosPagina.addEventListener('click', agregarProductoAlCarrito)

const contendorCarrito = document.querySelector("#cuerpoFilasCarrito")
contendorCarrito.addEventListener('click', eliminarProductoDelCarrito)

const btnFiltrarGaleria = document.querySelector("#btnFiltroGaleria")
btnFiltrarGaleria.addEventListener('click',filtrarGaleria)
const btnBorrarFiltradoGaleria= document.querySelector("#btnBorrarFiltroGaleria")
btnBorrarFiltradoGaleria.addEventListener('click', borrarFiltroCarrito)