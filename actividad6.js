//Zona de Arrays
nomjugador = Array();
canastasDos = Array();
canastasTres = Array();
tiempo = Array();


//Zona While
while(true) {
    var intro1 = prompt("Introduzca nombre");
    if (intro1 === "SALIR") {
        break;
    }
    var intro2 = parseInt(prompt("Introduzca canastas 2"));
    var intro3 = parseInt(prompt("Introduzca canastas 3"));
    var intro4 = parseInt(prompt("Introduza tiempo"));
    
    nomjugador.push(intro1);
    canastasDos.push(intro2);
    canastasTres.push(intro3);
    tiempo.push(intro4);
}


//Realizar operaciones arrays
//Medias
var mediaDos = (canastasDos).reduce(media1);

function media1(a, b) {
    return a / b;
}

var mediaTres = (canastasTres).reduce(media2);

function media2(a, b) {
    return a / b;
}

var mediaTiempo = (tiempo).reduce(media3);

function media3(a, b) {
    return a / b;
}


//Sumas
var sumaDos = (canastasDos).reduce(suma1);

function suma1(a, b) {
    return a + b;
}

var sumaTres = (canastasTres).reduce(suma2);

function suma2(a, b) {
    return a + b;
}

var sumaTiempo = (tiempo).reduce(suma3);

function suma3(a, b) {
    return a + b;
}


//Zona funcion jugador maximo anotador

var i = 0;
var max = 0;
var maxTres = 0;
var long = canastasDos.lenght;

function maximoDos(canastasDos) {
    for (let i=0; i<long; i++) {
        if (canastasDos[i]>max) {
            max = canastasDos[i];
        }
    }
}

//Nota: No funciona, he probado diversas formas de realizar esto y 
//no lo he conseguido, no se como se puede realizar esta parte del ejercicio.


//Zona console.log
console.log(nomjugador);
console.log(canastasDos);
console.log(canastasTres);
console.log(tiempo);
console.log(`La media de canastas de dos fue de ${mediaDos}`);
console.log(`El numero total de canastas de dos fue de ${sumaDos}`);
console.log(`La media de canastas de tres fue de ${mediaTres}`);
console.log(`El numero total de canastas de tres fue de ${sumaTres}`);
console.log(`El tiempo medio por jugador fue de ${mediaTiempo}`);
console.log(`El tiempo total jugado fue de ${sumaTiempo}`);


