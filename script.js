let playerScore=0;
let computerScore=0;

const buttons = document.querySelectorAll(".button");
const container = document.querySelector('#container');
const results = document.createElement('h3');
results.classList.add('results');
const finalResults = document.createElement('h2');
finalResults.classList.add('finalResults');
const yourScore = document.createElement('h3');
yourScore.classList.add('yourScore');
const compScore = document.createElement('h3');
compScore.classList.add('compScore');


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



//    document.getElementById('rock').addEventListener('click', () => {
//        playRound("rock", getComputerChoice());
//    })
//    document.getElementById('paper').addEventListener('click', () => {
//        playRound("paper", getComputerChoice());
//    })
//    document.getElementById('scissors').addEventListener('click', () => {
//        playRound("scissors", getComputerChoice());
//    })


buttons.forEach(function(button){

    button.addEventListener("click", function() {
        let computerSelection = getComputerChoice();
        let playerSelection = button.id;

        playRound(playerSelection, computerSelection);
        winner();

    function playRound(playerSelection, computerSelection) {

        if (playerSelection === computerSelection) {
            computerScore += 0;
            playerScore += 0;
            results.textContent = "It's a tie!";
            container.appendChild(results);
            yourScore.textContent = "Your score: " +playerScore;
            container.appendChild(yourScore);
            compScore.textContent = "Computer score: " +computerScore;
            container.appendChild(compScore);
        }

        if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore++;
                results.textContent = "You Win! Rock beats Scissors.";
                container.appendChild(results);
                yourScore.textContent = "Your score: " +playerScore;
                container.appendChild(yourScore);
                compScore.textContent = "Computer score: " +computerScore;
                container.appendChild(compScore);

            } else if (playerSelection === "rock" && computerSelection === "paper"){
                computerScore++;
                results.textContent = "You Lose! Paper beats Rock.";
                container.appendChild(results);
                yourScore.textContent = "Your score: " +playerScore;
                container.appendChild(yourScore);
                compScore.textContent = "Computer score: " +computerScore;
                container.appendChild(compScore);

            } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore++;
                results.textContent = "You Win! Paper beats Rock.";
                container.appendChild(results);
                yourScore.textContent = "Your score: " +playerScore;
                container.appendChild(yourScore);
                compScore.textContent = "Computer score: " +computerScore;
                container.appendChild(compScore);

            } else if(playerSelection === "paper" && computerSelection === "scissors") {
                computerScore++;
                results.textContent = "You Lose! Scissors beats Paper.";
                container.appendChild(results);
                yourScore.textContent = "Your score: " +playerScore;
                container.appendChild(yourScore);
                compScore.textContent = "Computer score: " +computerScore;
                container.appendChild(compScore);

            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore++;
                results.textContent = "You Win! Scissors beats Paper.";
                container.appendChild(results);
                yourScore.textContent = "Your score: " +playerScore;
                container.appendChild(yourScore);
                compScore.textContent = "Computer score: " +computerScore;
                container.appendChild(compScore);
            
            } else if(playerSelection === "scissors" && computerSelection === "rock") {
                computerScore++;
                results.textContent = "You Lose! Rock beats Scissors.";
                container.appendChild(results);
                yourScore.textContent = "Your score: " +playerScore;
                container.appendChild(yourScore);
                compScore.textContent = "Computer score: " +computerScore;
                container.appendChild(compScore);
            }

        }

        function winner(){
            if (playerScore === 5) {        
                finalResults.textContent = "Game Over! You win!";
                container.appendChild(finalResults);
            } else if (computerScore === 5) {            
                finalResults.textContent = "Game Over! You lose!";
                container.appendChild(finalResults);
            }
        }
    });
});