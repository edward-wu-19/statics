function showSubmitButton(){
  // start round
    updateRoundNumber();

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

function stopTimer(){
  clearInterval(timer);
  
  const submitCellButton = document.getElementById("submitCellButton");
  submitCellButton.style.visibility = 'hidden';

  displayRoundPoints();
}

function showTimer(){

  document.getElementById("timer").innerHTML = `Time Left
  <div id="time_left">
  </div>`;

  // initialize time
  var timeLeft = 10;
  document.getElementById("time_left").innerHTML = timeLeft + "s ";

  // Update the count down every 1 second
  timer = setInterval(function() {

  timeLeft--;
  document.getElementById("time_left").innerHTML = timeLeft + "s ";

  // If the count down is finished, write some text
  if (timeLeft <= 0) {
    clearInterval(timer);

    const submitCellButton = document.getElementById("submitCellButton");
    submitCellButton.style.visibility = 'hidden';
    document.getElementById("timer").innerHTML = "TIME'S UP";
    
    setTimeout(function(){displayRoundPoints()}, 1000);
  }
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