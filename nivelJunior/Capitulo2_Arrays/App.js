/**
 * Conceptos básicos de Arrays Asociativos en JavaScript
 */

let persona = {
    nombre: "Joaquín",
    apellido: "Parrilla",
    edad: 19,
    lenguajeFavorito: "Java",
    tieneExperienciaFrontend: true,
    tieneExperienciaDiseño: false
}

console.log(persona.nombre + ", " + persona.edad 
    + " años, su lenguaje favorito es " + persona.lenguajeFavorito);

if (persona.tieneExperienciaFrontend) 
    console.log(persona.nombre + " tiene experiencia en HTML/CSS/JS");
else 
    console.log(persona.nombre + " NO tiene experiencia en HTML/CSS/JS");

if (persona.tieneExperienciaDiseño) 
    console.log(persona.nombre + " tiene experiencia en Photoshop");
else 
    console.log(persona.nombre + " NO tiene experiencia en Photoshop");

// obtener datos del arrayy guardarlo en variables:

const nombre = persona["nombre"];   // otra forma
const apellido = persona["apellido"];
console.log("Nombre completo: " + nombre + " " + apellido);



