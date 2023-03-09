
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

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        computerScore += 0;
        playerScore += 0;
        console.log("It's a tie!");
        
    }

    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
            playerScore += 1;
            console.log( "You Win! Rock beats Scissors.");
            
        } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER"){
            computerScore += 1;
            console.log("You Lose! Paper beats Rock.");
            
        } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
            playerScore += 1;
            console.log("You Win! Paper beats Rock.");
            
        } else if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
            computerScore += 1;
            console.log("You Lose! Scissors beats Paper.");

        } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
            playerScore += 1;
            console.log("You Win! Scissors beats Paper.");
        
        } else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
            computerScore += 1;
            console.log("You Lose! Rock beats Scissors.");
        }
    }

const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorsbtn = document.querySelector('#scissors');

rockbtn.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});
paperbtn.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});
scissorsbtn.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});


function scores () {
    
    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > playerScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
}





//function game() {

    //for (let i=0; i < 100; i++) {
        
        //let playerSelection = prompt("Rock, paper, or scissors?");

      //  let computerSelection = getComputerChoice();
        
    //    console.log("Your Selection: " +playerSelection.toLowerCase());

  //      console.log("Computer Selection: " +computerSelection);

//        console.log(playRound(playerSelection, computerSelection));

  //      console.log("Your score: " +playerScore);

//        console.log("Computer score: " +computerScore);

  //  }
//}


//game();
//console.log(scores());