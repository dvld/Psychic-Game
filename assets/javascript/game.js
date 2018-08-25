// array to list possible guesses
var possibilities = [
    "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", 
    "U", "v", "w", "x", "y", "z"
];

// win-loss count
var win = 0;
var loss = 0;
var guessesLeft = 7;

// referece variables
var directions = document.getElementById("directions-text");
var userChoice = document.getElementById("userChoice-text");
var computerChoice = document.getElementById("computerChoice-text");
var wins = document.getElementById("wins-text");
var losses = document.getElementById("losses-text");
// key press function
document.onkeyup = function(event) {

    // determines key pressed
    var userGuess = event.key;

    // randomly chooses computer's letter
    var computerGuess = possibilities[Math.floor(Math.random() * possibilities.length)];

    // logic
    if (userGuess === computerGuess) {
        win++;
    }   else if (userGuess !== computerGuess) {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        loss++;
    }   

    // Hide the directions
    directionsText.textContent = "";

    // Display
    userChoice.textContent = "Your Guesses" + userGuess;
    wins.textContent = "wins: " + wins;
    losses.textContent = "losses: " + losses;
};
