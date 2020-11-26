/**
 * Mostrar todos los elementos del array excepto el elemento == 2
 */

let nombres = [1, 2, 3, 4, 5];

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] == 2)
        continue;

    //console.log(nombres[i]);
}

/**
 * For In
 */

let animales = ["gato", "perro", "dinosaurio"];

for (elem in animales) {
    console.log(elem);
}

// for Of

for (elem of animales) {
    console.log(elem);
}
