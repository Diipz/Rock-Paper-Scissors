let elements = ["ROCK", "PAPER", "SCISSORS"];
let playerWinCount = 0;
let computerWinCount = 0;
let playerSelection = "";

let buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", selection = () => {
            playerSelection = button.id;
            playGame();
        });
    });

let computerScore = document.createElement("div");
computerScore.textContent = "Computer score: " + computerWinCount;

let playerScore = document.createElement("div");
playerScore.textContent = "Player score: " + playerWinCount;

para = document.querySelector("p");
para.appendChild(playerScore);
para.appendChild(computerScore);
    

alert("click a button");    

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    return elements[computerSelection];
}

function playRound() {
    computerSelection = computerPlay();
    alert(playerSelection);
    
    if (playerSelection == computerSelection) {
        alert(`${playerSelection} vs ${computerSelection}, DRAW!`);
        playRound();
    } 
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == "ROCK") {
        alert(`${playerSelection} beats ${computerSelection}, YOU WIN!`);
        playerWinCount++;
        playerScore.textContent = "Player score: " + playerWinCount;
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "SCISSORS" && computerSelection == "ROCK" || playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        alert(`${playerSelection} loses to ${computerSelection}, YOU LOSE!`);
        computerWinCount++;
        computerScore.textContent = "Computer score: " + computerWinCount; 
    }     
}

function playGame() {
    playRound();
}

