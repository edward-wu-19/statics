var objects = [];
var particle;

function showSubmitButton(){
    // reset canvas
    // app.stage.removeChild(particle);
    if (roundNumber > 0){
      objects[roundNumber-1].visible = false;
    }

    // start round
    // setTimeout(function(){
    //   updateRoundNumber();
    // }, 1000);
    updateRoundNumber();

    // perform level start functions
    generateLevel();

    // start timer
    showTimer();

    const submitCellButton = document.getElementById("submitCellButton");
    submitCellButton.style.visibility = 'visible';
    submitCellButton.innerHTML = "Submit";
    submitCellButton.onclick = stopTimer;
}

function showNextRoundButton(){
    const submitCellButton = document.getElementById("submitCellButton");
    submitCellButton.style.visibility = 'visible';
    submitCellButton.innerHTML = "Next Round";
    submitCellButton.onclick = showSubmitButton;
}

var new_points = 100;

function displayRoundPoints(){
  // show points
  document.getElementById("timer").innerHTML = "+" + new_points + "<br>points";

  // add to total points
  setTimeout(function(){
    addPoints(new_points)

    // show next game level
    showNextRoundButton();
  }, 1000);
}

var roundNumber = 0;

function updateRoundNumber(){
    const roundCell = document.getElementById("round");
    roundNumber += 1;
    roundCell.innerHTML = "Round<br>" + roundNumber;
}

var total_points = 0;
function addPoints(new_points){
  total_points += new_points;
  document.getElementById("total_points").innerHTML = total_points;
}