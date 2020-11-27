
const divResult = document.getElementById("result");

function getNumberA() {
    return parseInt(document.getElementById("numA").value);
}

function getNumberB() {
    return parseInt(document.getElementById("numB").value)
}

document.getElementById("btnSuma").addEventListener("click", function() {

    const suma = getNumberA() + getNumberB();
    console.log(suma);


    

    const fragmento = document.createDocumentFragment();

    const item = document.createElement("LI");
    item.innerHTML = "Este texto irá dentro del Li";
    fragmento.appendChild(item);

    listaElementos.appendChild(fragmento);



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
