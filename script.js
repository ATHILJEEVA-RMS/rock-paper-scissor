let humanScore=0;
let computerScore=0;
//computer choice
function getComputerChoice(){
    const game= ["Rock","Paper","Scissor"];
    let result= game[Math.floor(Math.random()*3)];
    return result
}

//user choice
function getUserChoice(){
    let user=prompt("ENTER ROCK,PAPER,SCISSOR:");
    return user
}


function playRound(userChoice,computerChoice){
    let u=userChoice.toLowerCase();
    let c=computerChoice.toLowerCase();
    if(u==="rock"&&c==="scissor"){
        console.log("You Win! Rock beats Scissor");
        humanScore++;
    }
    else if(u==="scissor"&&c==="paper"){
        console.log("You Win! Scissor beats Paper");
        humanScore++;
    }
    else if(u==="paper"&&c==="rock"){
        console.log("You Win! Paper beats Rock");
        humanScore++;
    }
    else{
        console.log("You Lose..!");
        computerScore++
    }
}
function playGame(){ 
    
    for(i=0;i<5;i++){
        let userSelection=getUserChoice();
        let computerSelection=getComputerChoice();
        playRound(userSelection,computerSelection);
    }
    console.log(`Score :
    user:`,humanScore,`
    computer:`,computerScore);

    
}

playGame();
