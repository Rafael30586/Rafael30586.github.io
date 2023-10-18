const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
let nombre = document.getElementById("nombre");
const cambioEstilo = document.getElementById("cambioEstilo");
const body = document.getElementById("body");
const navTab = document.getElementById("nav-tab");
const contactos = document.getElementById("icon-grid");
const contactoTitulo = document.getElementById("contactoTitulo");
//let titulos = document.getElementsByClassName("titulo"); 
let titulo1 = document.getElementById("h1Trayectoria");
let titulo2 = document.getElementById("h1Habilidades");
let titulo3 = document.getElementById("h1Trabajos");
const presentacion = document.getElementById("presentacion");
const contenedorTrayectoria = document.getElementById("trayectoria");
const contenedorHabilidades = document.getElementById("carouselExampleCaptions");
const contenedorTrabajos = document.getElementById("accordionExample");
const botonTema = document.getElementById("tema");
//titulos = document.querySelectorAll(".titulo");
const textoEncabezado = document.createTextNode("Desarrollador Java");
const textoEncabezadoOriginal = document.createTextNode("F. Rafael Alvarez");
let tamanioVentana; //usar window.innerWidth para responsive
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

function cambiarTitulos(){
    if(estilo===1){
        titulo1.removeAttribute("class");
        titulo1.setAttribute("class","text-center fw-bold mb-5 titulo"); 
        titulo2.removeAttribute("class");
        titulo2.setAttribute("class","text-center fw-bold mb-5 titulo");
        titulo3.removeAttribute("class");
        titulo3.setAttribute("class","text-center fw-bold mb-5 titulo");
    }else{
        titulo1.removeAttribute("class");
        titulo1.setAttribute("class","text-center fw-bold mb-5 titulo2"); 
        titulo2.removeAttribute("class");
        titulo2.setAttribute("class","text-center fw-bold mb-5 titulo2");
        titulo3.removeAttribute("class");
        titulo3.setAttribute("class","text-center fw-bold mb-5 titulo2");
    }
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
        case 1: navBar = document.getElementById("encabezado2");
        //titulos = document.getElementsByClassName("titulo");break;
        case 2: navBar = document.getElementById("encabezado")
        //titulos = document.getElementsByClassName("titulo2");break;
    }
    
}

function cambiarColores(){
    cambiarEstilo();
    guardarElemento();
    //cambiarTitulos();

    switch(estilo){
        case 1: body.style.backgroundColor = "#313131";
        //cambioEstilo.removeAttribute("class");
        //cambioEstilo.setAttribute("class","btn btn-outline-light me-2");
        contactos.removeAttribute("class");
        contactos.setAttribute("class","container px-4 py-5 rounded-top contenedor contactos");
        contactoTitulo.removeAttribute("class");
        contactoTitulo.setAttribute("class","pb-2 border-bottom fw-bold");
        presentacion.removeAttribute("class");
        presentacion.setAttribute("class","px-4 py-5 m-auto my-5 text-center rounded-5 w-75 presentacion");
        contenedorTrayectoria.removeAttribute("class");
        contenedorTrayectoria.setAttribute("class","container contenedor contenedorTrayectoria");
        contenedorHabilidades.removeAttribute("class");
        contenedorHabilidades.setAttribute("class","carousel slide w-75 mx-auto fw-bold contenedor contenedorHabilidades");
        contenedorTrabajos.removeAttribute("class");
        contenedorTrabajos.setAttribute("class","accordion container-md mx-auto contenedor contenedorTrabajos");
        botonTema.removeAttribute("class");
        botonTema.setAttribute("class","tema");
        break;
        case 2: //navBar.removeAttribute("id");
        //navBar.setAttribute("id","encabezado2")
        body.style.backgroundColor = "#fdffc4";
        //cambioEstilo.removeAttribute("class");
        //cambioEstilo.setAttribute("class","btn btn-outline-warning me-2");
        contactos.removeAttribute("class");
        contactos.setAttribute("class","container px-4 py-5 rounded-top contenedor contactos2");
        contactoTitulo.removeAttribute("class");
        contactoTitulo.setAttribute("class","pb-2 border-bottom fw-bold border-secondary");
        //navTab.removeAttribute("class");
        //navTab.setAttribute("class","nav nav-tabs rounded-top trayectoriaItems2 --bs-danger-text-emphasis");
        presentacion.removeAttribute("class");
        presentacion.setAttribute("class","px-4 py-5 m-auto my-5 text-center rounded-5 w-75 presentacion2");
        contenedorTrayectoria.removeAttribute("class");
        contenedorTrayectoria.setAttribute("class","container contenedor contenedorTrayectoria2");
        contenedorHabilidades.removeAttribute("class");
        contenedorHabilidades.setAttribute("class","carousel slide w-75 mx-auto fw-bold contenedor contenedorHabilidades2");
        contenedorTrabajos.removeAttribute("class");
        contenedorTrabajos.setAttribute("class","accordion container-md mx-auto contenedor contenedorTrabajos2");
        botonTema.removeAttribute("class");
        botonTema.setAttribute("class","tema2");
        break;
    }

    cambiarTitulos();

}

mostrarNombre1();


nombre.addEventListener("mouseover",mostrarRol)
nombre.addEventListener("mouseout",mostrarNombre);
//cambioEstilo.addEventListener("click",cambiarColores);
botonTema.addEventListener("click",cambiarColores);