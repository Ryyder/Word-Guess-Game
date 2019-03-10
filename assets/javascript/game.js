var wins = 0; // user wins
var loses = 0; // user loses
var underSign = "_ ";
var guessRemaining = 12; // remaining number of guess for user
var correctGuess = 0; // correct letter guessed
var allLetters; //shows all the letters shown
var userChoiceText = document.getElementById("user-choice-text"); //shows user input
var guessRemainingText = document.getElementById("guess-remaining"); // shows guesses remaining
var alreadyGuessed = document.getElementById("already-guessed"); // shows all the words guessed
var underline = document.getElementById("under-line"); //underline for each letter of the game

// array of games "words" that can be chosen
var gameArray = ["half Life", "final fantasy", "devil may cry", "street fighter", "tekken",
  "forza", "dark souls", "hearthstone", "starcraft", "diablo", "pokemon", "anthem", "division",
  "smash bros"];

// "_" filled into this array
var underScore = [];

// throw guessed letters into an array
var guessArray = [];

// use this array to hold each character of chosenGame
var splitArray = [];

// holds chosen game from the random number generator
var chosenGame = gameArray[Math.floor(Math.random() * gameArray.length)];

// length of the video game name
var nameLength = chosenGame.length;

// generate underscores
function underScoreFunc() {
  for (var j = 0; j < nameLength; j++) {
    underScore.push("_");
  }
  return underScore;
}

// test
console.log(underScoreFunc());

// splits the chosenGame into an array with individual characters
function splitLetter() {
  for (var h = 0; h < nameLength; h++) {
    splitArray.push(chosenGame[h]);
  }
  return splitArray;
}

//test
splitLetter();
console.log(splitArray);

// converts to lowercase incase user inputs a lower case character
console.log(chosenGame.toLowerCase());

document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key.toLowerCase();

  // check to see if userGuess is in the chosenGame string
  if (chosenGame.indexOf(userGuess) > -1) {

    // iterate through the word and check to see if the user guess equal any letter in the word
    for (var i = 0; i < nameLength; i++) {

      // if userGuess is in the splitArray, we put it in the index of underScore array.
      if (userGuess === splitArray[i]) {
        // user guess decreases
        guessRemaining--;
        console.log("you have: " + guessRemaining + " remaining");

        // increase correct guess
        correctGuess++;
        console.log("you have: " + correctGuess + " correct letter");

        underScore[i] = userGuess;
        console.log(underScore); //testing
      }
    }
  }
  else {
    // user guess decreases
    guessRemaining--;
    console.log(guessRemaining);

    //show letter guessed
    guessArray.push(event.key.toLowerCase());
    console.log(guessArray);
    console.log(userGuess);
    console.log(chosenGame.charAt(i).toLowerCase());
  }






}