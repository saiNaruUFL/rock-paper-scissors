
function getComputerChoice() {
    let randVal = Math.floor(Math.random() * 3);
        
    if(randVal == 0)
        return "Rock";
    else if(randVal == 1)
        return "Paper";
    else
        return "Scissors";
}

function playRound(playerSelection,computerSelection)
{
    if(playerSelection == computerSelection)
        return "It's a tie";
    else if(playerSelection == "Rock" && computerSelection == "Scissors")
        return "You Win! Rock beats Scissors";
    else if(playerSelection == "Scissors" && computerSelection == "Rock")
        return "You Lose! Rock beats Scissors";
    else if(playerSelection == "Rock" && computerSelection == "Paper")
        return "You Lose! Paper beats Rock";
    else if(playerSelection == "Paper" && computerSelection == "Rock")
        return "You Win! Paper beats Rock";
    else if(playerSelection == "Paper" && computerSelection == "Scissors")
        return "You Lose! Scissors beats Paper";
    else if(playerSelection == "Scissors" && computerSelection == "Paper")
        return "You Win! Scissors beats Paper";
}

let player1Score = 0; let computerScore = 0;
for(let i = 0;i < 5;i++)
{
    playerSelection = prompt("Type one of the following choices: 'Rock','Paper','Scissors'");
    let winner = playRound(playerSelection,getComputerChoice());
    console.log(winner);

    if(winner[4] == 'Y')
        player1Score++;
    else
        computerScore++;
}

if(player1Score > computerScore)
    console.log("You Won the Game!");
else
    console.log("You lost the Game!");
