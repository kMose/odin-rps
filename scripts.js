let playerSelection = 'rock';

// Generates a random number between 1 and 3. Returns rock paper or scissors based on that number.
// Math floor rounds our number to an integer, and math random generates a number from .0 -.999 * 3 + 1;
function computerPlay(){

    let result = Math.floor(Math.random()*3+1);
    
    switch (result){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function determineWinner(){
    

    scorekeeper.innerText = `Player ${playerScore} | Computer = ${computerScore} `;
    
    // Figures out the winner.
       if (playerScore == 5){
            alert("You WIN. YOU BEAT COMPUTER. HOW IS THIS EVEN POSSIBLE?");
            playerScore = 0;
            computerScore = 0;
        }

        if (computerScore == 5){
            alert("YOU LOSE! GOOD DAY SIR.");
            playerScore = 0;
            computerScore = 0;
        }

}

// Takes playerSelection and the result of the function computerPlay to figure out the winner.
// It then returns a number based on the outcome of the game. 1 is victory, 0 is loss, 2 is tie.
function playRound(userInput, computerInput){

    if (userInput == "rock"){
        if (computerInput == "paper"){computerInput
            gameOutput.innerText = `You LOSE! ${computerInput.toUpperCase()} beats ${userInput.toUpperCase()}! `;
            computerScore++;
            determineWinner();
            return 0;
        }
        if (computerInput == "scissors"){
            gameOutput.innerText = `You WIN! ${userInput.toUpperCase()} beats ${computerInput.toUpperCase()}! `;
            playerScore++;
            determineWinner();
            return 0;
        }
    }

    if (userInput == "paper"){
        if (computerInput == "scissors"){
            gameOutput.innerText = `You LOSE! ${computerInput.toUpperCase()} beats ${userInput.toUpperCase()}! `;
            computerScore++;
            determineWinner();
            return 0;
        }
        if (computerInput == "rock"){
            gameOutput.innerText = `You WIN! ${userInput.toUpperCase()} beats ${computerInput.toUpperCase()}! `;
            playerScore++;
            determineWinner();
            return 0;
        }
    }

    if (userInput == "scissors"){
        if (computerInput == "rock"){
            gameOutput.innerText = `You LOSE! ${computerInput.toUpperCase()} beats ${userInput.toUpperCase()}! `;
            computerScore++;
            determineWinner();
            return 0;
        }
        if (computerInput == "paper"){
            gameOutput.innerText = `You WIN! ${userInput.toUpperCase()} beats ${computerInput.toUpperCase()}! `;
            playerScore++;
            determineWinner();
            return 0;
        }
    }

    if (userInput == computerInput){
        gameOutput.innerText = "It's a tie!";
        return 0;
    }

    


}

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let playerScore = 0;
let computerScore = 0;

let gameOutput = document.querySelector("#game-output");
let scorekeeper = document.querySelector("#scorekeeper");


rockButton.addEventListener("click", () => playRound("rock", computerPlay()));
paperButton.addEventListener("click", () => playRound("paper", computerPlay()));
scissorsButton.addEventListener("click", () => playRound("scissors", computerPlay()));

