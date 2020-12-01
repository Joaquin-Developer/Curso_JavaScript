
window.onload = () => {
    for (let i = 0; i < 14; i++)
    {
        console.group("DÍA" + (i + 1));
        console.log("240 minutos de trabajo");
        console.log("30 minutos de descanso");
        console.log("100 minutos de estudio");
        console.log("100 minutos de hacer prácticos");
        console.log("30 minutos de cosas de la casa");
        console.groupEnd();
    }
}
