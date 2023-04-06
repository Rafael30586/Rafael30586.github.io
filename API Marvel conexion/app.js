

var cuadroTexto = document.getElementById("cuadroDeTexto");
const boton = document.getElementById("botonResultados");
let page = 0;

const back = document.getElementById("back");
const next = document.getElementById("next");
const nextMas5 = document.getElementById("nextMas5");
const firstPage = document.getElementById("firstPage");
const finalPage = document.getElementById("finalPage");
let pagePanel = document.getElementById("pagePanel");
let pageNumber = 1;

function paginaSiguiente(){
	if(page < 1550){
		page = page + 50;
		pageNumber = pageNumber + 1;
	}
	
	console.log(page);
	cargarHeroes(); 
	

}

function paginaAnterior(){
	if(page > 0){
		page = page - 50;
		pageNumber = pageNumber - 1;
	}
	console.log(page);
	cargarHeroes(); 

}

function paginaMas5(){
	if(page < 1300){
	    page = page + 250;
	    pageNumber = pageNumber + 5;
	}

	console.log(page);
	cargarHeroes();
	
}

function paginaPrimera(){
	page = 0;
	console.log(page);
	cargarHeroes();
	pageNumber = 0;
}

function paginaFinal(){
	page = 1550;
	console.log(page);
	cargarHeroes();
	pageNumber = 31;
}

back.addEventListener('click', paginaAnterior);
next.addEventListener('click', paginaSiguiente);
nextMas5.addEventListener('click', paginaMas5);
firstPage.addEventListener('click', paginaPrimera);
finalPage.addEventListener('click', paginaFinal);

var valor = "4";
valor = cuadroTexto.value;

function getValor(){
	valor = cuadroTexto.value;
    console.log(valor);
    cargarComics();
}

boton.addEventListener('click', getValor);

console.log(cuadroTexto);
//alert(valor);

const cargarHeroes = async() => {
	
    try{
    	let respuesta = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=3000&apikey=9c50b5777560bf6939b7bd4d085f019f&hash=2c0407f62792b58e970842a11233f83b&offset=${page}&limit=50`);
	    console.log(respuesta);

        let datos = await respuesta.json();

        let characters = "";

        datos.data.results.forEach(character => {
        	characters+=`
             <ul id="characterList">
               <li>${character.name}   ${"--- code = "}<b class="code">${character.id}</b></li>
             </ul>
        	`
        })

        document.getElementById("contenedor2").innerHTML = characters;

        console.log(datos);

        document.getElementById("pageNumberPanel").innerHTML = pageNumber;

        //console.log(datos.status);

        //document.write(datos.copyright);

        //alert(datos.data.results[11].modified);

        //console.log(datos.data.results[4].title);

        //console.log(datos.data.results)
        //alert(datos.data.offset)

    } catch(error){
    	alert("something went wrong");
    }

	
}

cargarHeroes(); 

const cargarComics = async() => {
	
    try{
    	let respuesta = await fetch(`https://gateway.marvel.com/v1/public/characters/${valor}/comics?ts=3000&apikey=9c50b5777560bf6939b7bd4d085f019f&hash=2c0407f62792b58e970842a11233f83b&offset=0&limit=100`);
	    console.log(respuesta);
        
        let respuesta2 = await fetch(`https://gateway.marvel.com/v1/public/characters/${valor}?ts=3000&apikey=9c50b5777560bf6939b7bd4d085f019f&hash=2c0407f62792b58e970842a11233f83b&offset=0&limit=100`);
        console.log(respuesta2);

        let datos2 = await respuesta.json();

        let datos3 = await respuesta2.json();

        //console.log(datos2);

        console.log(datos2.data);

        console.log(datos2.data.results);

        console.log(datos2.data.count);

        let resultados = datos2.data.count;

        console.log(datos3.data.results[0].name);

        let nombrePersonajeElegido = datos3.data.results[0].name;

        let comics = "";

        datos2.data.results.forEach(comic => {
        	comics+=`
             <ol>
               <li>${comic.title}</li>
             </ol>
        	`
        })

        document.getElementById("contenedor3").innerHTML = comics;
        document.getElementById("nombrePersonajeElegido").innerHTML = nombrePersonajeElegido;
        document.getElementById("resultados").innerHTML = `Results: ${resultados}`;


        //console.log(datos);

        //console.log(datos.status);

        //document.write(datos.copyright);

        //alert(datos.data.results[11].modified);

        //console.log(datos.data.results[4].title);

        //console.log(datos.data.results)
        //alert(datos.data.offset)

    } catch(error){
    	alert("something went wrong, avoid blank spaces to the left of your code");
    }

	
}
