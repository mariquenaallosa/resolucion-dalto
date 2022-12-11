// Esta es la forma de hacerlo sin async ni await pero no nos devuelve la info
// const getName = async() => {
//   fetch("informacion.txt")
//     .then((res) => {
//       if (res.ok) Promise.resolve(res);
//       else Promise.reject(res);
//     })
//     .then((res) => {console.log(res)})
//     .catch((err) => {
//       console.log(err);
//     });
// };

// Para trabajarlo fetch con async y await sería así
const getName = async()=>{
  let peticion = await fetch("informacion.txt");
  let resultado = await peticion.json();
  let div = document.createElement("div");
  div.classList.add("nombre");
  div.innerHTML = resultado.nombre;
  document.body.appendChild(div) 
  console.log(resultado);
}

const getAge = async()=>{
  let peticion = await fetch("informacion.txt");
  let resultado = await peticion.json();
  let div = document.createElement("div");
  div.classList.add("edad");
  div.innerHTML = resultado.edad;
  document.body.appendChild(div) 
  console.log(resultado);
}

document.getElementById("nombre").addEventListener("click",getName);
document.getElementById("edad").addEventListener("click",getAge);


// Para trabajarlo axios con async y await sería así
const getName1 = async()=>{
  let resultado = await axios("informacion.txt");
  let div = document.createElement("div");
  div.classList.add("nombre");
  div.innerHTML = resultado.data.nombre;
  document.body.appendChild(div) 
  console.log(resultado);
}

const getAge1= async()=>{
  let resultado = await axios("informacion.txt");
  let div = document.createElement("div");
  div.classList.add("edad");
  div.innerHTML = resultado.data.edad;
  document.body.appendChild(div) 
  console.log(resultado);
}

document.getElementById("nombre").addEventListener("click",getName1);
document.getElementById("edad").addEventListener("click",getAge1);