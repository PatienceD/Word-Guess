function Letter(letterParam) {
    let charLetter = letterParam;
    let thisHasBeenGuessed = false;

    this.guessedLetters = function () {
        if (thisHasBeenGuessed) {
            return charLetter;
        } else {
            return "_ ";
        }
    }

    this.guess = function (element) {
        if (element === charLetter) {
            thisHasBeenGuessed = true;
        }
    }
}