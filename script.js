/* Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text"); */


//Declaración variables

const contenedorLetras = document.getElementById("contenedor-letras"); 
const contenedorOpcionesJugador = document.getElementById("opciones-jugador"); 
const sectionInputJugador = document.getElementById("sectionInputJugador"); 
const contendorJuegoNuevo = document.getElementById("contenedor-juego-nuevo"); 
const buttonJuegoNuevo = document.getElementById("button-juego-nuevo"); 
const resultadoTexto = document.getElementById("resultado-texto"); 

//array de palabras

let palabrasAhorcado = { 
  frutas: ["banana", "sandía", "cereza", "higo", "mandarina", "manzana"],
  animales: ["gato", "perro", "caballo", "elefante", "guacamaya", "ardilla"],
  paises: ["Venezuela", "España", "Francia", "Panama", "Noruega", "Argentina"],
  ciudades: ["Caracas", "Madrid", "Barcelona", "Coruña", "Valencia", "Lugo"],
};

// contador

let winCount = 0;
let count = 0;

let palabraElegida = "";

// display botones de opciones

const mostrarOpciones = () => {
    contenedorOpcionesJugador.innerHTML += `<h3> Selecciona una opcion </h3>`;
  let buttonPalabrasAhorcado = document.createElement("div");
  for (let value in hangmanWords) {
    buttonPalabrasAhorcado.innerHTML += `<button class="buttonPalabrasAhorcado" onclick="generateWord('${value}')">${value}</button>`;
  }
  contenedorOpcionesJugador.appendChild(buttonPalabrasAhorcado);
};
