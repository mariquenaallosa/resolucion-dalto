class Apps {
    constructor(puntuacion,ndd,peso) {
        this.puntuacion = puntuacion;
        this.numeroDeDescargas= ndd;
        this.tamaño= peso;
        this.instalado = false;
        this.iniciada =false;
    }

    instalar (){
        if(this.instalado==false){
            this.instalado=true;
            alert("Apps instalada");
        }
    }

     desinstalar (){
        if(this.instalado==true){
            this.instalado=false;
            alert("App desinstalada");            
        }
    }

    abrir (){
        if(this.instalado==true && this.iniciada==false){
            this.iniciada = true;
            alert("Abriendo app");
        }
    }

    cerrar (){
        if(this.instalado==true && this.iniciada ==true){
            this.iniciada = false;
            alert("App cerrada");
        }
        }
    appInfo (){
        return `
        Puntuación: ${this.puntuacion} estrellas<br>
        Descargas: ${this.numeroDeDescargas}<br> 
        Peso: ${this.tamaño}<br>
        `
    }


}



const app1 =new Apps("4.6","2M","50MB");
const app2 =new Apps("3","1M","500MB");
const app3 =new Apps("5","100M","400MB");
const app4 =new Apps("3.5","0.5M","300MB");
const app5 =new Apps("2.9","1M","50MB");
const app6 =new Apps("4.8","1.5M","50MB");
const app7 =new Apps("4","5M","50MB");




document.write (` 
${app1.appInfo()}<br>
${app2.appInfo()}<br>
${app3.appInfo()}<br>
${app4.appInfo()}<br>
${app5.appInfo()}<br>
${app6.appInfo()}<br>
${app7.appInfo()}<br>
`)