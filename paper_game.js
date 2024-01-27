let yourScore=0;
let compScore=0;

const choises=document.querySelectorAll(".choice1");
const msg=document.querySelector("#move");

const genComputerChoice=() =>{
  const option=["rock","paper","seasser"];
  const randIx=Math.floor(Math.random()*3);
  return option[randIx];  
}

 const drawgame=() =>{
    msg.innerHTML="draw game";
 }

 const showWinner=(userwin,userChoice,computerChoice)=>

 {
if(userwin){
    msg.innerHTML=`you win! ${userChoice} beats ${computerChoice}`;
    msg.Style.backgroundColor="green";
}
else{
    msg.innerHTML=`you lose ${computerChoice} beats ${userChoice}` ;
    msg.Style.backgroundColor="red";

}
 }

const playGame=(userChoice) =>{
const computerChoice=genComputerChoice();
console.log(computerChoice);
if(userChoice===computerChoice){
    drawgame();
}
else{
    let userwin=true;
    if(userChoice==="rock"){
      userwin= computerChoice==="paper"?false:true; 
    }
    else if(userChoice==="paper"){
        userwin= computerChoice==="seasser"?false:true; 
    }
    else{
        userwin= computerChoice==="rock"?false:true; 
 
    }
    showWinner(userwin,userChoice,computerChoice);
}
}








choises.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    })
})