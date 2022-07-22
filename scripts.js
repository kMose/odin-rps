let playerSelection = 'rock';

// Generates a random number between 1 and 3. Returns rock paper or scissors based on that number.
// Math floor rounds our number to an integer, and math random generates a number from .0 -.999 * 3 + 1;
function computerPlay(){

    let result = Math.floor(Math.random()*3+1);
    
    switch (result){
        case 1:
            computerHand.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png"
            return "rock";
        case 2:
            computerHand.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/paper.png"
            return "paper";
        case 3:
            computerHand.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/scissors.png"
            return "scissors";
    }
}

function determineWinner(playerWin){
    scorekeeper.innerText = `Player ${playerScore} | Computer = ${computerScore} `;
    
    loserMad(playerWin);

    // Figures out the winner.
       if (playerScore == 5){
            gameOutput.innerText = "You WIN. YOU BEAT COMPUTER. HOW IS THIS EVEN POSSIBLE?";
            playerScore = 0;
            computerScore = 0;
        }

        if (computerScore == 5){
            gameOutput.innerText = "YOU LOSE! GOOD DAY SIR.";
            playerScore = 0;
            computerScore = 0;
        }

}

// Takes playerSelection and the result of the function computerPlay to figure out the winner.
// It then returns a number based on the outcome of the game. 1 is victory, 0 is loss, 2 is tie.
function playRound(userInput, computerInput){

    if (userInput == "rock"){
        playerHand.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png"
        animateHands();
        if (computerInput == "paper"){computerInput
            gameOutput.innerText = `You LOSE! ${computerInput.toUpperCase()} beats ${userInput.toUpperCase()}! `;
            outcomeText.innerText = "YOU LOSE!"
            computerScore++;
            determineWinner(0);
            return 0;
        }
        if (computerInput == "scissors"){
            gameOutput.innerText = `You WIN! ${userInput.toUpperCase()} beats ${computerInput.toUpperCase()}! `;
            outcomeText.innerText = "YOU WIN!"
            playerScore++;
            determineWinner(1);
            return 0;
        }
    }

    if (userInput == "paper"){
        animateHands()
        playerHand.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/paper.png"
        if (computerInput == "scissors"){
            gameOutput.innerText = `You LOSE! ${computerInput.toUpperCase()} beats ${userInput.toUpperCase()}! `;
            outcomeText.innerText = "YOU LOSE!"
            computerScore++;
            determineWinner(0);
            return 0;
        }
        if (computerInput == "rock"){
            gameOutput.innerText = `You WIN! ${userInput.toUpperCase()} beats ${computerInput.toUpperCase()}! `;
            outcomeText.innerText = "YOU WIN!"
            
            playerScore++;
            determineWinner(1);
            return 0;
        }
    }

    if (userInput == "scissors"){
        animateHands()
        playerHand.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/scissors.png"
        if (computerInput == "rock"){
            gameOutput.innerText = `You LOSE! ${computerInput.toUpperCase()} beats ${userInput.toUpperCase()}! `;
            outcomeText.innerText = "YOU LOSE!"
            computerScore++;
            determineWinner(0);
            return 0;
        }
        if (computerInput == "paper"){
            gameOutput.innerText = `You WIN! ${userInput.toUpperCase()} beats ${computerInput.toUpperCase()}! `;
            outcomeText.innerText = "YOU WIN!"
            playerScore++;
            determineWinner(1);
            return 0;
        }
    }

    if (userInput == computerInput){
        gameOutput.innerText = "It's a tie!";
        outcomeText.innerText = "TIE!"
        determineWinner(2);
        return 0;
    }
}

function animateHands(){
    
    computerHand.classList.add("wiggle");
    playerHand.classList.add("wiggle");

    setTimeout(()=>{
        computerHand.classList.remove("wiggle");
        playerHand.classList.remove("wiggle");
    }, 400);
}

function loserMad(playerWin){
    if (playerWin == 2) return;

    if (playerWin) computerHand.classList.add("shake");
    else playerHand.classList.add("shake");

    setTimeout(()=>{
        computerHand.classList.remove("shake");
        playerHand.classList.remove("shake");
    }, 1000);
}



let computerHand = document.querySelector(".computer-hand")
let playerHand = document.querySelector(".player-hand")
let outcomeText = document.querySelector(".outcome-text");
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

