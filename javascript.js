let elements = ["ROCK", "PAPER", "SCISSORS"];


function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    return elements[computerSelection];
}

function promptPlayerSelection() {

    let initialPlayerSelection = prompt("Select rock, paper or scissors", "");
    let playerSelection = initialPlayerSelection.toUpperCase();

    if (playerSelection != ("ROCK" || "PAPER" || "SCISSORS")) {
    alert("select a valid input");
    promptPlayerSelection();
    return playerSelection;
    } 
}

