class Celulares {
    constructor(color,peso,rdp,rdc,ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.ram = ram;
        this.encedido=false;
    }

    presionarBotonEncendido() {
        if(this.encedido==false){
            alert("CELULAR PRENDIENDO");
            this.encedido = true;
        }else{
            alert("el celular ya está encedido")
            this.encedido = false;
    }
    }

    reiniciar (){
        if(this.encendido==true){   
            alert("reiniciando celular");
        }else {
            alert("el celular está apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`grabando video en: ${this.resolucionDeCamara}`);
    }

    mobileInfo (){
        return `
        Color: <b>${this.color}</b><br/>
        Peso: <b>${this.peso}</b><br/>
        Tamaño: <b>${this.resolucionDePantalla}</b><br/>
        Cámara: <b>${this.resolucionDeCamara}</b><br/>
        Memoria ram: <b>${this.ram}</b><br/>
        `;
    }
}






class CelularAltaGama extends Celulares {
    constructor(color,peso,rdp,rdc,ram, rdce) {
        super(color,peso,rdp,rdc,ram);
        this.resoluciónDeCamaraExtra= rdce;
    }
    grabarVideoLento(){
        alert("estás grabando en cámara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }

    infoAltaGama(){
        return this.mobileInfo() + `Resuloción de cámara extra: ${this.resoluciónDeCamaraExtra}`;
    }
}



// const celular1=new Celulares("rojo", "150g","5'","full hd","2GB");
// const celular2=new Celulares("verde", "100g","7'","hd","4GB");
// const celular3=new Celulares("blanco", "150g","6.5'","full hd","8GB");


// celular1.presionarBotonEncendido();
// celular1.tomarFoto(); 
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();
// document.write(`
// ${celular1.mobileInfo()} <br/>
// ${celular2.mobileInfo()} <br/>
// ${celular3.mobileInfo()} <br/>
// `)

const celular1= new CelularAltaGama("rojo","120g","5,2'","4K","16GB", "full hd");
const celular2= new CelularAltaGama("blanco","100g","5,8'","4K","8GB", "hd");

document.write(`
${celular1.infoAltaGama()} <br/><br/>
${celular2.infoAltaGama()} <br/> `
)