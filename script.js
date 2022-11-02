
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()* 3) + 1

    if (randomNumber === 1) {
        return "rock"; 
    } if (randomNumber === 2) {
        return "paper";
    } if (randomNumber === 3) {
        return "scissors";
    }      
}

let playerScore=0;
let computerScore=0;


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        computerScore += 0;
        playerScore += 0;
        return "It's a tie!";
        
    }

    if (playerSelection === "rock") {

        if (computerSelection === "scissors") {
            playerScore += 1;
            return "You Win! Rock beats Scissors.";
            
        } else {
            computerScore += 1;
            return "You Lose! Paper beats Rock.";
            
        }
    }

    else if (playerSelection === "paper") {

        if (computerSelection === "rock") {
            playerScore += 1;
            return "You Win! Paper beats Rock.";
            
        } else {
            computerScore += 1;
            return "You Lose! Scissors beats Paper.";
            
        }
    }

    else if (playerSelection === "scissors") {

        if (computerSelection === "paper") {
            playerScore += 1;
            return "You Win! Scissors beats Paper.";
            
        } else {
            computerScore += 1;
            return "You Lose! Rock beats Scissors.";
            
        }
    }
}

function scores () {
    
    if (playerScore > computerScore) {
        return "You win!";
    } else if (computerScore > playerScore) {
        return "You lose!";
    } else {
        return "It's a tie!";
    }
}

function game() {

    for (let i=0; i < 5; i++) {
        
        let playerSelection = prompt("Rock, paper, or scissors?");

        let computerSelection = getComputerChoice();
        
        console.log("Your Selection: " +playerSelection);

        console.log("Computer Selection: " +computerSelection);

        console.log(playRound(playerSelection, computerSelection));

        console.log("Your score: " +playerScore);

        console.log("Computer score: " +computerScore);

    }
}


game();
console.log(scores());