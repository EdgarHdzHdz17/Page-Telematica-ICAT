function ocultar_autores(){
	document.getElementById("autores").style.display = "none";
}
function mostrar_participantes(){
    document.getElementById("autores").style.display = "none";
	document.getElementById("participantes").style.display = "block";
}
function mostrar_autores(){
    document.getElementById("participantes").style.display = "none";
	document.getElementById("autores").style.display = "block";
}