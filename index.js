const Word = require("./word.js");
const inquirer = require("inquirer");

let wordsToGuess = ['Lincoln', 'Train Wreck', 'Disney', 'Tom and Jerry', 'Fly', 'Facebook', 'Hurricane', 'Marvel Universe', 'Hand Sanitizer', 'Paper Airplane'];

let guesses;
let pickedWords;
let word;
let pickedWord;

function init() {
  pickedWords = [];
  console.log("Hello, and welcome to Word Guess!");
  console.log("------------------------------------------");
  playGame();
}

function playGame() {
  pickedWord = "";
  guesses = 15;
  if(pickedWords.length < wordsToGuess.length) {
    pickedWord = getWord();
  } else {
    // WIN CONDITION
    console.log("Great Job!");
    continuePrompt();
  }
  if(pickedWord) {
    word = new Word(pickedWord);
    word.word();
    makeGuess();
  }
}

function getWord() {
  let rand = Math.floor(Math.random() * wordsToGuess.length);
  let randomWord = wordsToGuess[rand];
  if(pickedWords.indexOf(randomWord) === -1) {
    pickedWords.push(randomWord);
    return randomWord;
  } else {
    return getWord();
  }
}

function makeGuess() {
  let checker = [];
  inquirer.prompt([
    {
      name: "guessedLetter",
      message: word.word() + 
              "\nGuess a letter!" +
              "\nGuesses Left: " + guesses
    }
  ])
  .then(data => {
    word.newArry.forEach(letter => {
      letter.guess(data.guessedLetter);
      checker.push(letter.guessedLetters());
    });

    if(guesses > 0 && checker.indexOf("_ ") !== -1) {
      guesses--;
      if(guesses === 0) {
        console.log("YOU RAN OUT OF GUESSES! THE ANSWER WAS " + pickedWord + ". GAME OVER!" );
        continuePrompt();
      } else {
        makeGuess();
      }
    } else {
      console.log("CONGRATULATIONS! YOU GOT THE WORD!");
      console.log(word.word());
      playGame();
    }
  });
}

function continuePrompt() {
  inquirer.prompt([
      {
        name: "continue",
        type: "list",
        message: "Would you like to play again?",
        choices: ["Yes", "No"]
      }
    ])
  .then(data => {
      if(data.continue === "Yes") {
        init();
      } else {
        console.log("Thanks for playing!");
      }
  });
}

init();