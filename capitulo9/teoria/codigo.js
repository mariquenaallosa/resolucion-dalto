const btn =  document.querySelector('.btn');


// Event handlers
// btn.onclick = () => {
//     alert("hola")
// }

// event listeners
// Hay dos maneras de hacerlo 
// 1- poniendo el nombre del evento y luego una función la cual no vamos a poder definir como flecha, lo cual no se suele usar
// btn.addEventListener("click",saludar);

// function saludar () {
//     alert("hola")
// }

// 2- declaramos la funcíón dentro
// btn.addEventListener("click", ()=>{
//     alert("saludar")
// })


// ejemplo de remover el evento 

// btn.addEventListener("click", saludar );

// function saludar(){
//     alert("saludar y quitar");
//     btn.removeEventListener("click",saludar);
// }

// objeto eventos 
// btn.addEventListener("click",(e)=>{
//     console.log(e.target)
// });


// event flow -> orden de ejecución
//  -> burbuja - es el que viene por defecto del más específico al menos específico es decir del hijo al padre
//  -> captura - al revés
// Para poner flow captura hay que agregar un tercer parámetro con el valor true al contenedor más grande y a los que le siguen para que se ejecute completamente al revés 
// ej:
// btn.addEventListener("click",()=>{alert("hacerclick")},true);

// para detener la propagación
// btn.addEventListener("click",(e)=>{
    // alert("hacerclick")
    // e.stopPropagation();
// },true);


// EVENTOS DEL MOUSE

// click - arriba


// dbclick 
btn.addEventListener("dblclick", ()=>{
        alert("saludar")
    })