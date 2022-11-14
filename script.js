//Incial ref

const letterContainer = document.getElementById("letter-container");
const playerOptionsContainer = document.getElementById("player-options");
const playerInputSection = document.getElementById("player-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-gane-button");
const resultText = document.getElementById("result-text");

//array de palabras

let hangmanWords = {
  frutas: ["banana", "sandía", "cereza", "higo", "mandarina", "manzana"],
  animales: ["gato", "perro", "caballo", "elefante", "guacamaya", "ardilla"],
  paises: ["Venezuela", "España", "Francia", "Panama", "Noruega", "Argentina"],
  ciudades: ["Caracas", "Madrid", "Barcelona", "Coruña", "Valencia", "Lugo"],
};

// count

let winCount = 0;
let count = 0;

let chosenword = "";

// display botones de opciones

const displayOptions = () => {
  playerOptionsContainer.innerHTML += `<h3> Selecciona una opcion </h3>`;
  let buttonHangmanWords = document.createElement("div");
  for (let value in hangmanWords) {
    buttonHangmanWords.innerHTML += `<button class="buttonHangmanwords" onclick="generateWord('${value}')">${value}</button>`;
  }
  playerOptionsContainer.appendChild(buttonHangmanWords);
};
