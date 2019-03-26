// set initail variables for wins, losses, remaining guesses, 
// and previous guesses
var gameDetails =[
  letters = ['a','b','c','d','e','f','g','h','i',
              'j','k','l','m','n','o','p','q','r',
              's','t','u','v','w','x','y','z'
              ],
  winsCounter = 0,
  lossesCounter = 0,
  guessesLeft = 10,
  userGuesses = [], 
 ]

console.log(gameDetails)

// // Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var numGuess = document.getElementById("numGuess-text");

window.onload = function () {
  var letterGuess = letters[Math.floor(Math.random() * letters.length)]; 
  }
// This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

// Determines which key was pressed.
  var userGuess = event.key;

// creating "else if" statements to determine the outcome of game.

   if (userGuesses === letterGuess) {
        winsCounter ++ ; 
        guessesLeft -- ;
        alert ("Wowza, you got " + winsCounter + " right, you must be psychic!")}
    else {
        lossesCounter ++ ;
        guessesLeft -- ;
        alert ("Nope, you got " + lossesCounter + " wrong, you do not possess the gift!")
        }
  }