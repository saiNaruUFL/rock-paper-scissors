
const container = document.querySelectorAll('button');

container.forEach(btn => btn.addEventListener('click',nextStep));
let count = 0; let player1 = 0; let computerS = 0;

function nextStep(e)
{
    const divResults = document.querySelector('.results');
    const div1 = document.createElement('div');
    divResults.appendChild(div1);

    count++;
    if(count == 6)
    {
        if(player1 > computerS)
            div1.textContent = "You win the game!";
        else if(computerS > player1)
            div1.textContent = "You lose the game!";
        else
            div1.textContent = "The game is tied!";
        count = 0; player1 = 0; computerS = 0;
    }
    else {
        if(this.textContent == "Rock!")
            div1.textContent = playRound("Rock",getComputerChoice());
        else if(this.textContent == "Paper!")
            div1.textContent = playRound("Paper",getComputerChoice());
        else
            div1.textContent = playRound("Scissors",getComputerChoice());

        if(div1.textContent[4] == 'W')
            player1++;
        else if(div1.textContent[4] == 'L')
            computerS++;
    }
};


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
    else
        return "boohooo";
}






/*
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

*/
