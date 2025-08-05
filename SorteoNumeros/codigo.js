let contenedorNumero = document.getElementById("contenedor-numero")
let botonNumero = document.getElementById("boton-numero")
let h2 = document.createElement('h2')
let numeroObtenido = document.createElement("span")



function obtenerNumeroAleatorio() {
  return Math.floor(Math.random() * 400) + 1
}

function insertarNumero(){
    numeroObtenido.textContent = `${obtenerNumeroAleatorio()}`
    h2.appendChild(numeroObtenido)
    // h2.textContent = `Número obtenido: ${numeroObtenido}`
    contenedorNumero.appendChild(h2)
    numeroObtenido.setAttribute("id","numero")
}

botonNumero.addEventListener("click",insertarNumero)