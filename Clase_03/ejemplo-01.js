console.log('Clase 03 - Objetos');

let numero = 10;
let nombre = 'John';
let lenguajes = ['JavaScript', 'PHP'];
let otro = undefined;

let accion = function(){
    console.log('Hola');
}

if( typeof(nombre) == 'string'){
    console.log('Es una cadena');
} else {
    console.log('Es otro tipo de dato')
}

let saludar = (nombre) => console.log('hola ' + nombre);

function saludar2(nombre){
    console.log('Hola '+ nombre);
}