
const divResult = document.getElementById("resultDiv");

function getNumberA() {
    return parseInt(document.getElementById("numA").value);
}

function getNumberB() {
    return parseInt(document.getElementById("numB").value)
}

document.getElementById("btnSuma").addEventListener("click", function() {

    const suma = getNumberA() + getNumberB();

    const lastChild = document.getElementById("result");
    const resultElem = document.createElement("P");
    resultElem.id = "result"
    resultElem.classList.add("resultSum");  // css file class
    resultElem.appendChild(document.createTextNode(`La suma de ${getNumberA()} y ${getNumberB()} es ${suma}`));

    if (lastChild !== null) {
        // si el div tiene un child, lo eliminamos
        divResult.removeChild(lastChild);
    }

    divResult.appendChild(resultElem);
        

    //resultELem.appendChild(parag)
    //divResult.innerHTML = "resultElem";


});

document.getElementById("btnResta").addEventListener("click", function() {

});

document.getElementById("btnProducto").addEventListener("click", function() {

});

document.getElementById("btnDivision").addEventListener("click", function() {

});

document.getElementById("btnPotencia").addEventListener("click", function() {

});

document.getElementById("btnSqrtNumA").addEventListener("click", function() {

});

document.getElementById("btnSqrtNumB").addEventListener("click", function() {

});

document.getElementById("btnPowNumA").addEventListener("click", function() {

});

document.getElementById("btnPowNumB").addEventListener("click", function() {

});
