
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

const container = document.querySelector('#container');
const results = document.createElement('h3');
results.classList.add('results');

let playerScore=0;
let computerScore=0;

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        computerScore += 0;
        playerScore += 0;
        results.textContent = "It's a tie!";
        container.appendChild(results);
    }

    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
            playerScore += 1;
            results.textContent = "You Win! Rock beats Scissors.";
            container.appendChild(results);
            
        } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER"){
            computerScore += 1;
            results.textContent = "You Lose! Paper beats Rock.";
            container.appendChild(results);
            
        } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
            playerScore += 1;
            results.textContent = "You Win! Paper beats Rock.";
            container.appendChild(results);
            
        } else if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
            computerScore += 1;
            results.textContent = "You Lose! Scissors beats Paper.";
            container.appendChild(results);

        } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
            playerScore += 1;
            results.textContent = "You Win! Scissors beats Paper.";
            container.appendChild(results);
        
        } else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
            computerScore += 1;
            results.textContent = "You Lose! Rock beats Scissors.";
            container.appendChild(results);
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