

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

