var wins; // user wins
var loses; // user loses
var underSign = "_ ";
var guessRemaining = 10; // remaining number of guess for user
var correctGuess; // correct letter guessed
var allLetters; //shows all the letters shown
var userChoiceText = document.getElementById("user-choice-text"); //shows user input
var guessRemainingText = document.getElementById("guess-remaining"); // shows guesses remaining
var alreadyGuessed = document.getElementById("already-guessed"); // shows all the words guessed
var underline = document.getElementById("under-line"); //underline for each letter of the game

// array of games "words" that can be chosen
var gameArray = ["Half-Life", "World of Warcraft", "League of Legends", "Final Fantasy", "Devil May Cry", "Street Fighter", "Kingdom Hearts", "Monster Hunter", "Tekken",
"Forza", "Resident Evil", "Dark Souls", "Hearthstone", "Starcraft", "Diablo", "Metal Gear Solid"];

// throw guessed letters into an array
var guessArray = [];

// looping variable
var i = 0;

// holds chosen game from the random number generator
var chosenGame = gameArray[Math.floor(Math.random() * gameArray.length)];

// length of the video game name
var nameLength = chosenGame.length;

// repeats the "_" string
var underSignOutput = underSign.repeat(nameLength);

// converts to lowercase incase user inputs a lower case character
console.log(chosenGame.toLowerCase());

document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key.toLowerCase();

  //print the number of underlines to the screen
  underline.textContent = "Please guess the word: " + underSignOutput;

  //console.log(userGuess); // testing

  // iterate through the word and check to see if the user guess equal any letter in the word
  for (i; i < nameLength; i++) {
  
    
    // if the userGuess equals a letter in the chosenGame string
    if (userGuess === chosenGame.charAt(i).toLowerCase()) {
      // user guess decreases
      guessRemaining--;
      console.log(guessRemaining);

      //add letter to guessArray and output to user
      guessArray.push(event.key.toLowerCase());
      console.log(guessArray);
      /* console.log(chosenGame.charAt(i).toLowerCase());
      console.log(userGuess);
      console.log(guessRemaining); */

      //guessRemainingText.textContent = "Guess Remaining: " + guessRemaining;
      // show letter guessed
      //console.log(userGuess); // testing
      //console.log(guessRemaining); // testing
      
      // show letter guessed on the "_" lines
    }
    else {
      // user guess decreases
      guessRemaining--;

      //show letter guessed
      //console.log(userGuess);
      //console.log(guessRemaining);

    }


    }

  



}