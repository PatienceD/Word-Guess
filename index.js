var inquirer = require("inquirer");

let wordsToGuess = ['Lincoln', 'Train Wreck', 'Disney', 'Tom and Jerry', 'Fly', 'Facebook', 'Hurricane', 'Marvel Universe', 'Hand Sanitizer', 'Paper Airplane'];
let ranWord = wordsToGuess[Math.floor(Math.random()* wordsToGuess.length)];
// console.log(ranWord);


inquirer.prompt([
    {
        type: "confirm",
        name: "start/end",
        message: "Do you want to play Word Guess?"
    }, {
        type: "input",
        name: "guess",
        message: "Guess a letter!"
    },
])
