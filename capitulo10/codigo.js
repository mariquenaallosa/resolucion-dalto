// let expr = "Banana"
// switch (expr){

// case "Banana":
//     console.log("esta fruta es amarilla");
//     break;
// case "Pera":
//     console.log("tiene forma de mi tio Roberto");
//     break;
// case "Manzana":
//     console.log("los primeris humanos pecanron comiendola");
//     break;
// default:
//     console.log("No es ninguna");
//     break;
// }

// const pruebaTry = ()=>{
//     try {
//         return 1;
//     }
//     catch(e){
//         return 2;
//     }
//     finally {
//         return 3;
//     }

// }
// console.log(pruebaTry())

try {
  throw {
    error: "error",
    info: "info error"
  };
} catch (e) {
  console.log(e);
} finally {
  
}
