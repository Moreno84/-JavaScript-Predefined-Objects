//Ejercicio 5

let numeroAzar;
let refMadreVentana;

window.onload = function (){
    document.cookie="titulo_numero" +location.pathname;

    document.getElementById("azar").innerHTML = "Numero aleatorio " + Math.floor((Math.random() * 10)).toString();

    numeroAzar = Math.floor((Math.random()*500));

    refMadreVentana = window.opener;
}

//Ejercicio 6

function aciertaNumero(){

    let respuesta = document.getElementById("acierta").value;

    if (respuesta > numeroAzar) {

        refMadreVentana.document.getElementById("resultado").innerHTML="El numero es mas grande";
        
    }else if (respuesta < numeroAzar) {
        refMadreVentana.mensajeRandom("El numero mas pequeño");
        
    }else{
        refMadreVentana.document.getElementById("resultado").innerHTML="Ha acertado.";
        window.close();
    }
    
}