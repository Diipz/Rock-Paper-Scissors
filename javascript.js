let elements = ["ROCK", "PAPER", "SCISSORS"];
let playerWinCount = 0;
let computerWinCount = 0;

playGame();

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

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
        if (playerWinCount == 3) {
            alert("YOU WIN BEST OF 5 !!!");
            break;    
        }
        else if (computerWinCount == 3) {
            alert("YOU LOSE BEST OF 5 !!!");
            break;
        }
    }
}

