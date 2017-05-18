function borrar(){
	var inputContainer = document.getElementById("input-box");
	var input = document.getElementById("input-lista");
	var textArea = document.createElement("textarea");

	inputContainer.removeChild(input);

	textArea.setAttribute("placeholder","Añadir una lista");
	textArea.setAttribute("id","fresh-list");
	textArea.classList.add("text");
	inputContainer.appendChild(textArea);

	var buttonContainer = document.getElementById("button-area");
	var button = document.createElement("button");

	button.setAttribute("id","boton");
	button.setAttribute("name", "guardar");
	button.innerHTML = "Guardar";
	buttonContainer.appendChild(button);

	document.getElementById("boton").addEventListener("click", function(){
		document.getElementById("nombre-lista").innerHTML = document.getElementById("fresh-list").value;
		var inputList= document.getElementById("fresh-list");
		inputContainer.removeChild(inputList);
		
		var buttonContainer = document.getElementById("button-area")
		var boton= document.getElementById("boton");
		buttonContainer.removeChild(boton);

		var enlace = document.createElement("p");
		var text = document.createTextNode("Agrega una tarjeta...");

		enlace.setAttribute("id","tarjetas");
		enlace.appendChild(text);
		inputContainer.appendChild(enlace);

		document.getElementById("tarjetas").addEventListener("mouseover", tarjetas);
	})
}

function tarjetas(){
	var enlace = document.getElementById("tarjetas");
	var inputContainer = document.getElementById("nombre-lista");
	var textArea = document.createElement("textarea");
	enlace.remove(inputContainer);

	textArea.setAttribute("placeholder", "Escribe tu tarea aquí");
	var container = document.getElementById("input-box")
	container.appendChild(textArea);

	var button= document.createElement("button");
	button.setAttribute("id","boton-guardar");
	var buttonContainer = document.getElementById("button-area");

	button.setAttribute("id","boton-tarjeta");
	button.setAttribute("name", "Añadir");
	button.innerHTML = "Añadir";
	buttonContainer.appendChild(button);

	document.getElementById("boton-tarjeta").addEventListener("click",imprimir);
}

function imprimir(){
	var text =textArea.value;//rescato el valor de mi txtarea
	var contienelista= document.getElementById("box");	
	var listado=document.createElement("li");
	var lista= document.createTextNode(text);//tambien para pasar un texto
	listado.appendChild(lista);
	contienelista.appendChild(listado);
}






es fijo debiese estar en html, pero whatevs, textarea desde js
var container= document.getElementById("boxdos");
var textArea=document.createElement("textarea");
//luego tengo que indicarle dónde va
//puedo pasarle atributos
textArea.setAttribute("placeholder","agrega texto aquí");
textArea.classList.add("text");
container.appendChild(textArea);

//genere evento inprimir apretando boton
function agregar(){
	var text =textArea.value;//rescato el valor de mi txtarea
	var contienelista= document.getElementById("box");	
	var listado=document.createElement("li");
	var lista= document.createTextNode(text);//tambien para pasar un texto
	listado.appendChild(lista);
	contienelista.appendChild(listado);

}

//kill your CHILD -->removeElement*/
