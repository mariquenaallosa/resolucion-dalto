const obtenerInformación = (materia)=> {
    const materias={
        fisica : ["Perez","pedro","pepito","cofla","maria"],
        programación : ["Dalto","pedro", "juan","pepito"],
        lógica : ["Gimenez","pedro", "juan","pepito","cofla","maria"],
        quimica : ["Chade","pedro", "juan","pepito","cofla","maria"],

    }
    if (materias[materia]!== undefined){
        return [materias[materia], materia, materias];
    }else {
        return materias
    }
}


const mostrarInformacion = (materia) => {
    let informacion = obtenerInformación(materia);

    if (informacion !== false){
        let profesor = informacion[0][0];
        let alumnos = informacion[0]; 
        alumnos.shift();
         document.write(`El profesor de <b>${informacion[1]}</b> es: <b style ="color:blue">${profesor}</b><br>
            Los alumnos son : <b style ="color:red">${alumnos}</b><br><br>`);
    }
} 

const cantidadDeClases = (alumno) => {
    let informacion = obtenerInformación();
    let clasesPresentes = [];
    let cantidadTotal = 0;
        for (info in informacion){
            if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" "+info);
            }  
        }
    return `<b>${alumno}</b> está en <b>${cantidadTotal}</b> clases:<b style="color:green">${clasesPresentes}</b><br>`;
}



mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("lógica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("maria"));
document.write(cantidadDeClases("pedro"));




