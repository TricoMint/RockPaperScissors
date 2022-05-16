console.log("bubbles");

/*Rock Paper Scissors 
Create function with 3 different values
1 is rock
1 is paper
1 is scissors

*/


function computerPlay() {

    const choices = ["rock", "paper", "scissors"]

    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    return computerSelection;
} 

const computerSelection = computerPlay();

const playerPrompt = prompt("Rock, Paper, or Scissors?");

const playerSelection = playerPrompt.toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock")
    console.log("Rock and rock? A tie.");  
    else if (playerSelection === "rock" && computerSelection === "paper")
    console.log("Paper beats Rock... you lose... "); 
    else if (playerSelection === "rock" && computerSelection === "scissors")
    console.log("Rock beats Scissors, you win!");
    else if (playerSelection === "paper" && computerSelection === "rock")
    console.log("Paper beats rock! You win!");  
    else if (playerSelection === "paper" && computerSelection === "paper")
    console.log("Paper vs paper is just more paper. A tie."); 
    else if (playerSelection === "paper" && computerSelection === "scissors")
    console.log("Paper gets cut up by scissors, you lose.");
    else if (playerSelection === "scissors" && computerSelection === "rock")
    console.log("Scissors loses to rock.");  
    else if (playerSelection === "scissors" && computerSelection === "paper")
    console.log("scissors beats paper."); 
    else if (playerSelection === "scissors" && computerSelection === "scissors")
    console.log("Scissors vs scissors is a stalemate. A tie");
    else (console.log("That's not how you play this game.")) }
    
    function game()

