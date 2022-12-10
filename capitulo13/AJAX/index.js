// request.addEventListener('readystatechange', ()=>{
//     // Esto se hacpia antes
//     if (request.readyState === 4 && request.status === 200){
//         console.log(request.response);
//         console.log(request.status);
//     }
// })

let request;
if (window.XMLHttpRequest) request = new XMLHttpRequest();
else request = new ActiveXObject("Microsoft.XMLHTTP");

request.addEventListener("load", () => {
  let respuesta;
  if (request.status === 200 || request.status==201) respuesta = request.response;
  // No se hace tal cual así porque existen muchas respuestas pero por ahora si
  else respuesta = "Lo siento , no se ha encontrado el recurso";
  console.log(JSON.parse(respuesta));
});
// request.open("GET", "informacion.txt");

request.open("POST","https://reqres.in/api/users");

request.setRequestHeader("Content-Type", "application/json;charset=utf-8");

request.send(JSON.stringify({
    "nombre":"dalto",
    "trabajo":"edutuber"
}));



// Todo esto por lo general se hace con Fetch ya que AJAX no es soportado por todos los navegadores, pero aún no lo vi
