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

    let changeScore = document.querySelector('.Score');
    let playerScore = document.querySelector('.playerScore');
    let computerScore = document.querySelector('.computerScore');

    if(computerSelection === "ROCK") {
        user++;
        computer++;
        
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
        let oldCompScore = document.createElement('div');
        oldCompScore.classList.add('computerScore');
        oldCompScore.textContent = computer;
        changeScore.replaceChild(oldCompScore, computerScore);
    }
    else {
        user++;
        let oldUserScore = document.createElement('div');
        oldUserScore.classList.add('playerScore');
        oldUserScore.textContent = user;
        changeScore.replaceChild(oldUserScore, playerScore);
    }

    checkScore();
});
rock.addEventListener('click', () => {
    if(user === 5 || computer === 5) {
        let container = document.querySelector('.containerForButoons');
        let firstButton = document.querySelector('.Rock'); 
        let secondButton = document.querySelector('.Paper');
        let thirdButton = document.querySelector('.Scissors');
        container.removeChild(firstButton);  
        container.removeChild(secondButton);  
        container.removeChild(thirdButton);
    }
});


const paper = document.querySelector('.Paper');
paper.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    console.log('computer choice: ' + computerSelection);

    let changeScore = document.querySelector('.Score');
    let playerScore = document.querySelector('.playerScore');
    let computerScore = document.querySelector('.computerScore');

    if(computerSelection === "PAPER") {
        user++;
        computer++;
        
        let oldUserScore = document.createElement('div');
        oldUserScore.classList.add('playerScore');
        oldUserScore.textContent = user;
        changeScore.replaceChild(oldUserScore, playerScore);

        let oldCompScore = document.createElement('div');
        oldCompScore.classList.add('computerScore');
        oldCompScore.textContent = computer;
        changeScore.replaceChild(oldCompScore, computerScore);
    }
    else if(computerSelection === "SCISSORS") {
        computer++;
        let oldCompScore = document.createElement('div');
        oldCompScore.classList.add('computerScore');
        oldCompScore.textContent = computer;
        changeScore.replaceChild(oldCompScore, computerScore);
    }
    else {
        user++;
        let oldUserScore = document.createElement('div');
        oldUserScore.classList.add('playerScore');
        oldUserScore.textContent = user;
        changeScore.replaceChild(oldUserScore, playerScore);
    }

    checkScore();
});
paper.addEventListener('click', () => {
    if(user === 5 || computer === 5) {
        let container = document.querySelector('.containerForButoons');
        let firstButton = document.querySelector('.Rock'); 
        let secondButton = document.querySelector('.Paper');
        let thirdButton = document.querySelector('.Scissors');
        container.removeChild(firstButton);  
        container.removeChild(secondButton);  
        container.removeChild(thirdButton);  
    }
});

const scissors = document.querySelector('.Scissors');
scissors.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    console.log('computer choice: ' + computerSelection);

    let changeScore = document.querySelector('.Score');
    let playerScore = document.querySelector('.playerScore');
    let computerScore = document.querySelector('.computerScore');

    if(computerSelection === "SCISSORS") {
        user++;
        computer++;
        
        let oldUserScore = document.createElement('div');
        oldUserScore.classList.add('playerScore');
        oldUserScore.textContent = user;
        changeScore.replaceChild(oldUserScore, playerScore);

        let oldCompScore = document.createElement('div');
        oldCompScore.classList.add('computerScore');
        oldCompScore.textContent = computer;
        changeScore.replaceChild(oldCompScore, computerScore);
    }
    else if(computerSelection === "ROCK") {
        computer++;
        let oldCompScore = document.createElement('div');
        oldCompScore.classList.add('computerScore');
        oldCompScore.textContent = computer;
        changeScore.replaceChild(oldCompScore, computerScore);
    }
    else {
        user++;
        let oldUserScore = document.createElement('div');
        oldUserScore.classList.add('playerScore');
        oldUserScore.textContent = user;
        changeScore.replaceChild(oldUserScore, playerScore);
    }

    checkScore();
});
scissors.addEventListener('click', () => {
    if(user === 5 || computer === 5) {
        let container = document.querySelector('.containerForButoons');
        let firstButton = document.querySelector('.Rock'); 
        let secondButton = document.querySelector('.Paper');
        let thirdButton = document.querySelector('.Scissors');
        container.removeChild(firstButton);  
        container.removeChild(secondButton);  
        container.removeChild(thirdButton);  
    }
});

function checkScore() {
    if(user === 5 && computer === 5) {
        console.log('draw');
        return user;
    }
    else if(user === 5 && computer !== 5) {
        console.log('You are a winner!');
        return user;
    }
    else if(user !== 5 && computer === 5) {
        console.log('You are a loser!');
        return computer;
    }
}