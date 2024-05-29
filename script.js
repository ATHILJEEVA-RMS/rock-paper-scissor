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
    let utemp=humanScore;
    let ctemp=computerScore;
    display(u,c);
    if(u==="rock"&&c==="scissor"){
        humanScore++;
    }
    else if(u==="scissor"&&c==="paper"){
        humanScore++;
    }
    else if(u==="paper"&&c==="rock"){
        humanScore++;
    }
    else if(c==="rock"&&u==="scissor"){
        computerScore++;
    }
    else if(c==="scissor"&&u==="paper"){
        computerScore++;
    }
    else if(c==="paper"&&u==="rock"){
        computerScore++;
    }
    else{
        x.textContent="TIE!"
      
        
    }
    

}
function display(user,com){
    if(user==="rock"){
        userImg.src="./img/fist.png";
    }
    else if(user==="paper"){
        userImg.src="./img/hand-paper.png";
    }
    else if(user==="scissor"){
        userImg.src="./img/scissors.png";
    }
    if(com==="rock"){
        comImg.src="./img/fist.png";
    }
    else if(com==="paper"){
        comImg.src="./img/hand-paper.png";
    }
    else if(com==="scissor"){
        comImg.src="./img/scissors.png";
    }
}
function playGame(userChoice){ 
    x.textContent="X"
    let userSelection=userChoice;
    let computerSelection=getComputerChoice();
    playRound(userSelection,computerSelection);
    checkResult();
    comText.textContent=`COMPUTER:`+computerScore;
    userText.textContent=`USER:`+humanScore;

    
}
function initialize(){
    humanScore=0;
    computerScore=0;
    comText.textContent=`COMPUTER:`+computerScore;
    userText.textContent=`USER:`+humanScore;

}
function checkResult(){
    if (humanScore===5 && computerScore<5){
        result.textContent="YOU WON!";
        menu.classList.add("show");
    }
    else if(computerScore===5 && humanScore<5){
        result.textContent="YOU LOSE!";
        menu.classList.add("show");
    }
    else if(computerScore===5 && humanScore===5){
        result.textContent="ITS TIE !";
        menu.classList.add("show");
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
const userDisplay=document.querySelector("#user");
const comDisplay=document.querySelector("#computer");
const playAgain=document.querySelector("#play-again");
const menu=document.querySelector(".menu");
const x=document.querySelector("#x")




playAgain.addEventListener("click",()=>{
    menu.classList.remove("show");
    initialize();
})

rock.addEventListener("click",()=>{
    playGame("rock");
})
paper.addEventListener("click",()=>{
    playGame("paper")
})
scissor.addEventListener("click",()=>{
    playGame("scissor")
})





