let playerSelection = 'rock';

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

function playGame(){

    let keepAsking = 1;
    let rounds = 0;
    let input = "";
    let playerScore = 0;
    
    // Prompts user for choice, converts input to lowercase. Will continue to ask if answer doesn't work.
    while (keepAsking){
        input = prompt("Rock, Paper, or Scissors?");
        playerSelection = input.toLowerCase();
        if (playerSelection == 'rock' || playerSelection == "paper" || playerSelection == "scissors")
        {
            keepAsking = 0;
            console.log(`you chose ${playerSelection}.`);
        } else {
            alert("Please choose Rock, Paper, or Scissors!");
        }
    }

    // keepAsking set back to true 
    // Prompts user for number of rounds and then converts the input to an integer.
    keepAsking = 1;
    while(keepAsking){
        input = prompt("How many rounds? (1-15)")
        rounds = parseInt(input, 10);
        if (isNaN(rounds) || rounds < 1 || rounds > 15 ){
            keepAsking = 1;
            alert("Read the rules, you goober.")
        } else {
            console.log(`you chose ${rounds} rounds!`);
            keepAsking = 0;
        }
    }
}

playGame();