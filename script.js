//prevent body from dragging
document.body.ondragstart = function() { return false; };

let playerScore = 0;
let computerScore = 0;


//display playerScore in span id playerScore
document.getElementById('playerScore').innerHTML = playerScore;
//display computerScore in span id computerScore
document.getElementById('computerScore').innerHTML = computerScore;