//Ejercicio 2

//5-Valor aleatorio

let aleatorio = Math.floor(Math.random() * (100 - 50)) + 50;

//6-La fecha actual es (formato dd-mm-yy): 
let myDate = new Date("2020","10","19");
let day= myDate.getDate();
let month=myDate.getMonth();
let year = myDate.getFullYear();
let fecha = "La fecha actual es: " +day +"/"+month+"/"+year;

//7-La hora actual es (formato hh:mm):
let myTime = new Date();
let hour = myTime.getHours();
let minute = myTime.getMinutes();
let hora = "La hora actual es: "+hour+":"+minute;

//8-Valor máximo que puede tener un número en JavaScript 
let numMax = Number.MAX_VALUE;

//9-Valor mínimo que puede tener un número en JavaScript 

let numMin = Number.MIN_VALUE;

function inicio(){
    
    document.getElementById("listaPropiedades")
    .innerHTML=`<ol>
                    <li>`+`La lengua predefinida en el navegador es: `+navigator.language+`</li> 
                    <li>`+`La url de la página web es: `+location.href+`</li>
                    <li>`+`El puerto de la URL: `+location.port+`</li>  
                    <li>`+`El título de la página web: `+document.title+`</li>
                    <li>`+`El valor aleatorio es: `+aleatorio+`</li>
                    <li>`+fecha+`</li>
                    <li>`+hora+`</li>
                    <li>`+`El valor maximo: `+numMax+`</li>
                    <li>`+`El valor minimo: `+numMin+`</li>
                    <li>`+`La altura total de la pantalla: `+window.screen.availHeight+`</li>
                </ol>`;

}

//Ejercicio 3


function guardarCookie(){

    let inputvalue = document.getElementById("input_titulo").value;
    let cookieName = "titulo_web";
    document.cookie = cookieName + "="+ inputvalue;


}

//Ejercicio 4

let cuentraAtras = 5;


function actuaSeg(){

    document.getElementById("mostraCont").innerHTML = cuentraAtras;

    if (cuentraAtras == 0) {

        window.open("numero.html","width=300, height=300");
        
    }else{
        cuentraAtras-=1;

        setTimeout(actuaSeg, 1000);
    }



}

//Ejercicio 6

function mensajeRandom(mensaje){

    document.getElementById("resultado").innerHTML =mensaje;
}







