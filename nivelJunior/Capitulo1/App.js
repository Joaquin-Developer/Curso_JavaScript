
dineroCofla = prompt("¿Cuánto dinero tenés Cofla? ");
dineroRoberto = prompt("¿Cuánto dinero tenés Roberto? ");
dineroPedro = prompt("¿Cuánto dinero tenés Pedro? ");

// <>

function helados(dinero) {
    if (dinero >= 0.6 && dinero < 1) return "Helado de agua";
    if (dinero >= 1 && dinero < 1.6) return "helado de crema";
    if (dinero >= 1.6 && dinero < 1.7) return "helado heladix";
    if (dinero >= 1.7 && dinero < 1.8 ) return "helado heladivich";
    if (dinero >= 1.8 && dinero < 2.9) return "helado helardo";
    if (dinero >= 2.9) return "helado con fites";
    else return "No te alcanza para nada bobo";
}

alert("Cofla, " + helados(dineroCofla));
alert("Roberto, " + helados(dineroRoberto));
alert("Pedro, " + helados(dineroPedro));
