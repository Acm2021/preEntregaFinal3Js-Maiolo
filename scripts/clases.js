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

    cargarElPrductoEnUnaCard(){
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.nombre}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <p id="card-id">${this.id}</p>
                    <p class="card-precio">${this.precio}</p>
                    <a href="#" class="btn btn-primary AgregarAlCarrito">Agregar al carrito</a>
                </div>
            </div>
            `;
        return card
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

    mostrarGaleriaPorConsola(){        
        for (const producto of this.productos) {
                producto.mostrar();
        }
    };

    limpiarPantalla(){
        const fila= document.querySelector('#fila');  
        while(fila.firstChild){
            fila.removeChild(fila.firstChild)
        }
    }
    
    mostrarGaleriaPorPantalla(){
        
        this.limpiarPantalla();
        const fila= document.querySelector('#fila');
        for (const producto of this.productos) {
            const colum = document.createElement('div');
            colum.innerHTML = `<div class="col"></div>`
            const card = producto.cargarElPrductoEnUnaCard()
            colum.appendChild(card);
            fila.appendChild(colum)
        };
    }
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
            

    
    mostrarProductosCarritoPorConsola(){
        for (const item of this.items) {
            item.mostrar();
        }
    };

    limpiarPantalla(){
        const cuerpoFilasCarrito= document.querySelector('#cuerpoFilasCarrito');  
        while(cuerpoFilasCarrito.firstChild){
            cuerpoFilasCarrito.removeChild(cuerpoFilasCarrito.firstChild)
        }
    }
    mostrarPorPantalla(){
        this.limpiarPantalla()
        for (const item of this.items) {
            const cuerpoFilasCarrito=document.querySelector('#cuerpoFilasCarrito')
            const filaCarrito= document.createElement('tr')
            filaCarrito.innerHTML = `
                <td><img src='#' width="100" /></td>
                <td> ${item.getNombre()}</td>
                <td> ${item.getPrecio()}</td>
                <td> ${item.getId()}</td>
                <td></td>
                <td>  <a href='#' id= "borrarProducto" data-id="${item.getId()}">❌</a></td>
            `
            cuerpoFilasCarrito.appendChild(filaCarrito)
        }
    const totalCarrito=document.querySelector('#totalCarrito')
    totalCarrito.textContent = "Total del carrito: $" + this.precioTotal;
    }
    mostrarPrecioTotal(){
        console.log("El precio total de carrito es:" + "$" + this.precioTotal)
    }; 
}


//-----------------------------------------------------------------------------//


