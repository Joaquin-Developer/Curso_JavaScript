
const materias = {
    programacion: [90, 10, 3, "PROGRAMACION III"],
    sistemasOperativos: [92, 8, 5, "SISTEMAS OPERTAIVOS III"],
    basesDeDatos: [84, 8, 4, "SISTEMAS DE BASES DE DATOS II"],
    formEmpresarial: [70, 4, 2, "FORMACION EMPRESARIAL"],
    talerMant: [82, 9, 1, "TALLER DE MANTENIMIENTO III"],
    ada: [100, 10, 4, "ANALISIS Y DISEÑO DE APLICACIONES"],
    proyecto: [100,70, 4, "GESTION DE PROYECTOS"],
};
// `
function aprueba() {
    for (materia in materias) {

        const asistencia = materias[materia][0];
        const promedio = materias[materia][1];
        const trabajos = materias[materia][2];
        let fallo = []; 

        if (asistencia < 90) {
            fallo.push("Supera límite de inasistencias");
        }

        if (promedio < 7) {
            fallo.push("Promedio Insuficiente");
        }

        if (trabajos < 3) {
            fallo.push("Trabajos sin entregar.");
        }

        if (fallo.length == 0) 
        {
            console.log(materias[materia][3]);
            console.log("%c   APROBADO", "color: green;");
        } else
        {
            console.log(materias[materia][3]);
            console.log("%c   NO APROBADO", "color: red;");
            console.log(`%cFallo: ${fallo.join(", ")}`, "color:red");
        }
        
    }
}

aprueba();
