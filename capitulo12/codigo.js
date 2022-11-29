// Puede escribir así
// function prueba(callback){
//     callback ("pedro")
// }



// function decirNombre(nombre){
//     console.log(nombre);
// }

// prueba(decirNombre)

//  o así
// prueba(function decirNombre(nombre){
//     console.log(nombre);
// })
// o así
// prueba(function (nombre){
//     console.log(nombre);
// })
// o como fn flecha

// prueba((nombre)=>{
//     console.log(nombre);
// })

// simpleficado queda 
// prueba(nombre=>console.log(nombre))