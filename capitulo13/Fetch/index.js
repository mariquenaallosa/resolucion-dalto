let headers = {
  method: "POST",
  body: JSON.stringify({ nombre: "Lucas", apellido: "Dalto" }),
  headers: { "Content-Type": "application/json" },
};

fetch("https://reqres.in/api/users", headers)
  .then((res) => res.json())
  .then((res) => console.log(res));



  const img = document.querySelector('.img-div');

  fetch("diferencia.png")
  .then(res=> res.blob())
  .then(img => img.src = URL.createObjectURL(img) );