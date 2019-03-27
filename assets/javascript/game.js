// set initail variables for wins, losses, remaining guesses, 
// and previous guesses
var computerChoices = ['a','b','c',
              'd','e','f','g','h','i'];
              // 'j','k','l','m','n','o','p','q','r',
              // 's','t','u','v','w','x','y','z'
              // ];
var wins = 0;
var losses = 0;
var numGuess = 15;

console.log(computerChoices);

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
// var prevGuessText = document.getElementById ("prevGuess-text")
var numGuessText = document.getElementById("numGuess-text");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
    var userGuess = event.key;

    console.log(userGuess)

// Randomly chooses a choice from the options array. This is the Computer's choice.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// creating "if/else" statement to determine the outcome of game.

   if (userGuess === computerGuess) {
        wins ++ ; 
        numGuess -- ;
        alert ("Wowza, you got " + wins + " right, you must be psychic!")}
    else {
        losses ++ ;
        numGuess -- ;
        alert ("Nope, you got " + losses + " wrong, you do not possess the gift!")
        }
    
    if (numGuess === 0) {
      alert( "Game over... but you knew that")
    }

// Hide the directions
    directionsText.textContent = "";

// Display the user and computer guesses, and wins/losses/remaining guesses.
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    // prevGuessText.textContent = "Your guesses so far: " + prevGuess;
    numGuessText.textContent = "Guesses Left: " + numGuess;
  }