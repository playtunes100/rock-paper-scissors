let playerScoreDisplay = document.querySelector('#player-score');
let computerScoreDisplay = document.querySelector('#computer-score');
let cards = document.querySelectorAll('.card');
let movesDisplay = document.querySelector('.moves');
let resultsDisplay = document.querySelector('.results');
let finalScoreDisplay = document.querySelector('.final-score');

let playerScore = 0;
let computerScore = 0;

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

function getPlayerChoice(){
    cards.forEach(item => {
        item.addEventListener('click', event => {
          game(event.currentTarget.id);
        })
    })
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return "It's a draw!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! rock beats scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! scissors beats paper";
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You win! paper beats rock";
    }
    else{
        return "You lose! "+computerSelection+" beats "+playerSelection;
    }
}

function disableCards(){
    cards.forEach( item => {
        item.style.pointerEvents= 'none';
    })
}

function game(playerSelection){
    
        const computerSelection = getComputerChoice();
        movesDisplay.textContent = "You chose "+ playerSelection+ " and computer chose "+computerSelection+".";
        const roundResults = playRound(playerSelection, computerSelection);
        resultsDisplay.textContent = roundResults;
        if(roundResults.includes("win!")){
            playerScore++;
        }
        else if(roundResults.includes("lose!")){
            computerScore++;
        }
        
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    
    if((playerScore >= 5 && computerScore >= 5) && playerScore === computerScore){
        finalScoreDisplay.textContent = "Final Score  "+playerScore+":"+computerScore+"  It's a tie!";
        disableCards();
    }
    else if(playerScore >= 5 && playerScore > computerScore){
        finalScoreDisplay.textContent = "Final Score  "+playerScore+":"+computerScore+"  You Win!";
        disableCards();
    }
    else if(computerScore >= 5 && playerScore < computerScore){
        finalScoreDisplay.textContent = "Final Score  "+playerScore+":"+computerScore+"  you Lose!";
        disableCards();
    }
    
}


getPlayerChoice();

