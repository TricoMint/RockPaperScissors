let rock = 0;
let paper = 0;
let scissors = 0;
let youscore = 0;
let compscore = 0;
let ties = 0;
let sumscore = 0;


document.getElementById("scores").innerText = `You: ${youscore} Computer: ${compscore} Ties: ${ties}`;

function test() {
    alert("hello")
};

const rockbutton = document.querySelector('#rock');
rockbutton.addEventListener('click', rocktest);
const paperbutton = document.querySelector('#paper');
paperbutton.addEventListener('click', papertest);
const scissorsbutton = document.querySelector('#scissors');
scissorsbutton.addEventListener('click', scissorstest);
const buttoncontainer = document.querySelector('#buttoncontainer');

function rocktest() {
    const choices = ["rock", "paper", "scissors"]
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    if (computerSelection == "rock")     {ties = ties +1; sumscore = sumscore +1};
    if (computerSelection == "paper")    {compscore = compscore + 1; sumscore = sumscore +1};
    if (computerSelection == "scissors") {youscore = youscore + 1; sumscore = sumscore +1};
    document.getElementById("comptracker").innerText = `Computer picked ${computerSelection}`;
    document.getElementById("scores").innerText = `You: ${youscore} Computer: ${compscore} Ties: ${ties}`;  
    if (sumscore >= 5) {document.getElementById("scores").innerText = `fut`;}
    return;
};

function papertest() {
    const choices = ["rock", "paper", "scissors"]
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    if (computerSelection == "rock")     {youscore = youscore + 1;};
    if (computerSelection == "paper")    {ties = ties + 1};
    if (computerSelection == "scissors") {compscore = compscore + 1};
    document.getElementById("comptracker").innerText = `Computer picked ${computerSelection}`;
    document.getElementById("scores").innerText = `You: ${youscore} Computer: ${compscore} Ties: ${ties}`;
    return;
};

function scissorstest() {
    const choices = ["rock", "paper", "scissors"]
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    if (computerSelection == "rock")     {compscore = compscore +1};
    if (computerSelection == "paper")    {youscore = youscore +1};
    if (computerSelection == "scissors") {ties = ties + 1};
    document.getElementById("comptracker").innerText = `Computer picked ${computerSelection}`;
    return document.getElementById("scores").innerText = `You: ${youscore} Computer: ${compscore} Ties: ${ties}`;
};


/*const rock = document.querySelector('#rock');

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