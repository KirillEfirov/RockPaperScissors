function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 3);

    if(ComputerChoice === 1) {
        return console.log("ROCK");
    } 
    else if(ComputerChoice === 2) {
        return console.log("PAPER");
    }
    else {
        return console.log("SCISSORS");
    }
}

