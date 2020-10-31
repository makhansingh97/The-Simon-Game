/* Step 2 */

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

  /* Step 3 */

  // 1. Use JQuery to select the button with the same id as the randomChosenColour
  // id of button added lastly generated
  // since randomChosenColour is allready a string
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  // play audio of the same color randomy chosen
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
