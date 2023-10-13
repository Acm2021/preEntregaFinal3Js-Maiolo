
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
function vaciarCarrito(){
    carrito.vaciar()
    carrito.mostrarPorPantalla()
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
function actualizarLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}




const galeria = new GaleriaProductos(arregloDeProductos);
let carrito = new Carrito();
galeria.mostrarGaleriaPorPantalla();

document.addEventListener('DOMContentLoaded', ()=>{
    if(JSON.parse(localStorage.getItem('carrito')) === null){
        
    }else{
       // carrito = new Carrito();
        //carrito = JSON.parse(localStorage.getItem('carrito'))
    }
    carrito.mostrarPorPantalla()
})


const contendorProductosPagina= document.querySelector("#contendorProductos")
contendorProductosPagina.addEventListener('click', agregarProductoAlCarrito)

const contendorCarrito = document.querySelector("#cuerpoFilasCarrito")
contendorCarrito.addEventListener('click', eliminarProductoDelCarrito)

const vaciarCarritoElement = document.querySelector("#vaciar-carrito")
vaciarCarritoElement.addEventListener('click', vaciarCarrito)


const btnFiltrarGaleria = document.querySelector("#btnFiltroGaleria")
btnFiltrarGaleria.addEventListener('click',filtrarGaleria)
const btnBorrarFiltradoGaleria= document.querySelector("#btnBorrarFiltroGaleria")
btnBorrarFiltradoGaleria.addEventListener('click', borrarFiltroCarrito)