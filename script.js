

/*Rock Paper Scissors 
Create function with 3 different values
1 is rock
1 is paper
1 is scissors


    let win = 0;
    let loss = 0;
    let tie = 0;


for (let i = 0; i < 1; i++ ) { 

function computerPlay() {

    const choices = ["rock", "paper", "scissors"]

    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    return computerSelection;
} 

const computerSelection = computerPlay();

/*const playerPrompt = prompt("Rock, Paper, or Scissors?");

const playerSelection = playerPrompt.toLowerCase(); */



const rock = document.querySelector('#rock');

function bubbles() {
    console.log("wuth")
}

rock.addEventListener('click', ()=> {alert("buhbus");});



  /*  function playRound(playerSelection, computerSelection) {
        
        if (playerSelection === "rock" && computerSelection === "rock") {
            tie = ++tie; 
           return "Rock and rock? A tie." +
            "\nGame stats: " + win + " wins, " + loss + " losses, " + tie + " ties"; }
        else if (playerSelection === "rock" && computerSelection === "paper") {
            loss = ++loss; 
            return "Paper beats Rock... you lose... " +
            "\nGame stats: " + win + " wins, " + loss + " losses, " + tie + " ties";} 
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            win = ++win; 
            return "Rock beats Scissors, you win!" + 
            "\nGame stats: " + win + " wins, " + loss + " losses, " + tie + " ties";}
        else if (playerSelection === "paper" && computerSelection === "rock") {
            win = ++win;
            return "Paper beats rock! You win!" +
            "\nGame stats: " + win + " wins, " + loss + " losses, " + tie + " ties";}  
        else if (playerSelection === "paper" && computerSelection === "paper") {
            tie = ++tie;
            return "Paper vs paper is just more paper. A tie." +
            "\nGame stats: " + win + " wins, " + loss + " losses, " + tie + " ties";} 
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            loss = ++loss;
            return "Paper gets cut up by scissors, you lose." +
            "\nGame stats: " + win + " wins, " + loss + " losses, " + tie + " ties";}
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            loss = ++loss;
            return "Scissors loses to rock. You lose." +
            "\nGame stats: " + win + " wins, " + loss + " losses, " + tie + " ties";}  
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            win = ++win;
            return "scissors beats paper. You win." + 
            "\nGame stats: " + win + " wins, " + loss + " losses, " + tie + " ties";} 
        else if (playerSelection === "scissors" && computerSelection === "scissors") {
            tie = ++tie;
            return "Scissors vs scissors is a stalemate. A tie." +
            "\nGame stats: " + win + " wins, " + loss + " losses, " + tie + " ties";}
        else return "That's not how you play this game.";
} 
   
console.log(playRound(playerSelection, computerSelection)); 



    }   

if (win > loss) {
    console.log("You win overall!")}
else if (win < loss) {
    console.log("You lost overall...")}
else if (win==loss && tie>=0) {
    console.log("Nobody wins! Or loses!")
}
else if (tie == 5) {console.log("How in tarnation did you manage that?")}
else {console.log("Yea something went wrong on my end.")} */