let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = [];

let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter valid number`);
  } else if (guess < 1) {
    alert(`Please enter a number more then 1`);
  } else if (guess > 100) {
    alert(`Please enter a number less than 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Your guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO high`);
  }
}
function displayMessage(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} ,`;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`;
}
function newGame() {
  const newGameButton =  document.querySelector('#newGame')
  newGameButton.addEventListener('click',function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1 
    guessSlot.innerHTML = ''
    lastResult.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true

  })
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}
