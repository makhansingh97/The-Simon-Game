var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  /* 2. call checkAnswer() after a user has clicked and chosen their answer
    , passing the index of the last answer in the user's sequence */
  checkAnswer(userClickedPattern.length - 1);
});

/* Create a new function called checkAnswer(), it should take one input with the 
  name currentLevel */
function checkAnswer(currentLevel) {
  /* 3. write an if statement inside checkAnswer() to check if the most recent
      user answer is the same as the game pattern.
      if so then log "success"
      else log "wrong" */
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    /* 4. If the user got the most recent answer right in step 3 ,
          the check that they have finished their sequence with another 
          if statement.  */
    if (gamePattern.length === userClickedPattern.length) {
      /* 5. Call nextSequence() after a 1000 millisecond delay. */
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
  }
}

function nextSequence() {
  /** 6. Once nextSequence() is triggered , reset the userClickedPattern to an
   * empty array for the next level
   */
  userClickedPattern = [];

  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
