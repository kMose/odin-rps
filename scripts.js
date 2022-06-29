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

function play(){

    let keepAsking = 0;
    let rounds = 0;
    let input = prompt("Rock, Paper, or Scissors?");
    playerSelection = input.toLowerCase();

    if (playerSelection == 'rock' || playerSelection == "paper" || playerSelection == "scissors")
        console.log(`you chose ${playerSelection}!`);
    else
        keepGoing = 1;

    while (keepAsking){
        input = prompt("Rock, Paper, or Scissors?");
        playerSelection = input.toLowerCase();
        if (playerSelection == 'rock' || playerSelection == "paper" || playerSelection == "scissors")
            keepAsking = 0;
    }

    input = prompt("How many rounds would you like to play? (1-15)");
    rounds = parseInt(input, 10);
    console.log(rounds);

    



}

play();