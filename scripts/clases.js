class Producto{
    constructor(nombre,tipo,marca,precio,id){
    this.nombre=nombre;
    this.tipo=tipo;
    this.marca=marca;
    this.precio=precio ;   
    this.id=id;
    }

    mostrar(){
        console.log('Nombre del producto:' + this.nombre)
        console.log('Tipo:'+ this.tipo)
        console.log('Marca:' + this.marca)
        console.log('Precio:' + this.precio)
        console.log('Id:' + this.id)
    }
    igualNombre(nombreConsultado){
        if(this.nombre===nombreConsultado)
            return true;
        else 
            return false;
    }
    igualTipo(tipoConsultado){
        if(this.tipo===tipoConsultado)
            return true;
        else 
            return false;
    }
    igualMarca(marcaConsultada){
        if(this.marca===marcaConsultada)
            return true;
        else 
            return false;
    
    }
    igualPrecio(precioConsultado){
        if(this.precio===precioConsultado)
            return this;
        else 
            return false;
    }
    igualId(idConsultado){
        if(this.id===idConsultado)
            return this;
        else 
            return false;
    }
    getNombre(){
        return this.nombre;
    };
    getTipo(){
        return this.tipo;
    };
    getMarca(){
        return this.marca;
    };
    getPrecio(){
        return this.precio;
    };
    getId(){
        return this.id;
    };
}

//-----------------------------------------------------------------------------//

class GaleriaProductos{
    constructor(arrayProductos){
           this.productos=arrayProductos;
    }

    filtrarNombre = (producto, nombreConsultado) => {
        if (producto.igualNombre(nombreConsultado))
            return producto }
    filtrarMarca = (producto, marcaConsultada) => {
        if (producto.igualMarca(marcaConsultada))
            return producto}
    filtrarTipo = (producto, tipoConsultado) => {
        if (producto.igualTipo(tipoConsultado))
            return producto}
    filtrarPrecios = (producto, precioConsultado) => {
        if (producto.igualPrecio(precioConsultado))
        return producto} 
    filtrarId = (producto, idConsultado) => {
            if (producto.igualId(idConsultado))
            return producto}    
    
    
    filtrarProductos(nombreConsultado,marcaConsultada,tipoConsultado){
        const resultadoFiltro=this.productos.filter (producto => this.filtrarNombre(producto, nombreConsultado)).filter(producto => this.filtrarMarca(producto, marcaConsultada)).filter(producto => this.filtrarTipo(producto, tipoConsultado))
        if(resultadoFiltro.length >0){
            return resultadoFiltro;
        }else{
            console.error("NO HAY RESULTADOS PARA SU BUSQUEDA")}
    }
        
    buscarProductoPorId(idConsultado){
        let productoEncontrado=this.productos.find((producto)=>producto.igualId(idConsultado))
        if (productoEncontrado) {
            return productoEncontrado;
          } else {
            console.log("Producto no encontrado");
          }
        
         
        }
    
    
    mostrarGaleria(){
        for (const producto of this.productos) {
            producto.mostrar();
        }
    };

}

//-----------------------------------------------------------------------------//
class Carrito{
    constructor(){
        this.items = [];
        this.precioTotal=0;
    
    }

    
    agregarUnProducto(producto){
        this.items.push(producto)
        this.precioTotal+= producto.getPrecio();
    };
    eliminarUnProducto(idAEliminar){
       const indiceAEliminar=this.items.findIndex((item)=>item.igualId(idAEliminar))
       if (indiceAEliminar !== -1) {
        this.precioTotal-=this.items[indiceAEliminar].getPrecio()
        this.items.splice(indiceAEliminar, 1);
      } else {
        console.log("No se encontró ningún elemento con el ID especificado.");
      }
    };
            
    mostrarProductosCarrito(){
        for (const item of this.items) {
            item.mostrar();
        }

    };
    mostrarPrecioTotal(){
        console.log("El precio total de carrito es:" + "$" + this.precioTotal)
    }; 
}