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

function determineWinner(playerScore, ties){
    
    // Figures out the winner.
       if (playerScore  > (rounds - ties) - playerScore){
            console.log("You WIN. YOU BEAT COMPUTER. HOW IS THIS EVEN POSSIBLE?");
            alert("You WIN. YOU BEAT COMPUTER. HOW IS THIS EVEN POSSIBLE?");
        }
        else if (playerScore == (rounds - ties) - playerScore){
            console.log("You TIE! YOU ARE ALMOST AS GOOD AS COMPUTER!");
            alert("You TIE! YOU ARE ALMOST AS GOOD AS COMPUTER!");
        }
        else{
            console.log("YOU LOSE! GOOD DAY SIR.");
            alert("YOU LOSE! GOOD DAY SIR.");
        }
}


// Takes playerSelection and the result of the function computerPlay to figure out the winner.
// It then returns a number based on the outcome of the game. 1 is victory, 0 is loss, 2 is tie.
function playRound(userInput, computerInput){

    if (userInput == "rock"){
        if (computerInput == "paper"){computerInput
            console.log(`You LOSE! ${computerInput.toUpperCase()} beats ${userInput.toUpperCase()}! `);
            return 0;
        }
        if (computerInput == "scissors"){
            console.log(`You WIN! ${userInput.toUpperCase()} beats ${computerInput.toUpperCase()}! `);
            return 1;
        }
    }

    if (userInput == "paper"){
        if (computerInput == "scissors"){
            console.log(`You LOSE! ${computerInput.toUpperCase()} beats ${userInput.toUpperCase()}! `);
            return 0;
        }
        if (computerInput == "rock"){
            console.log(`You WIN! ${userInput.toUpperCase()} beats ${computerInput.toUpperCase()}! `);
            return 1;
        }
    }

    if (userInput == "scissors"){
        if (computerInput == "rock"){
            console.log(`You LOSE! ${computerInput.toUpperCase()} beats ${userInput.toUpperCase()}! `);
            return 0;() => console.log("Testing rock Button")
        }
        if (computerInput == "paper"){
            console.log(`You WIN! ${userInput.toUpperCase()} beats ${computerInput.toUpperCase()}! `);
            return 1;
        }
    }

    if (userInput == computerInput){
        console.log("It's a tie!");
        return 2;
    }
}

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let score = 0;

let gameOutput = document.querySelector("#game-output");


rockButton.addEventListener("click", () => playRound("rock", computerPlay()));
paperButton.addEventListener("click", () => playRound("paper", computerPlay()));
scissorsButton.addEventListener("click", () => playRound("scissors", computerPlay()));

