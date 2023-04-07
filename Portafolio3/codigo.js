let botonWhatsapp;
let botonGitHub;
let botonGmail;
let botonLinkedin;
let numerosRomanos;
let calculadora;
let APIMarvel;
let porcentajes;



botonWhatsapp = document.getElementById("botonWhatsapp");
botonGitHub = document.getElementById("botonGitHub");
botonGmail = document.getElementById("botonGmail");
botonLinkedin = document.getElementById("botonLinkedin");
numerosRomanos = document.getElementById("numerosRomanos");
calculadora = document.getElementById("calculadora"); //por ahora en privado
APIMarvel = document.getElementById("APIMarvel"); //por ahora en privado
porcentajes = document.getElementById("porcentajes");

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

function irAPorcentajes(){
	window.open("https://github.com/Rafael30586/PorcentajeCalculosEX");
}


botonWhatsapp.addEventListener("click",numeroTelefono);
botonGmail.addEventListener("click",correoElectronico);
botonGitHub.addEventListener("click",irAGitHub);
botonLinkedin.addEventListener("click",irALinkedin);

numerosRomanos.addEventListener("click",irANumerosRomanos);
APIMarvel.addEventListener("click",irAAPIMarvel);
porcentajes.addEventListener("click",irAPorcentajes);