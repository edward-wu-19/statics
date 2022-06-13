var particlesArray = [];
var particle;

function showSubmitButton(){

    // reset canvas
    // app.stage.removeChild(particle);
    if (roundNumber > 0){
      particlesArray[roundNumber-1].visible = false;
      clearInterval(animation);
      netForce.alpha = 0;
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

var roundNumber = 0;

function updateRoundNumber(){
    const roundCell = document.getElementById("round");
    roundNumber += 1;
    roundCell.innerHTML = "Round<br>" + roundNumber;
}

function restartGame(){
  var submitCell = document.getElementById("submit");
  submitCell.innerHTML = "";

  var x = document.createElement("BUTTON");
  x.id = "submitCellButton";
  submitCell.appendChild(x);

  roundNumber = 0;

  netForce.alpha = 0;

  clearForces();
  currentForces = [];

  ghostParticle.alpha = 0;
  
  total_points = 0;

  showSubmitButton();
}