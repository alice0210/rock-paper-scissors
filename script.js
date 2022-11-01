
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

console.log(getComputerChoice());

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (playerSelection === "rock") {

        if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors.";
        } else if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock.";
        }
    }

    else if (playerSelection === "paper") {

        if (computerSelection === "rock") {
            return "You Win! Paper beats Rock.";
        } else if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper.";
        }
    }

    else if (playerSelection === "scissors") {

        if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper.";
        } else if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors.";
        }
    }
}


console.log(playRound("paper", computerSelection));