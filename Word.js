let Letter = require("./Letter.js");

function Word(wordParam) {
    this.newWord = wordParam;
    this.newArry = [];

    for (var i = 0; i < this.newWord.length; i++) {
        let newLetter = new Letter(this.newWord.charAt(i));
        this.newArry.push(newLetter);
    }

    this.word = function () {
        let tmpString = "";
        for (var i = 0; i < this.newArry.length; i++) {
            tmpString += this.newArry[i].guessedLetters() + " ";
        }
        return tmpString;
    }

    this.wordGuess = function (letterToBeGuessed) {
        for (var i = 0; i < this.newArry.length; i++) {
            this.newArry[i].guess(letterToBeGuessed);
        }
    }
}

module.exports = Word;