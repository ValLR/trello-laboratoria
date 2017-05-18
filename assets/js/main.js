function borrar(){
var parent = document.getElementById("input-box");
var child = document.getElementById("input-lista");
parent.removeChild(child);
}

function refreshBox(){
var container = document.getElementById("input-box");
var textArea = docuement.createElement("textarea");

textArea.setAttribute("placeholder","Añadir una lista");
}

<div id="div1" style="height:100px;width:300px;border:1px solid black;background-color:yellow;">


//es fijo debiese estar en html, pero whatevs, textarea desde js
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
