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
var gameArray = ["tekken", "forza", "dark souls", "hearthstone", "starcraft", "diablo", "pokemon", "anthem", "division",
  "atlas", "bayonetta", "bioshock", "bomberman"];

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

// define lose condition
function loseCondition() {
  if (guessRemaining == 0) {
    alert("you lose.");
    resetGame();
  }
  console.log("checking if game lost.");
}

// defines win condition
function winCondition() {
  if (underScore.toString() == splitArray.toString()) {
    alert("You Win!");
    wins++;
    resetGame();
  }
  else {
    console.log("arrays don't match.");
  }
}

//either win or lose, put inside, but at the end of win and at the end of the lose condition
//pick a new word
//reset guess array, split array, underscore array, guess remaining
//update html wins and loses
//another div to keep track of wins and loses

// resets the game when the user either wins or loses
function resetGame() {
  //choose new word
  chosenGame = gameArray[Math.floor(Math.random() * gameArray.length)];

  //redo the length of the string
  nameLength = chosenGame.length;

  //reset guesses to original amount
  guessRemaining = 12;
  
  //clear out the arrays
  guessArray = [];
  splitArray = [];
  underScore = [];

  //repopulate splitArray with "_"'s
  splitLetter();

  //testing
  console.log()
  console.log(chosenGame);
  console.log(guessArray);
  console.log(splitArray);
  console.log(underScore);
}



//test
splitLetter();
console.log(splitArray);


// converts to lowercase incase user inputs a lower case character
//console.log(chosenGame.toLowerCase());

document.onkeyup = function (event) {

  // Determines which key was pressed
  var userGuess = event.key.toLowerCase();

  //check for lose condition
  loseCondition();

  guessRemainingText.innerHTML = "Guess Remaining: " + guessRemaining;
  //alreadyGuessed.innerHTML = "Already Guessed: " + guessArray;

  guessArray.push(userGuess);

  // check to see if userGuess is in the chosenGame string
  if (chosenGame.indexOf(userGuess) > -1) {

      // user guess decreases
     guessRemaining--;
      console.log("you have: " + guessRemaining + " remaining"); *///testing

      // increase correct guess
      correctGuess++;
      //console.log("you have: " + correctGuess + " correct letter");//testing

      //show letter guessed
      if (guessArray.includes(userGuess)) {
        //console.log("already in the array.");
        //console.log(guessArray);
      }
      else {
        guessRemaining--;
        guessArray.push(userGuess);
        console.log(guessRemaining);
      } 

      alreadyGuessed.innerHTML = "Already Guessed: " + guessArray;

    // iterate through the word and check to see if the user guess equal any letter in the word
    for (var i = 0; i < nameLength; i++) {

        // if userGuess is in the splitArray, we put it in the index of underScore array.
        if (userGuess === splitArray[i]) {
        
          underScore[i] = userGuess;
          //console.log(underScore); //testing
        }

    }
    //check for our win condition
    winCondition();
  }
  // if userGuess is not in the string, decrease guessRemaining,and push letter in guessArray
  else {

    guessRemaining--;
    guessArray.push(userGuess);
    alreadyGuessed.innerHTML = "Already Guessed: " + guessArray;
  }
  
}
