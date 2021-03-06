var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = []; // storing the sequence generated by the game
var userClickedPattern = []; // storing the sequence of buttons clicked by user

var started = false; // to keep track of wheather the game started or not

var level = 0; // to keep track of levels

// when a keyboard key is pressed for the first time
$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level); // change the title
    nextSequence(); // generate new sequence
    started = true; // game is started
  }
});

// when a button is clicked
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id"); // get its id
  userClickedPattern.push(userChosenColour); // push that color in useClickedPattern

  playSound(userChosenColour); // play the corressponding sound
  animatePress(userChosenColour); // animate the corressponding button

  checkAnswer(userClickedPattern.length - 1); // check the answer is right or wrong
});

// function to check user's answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // if ans matches
    console.log("success"); // log success

    if (gamePattern.length === userClickedPattern.length) {
      // if all answers are correct then
      setTimeout(function () {
        nextSequence(); // generate a next sequence
      }, 1000); // after 1000 miliseconds
    }
  } else {
    // if answer is wrong
    console.log("wrong"); // log wrong
    playSound("wrong"); // play wrong.mp3 sound

    $("body").addClass("game-over"); // indicate wrong click by changing background color for 200 miliseconds
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any key to Restart"); // change the title

    startOver(); // restart the game
  }
}

// function for generating next sequence

function nextSequence() {
  // whenever this function is called
  userClickedPattern = []; // reset the userClickedPattern

  level++; // increase the level

  $("#level-title").text("Level " + level); // change the title with current level

  // generating new sequence
  var randomNumber = Math.floor(Math.random() * 4); // random number {0, 1, 2, 3}
  var randomChosenColour = buttonColours[randomNumber]; // color corressponding to randomNumber generated
  gamePattern.push(randomChosenColour); // add that color in the end of gamePattern

  // animate the button corressponding to number generated, by fadIn, fadeOut
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour); // and play the corressponding sound
}

// function to play sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3"); // create new Audio variable
  audio.play(); // play sound
}

// function to animate the key pressed

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed"); // addClass pressed

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed"); // and remove it
  }, 100); // after 100 miliseconds
}

// function to restart the game

function startOver() {
  level = 0; // reset level to 0
  gamePattern = []; // reset gamePattern to empty array
  started = false; // reset to game is not started
}
