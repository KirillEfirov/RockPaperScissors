let user = 0;
let computer = 0;

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

const rock = document.querySelector('.Rock');

rock.addEventListener('click', () => {

    let computerSelection = getComputerChoice();
    console.log('computer choice: ' + computerSelection);

    if(computerSelection === "ROCK") {
        user++;
        computer++;

        let changeScore = document.querySelector('.Score');
        let playerScore = document.querySelector('.playerScore');
        let computerScore = document.querySelector('.computerScore');
        
        let oldUserScore = document.createElement('div');
        oldUserScore.classList.add('playerScore');
        oldUserScore.textContent = user;
        changeScore.replaceChild(oldUserScore, playerScore);

        let oldCompScore = document.createElement('div');
        oldCompScore.classList.add('computerScore');
        oldCompScore.textContent = computer;
        changeScore.replaceChild(oldCompScore, computerScore);
    }
    else if(computerSelection === "PAPER") {
        computer++;
        let changeScore = document.querySelector('.Score');
        let computerScore = document.querySelector('.computerScore');
        let oldCompScore = document.createElement('div');
        oldCompScore.classList.add('computerScore');
        oldCompScore.textContent = computer;
        changeScore.replaceChild(oldCompScore, computerScore);
    }
});
















/*const paper = document.querySelector('.Paper');
paper.addEventListener('click', () => console.log('paper'));

const scissors = document.querySelector('.Scissors');
scissors.addEventListener('click', () => console.log('scissors'));*/