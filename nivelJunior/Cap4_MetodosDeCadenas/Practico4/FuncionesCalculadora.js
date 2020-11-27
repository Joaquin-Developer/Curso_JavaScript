
const divResult = document.getElementById("resultDiv");

function getNumberA() {
    return parseInt(document.getElementById("numA").value);
}

function getNumberB() {
    return parseInt(document.getElementById("numB").value)
}

/**
 * Recibimos la operación, el texto resultado a mostrar, y la clase css
 * Creamos objeto html y lo agregamos como hijo al div
 */
function showResultInPage(operation, resultText, classElement, ) {
    const lastChild = document.getElementById("result");
    const resultElem = document.createElement("P");
    resultElem.id = "result"
    resultElem.classList.add(classElement);  // css file class 
    resultElem.classList.add("resultGeneric");  // css file class   
    

    if (operation === "/" && getNumberB() === 0) 
        resultElem.appendChild(document.createTextNode(`No se puede dividir entre cero`));
    else 
        resultElem.appendChild(document.createTextNode(resultText));

    if (lastChild !== null) {
        // si el div tiene un child, lo eliminamos
        divResult.removeChild(lastChild);
    }

    divResult.appendChild(resultElem);
}

document.getElementById("btnSuma").addEventListener("click", function() {
    showResultInPage("+", `La suma de ${getNumberA()} y ${getNumberB()} es 
        ${getNumberA() + getNumberB()}`, "resultSum");

});

document.getElementById("btnResta").addEventListener("click", function() {
    showResultInPage("+", `La resta de ${getNumberA()} y ${getNumberB()} es 
        ${getNumberA() - getNumberB()}`, "resultRest");
});

document.getElementById("btnProducto").addEventListener("click", function() {
    showResultInPage("*", `El producto de ${getNumberA()} y ${getNumberB()} es 
        ${getNumberA() * getNumberB()}`, "resultProd");
});

document.getElementById("btnDivision").addEventListener("click", function() {

    showResultInPage("*", `La división de ${getNumberA()} y ${getNumberB()} es 
        ${getNumberA() / getNumberB()}`, "resultDiv");
});

document.getElementById("btnPotencia").addEventListener("click", function() {
    showResultInPage("exp", `La potencia de ${getNumberA()} elevado a ${getNumberB()} es 
        ${Math.pow(getNumberA(), getNumberB())}`, "resultExp");
});

document.getElementById("btnSqrtNumA").addEventListener("click", function() {
    showResultInPage("sqrt", `La raíz cuadrada de ${getNumberA()} es 
        ${Math.sqrt(getNumberA())}`, "resultSqrt");
});

document.getElementById("btnSqrtNumB").addEventListener("click", function() {
    showResultInPage("sqrt", `La raíz cuadrada de ${getNumberB()} es 
        ${Math.sqrt(getNumberB())}`, "resultSqrt");
});

document.getElementById("btnCbrtNumA").addEventListener("click", function() {
    showResultInPage("sqrt", `La raíz cública de ${getNumberA()} es 
        ${Math.cbrt(getNumberA())}`, "resultCbrt");        
});

document.getElementById("btnCbrtNumB").addEventListener("click", function() {
    showResultInPage("sqrt", `La raíz cública de ${getNumberB()} es 
        ${Math.cbrt(getNumberB())}`, "resultCbrt");        
});

