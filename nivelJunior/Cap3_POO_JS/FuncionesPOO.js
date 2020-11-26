
/**
 * Clases en JavaScript
 */

class Animal {

    // constructor de la clase (recibe los parámetros que tendrá la clase)
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }

    toString() {
        console.log(this.especie);
    }

}

let perro = new Animal("Perro", 10, "Azul");
perro.toString();

// HERENCIA:

class Perro extends Animal {

    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = raza;
    }

    /* getters y setters en JavaScript */
    set setRaza(value) {
        this.raza = value;
    }

    get getRaza() { return this.raza; }

}

