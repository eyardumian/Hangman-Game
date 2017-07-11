//global variables
var word = ["dragonroll", "rainbowroll", "sashimi", "crunchroll", "tigerroll", "californiaroll",
 "tunaroll", "philadelphiaroll", "spiderroll", "dynamiteroll", "firecrackerroll", "caterpillarroll"];
var losses = 0;
var wins= 0;
var computerPick = "";
var letters = [];
var guessesRemaining = 15;
var wrongLetters = [];
var num = 0;
var currentWord = [];

document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
  console.log(userGuess)
};

function startGame() {
  computerPick = word[Math.floor(Math.random() * word.length)];
  console.log(computerPick)
  letters = computerPick.split("");
  guessesRemaining = 15;
  wrongLetters = [];
  num = letters.length;
  currentWord = [];


  //Create a for loop so computer display correct number of underscores for the chosen word.
  //This isn't working.
        for (var i = 0; i < num; i++)  {
          currentWord.push("_ ");
        }

          document.getElementById("currentWord").innerHTML = currentWord.join(" ");
          document.getElementById("wins").innerHTML = "wins:" + wins;
          document.getElementById("losses").innerHTML = "losses:" + losses;
          document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
};


//Check for correct letter
//This section is incomplete and/or incorrect.
function checkLetter(letter) {
      for(var j = 0; j < num; j++) {
        if (letter == computerPick[j]) {
          currentWord[j] = letter;
        }
      }
    };


//When user wins or loses, this happens:
function endOfRound() {
    if(letters.toString() === currentWord.toString()) {
      wins++
      computerPick = word[Math.floor(Math.random() * word.length)];
      startGame();

  } else if (guessesRemaining===0) {
      losses++
      startGame();
    }
  };
