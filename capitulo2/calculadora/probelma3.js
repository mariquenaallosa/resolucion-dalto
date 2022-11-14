const sumar = (num1,num2)=>{
    return parseInt(num1)+parseInt(num2);
}

const restar= (num1,num2)=>{
    return parseInt(num1)-parseInt(num2);
}

const dividir = (num1,num2)=>{
    return parseInt(num1)/parseInt(num2);
}

const multiplicar= (num1,num2)=>{
    return parseInt(num1)*parseInt(num2);
}

alert("QUE OPERACION ESEAS REALIZAR?");
let operación=prompt("1: suma , 2: resta , 3: divición , 4: multiplicación")

if (operación==1){
    let num1= prompt("número 1");
    let num2= prompt("número 2");
    resultado = sumar(num1,num2);
    alert(`tu resultado es : ${resultado}`);
}

else if (operación==2){
    let num1= prompt("número 1");
    let num2= prompt("número 2");
    resultado = restar(num1,num2);
    alert(`tu resultado es : ${resultado}`);
}

else if (operación==3){
    let num1= prompt("número 1");
    let num2= prompt("número 2");
    resultado = dividir(num1,num2);
    alert(`tu resultado es : ${resultado}`);
}

else if (operación==4){
    let num1= prompt("número 1");
    let num2= prompt("número 2");
    resultado = multiplicar(num1,num2);
    alert(`tu resultado es : ${resultado}`);
}
else {
    alert("cualquiera ")
}