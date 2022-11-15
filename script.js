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
const sectionInputJugador = document.getElementById("section-input-jugador");
const contendorJuegoNuevo = document.getElementById("contenedor-juego-nuevo");
const buttonJuegoNuevo = document.getElementById("button-juego-nuevo");
const resultadoTexto = document.getElementById("resultado-texto");
////////////////////////////////////////////
//
//
//array de palabras

let palabrasAhorcado = {
  frutas: ["banana", "sandía", "cereza", "higo", "mandarina", "manzana"],
  animales: ["gato", "perro", "caballo", "elefante", "guacamaya", "ardilla"],
  paises: ["Venezuela", "España", "Francia", "Panama", "Noruega", "Argentina"],
  ciudades: ["Caracas", "Madrid", "Barcelona", "Coruña", "Valencia", "Lugo"],
};
//////////////////////////////////////////////////
//
//
// contador

let winCount = 0;
let count = 0;

let palabraElegida = "";
//////////////////////////////////////////////////////
//
//
//
// display botones de opciones

const mostrarOpciones = () => {
  contenedorOpcionesJugador.innerHTML += `<h3> Selecciona una opcion para jugar</h3>`;
  let buttonPalabrasAhorcado = document.createElement("div");
  for (let value in palabrasAhorcado) {
    buttonPalabrasAhorcado.innerHTML += `<button class="opciones" onclick="generarPalabra('${value}')">${value}</button>`;
  }
  contenedorOpcionesJugador.appendChild(buttonPalabrasAhorcado);
};
///////////////////////////////////////////////////////////////
//
//
//
//funcion inicial para cuando la pagina carga o el usuario presione ara juego nuevo
const initializer = () => {
  winCount = 0;
  count = 0;
  mostrarOpciones();
};
window.onload = initializer;
///////////////////////////////////////
//
//
//iniciar un juego nuevo
buttonJuegoNuevo.addEventListener("click", initializer);
window.onload = initializer;
///////////////////////////////////////
//
//
//Bloquear todos los botones
const bloquear = () => {
  let opcionesButtons = document.querySelectorAll(".opciones");
  let letrasButtons = document.querySelectorAll(".letters");
  //Desabilitar todas las opciones
  opcionesButtons.forEach((button) => {
    button.disabled = true;
  });

  //Deshabilitar letras
  letrasButtons.forEach((button) => {
    button.disabled.true;
  });
  contendorJuegoNuevo.classList.remove("hide");
};
/////////////////////////////////////////////
//
//
// abecedario dentro del contenedor
for (let i = 65; i < 91; i++) {
  let button = document.createElement("button");
  button.classList.add("letras");
  /// usa los números del 65 al 97 de acuerdo al la numeración en la lista ASCII (A-Z)
  button.innerText = String.fromCharCode(i);
  contenedorLetras.append(button);
}
//////////////////////////////
//
//
//
//Generador de palabras

const generarPalabra = (palabrasAhorcadoValue) => {
  let buttonOpciones = document.querySelectorAll(".opciones");
  //If optionValur matches the button innerText then highlight the button
  buttonOpciones.forEach((button) => {
    if (button.innerText.toLowerCase() === palabrasAhorcadoValue) {
      button.classList.add("activo");
    }
    button.disabled = true;
  });

  //Ocultar letras, y limpiar palabra anterior
  contenedorLetras.classList.remove("hide");
  sectionInputJugador.innerText = "";

  let opcionArray = palabrasAhorcado[palabrasAhorcadoValue];
  //Escoger Palabra Random
  palabraElegida = opcionArray[Math.floor(Math.random() * opcionArray.length)];
  palabraElegida = palabraElegida.toUpperCase();
  console.log(palabraElegida);
  //Reemplazar cada letra con un "_"
  let palabraOculta = palabraElegida.replace(
    /./g,
    '<span class="dashes">_</span>&nbsp;' //&nbsp; pone espacio para separar cada letra y _
  );

  //Muestra cada elemento como un span
  sectionInputJugador.innerHTML = palabraOculta;
};
/////////////////////////
//
//
