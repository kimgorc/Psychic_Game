
var comLetters = ["a", "s", "w", "r", "o", "p", "c", "q", "x", "l"];

// Creating a variable to hold our array length.
var arrayLength = comLetters.length;

// Looping through our comLetters array.
for (var j = 0; j < arrayLength; j++) {

  // Console out the letters in the current index.
  console.log(comLetters[j]);

}

// Function to render questions.
    function renderQuestion() {
        // If there are still more questions, render the next one.
        if (questionIndex <= (questions.length - 1)) {
          document.querySelector("#question").innerHTML = questions[questionIndex].q;
        }
        // If there aren't, render the end game screen.
        else {
          document.querySelector("#question").innerHTML = "Game Over!";
          document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
        }
      }
  
      // Function that updates the score...
      function updateScore() {
        document.querySelector("#score").innerHTML = "Score: " + score;
      }
  