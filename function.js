/*
Las funciones son bloques de codigo con instrucciones que se pueden reutilizar las veces que sean necesarias
Algunas funciones reciben parametros y otras no */
//Funcion que permita saludar

function saludar(){
    console.log("Hola desde una funcion");
}
//Ejecutar la Funcion 
saludar();


//Hoisting. Caracteristica de una funcion que nos permite invocarla desde antes de su creacion, es decir se puede invocar antes del bloque de codigo o despues.
 //funciones que retornan
 function saludar(){
    console.log("Hola invocando la funcion con hoisting")
}
saludar();

//funciones que retornan algo, usamos return 

function greeting(){
    return "Hola desde una funcion que retorna";
}
console.log(greeting());

//Funcion que retorna con parametros
function sumar(x, y) {
    return x + y;
}

let resultado = sumar(255, 245);

// Usar comillas graves (`)
console.log(`El resultado de sumar X + Y es: ${resultado}`);

//Funcion Flecha
const calcCubo = (number) => {
    return number * number * number;
}
let resultCubo = calcCubo(3)
console.log(resultCubo); 
//funciones anonimas, se declaran sin nombre y se alojan en el interior de una variable. Se hace referencia a ellas cada vez que la utilizemos.

const mensaje = function (){
    return "este es un mensaje desde una funcion anonima"
}
console.log(mensaje());

//Callbacks. Es pasar una funcion B por parametro a una funcion A, de modo que la funcionn A pueda ejectuar esa función de generica desde su codigo.
//Funcion B
const functionB = function(){
    console.log("Ejecutando Funcion B");
}
//Funcion A que mandará a llamar a la función B
const FunctionA = function (Callback){
    Callback();
}
FunctionA(functionB);
