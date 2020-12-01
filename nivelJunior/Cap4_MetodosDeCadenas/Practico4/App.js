/**
 * Implementar una funcion que retorne el profesor asignado a una materia, y nombre de todos los alumnos 
 * de la misma. Indicar en cuantas clases esta inscripto cofla (Indicar nombre de clase y profesor a cargo)
 */

class Materia {

    constructor(nombre, profesor, alumnos) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.alumnos = alumnos;
    }

    pertenece(nombreAlumno) {
        for (const elem of this.alumnos) {
            if (elem === nombreAlumno)
                return true;
        }
        return false;
    }

    inscribir(nombreAlumno) {
        if (this.alumnos.length >= 6) {
            alert(`No se pudo inscribir a la materia ${this.nombre}, debido a que excede el aforo.`);
        } else if (this.pertenece(nombreAlumno)) {
            alert(`El alumno ${nombreAlumno} ya se encuentra inscripto en el curso ${this.nombre}`);
        } else {
            this.alumnos.push(nombreAlumno);
            alert(`Se iscribió al alumno ${nombreAlumno} al curso ${this.nombre} con el Prof. ${this.profesor}`);
        }
    }

    recorrer() {
        console.log("Lista de Alumnos: " + this.alumnos.join(", "));
    }

}

const programacion = new Materia("P1", "Joaquín", ["Pepe", "Juan", "Jose"]);
programacion.inscribir("Cofla");
programacion.recorrer();

document.getElementById("btnAgregar").addEventListener("click", function() {
    programacion.inscribir(document.getElementById("nombre").value);
    console.log(programacion.alumnos.join(","));

});
