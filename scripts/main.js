
alert("VINCULADO OK");

//Cargo una pequeña cantidad de productos a modo de base de datos.



function menu() {
    const galeria = new GaleriaProductos(arregloDeProductos);
    const carrito = new Carrito();
    let opcion = 8;
    do { 

        console.log("Ingrese una opción:"); 
        console.log("1.Ver Galeria");
        console.log("2.Filtrar Productos");
        console.log("3.Buscar producto por Id en la BD");
        console.log("4.Agregar producto al carrito por Id");
        console.log("5.Quitar un producto del carrito por Id");
        console.log("6.Mostrar productos del Carrito");
        console.log("7.Mostrar precio del Carrito");
        console.log("8.Salir");
        console.log("-----------------------");
        opcion = prompt();
        
        switch (opcion) {
            case "1": galeria.mostrarGaleria();
                break;
            case "2": console.log("Ingrese nombre a filtrar");
                    let nombreABuscar = prompt();
                    console.log("Ingrese marca a filtrar");
                    let marcaABuscar = prompt();
                    console.log("Ingrese tipo a filtrar");
                    let tipoABuscar = prompt();
                    const galeriaFiltrada1 = new GaleriaProductos(galeria.filtrarProductos(nombreABuscar,marcaABuscar,tipoABuscar));
                    galeriaFiltrada1.mostrarGaleria();
                break;
            case "3": console.log("Ingrese Id a buscar");
                    let idABuscar = prompt();
                    const elementoEncontrado=galeria.buscarProductoPorId(idABuscar)
                    elementoEncontrado.mostrar()
                break;
            case "4": console.log("Ingrese Id del producto a agregar al carrito");
                    let idAAgregar = prompt();
                    let productoEncontrado= galeria.buscarProductoPorId(idAAgregar);
                    carrito.agregarUnProducto(productoEncontrado);
                break;
            case "5": console.log("Ingrese Id del producto a quitar del carrito");
                    let idAEliminar = prompt();
                    carrito.eliminarUnProducto(idAEliminar);   
                break;
            case "6":
                carrito.mostrarProductosCarrito();
                break;
            case "7":
                carrito.mostrarPrecioTotal();
                break;        
            default: console.log("Opción incorrecta");
                break;
        }
    }while (opcion !="8")
    
}


menu();

