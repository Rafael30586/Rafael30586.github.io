const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
let nombre = document.getElementById("nombre");
const cambioEstilo = document.getElementById("cambioEstilo");
const body = document.getElementById("body");
const navTab = document.getElementById("nav-tab");
const contactos = document.getElementById("icon-grid");
const textoEncabezado = document.createTextNode("Desarrollador Java");
const textoEncabezadoOriginal = document.createTextNode("F. Rafael Alvarez");
let estilo = 1;

let navBar;

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

function cambiarEstilo(){
    switch(estilo){
        case 1: estilo+=1;break;
        case 2: estilo-=1;break;
    }
    //estilo += 1;
}

function guardarElemento(){
    switch(estilo){
        case 1: navBar = document.getElementById("encabezado2");break;
        case 2: navBar = document.getElementById("encabezado");break;
    }
    
}

function cambiarColores(){
    cambiarEstilo();
    guardarElemento();

    switch(estilo){
        case 1: body.style.backgroundColor = "#313131";
        cambioEstilo.removeAttribute("class");
        cambioEstilo.setAttribute("class","btn btn-outline-light me-2");
        contactos.removeAttribute("class");
        contactos.setAttribute("class","container px-4 py-5 rounded-top contenedor contactos");
        break;
        case 2: //navBar.removeAttribute("id");
        //navBar.setAttribute("id","encabezado2")
        body.style.backgroundColor = "#f9f7f7";
        cambioEstilo.removeAttribute("class");
        cambioEstilo.setAttribute("class","btn btn-outline-secondary me-2");
        contactos.removeAttribute("class");
        contactos.setAttribute("class","container px-4 py-5 rounded-top contenedor contactos2");
        //navTab.removeAttribute("class");
        //navTab.setAttribute("class","nav nav-tabs rounded-top trayectoriaItems2 --bs-danger-text-emphasis");
        break;
    }

}

mostrarNombre1();


nombre.addEventListener("mouseover",mostrarRol)
nombre.addEventListener("mouseout",mostrarNombre);
cambioEstilo.addEventListener("click",cambiarColores);