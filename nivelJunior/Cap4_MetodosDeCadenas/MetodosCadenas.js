/**
 * Métodos de Cadenas en JavaScript
 */
let cadena = "Hola";
const cadena2 = "hola";

document.write(cadena.concat(cadena2)); // concatenamos las dos cadenas
document.write("<br>"); // salto de línea

// retorna true o false si la cadena2 comienza de la misma 
// forma que la cadena 1 :
document.write(cadena.startsWith(cadena2));     

// includes(): Busca cadenas en un String (retorna un booleano)
const mensaje = "Sos un tarado y un boludo";
let resultado = mensaje.includes("boludo");

if (resultado) 
    console.log("Le dijo boludo");  // en este caso resultado será true
else 
    console.log("No le dijo boludo");

// indexOf(): retorna índice del primer carácter de la cadena, si no existe retorna -1:
const unMensaje = "Sos un capo jsjs";
console.log("capo comienza en la posición " + unMensaje.indexOf("capo"));       // retorna un 7

if (unMensaje.indexOf("gei") == -1) console.log("No le dijo gei"); else console.log("Le dijo gei");

// repeat(): repetir una cadena n veces:
console.log("Hola ".repeat(8)); // Hola Hola Hola Hola Hola Hola Hola Hola 

cadena = "Hola como estas"
document.write("<br> <br>");

cadenaSeparada = cadena.split(" ");     // split(): 

for (let i = 0; i < cadenaSeparada.length; i++) {
    console.log(cadenaSeparada[i]);
    document.write(cadenaSeparada[i] + "<br>");
}

console.log("HOLA COMO ESTAS".toLowerCase());   // convierte texto a minúsculas
console.log("hola como estas".toUpperCase());   // convierte texto a mayusculas

console.log(1.3.toString() + " promedio");      // convierte una expresión a cadena (String)





