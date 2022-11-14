
let materias={
    fisica : ["Perez","pedro","pepito","cofla","maria"],
    programación : ["Dalto","pedro", "juan","pepito"],
    lógica : ["Gimenez","pedro", "juan","pepito","cofla","maria"],
    quimica : ["Chade","pedro", "juan","pepito","cofla","maria"],
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if (personas.length >=21){
        document.write (`Lo siento ${alumno}, las clases de ${materia} ya están llenas.<br>`)
    } else {
        personas.push(alumno);
        if (materia=="fisica"){
            materias={
                fisica : personas,
                programación : materias["programación"],
                lógica : materias["lógica"],
                quimica : materias["quimica"],
            }
        }
        else if (materia=="programación"){
            materias={
                fisica :  materias["fisica"],
                programación:personas,
                lógica : materias["lógica"],
                quimica : materias["quimica"],
            }
        }
        else if (materia=="lógica"){
            materias={
                fisica :  materias["fisica"],
                programación:materias["programación"],
                lógica : personas,
                quimica : materias["quimica"],
            }
        } 
        else if (materia=="quimica"){
            materias={
                fisica :  materias["fisica"],
                programación:materias["programación"],
                lógica : materias["lógica"],
                quimica : personas,
            }
        }


        document.write(`¡Felicidades ${alumno}! te has inscripto en ${materia} correctamente<br>`)
    }
}

inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");
inscribir("cachuflo","quimica");

