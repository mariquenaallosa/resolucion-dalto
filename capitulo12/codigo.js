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

const obtenerPersona = (id, cb) => {
  if (personas[id] == undefined) {
    cb("No se ha encontrado la persona");
  } else {
    cb(null, personas[id], id);
  }
};

const obtenerInstagram = (id, cb) => {
  if (personas[id] == undefined) {
    cb("No se ha encontrado el instagram");
  } else {
    cb(null, personas[id].instagram);
  }
};

obtenerPersona(2, (err, persona, id) => {
  if (err) {
    console.log(err);
  } else {
    console.log(persona.nombre);
    obtenerInstagram(id, (err, instagram) => {
      if (err) {
        console.log(err);
      } else {
        console.log(instagram);
      }
    });
  }
});
