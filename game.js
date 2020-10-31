var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  // 1. when a user clicks a button , play the corressponding sound
  playSound(userChosenColour);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  // 4. Refactor the code  in playSound(), so that it will work for both nextSequence() and when a user clicks a button

  playSound(randomChosenColour);
}

// 2. create a new function playSound that takes a single parameter name
function playSound(name) {
  // 3. take the code from nextSequence() and add it to Play sound
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
