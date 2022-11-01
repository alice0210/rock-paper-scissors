
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()* 3) + 1

    if (randomNumber === 1) {
        return "Rock"; 
    } if (randomNumber === 2) {
        return "Paper";
    } if (randomNumber === 3) {
        return "Scissors";
    }      
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (playerSelection.toUpperCase === "rock".toUpperCase) {

        if (computerSelection.toUpperCase === "scissors".toUpperCase) {
            return "You Win! Rock beats Scissors.";
        } if (computerSelection.toUpperCase === "paper".toUpperCase) {
            return "You Lose! Paper beats Rock.";
        }
    }

    if (playerSelection.toUpperCase === "paper".toUpperCase) {

        if (computerSelection.toUpperCase === "rock".toUpperCase) {
            return "You Win! Paper beats Rock.";
        } if (computerSelection.toUpperCase === "scissors".toUpperCase) {
            return "You Lose! Scissors beats Paper.";
        }
    }

    if (playerSelection.toUpperCase === "scissors".toUpperCase) {

        if (computerSelection.toUpperCase === "paper".toUpperCase) {
            return "You Win! Scissors beats Paper.";
        } if (computerSelection.toUpperCase === "rock".toUpperCase) {
            return "You Lose! Rock beats Scissors.";
        }
    }
}

