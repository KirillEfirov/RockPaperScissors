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


/*************************************************** */
let rock = document.querySelector('.Rock');
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
rock.addEventListener('click', removeButtons);
rock.addEventListener('click', result);
rock.addEventListener('click', restart);


/****************************************************** */
let paper = document.querySelector('.Paper');
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
paper.addEventListener('click', removeButtons);
paper.addEventListener('click', result);
paper.addEventListener('click', restart);


/******************************************************* */
let scissors = document.querySelector('.Scissors');
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
scissors.addEventListener('click', removeButtons);
scissors.addEventListener('click', result);
scissors.addEventListener('click', restart);



function checkScore() {
    if(user === 5 && computer === 5) {
        console.log('draw');
        /*user = 0;
        computer = 0;*/
        return 'DRAW';
    }
    else if(user === 5 && computer !== 5) {
        console.log('You are a winner!');
        /*user = 0;
        computer = 0;*/
        return 'You are a winner!';
    }
    else if(user !== 5 && computer === 5) {
        console.log('You are a loser!');
        /*user = 0;
        computer = 0;*/
        return 'You are a loser!';
    }
}
function result() {
    if(user === 5 || computer === 5) {
        let container = document.querySelector('.containerForButoons');
       
        let afterrmv = document.createElement('div');
        afterrmv.classList.add('resultOfGame');
        afterrmv.textContent = checkScore();

        container.appendChild(afterrmv);
    }
}

let remember1;
let remember2;
let remember3;
function removeButtons() {
    if(user === 5 || computer === 5) {
        let container = document.querySelector('.containerForButoons');
        let firstButton = document.querySelector('.Rock'); 
        let secondButton = document.querySelector('.Paper');
        let thirdButton = document.querySelector('.Scissors');
        remember1 = container.removeChild(firstButton);  
        remember2 = container.removeChild(secondButton);  
        remember3 = container.removeChild(thirdButton);  
    }
}
function restart() {
    if(user === 5 || computer === 5) {
        const boxForRestart = document.querySelector('.boxForRestart');
        const restartButton = document.createElement('button');
        restartButton.classList.add('restartButton');
        restartButton.textContent = 'Restart';
        boxForRestart.appendChild(restartButton);


        const renewScreen = document.querySelector('.restartButton');
        renewScreen.addEventListener('click', () => {
            let containerForButoons = document.querySelector('.containerForButoons');
            let rmvresult = document.querySelector('.resultOfGame');
            containerForButoons.removeChild(rmvresult);

            containerForButoons.appendChild(remember1);
            containerForButoons.appendChild(remember2);
            containerForButoons.appendChild(remember3);

            user = 0;
            computer = 0;

            /*let rmvrestart = document.querySelector('.');*/
            
        });


        /*let renewScreen = document.querySelector('.restartButton');
        renewScreen.addEventListener('click', () => {

            user = 0;
            computer = 0;

            let container = document.querySelector('.containerForButoons');
            let resultOfGame = document.querySelector('.resultOfGame');
            container.removeChild(resultOfGame);

            let firstButton = document.createElement('button');
            firstButton.classList.add('Rock');
            firstButton.textContent = 'Rock';
            let secondButton = document.createElement('button');
            secondButton.classList.add('Paper');
            secondButton.textContent = 'Paper';
            let thirdButton = document.createElement('button');
            thirdButton.classList.add('Scissors');
            thirdButton.textContent = 'Scissors';


            container.appendChild(firstButton);
            container.appendChild(secondButton);
            container.appendChild(thirdButton);



            let changeScore = document.querySelector('.Score');
            let playerScore = document.querySelector('.playerScore');
            let computerScore = document.querySelector('.computerScore');

            let oldUserScore = document.createElement('div');
            let oldCompScore = document.createElement('div');
            oldCompScore.classList.add('computerScore');
            oldCompScore.textContent = computer;
            oldUserScore.classList.add('playerScore');
            oldUserScore.textContent = user;

            changeScore.replaceChild(oldCompScore, computerScore);
            changeScore.replaceChild(oldUserScore, playerScore);
        });*/
    }
}

