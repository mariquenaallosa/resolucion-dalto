let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp= "100 minutos de hacer tps";
let homework = "30 minutos de tareas de la casa";
let descanso ="10 minutos de descanso";

console.log("TAREA");

for (var i = 0; i<14 ; i++){

	if ( i== 0){
		console.groupCollapsed("semana 1")
	}

	console.groupCollapsed("dia "+ (i+1));
	console.log(trabajo);
	console.log(descanso);
	console.log(estudio);
	console.log(tp);
	console.log(homework);
	console.groupEnd();

	if (i==6){
		console.groupEnd();
		console.groupCollapsed("semana 2")
	}
}

console.groupEnd();
console.groupEnd();



