const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
let nombre = document.getElementById("nombre");
const textoEncabezado = document.createTextNode("Desarrollador Java");
const textoEncabezadoOriginal = document.createTextNode("F. Rafael Alvarez");

function mostrarNumero(){
    alert(`0351 156754046`);
}

function mostrarCorreo(){
    alert(`fraq86@gmail.com`);
}

function mostrarRol(){
    //nombre.removeChild("textoEncabezadoOriginal");
    nombre.removeChild(textoEncabezadoOriginal);
	nombre.appendChild(textoEncabezado);
    nombre.removeAttribute("id")
    nombre.setAttribute("id","rol");
}

function mostrarNombre(){
    nombre.removeChild(textoEncabezado);
	nombre.appendChild(textoEncabezadoOriginal);
    nombre.setAttribute("id","nombre")
}

function mostrarNombre1(){
    nombre.appendChild(textoEncabezadoOriginal);
}

mostrarNombre1();


nombre.addEventListener("mouseover",mostrarRol)
nombre.addEventListener("mouseout",mostrarNombre);