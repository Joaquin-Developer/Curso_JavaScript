/** 
 * Métodos de Arrays en JavaScript
 */

let nombres = ["Pedro", "María", "Juan", "José", "Ana"];

//nombres.forEach(element => {
//    console.log(element);
//});

nombres.push("Felipe"); // agrega un elemento al final del array

console.log("Array inicial:");
nombres.forEach(element => {
    console.log(element);
});

let nuevoArray = [];    // array vac+io
let auxiliar = nombres.length - 1;

for (let i = 0; i < nombres.length; i++) {
    nuevoArray[i] = nombres[auxiliar];
    auxiliar--;
}
nombres = nuevoArray;

console.log("Array con elementos invertidos: ");
nombres.forEach(element => {
    console.log(element);
});

/**
 * NOTA: Lo anterior se puede hacer mas fácil con la función reverse()
 * reverse() invierte órden de los elementos de un Array.
 */

