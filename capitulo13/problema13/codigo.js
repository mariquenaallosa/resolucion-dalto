const getInfo = async () => {
    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados");
  try {
    let resultado = await axios("informacion.txt");
    resultado = resultado.data;
    aprobados.innerHTML = resultado.aprobados;
    desaprobados.innerHTML = resultado.desaprobados;
  } catch (e) {
    console.log(e);
    aprobados.innerHTML = "La API falló";
    desaprobados.innerHTML = "La API falló";
  }
};

document.getElementById("getInfo").addEventListener("click", getInfo);
