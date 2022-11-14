class Calculadora {
sumar(num1,num2){
    return parseInt(num1)+parseInt(num2);
}

restar(num1,num2){
    return parseInt(num1)-parseInt(num2);
}

dividir(num1,num2){
    return parseInt(num1)/parseInt(num2);
}

multiplicar(num1,num2){
    return parseInt(num1)*parseInt(num2);
} 

potenciar(num, exp){
    return parseInt(num**exp);
}  

raizCuadrada (num){
    return Math.sqrt(num);
}

raizCubica (num){
    return Math.cbrt(num);
}

}
const calculadora = new Calculadora();
alert("QUE OPERACION ESEAS REALIZAR?");
let operación=prompt("1: suma , 2: resta , 3: divición , 4: multiplicación 5:potenciación 6:raiz cuadrada 7:raiz cúbica")

if (operación==1){
    let num1= prompt("número 1");
    let num2= prompt("número 2");
    resultado = calculadora.sumar(num1,num2);
    alert(`tu resultado es : ${resultado}`);
}

else if (operación==2){
    let num1= prompt("número 1");
    let num2= prompt("número 2");
    resultado = calculadora.restar(num1,num2);
    alert(`tu resultado es : ${resultado}`);
}

else if (operación==3){
    let num1= prompt("número 1");
    let num2= prompt("número 2");
    resultado = calculadora.dividir(num1,num2);
    alert(`tu resultado es : ${resultado}`);
}

else if (operación==4){
    let num1= prompt("número 1");
    let num2= prompt("número 2");
    resultado = calculadora.multiplicar(num1,num2);
    alert(`tu resultado es : ${resultado}`);
}

else if (operación==5){
    let num= prompt("número 1");
    let exp= prompt("exponente");
    resultado = calculadora.potenciar(num,exp);
    alert(`tu resultado es : ${resultado}`);
}

else if (operación==6){
    let num= prompt("número");
    resultado = calculadora.raizCuadrada(num);
    alert(`tu resultado es : ${resultado}`);
}
else if (operación==7){
    let num= prompt("número");
    resultado = calculadora.raizCubica(num);
    alert(`tu resultado es : ${resultado}`);
}

else {
    alert("cualquiera ")
}