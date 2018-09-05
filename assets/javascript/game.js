// array of possibilites
var letters = [
    "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", 
    "u", "v", "w", "x", "y", 
    "z"
];

// win-loss count
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// what has been guessed
var guesses = [];

// computer's guess
var answer = null;

// update funnctions
var updateGuessesLeft = function() {
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
};

var updateAnswer = function() {
    answer = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuesses = function() {
    document.querySelector("#guesses").innerHTML = guesses.join(", ");
};

// reset function
var reset = function() {
    guessesLeft = 9;
    guesses = [];
    updateAnswer();
    updateGuessesLeft();
    updateGuesses();
}

// on page load
updateAnswer();
updateGuessesLeft();

// key capture functions
document.onkeydown = function(event) {
    // reduce guesses
    guessesLeft--;
    // lowercase
    var letter = String.fromCharCode(event.which).toLowerCase();
    // list guesses
    guesses.push(letter);
    // update
    updateGuessesLeft();
    updateGuesses();

    // check for match
    if (letter === answer) {
        // on match
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        // then reset
        reset();
    }

    // out of guesses
    if (guessesLeft === 0) {
        // on loss
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        // then reset
        reset();
    }
};