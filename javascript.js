let elements = ["ROCK", "PAPER", "SCISSORS"];
let playerWinCount = 0;
let computerWinCount = 0;

playRound();

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    return elements[computerSelection];
}

function promptPlayerSelection() {

    let initialPlayerSelection = prompt("Select rock, paper or scissors", "");
    let playerSelection = initialPlayerSelection.toUpperCase();

    if (!(playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS")) {
        alert("Select a valid response");
        promptPlayerSelection();
    }
    return playerSelection;
}

function playRound() {
    computerSelection = computerPlay();
    playerSelection = promptPlayerSelection();
    
    if (playerSelection == computerSelection) {
        alert(`${playerSelection} vs ${computerSelection}, DRAW!`);
        playRound();
    } 
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == "ROCK") {
        alert(`${playerSelection} beats ${computerSelection}, YOU WIN!`);
        playerWinCount++;
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "SCISSORS" && computerSelection == "ROCK" || playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        alert(`${playerSelection} loses to ${computerSelection}, YOU LOSE!`);
        computerWinCount++;
    }    
}