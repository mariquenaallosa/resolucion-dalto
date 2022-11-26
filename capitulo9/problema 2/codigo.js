let alumnos = [
    {
        nombre: "Mariquena Allosa",
        email: "allosamariquena@gmail.com",
        materia: "Física"
    },
    {
        nombre: "Lucas Dalto",
        email: "soydaltos@gmail.com",
        materia: "Física 3"
    },
    {
        nombre: "Marco Ramirez",
        email: "mramirez@gmail.com",
        materia: "Matematica"
    },
    {
        nombre: "Mariano Lopez",
        email: "marianolpz@gmail.com",
        materia: "Lógica"
    },
    {
        nombre: "Roger Quiroz",
        email: "quirozr@gmail.com",
        materia: "Física"
    }
]

const btn = document.querySelector(".btn-confirmar");
const contenedor = document.querySelector(".grid-container");

for (alumno in alumnos){
    console.log(alumnos[alumno])
    let datos = alumnos[alumno]
    let nombre = datos["nombre"]
    let email = datos["email"]
    let materia = datos["materia"]

    let htmlCode = ` 
    <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item emial">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1 </option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>
    `

    contenedor.innerHTML+=htmlCode;
}

btn.addEventListener("click",()=>{
    let confirmar = confirm("¿realmente quieres confirmar las mesas?");
    if(confirmar){
        document.body.removeChild(btn);
        let elementos = document.querySelectorAll(".semana");
let semanasElegidas = document.querySelectorAll(".semana-elegida");
for (elemento in elementos){
    semana = elementos[elemento];
    semana.innerHTML = semanasElegidas[elemento].value;
    }
}

});