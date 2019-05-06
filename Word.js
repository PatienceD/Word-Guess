let fs = require("./Letter.js");

function Word(wordParam) {
    let newWord = wordParam;
    let newArry = [];

    for (var i = 0; i < newWord.length; i++) {
        let newLetter = Letter(newWord.charAt(i));
        newArry.add(newLetter);
    }

    this.word = function () {
        let tmpString = "";
        newArry.forEach(function (element) {
            tmpString += element.guessedLetters() + " ";
        });
        return tmpString();
    }

}