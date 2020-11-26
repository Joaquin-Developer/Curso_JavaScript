
document.getElementById("clearConsole").addEventListener("click", () => {
    console.clear();
});

document.getElementById("ejer1").addEventListener("click", function() {
    console.log(reverse("Hello world"));
});

document.getElementById("ejer2").addEventListener("click", function() {
    let text = prompt("Ingresar un String:");
    console.log(invertOrderChars(text));
});

document.getElementById("ejer3").addEventListener("click", function() {
    console.log(recursiveReverse(prompt("Ingresar un String:")));
});

document.getElementById("ejer4").addEventListener("click", function() {
    console.log("No se puede realizar esta acción con JavaScript.");
});

document.getElementById("ejer5").addEventListener("click", function() {
    let text = prompt("Ingrese un texto para verificar si es palíndorme o no");
    if (isPalindrome(text))
        console.log("EL texto '" + text + "' es palíndorme");
    else
        console.log("EL texto '" + text + "' no es palíndorme")
});

document.getElementById("ejer6").addEventListener("click", function() {
    let text = prompt("Ingrese frase para inverir c/u de sus palabras:");
    console.log(invertWordsOrder(text));
});

/**
 * functions to use:
 */

function reverse(text) {
    let textReverse = "";
    for (letter of text) {
        textReverse = letter + textReverse;
    }
    return textReverse.toLowerCase();
}

function invertOrderChars(text) {
    return [...text].reverse().join("");
}

function recursiveReverse(text) {
    if (text === "")
        return ""

    return reverse(text.substring(1)) + text.charAt(0);
}

function isPalindrome(text) {
    let invertOrder = text.toLowerCase().split(" ").join("").split(",").join("");
    return invertOrder === reverse(invertOrder);
}

function invertWordsOrder(text) {

    let textArray = text.split(" ");
    textArray = textArray.map(word => reverse(word));
    return textArray.join(" ");
}
