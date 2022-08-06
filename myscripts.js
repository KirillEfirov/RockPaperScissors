function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 3);

    if(ComputerChoice === 1) {
        return "ROCK";
    } 
    else if(ComputerChoice === 2) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = window.prompt("What's your choice?"); 
    playerSelection = playerSelection.toUpperCase();

    while(playerSelection !== "ROCK"  && 
          playerSelection !== "PAPER" &&
          playerSelection !== "SCISSORS") {
            playerSelection = window.prompt("What's your choice?"); 
            playerSelection = playerSelection.toUpperCase();
    }

    console.log(playerSelection);

    computerSelection = getComputerChoice();
    console.log(computerSelection);

    if(playerSelection === computerSelection) {
        console.log("Ladies and gentlemen, we have a draw!");
    }
    else if(playerSelection === "PAPER" && computerSelection === "ROCK"    ||
            playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
            playerSelection === "SCISSORS" && computerSelection === "PAPER") {
                console.log("Congratulations! You are a winner!");
            }
    else {
            console.log("So sorry! You are a loser!");
         }
} 

