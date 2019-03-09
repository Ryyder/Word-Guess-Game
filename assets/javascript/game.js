var wins = 0; // user wins
var loses = 0; // user loses
var underSign = "_ ";
var guessRemaining = 10; // remaining number of guess for user
var correctGuess = 0; // correct letter guessed
var allLetters; //shows all the letters shown
var userChoiceText = document.getElementById("user-choice-text"); //shows user input
var guessRemainingText = document.getElementById("guess-remaining"); // shows guesses remaining
var alreadyGuessed = document.getElementById("already-guessed"); // shows all the words guessed
var underline = document.getElementById("under-line"); //underline for each letter of the game

// array of games "words" that can be chosen
var gameArray = ["Half-Life", "World of Warcraft", "League of Legends", "Final Fantasy", "Devil May Cry", "Street Fighter", "Kingdom Hearts", "Monster Hunter", "Tekken",
"Forza", "Resident Evil", "Dark Souls", "Hearthstone", "Starcraft", "Diablo", "Metal Gear Solid"];

// underscore array
var underScore = [];

// throw guessed letters into an array
var guessArray = [];

// holds chosen game from the random number generator
var chosenGame = gameArray[Math.floor(Math.random() * gameArray.length)];

// length of the video game name
var nameLength = chosenGame.length;

// generate underscores
function underScoreFunc () {
  for (var j = 0; j < nameLength; j++) {
    underScore.push("_");
  }
  return underScore;
}

// test
console.log(underScoreFunc());

// repeats the "_" string
//var underSignOutput = underSign.repeat(nameLength);

// converts to lowercase incase user inputs a lower case character
console.log(chosenGame.toLowerCase());

document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key.toLowerCase();

  console.log(userGuess);
  console.log(chosenGame.indexOf(userGuess));

  // ask ta
   /* if(chosenGame.indexOf(userGuess) > -1 ) {
    console.log(true);
    //replace underscore with correct letter
    underScore[chosenGame.indexOf(userGuess)] = userGuess;
    console.log(underScore);
  }  */


  //print the number of underlines to the screen
  //underline.textContent = "Please guess the word: " + underSignOutput;

  //console.log(userGuess); // testing

  // iterate through the word and check to see if the user guess equal any letter in the word
  for (var i = 0; i < nameLength; i++) {
    
    // if the userGuess equals a letter in the chosenGame string
    if (userGuess === chosenGame.charAt(i).toLowerCase()) {
      // user guess decreases
      guessRemaining--;
      console.log("you have: " + guessRemaining + " remaining");

      // increase correct guess
      correctGuess++;
      console.log("you have: " + correctGuess + " correct letter");

      //add letter to guessArray and output to user
      guessArray.push(event.key.toLowerCase());
      console.log("guessed letter: " + guessArray);

      console.log("letter at 0 " + chosenGame.charAt(0).toLowerCase());
      
      underScore[chosenGame.indexOf(userGuess)] = userGuess;
      console.log(underScore);
      //guessRemainingText.textContent = "Guess Remaining: " + guessRemaining;
      
      // show letter guessed
      //console.log(userGuess); // testing
      //console.log(guessRemaining); // testing
      
      // show letter guessed on the "_" lines
    }
    else {
      // user guess decreases
      /* guessRemaining--;
      console.log(guessRemaining); */

      //show letter guessed
      /* guessArray.push(event.key.toLowerCase());
      console.log(guessArray);
      console.log(userGuess);
      console.log(chosenGame.charAt(i).toLowerCase()); */
      

    }


    }

  



}