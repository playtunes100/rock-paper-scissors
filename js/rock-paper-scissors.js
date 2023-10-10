

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return "rock";
    }
    else if(choice === 1){
        return "paper";
    }
    else if(choice === 2){
        return "scissors";
    }
    else{
        return null;
    }
    
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return "It's a draw!"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! rock beats scissors"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! scissors beats paper"
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You win! paper beats rock"
    }
    else{
        return "You lose! "+computerSelection+" beats "+playerSelection
    }
}

function game(){
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i<5;i++){
    
        const playerSelection = prompt("Choose! rock, paper or scissors", "rock")
        const computerSelection = getComputerChoice()
        console.log("You chose "+ playerSelection+ " and computer chose "+computerSelection)
        const roundResults = playRound(playerSelection, computerSelection)
        console.log(roundResults)
        if(roundResults.includes("win!")){
            playerScore++
        }
        else if(roundResults.includes("lose!")){
            computerScore++
        }
        
        console.log("-------Score   "+playerScore+":"+computerScore+"   END ROUND-------")
    }
    
    if(playerScore === computerScore){
        console.log("Final Score  "+playerScore+":"+computerScore+"  It's a tie!")
    }
    else if(playerScore > computerScore){
        console.log("Final Score  "+playerScore+":"+computerScore+"  You Win!")
    }
    else if(playerScore < computerScore){
        console.log("Final Score  "+playerScore+":"+computerScore+"  you Lose!")
    }
    else{
        console.log("I don't know how you'd get here.")
    }
}

game()