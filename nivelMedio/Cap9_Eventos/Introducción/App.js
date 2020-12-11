
const name = document.getElementById("name");
const mail = document.getElementById("mail");
const subject = document.getElementById("materia");
const resultado = document.querySelector(".resultado");

document.querySelector("#btnSend").addEventListener("click", function(event) {
    event.preventDefault();
    try {
        validarCampos();
        resultado.innerHTML = "Solicitúd enviada con éxito";
        resultado.classList.add("sucessMessage");
        resultado.classList.remove("errorMessage");
    } catch (ex) {
        console.error(ex);
        resultado.innerHTML = ex;
        resultado.classList.add("errorMessage");
        resultado.classList.remove("sucessMessage");
    }

});

function validarCampos() {

    if (name.value.length < 5) {
        throw "El nombre no puede tener menos de 5 carácteres";

    } else if(name.value.length > 40) {
        throw "El nombre no puede tener mas de 40 carácteres";

    } else if (mail.value.indexOf("@") == -1 || mail.value.indexOf(".") == -1) {
        throw "El mail ingresado no es valido";

    } else if(subject.value.length == 0) {
        throw "Debe ingresar una materia";
    }
}

