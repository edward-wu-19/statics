var total_points = 0;

function addPoints(new_points){
  total_points += new_points;
  document.getElementById("total_points").innerHTML = total_points;
}

var new_points = 100;

function displayRoundPoints(){
    // calculate points
    let mag = calculateNetForceMag();
    new_points = determineScore(mag)

  // show points
  document.getElementById("timer").innerHTML = "+" + new_points + "<br>points";

  // add to total points
  setTimeout(function(){
    addPoints(new_points)

    if (roundNumber < 10){
        // show next game level
    showNextRoundButton();
    }
    else{
        // displays game end message in top left cell
        document.getElementById("submit").innerHTML = "Game over!";
    }
    
  }, 1000);
}

// score will be proportional to the magnitude of the net force -edward 
// nah, it's too biased toward bigger forces -edward
// maybe we should implement a curve? -edward
// actually dot product might be good -edward
function calculateNetForceMag(){
    let netx = 0;
    let nety = 0;
    let givenx = 0;
    let giveny = 0;

    console.log(currentForces);
    for (i in currentForces){
        givenx+= currentForces[i].width * Math.cos(currentForces[i].rotation);
        giveny+= currentForces[i].width * Math.sin(currentForces[i].rotation);
    }

    netx = givenx + playerForce.width * Math.cos(playerForce.rotation);
    nety = giveny + playerForce.width * Math.sin(playerForce.rotation);

    console.log("net force is " + netx + " " + nety);

    let mag = distanceFrom(netx, nety, 0, 0);

    console.log("mag is " + mag);

    return mag;
}

function determineScore(mag){
    let score = 100 - (mag / 3);
    if (score < 0) return 0;
    else return Math.round(score);
}