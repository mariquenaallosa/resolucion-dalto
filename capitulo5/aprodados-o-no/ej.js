let materias ={
	// materia [promedio , nota, tp]
	fisica:[90,6,80,"fisica"],
	matematica:[84,8,72, "matematica"],
	logica:[92,9,84,"logica"],
	quimica:[96,7,94,"quimica"],
	calculo: [91,6,93, "calculo"],	programacion: [76,4,84,"programacion"],
	biologia : [76,8,82, "biologia"],
	ddbb: [95,1,45, "ddbb"],
	algebra: [100,10,94, "algebra"]
}

const aprobo = ()=>{
	for (materia in materias){


		let asistencias = materias[materia][0];
		let promedio = materias[materia][1];
		let tpEntregado = materias[materia][2];


			console.log(`${materias[materia][3]}:`);

		if (asistencias >= 90){
			console.log("%c   Asistencia suficiente", "color:green");
		} else {
			
			console.log("%c   Asistencia insuficiente", "color:red");
		};

		
		if (promedio>= 7){
			console.log("%c   Aprobado", "color:green");
		} else {
			
			console.log("%c   Desaprobado", "color:red");
		}

		if (tpEntregado>= 75){
			console.log("%c   TP Aprobado", "color:green");
		} else {
			
			console.log("%c   Faltan TPs", "color:red");
		}
		

		} 

	}


aprobo();