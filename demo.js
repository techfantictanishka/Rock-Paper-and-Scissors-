const buttons= document.querySelectorAll(".move");
const resultEl = document.querySelector("#result");
const userScoreEl=document.querySelector("#uS");
const comScoreEl=document.querySelector("#cS");
const restartBtn = document.querySelector("#restart");
let userScore=0;
let comScore=0;
//individually target each
buttons.forEach((button)=>{
button.addEventListener('click',()=>{
       
      const result = playRound(button.id, computerPlay());
       
        console.log(result);
        resultEl.textContent= result;
        comScoreEl.textContent="Computer Score:"+  comScore;
        userScoreEl.textContent="Your Score:"+ userScore;

        
});
    });
/*restartBtn.forEach((button)=>{
    button.addEventListener('click', () => {
    userScore = 0;
    comScore = 0;
    userScoreEl.textContent = "Your Score: 0";
    comScoreEl.textContent = "Computer Score: 0";
    resultEl.innerHTML = "<b>Choose your move!</b>";
});
})*/
    
    function computerPlay(){
       const choices = ["Rock","Paper","Scissors"];
       const randomChoice = Math.floor(Math.random()* choices.length);
       return choices[randomChoice];
 }


function playRound(u,c){
if(u===c){
    return "It's a tie";
} else if(
    (u==="Paper"&&c==="Rock") ||
    (u==="Scissors"&&c==="Paper")||
    (u==="Rock"&&c==="Scissors")
)
{
    userScore++;
    return "Congratulations! you won. " + u + " beats " + c;
    
} else
    {
     comScore++;
   return " you loose!. " + c + " beats " + u;
   
}



}

