let btnResumen = document.querySelector("#btnResumen");
let cantidad = document.querySelector("#cantidad")
let categoria=document.querySelector("#categoria");
btnResumen.addEventListener("click", function(e){
    e.preventDefault();   
    let precioBase = 200 * parseInt(cantidad.value) ;
    let precioFinal=0;
  
    if (categoria.value=="estudiante") {
        precioFinal = precioBase - (precioBase * 0.8);        
    }
    else if ( categoria.value == "trainee") {
        precioFinal = precioBase - ( precioBase * 0.5);
        
    }
    else{
        precioFinal = precioBase -( precioBase * 0.15);
    }
  
    document.querySelector("#total").textContent =   precioFinal;

    })