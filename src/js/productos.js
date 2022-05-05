// Arreglos de los productos (cubos)
let productos= [
    {
        "Nombre": "Producto_1",
        "Caracteristicas": " Descripción",
        "Stock": "Disponible",
        "Precio": "$200",
        "Imagen": "./../src/img/producto_1.png"
    },
    {
        "Nombre": "Producto_2",
        "Caracteristicas": " Descripción",
        "Stock": "Disponible",
        "Precio": "$200",
        "Imagen": "./../src/img/producto_2.png"
    },
    {
        "Nombre": "Producto_3",
        "Caracteristicas": " Descripción",
        "Stock": "Disponible",
        "Precio": "$200",
        "Imagen": "./../src/img/producto_3.jpg"
    },
    {
        "Nombre": "Producto_4",
        "Caracteristicas": " Descripción",
        "Stock": "Disponible",
        "Precio": "$200",
        "Imagen": "./../src/img/producto_4.png"  
    },
    {
        "Nombre": "Producto_5",
        "Caracteristicas": " Descripción",
        "Stock": "Disponible",
        "Precio": "$200",
        "Imagen": "./../src/img/producto_5.png"
    },
    {
        "Nombre": "Producto_6",
        "Caracteristicas": " Descripción",
        "Stock": "Disponible",
        "Precio": "$200",
        "Imagen": "./../src/img/producto_6.png"
    },
  
    {
        "Nombre": "Producto_7",
        "Caracteristicas": " Descripción",
        "Stock": "Disponible",
        "Precio": "$200",
        "Imagen": "./../src/img/producto_7.png" 
  },
  
  {
    "Nombre": "Producto_8",
    "Caracteristicas": " Descripción",
    "Stock": "Disponible",
    "Precio": "$200",
    "Imagen": "./../src/img/producto_8.png"
  },
  ];
  
//let jsonProductos= JSON.stringify(productos);

// Envío de los productos con sus propiedades a sus respectivas cards
tarjeta = document.getElementById("plantilla");                         // Obtener el elemento donde irá la plantilla
productos.forEach(element => {                                          // Recorrer el arreglo
    tarjeta.innerHTML += `<div class="card mb-3" style="max-width: 400px">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src=${element.Imagen} alt="..." class="img-fluid">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${element.Nombre}</h5>
          <p class="card-text">${element.Stock}</p>
          <p class="card-text"><small class="text-muted">${element.Precio}</small></p>
        </div>
      </div>
    </div>
  </div> `                                                    // Acumular mediante innerHTML las plantillas y enviarlas a su elemento correspondiente 
}); 