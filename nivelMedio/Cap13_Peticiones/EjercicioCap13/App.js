
async function getInfo() {

    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-reprobados");

    try {
        let resultado = await axios("info.json");
        console.log(resultado);
        console.log(resultado.data);
        aprobados.innerHTML = resultado.data.aprobados;
        desaprobados.innerHTML = resultado.data.desaprobados;
    } catch (error) {
        console.error(error);
        aprobados.innerHTML = "La API falló";
        desaprobados.innerHTML = "La API falló";
        alert("ERROR: No se pudieron obtener datos de servidor");

    }
    
}

document.getElementById("getInfo").addEventListener("click", getInfo);
