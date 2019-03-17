var wins = 0; // user wins
var loses = 0; // user loses
var underSign = "_ ";
var guessRemaining = 12; // remaining number of guess for user
var correctGuess = 0; // correct letter guessed
var allLetters; //shows all the letters shown
var winText = document.getElementById("win-text"); //wins text
var loseText = document.getElementById("lose-text"); //lose text
var userChoiceText = document.getElementById("user-choice-text"); //shows user input
var guessRemainingText = document.getElementById("guess-remaining"); // shows guesses remaining
var alreadyGuessed = document.getElementById("already-guessed"); // shows all the words guessed
var underline = document.getElementById("under-line"); //underline for each letter of the game
var mainTheme = document.getElementById("main-theme"); //plays music on click

// array of games "words" that can be chosen
var gameArray = ["goku", "vegeta", "broly", "yamcha", "krillin", "cell", "janemba", "shenron", "bulma", "gohan", "trunks", "goten", "jiren", "zamasu"];

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

// on first click, plays sound. on second click, pauses sound
function play(element) {
  var audio = document.getElementById(element);
  if (audio.paused) {
    audio.play();
  }
  else {
    audio.pause();
  }
}

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

// define lose condition
function loseCondition() {
  if (guessRemaining == 0) {
    loses++;
    resetGame();
  }
  loseText.innerHTML = "Loses: " + loses;
  console.log("checking if game lost.");
}

// defines win condition
function winCondition() {
  if (underScore.toString() == splitArray.toString()) {
    wins++;
    resetGame();
    winText.innerHTML = "Wins: " + wins;
  }
  else {
    console.log("arrays don't match.");
  }
}

// resets the game when the user either wins or loses
function resetGame() {
  // choose new word
  chosenGame = gameArray[Math.floor(Math.random() * gameArray.length)];
  console.log(chosenGame);

  //redo the length of the string
  nameLength = chosenGame.length;

  // reset guesses to original amount
  guessRemaining = 12;

  // clear out the arrays
  guessArray = [];
  splitArray = [];
  underScore = [];

  // regenerate underscores
  underScoreFunc();

  // print out the underscores to html document
  underline.innerHTML = "Word: " + underScore;

  // repopulate splitArray with "_"'s
  splitLetter();

}

// call split letter
splitLetter();

// print out the underscores to html document
underline.innerHTML = "Word: " + underScore;


// converts to lowercase incase user inputs a lower case character
document.onkeyup = function (event) {

  // determines which key was pressed
  var userGuess = event.key.toLowerCase();

  // check for lose condition
  loseCondition();

  // prints guess remaining to html document
  guessRemainingText.innerHTML = "Guess Remaining: " + guessRemaining;

  // add the user guess to the guessarray
  guessArray.push(userGuess);



  // check to see if userGuess is in the chosenGame string
  if (chosenGame.indexOf(userGuess) > -1) {

    // play audio when key is pressed
    document.getElementById("powerUp").play();

    // user guess decreases
    guessRemaining--;

    // only decrement guessRemaining once if already in guessArray
    if (guessArray.includes(userGuess)) {
  
    }
    else {
      guessRemaining--;
      guessArray.push(userGuess);
      console.log(guessRemaining);
    }

    // print out user guess to the html document
    alreadyGuessed.innerHTML = "Already Guessed: " + guessArray;


    // iterate through the word and check to see if the user guess equal any letter in the word
    for (var i = 0; i < nameLength; i++) {

      // if userGuess is in the splitArray, we put it in the index of underScore array.
      if (userGuess === splitArray[i]) {

        underScore[i] = userGuess;
        
        // output the random word in html document
        underline.innerHTML = "Word: " + underScore;
      }

    }
    //check for our win condition
    winCondition();
  }
  // if userGuess is not in the string, decrease guessRemaining, and push letter in guessArray
  else {

    // put userguess in the guessArray
    guessArray.push(userGuess);

    // play sound on incorrect letter guessed
    document.getElementById("hit").play();
    
    // decrease guesses remaining
    guessRemaining--;

    // check for lose condition
    loseCondition();
  }

}
