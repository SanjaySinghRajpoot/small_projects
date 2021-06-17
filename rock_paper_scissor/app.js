let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer_score");

const scoreboard_div = document.querySelector(".score-board");
const result_Div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")


//  rock = 1 
//  paper = 2
//  scissors = 3 

var human=0;
var robo=0;


function randomNumber(min=1, max=3) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function win (){
    userScore++;
    userScore_span.innerHTML = userScore;
}

function lose(){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
}

function draw(){
    userScore++;
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    
}

function game(userChoice){
    const machine = randomNumber();
    console.log(machine);
    console.log("user -> " + userChoice);


    if(machine == userChoice == 1){
        draw();
    }

    if(machine == 1 && userChoice == 2){
        win();
    }

    if(machine == 1 && userChoice == 3){
        lose();
    }

    if(machine == userChoice == 2){
        draw();
    }

    if(machine == 2 && userChoice == 1){
        lose();
    }

    if(machine == 2 && userChoice == 3){
        win();
    }

    if(machine == userChoice == 3){
        draw();
    }

    if(machine == 3 && userChoice == 1){
        win();
    }

    if(machine == 3 && userChoice == 2){
        lose();
    }

}

function main(){

    rock_div.addEventListener('click', (rock) => {
        game(1);
        // console.log(human);
    })
    
    paper_div.addEventListener('click', (paper) => {
        game(2);
        // console.log(human);

    })
    
    scissors_div.addEventListener('click', (sci) => {
        game(3);
        // console.log(human);

    })
    
}




main();
