let timer_running = false;

function stopTimer(){
  clearInterval(timer);

  timer_running = false;
  
  const submitCellButton = document.getElementById("submitCellButton");
  submitCellButton.style.visibility = 'hidden';

  displayRoundPoints();
}

function showTimer(){

  document.getElementById("timer").innerHTML = `Time Left
  <div id="time_left">
  </div>`;

  timer_running = true;

  // initialize time
  var timeLeft = 10;
  document.getElementById("time_left").innerHTML = timeLeft + "s ";

  // Update the count down every 1 second
  timer = setInterval(function() {

  timeLeft--;
  document.getElementById("time_left").innerHTML = timeLeft + "s ";

  // If the count down is finished, write some text
  if (timeLeft <= 0) {
    timer_running = false;
    clearInterval(timer);

    const submitCellButton = document.getElementById("submitCellButton");
    submitCellButton.style.visibility = 'hidden';
    document.getElementById("timer").innerHTML = "TIME'S UP";
    
    setTimeout(function(){displayRoundPoints()}, 1000);
  }
}, 1000);
}