const sendButton = document.getElementById("snd-nota");

sendButton.addEventListener("click", () => {
  let resultado, mensaje;
  try {
    prevRes = parseInt(document.getElementById("nota").value);
    if (isNaN(prevRes)) {
      throw "Gracioso";
      // Aqui se esta checando si no es un numero el de la caja, lo que pasara es que va a lanzar el mensaje de error del catch, pero se le pone el texto ese para que se mande el mensaje de error
    }
    resultado = verifirAprobacion(8, 5, mensaje);
    mensaje = definirMensaje(prevRes);
    
  } catch (e) {
    resultado = "¿SOS GRACIOSO?";
    mensaje = "He descubierto que has intentado hackear el sitio";
  }
  abrirModal(resultado, mensaje);
});

const definirMensaje = (pr) => {
  let resultado;
  switch (pr) {
    case 1:
      resultado = "No podes ser así";
      break;
    case 2:
      resultado = "Malísimo";
      break;
    case 3:
      resultado = "No sabes casi nada";
      break;
    case 4:
      resultado = "Muy mal";
      break;
    case 5:
      resultado = "Mal";
      break;
    case 6:
      resultado = "Regular";
      break;
    case 7:
      resultado = "Bien";
      break;
    case 8:
      resultado = "Muy bien";
      break;
    case 9:
      resultado = "Excelente";
      break;
    case 10:
      resultado = "Insuperable";
      break;
    default:
      resultado = null;
      break;
  }
  return resultado;
};

const verifirAprobacion = (nota1, nota2, prevRes) => {
  promedio = (nota1 + nota2 + prevRes) / 3;
  if (promedio >= 7) {
    return "<span class='green'>APROBADO<span/>";
  }
  return "<span class='red'>DESAPROBADO<span/>";
};

const abrirModal = (res, msg) => {
  document.querySelector(".resultado").innerHTML = res;
  document.querySelector(".mensaje").innerHTML = "Tu prueba:" + msg;

  let modal = document.querySelector(".modal-bg");
  modal.style.animation = "aparecer 1s forwards";
  modal.style.display = "flex";
};
