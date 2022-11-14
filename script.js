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


//randomly select rock, paper, or scissors
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

//function playerSelection
function playerSelection() {
    //get img id of playerChoice div
    const playerChoice = document.getElementById('playerChoice').firstChild.id;
    return playerChoice;
}

//function computerSelection
function computerSelection() {
    const computerChoice = computerPlay();
    //if computerChoice = rock display rock image in div id computerChoice adn give id rock
    if (computerChoice === 'rock') {
        document.getElementById('computerChoice').innerHTML = '<img src="./img/rock.png" alt="rock" id="rock">';
    } else if (computerChoice === 'paper') {
        document.getElementById('computerChoice').innerHTML = '<img src="./img/paper.png" alt="paper" id="paper">';
    } else if (computerChoice === 'scissors') {
        document.getElementById('computerChoice').innerHTML = '<img src="./img/scissors.png" alt="scissors" id="scissors">';
    }
    return computerChoice;
}

//function playRound
function playRound(playerSelection, computerSelection) {
    const player = playerSelection();
    const computer = computerSelection();
    if (player === computer) {
        //display tie innerHTML in div id round
        document.getElementById('round').innerHTML = 'Tie!';
        return 'tie';
    } else if (player === "rock" && computer === "scissors") {
        //display win innerHTML in div id round
        document.getElementById('round').innerHTML = 'You Win!';
        return 'win';
    } else if (player === "paper" && computer === "rock") {
        //display win innerHTML in div id round
        document.getElementById('round').innerHTML = 'You Win!';
        return 'win';
    } else if (player === "scissors" && computer === "paper") {
        //display win innerHTML in div id round
        document.getElementById('round').innerHTML = 'You Win!';
        return 'win';
    } else {
        //display lose innerHTML in div id round
        document.getElementById('round').innerHTML = 'You Lose!';
        return 'lose';
    }
}

//function game
function game() {
    let playResult = playRound(playerSelection, computerSelection);
    if (playResult === 'win') {
        playerScore++;
    } else if (playResult === 'lose') {
        computerScore++;
    } else {
        return;
    }
    //display playerScore in span id playerScore
    document.getElementById('playerScore').innerHTML = playerScore;
    //display computerScore in span id computerScore
    document.getElementById('computerScore').innerHTML = computerScore;

    // if playerScore = 5 log 'You Win!' and reset playerScore and computerScore
    if (playerScore === 5) {
        //clear playerChoice div
        document.getElementById('playerChoice').innerHTML = '';
        //clear computerChoice div
        document.getElementById('computerChoice').innerHTML = '';
        //clear round div
        document.getElementById('round').innerHTML = '';
        //if playerScore = 5 reset playerScore and computerScore
        playerScore = 0;
        computerScore = 0;
        //display in div id round Winner, winner, chicken dinner!
        document.getElementById('round').innerHTML = 'Winner, winner, chicken dinner!';
    } else if (computerScore === 5) {
        //clear playerChoice div
        document.getElementById('playerChoice').innerHTML = '';
        //clear computerChoice div
        document.getElementById('computerChoice').innerHTML = '';
        //clear round div
        document.getElementById('round').innerHTML = '';
        // if computerScore = 5 reset playerScore and computerScore
        playerScore = 0;
        computerScore = 0;
        //display in div id round Looser!
        document.getElementById('round').innerHTML = 'Looser!';
    } else {
        return;
    }
}