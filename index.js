const Word = require("./word.js");
const inquirer = require("inquirer");

let wordsToGuess = ['lincoln', 'train', 'disney', 'jerry', 'fly', 'facebook', 'hurricane', 'marvel', 'sanitizer', 'airplane', 'paper'];

let word;
let guessesLeft;
let pickedWords;
let pickedWord;

function start() {
    pickedWords = [];
    console.log("Let's Play Word Guess!");
    console.log("------------------------------------------");
    playGame();
}

function playGame() {
    pickedWord = "";
    guessesLeft = 15;
    if (pickedWords.length < wordsToGuess.length) {
        pickedWord = getWord();
    } else {
        // WIN CONDITION
        console.log("Great Job!");
        continuePrompt();
    }
    if (pickedWord) {
        word = new Word(pickedWord);
        word.word();
        makeGuess();
    }
}

function getWord() {
    let rand = Math.floor(Math.random() * wordsToGuess.length);
    let randomWord = wordsToGuess[rand];
    if (pickedWords.indexOf(randomWord) === -1) {
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
                "\nGuesses Left: " + guessesLeft
        }
    ]).then(data => {
        word.newArry.forEach(letter => {
            letter.guess(data.guessedLetter);
            checker.push(letter.guessedLetters());
        });

        if (guessesLeft > 0 && checker.includes("_ ")) {
            guessesLeft--;
            if (guessesLeft === 0) {
                console.log("Wrong, the answer was " + pickedWord + ". Game Over!");
                continuePrompt();
            } else {
                makeGuess();
            }
        } else {
            console.log("Great Job! You guessed the word! Try another one!");
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
            message: "Do you want to play again?",
            choices: ["Yes", "No"]
        }
    ]).then(data => {
        if (data.continue === "Yes") {
            start();
        } else {
            console.log("Thanks for playing!");
        }
    });
}

start();