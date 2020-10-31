// 3. array to store button colours
var buttonColours = ["red", "blue", "green", "yellow"];

//5. empty array for game pattern
var gamePattern = [];

// 1. create function named nextSequence
function nextSequence() {
  // 2.  generate random number between {0, 1, 2, 3}
  var randomNumber = Math.floor(Math.random() * 4);

  // 4.vrandomly chosen colour using randomNumber generated
  var randomChosenColour = buttonColours[randomNumber];

  // 6. add the random chosen colour in the last of game pattern array
  gamePattern.push(randomChosenColour);
}
