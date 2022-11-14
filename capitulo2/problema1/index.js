// Resolución A
let free=false;
const validarCliente= (time)=> {
    let edad = prompt ("Cual es tu edad?");
    if (edad>18){
        if (time>2 && time<7 && free==false){
            alert("Podes pasar gratis porque sos la prier persona despupes de las 2AM");
            free= true;
        }else{
            alert(`son las ${time}hs y podes pasar , pero tenes que pagar`);
        }
    }else {
        alert("NO PODES PASAR")
    }
}

validarCliente(23);
validarCliente(4);
validarCliente(16);
validarCliente(3);
validarCliente(21);
validarCliente(12);
validarCliente(23); 