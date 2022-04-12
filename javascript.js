let elements = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay() {
    let x = Math.floor(Math.random() * 3);
    return elements[x];
}

computerPlay();