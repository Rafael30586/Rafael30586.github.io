let botonWhatsapp;
let botonGitHub;
let botonGmail;
let botonLinkedin;
let numerosRomanos;
let calculadora;
let APIMarvel;
let porcentajes;
let encabezado;
//const divEncabezado;
const textoEncabezado = document.createTextNode("Desarrollador Java");
const textoEncabezadoOriginal = document.createTextNode("F. Rafael Alvarez");
//const textoMasRelevantes = document.createTextNode(" ...más relevantes");
//const textoFrontend = document.createTextNode(" ...para frontend");
//const textoOtrosLenguajes = document.createTextNode(" ...menos desarrolladas");
//const creaHijo = setTimeout(focoEnEncabezado,1500);
let masRelevantes = document.getElementById("masRelevantes");
let frontend = document.getElementById("frontend");
let otrosLenguajes = document.getElementById("otrosLenguajes");



botonWhatsapp = document.getElementById("botonWhatsapp");
botonGitHub = document.getElementById("botonGitHub");
botonGmail = document.getElementById("botonGmail");
botonLinkedin = document.getElementById("botonLinkedin");
numerosRomanos = document.getElementById("numerosRomanos");
calculadora = document.getElementById("calculadora"); //por ahora en privado
APIMarvel = document.getElementById("APIMarvel"); 
porcentajes = document.getElementById("porcentajes");
encabezado = document.getElementById("encabezado");

const primerHijoEncabezado = encabezado.firstChild;


function numeroTelefono(){
	alert("351-6754046");
}

function correoElectronico(){
	alert("fraq86@gmail.com");
}

function irAGitHub(){
	window.open("https://github.com/Rafael30586");
}

function irALinkedin(){
	window.open("https://www.linkedin.com/in/fernando-rafael-alvarez-99a90454/");
}

function irANumerosRomanos(){
	window.open("https://github.com/Rafael30586/NumerosRomanosEX");
}

function irAAPIMarvel(){
	window.open("https://rafael30586.github.io/APIMarvelConexion/");
}

function irACalculadora(){
	window.open("https://github.com/Rafael30586/CalculadoraEX");
}

function irAPorcentajes(){
	window.open("https://github.com/Rafael30586/PorcentajeCalculosEX");
}

function focoEnEncabezado(){ //aplicar setTimeout()
	//encabezado += "<div>Desarrollador Java</div>";
	//setTimeout(encabezado.appendChild(textoEncabezado),2000)
	encabezado.removeChild(textoEncabezadoOriginal);
	encabezado.appendChild(textoEncabezado);
	//primerHijoEncabezado.setAttribute("class","flecha");
	encabezado.setAttribute("class","inversionColor");
	encabezado.removeAttribute("id");
}

function sacarHijo(){ //aplicar setTimeout()
	encabezado.removeChild(textoEncabezado);
	encabezado.appendChild(textoEncabezadoOriginal);
	encabezado.removeAttribute("class");
	encabezado.setAttribute("id","encabezado");
}

function llenarEncabezado(){
	encabezado.appendChild(textoEncabezadoOriginal);
}

llenarEncabezado();

botonWhatsapp.addEventListener("click",numeroTelefono);
botonGmail.addEventListener("click",correoElectronico);
botonGitHub.addEventListener("click",irAGitHub);
botonLinkedin.addEventListener("click",irALinkedin);

numerosRomanos.addEventListener("click",irANumerosRomanos);
APIMarvel.addEventListener("click",irAAPIMarvel);
calculadora.addEventListener("click",irACalculadora);
porcentajes.addEventListener("click",irAPorcentajes);

encabezado.addEventListener("mouseover",focoEnEncabezado); //aplicar setTimeout()
encabezado.addEventListener("mouseout",sacarHijo); //aplicar setTimeout()

//masRelevantes.addEventListener("click",focoMasRelevantes);
//masRelevantes.addEventListener("click",sacarHijoMasRelevantes);

//encabezado.addEventListener("mouseover",setTimeout(focoEnEncabezado,4000));