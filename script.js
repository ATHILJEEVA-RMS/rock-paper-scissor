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
function playGame(userChoice){ 
  
    let userSelection=userChoice;
    let computerSelection=getComputerChoice();
    playRound(userSelection,computerSelection);
    checkResult();
    comText.textContent=`COMPUTER:`+computerScore;
    userText.textContent=`USER:`+humanScore;

    
}
function checkResult(){
    if (humanScore===5 && computerScore<5){
        result.textContent="YOU WON!";
        humanScore=0;
        computerScore=0;
    }
    else if(computerScore===5 && humanScore<5){
        result.textContent="YOU LOSE!";
        humanScore=0;
        computerScore=0;
    }
    else if(computerScore===5 && humanScore===5){
        result.textContent="ITS TIE !";
        humanScore=0;
        computerScore=0;
    }
}
//UI

const middle=document.createElement("div");
const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissor=document.querySelector("#scissor");
const result=document.querySelector(".result");
const userText=document.querySelector("#userText");
const comText=document.querySelector("#comText");
const comImg=document.querySelector("#comImg");
const userImg=document.querySelector("#userImg");





rock.addEventListener("click",()=>{
    playGame("rock");
})
paper.addEventListener("click",()=>{
    playGame("paper")
})
scissor.addEventListener("click",()=>{
    playGame("scissor")
})





