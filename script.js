
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

const computerSelection = getComputerChoice();

console.log(computerSelection);

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (playerSelection === "rock") {

        if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors.";
        } else {
            return "You Lose! Paper beats Rock.";
        }
    }

    else if (playerSelection === "paper") {

        if (computerSelection === "rock") {
            return "You Win! Paper beats Rock.";
        } else {
            return "You Lose! Scissors beats Paper.";
        }
    }

    else if (playerSelection === "scissors") {

        if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper.";
        } else {
            return "You Lose! Rock beats Scissors.";
        }
    }
}

const playerSelection = "paper";

console.log(playRound(playerSelection, computerSelection));