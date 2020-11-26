
class Celular {

    constructor(color, peso, resPantalla, resCamara, memRAM) {
        this.color = color;
        this.peso = peso;
        this.resPantalla = resPantalla;
        this.resCamara = resCamara;
        this.memRAM = memRAM;
        this.encendido = false;
    }

    btnEncendido() {
        if (this.encendido) {
            console.log("Celular apagado");
            this.encendido = false;
        } else {
            console.log("Celular prendido");
            this.encendido = true;
        }
    }

    reiniciar() {
        if (this.encendido) 
            console.log("Celular reiniciado ...");
        else
            console.log("NO se puede reiniciar, el celular está apagado");
    }

    tomarFotos() {
        console.log("Foto tomada en una resolución de " + this.resCamara);
    }

    grabarVideo() {
        console.log("Video tomado en una resolución de " + this.resCamara);
    }

} // end class Celular

const miCelular = new Celular("rojo", "150 g", "5'", "full HD", "2GB");

miCelular.btnEncendido();
miCelular.tomarFotos();
miCelular.btnEncendido();
miCelular.reiniciar();
miCelular.btnEncendido();
miCelular.grabarVideo();

