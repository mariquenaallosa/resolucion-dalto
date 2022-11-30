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

// **Ejemplo callbacks
// class Persona {
//   constructor(nombre, instagram) {
//     this.nombre = nombre;
//     this.instagram = instagram;
//   }
// }

// const data = [
//   ["Mariquena Allosa", "@mariquenaallosa"],
//   ["Aldana Allosa", "@aldanaallosa"],
//   ["Rancio Ramirez", "@robrancio"],
//   ["Camila Nesa"],
// ];

// const personas = [];
// for (var i = 0; i < data.length; i++) {
//   personas[i] = new Persona(data[i][0], data[i][1]);
// }

// const obtenerPersona = (id, cb) => {
//   if (personas[id] == undefined) {
//     cb("No se ha encontrado la persona");
//   } else {
//     cb(null, personas[id], id);
//   }
// };

// const obtenerInstagram = (id, cb) => {
//   if (personas[id] == undefined) {
//     cb("No se ha encontrado el instagram");
//   } else {
//     cb(null, personas[id].instagram);
//   }
// };

// obtenerPersona(2, (err, persona, id) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(persona.nombre);
//     obtenerInstagram(id, (err, instagram) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(instagram);
//       }
//     });
//   }
// });

// ** Promesas

let nombre = "pedro";
// Es un callback que dentro tiene dos callback
// Aparecieron con ES6
// presenta datos encapsulados
const promesa = new Promise((resolve, reject) => {
  if (nombre != "pedro") reject("Lo siento, el nombre no es pedro");
  else resolve(nombre);
});
// console.log(promesa);

// Para acceder a los valores
// then() -> método que recibe un callback
//        -> se usa para cuando sale todo bien y entramos a resolve
// .catch() -> usamos para cuando entramos en reject
promesa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.log(err);
  });

// **optimizar con promesas
class Persona {
  constructor(nombre, instagram) {
    this.nombre = nombre;
    this.instagram = instagram;
  }
}

const data = [
  ["Mariquena Allosa", "@mariquenaallosa"],
  ["Aldana Allosa", "@aldanaallosa"],
  ["Rancio Ramirez", "@robrancio"],
  ["Camila Nesa"],
];

const personas = [];
for (var i = 0; i < data.length; i++) {
  personas[i] = new Persona(data[i][0], data[i][1]);
}

const obtenerPersona = (id) => {
  return new Promise((res, rej) => {
    if (personas[id] == undefined) rej("No se ha encontrado la persona");
    else {
      res(personas[id]);
    }
  });
};

const obtenerInstagram = (id) => {
  return new Promise((res, rej) => {
    if (personas[id].instagram == undefined)
      rej("No se ha encontrado el instagram");
    else {
      res(personas[id].instagram);
    }
  });
};

let id = 2;
obtenerPersona(id)
  .then((persona) => {
    console.log(persona.nombre);
    return obtenerInstagram(id);
  })
  .then((instagram) => {
    console.log(instagram);
  }).catch((err) => {
    console.log(err);
  });
