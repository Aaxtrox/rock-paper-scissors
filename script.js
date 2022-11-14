//prevent body from dragging
document.body.ondragstart = function() { return false; };


let playerScore = 0;
let computerScore = 0;


//display playerScore in span id playerScore
document.getElementById('playerScore').innerHTML = playerScore;
//display computerScore in span id computerScore
document.getElementById('computerScore').innerHTML = computerScore;


//grab all buttons
const buttons = document.querySelectorAll('button');
//loop through buttons
buttons.forEach((button) => {
    //add event listener on each button
    button.addEventListener('click', () => {
        //grab id of clicked button
        const id = button.id;
        //if id = rock display rock image in div id playerChoice adn give id rock
        if (id === 'rock') {
            document.getElementById('playerChoice').innerHTML = '<img src="./img/rock.png" alt="rock" id="rock">';
        } else if (id === 'paper') {
            document.getElementById('playerChoice').innerHTML = '<img src="./img/paper.png" alt="paper" id="paper">';
        } else if (id === 'scissors') {
            document.getElementById('playerChoice').innerHTML = '<img src="./img/scissors.png" alt="scissors" id="scissors">';
        }
        //call game function
        game();
    });
});