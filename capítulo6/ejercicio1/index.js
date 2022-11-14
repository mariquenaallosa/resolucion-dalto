const contenedor= document.querySelector(".flex-container");

 document.querySelector(".send-button").value="COMPRAR"
function crearLlave(nombre, modelo , precio){
	img= "<img src='key.png'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = ` <h3 >${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}<b></h2>`;
	return[img,nombre,modelo,precio];
}


let documentFragment= document.createDocumentFragment();

for (var i = 0; i < 20; i++) {
	let modeloRandom= Math.round(Math.random()*10000);
	let precioRandom= Math.round(Math.random()*10+30);
	let llave =crearLlave(`llave ${i+1}`,`modelo ${modeloRandom}`,precioRandom);

	let div= document.createElement ("DIV");
	div.addEventListener("click", ()=>{
		document.querySelector(".key-data").value = modeloRandom;
	});
	div.tabIndex=i;
	div.classList.add(`item-${i}`,`flex-item`);
	div.innerHTML= ...llave;

	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment)