let objeto = {
    "propiedad" : "datos"
};


console.log(objeto.__proto__);

// Todos los datos heredan dos prototipos
// -> Tipo de dato
// -> __proto__: Object

// Atención __proto__ != prototype
// con __proto__ -> se accede a los prototipos ya creados 
// con prototype -> se accede a los prototipos creados por nesotros.


// Cada vez que creamos una función el prototipo lo creamos nosotros.
let variable = function (){};

console.log(variable.prototype.__proto__);