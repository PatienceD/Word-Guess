let Letter = require("./Letter.js");

function Word(wordParam) {
    this.newWord = wordParam;
    this.newArry = [];

    for (var i = 0; i < this.newWord.length; i++) {
       // console.log(newWord.charAt(i));
        let newLetter = new Letter(this.newWord.charAt(i));
        //console.log(newLetter);
        this.newArry.push(newLetter);
    }

    //console.log(this.newArry.toString());

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