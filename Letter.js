function Letter(letterParam) {
    this.charLetter = letterParam;
    this.thisHasBeenGuessed = false;

    //console.log(this.charLetter);

    this.guessedLetters = function () {
        if (this.thisHasBeenGuessed) {
            return this.charLetter;
        } else {
            return "_ ";
        }
    }

    this.guess = function (element) {
        if (element === this.charLetter) {
            this.thisHasBeenGuessed = true;
        }
    }
}

module.exports = Letter;