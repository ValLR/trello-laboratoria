function borrar(){
	var parent = document.getElementById("input-box");
	var child = document.getElementById("input-lista");
	var container = document.getElementById("input-box");
	var textArea = document.createElement("textarea");

	parent.removeChild(child);

	textArea.setAttribute("placeholder","Añadir una lista");
	textArea.setAttribute("id","fresh-list");
	textArea.classList.add("text");
	container.appendChild(textArea);

	var buttonContainer = document.getElementById("button-area");
	var button = document.createElement("button");

	button.setAttribute("id","boton");
	button.setAttribute("name", "guardar");
	button.innerHTML = "Guardar";
	buttonContainer.appendChild(button);
}




/*/es fijo debiese estar en html, pero whatevs, textarea desde js
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
