function getComputerChoice (){

	let options = ['rock','paper','scissors'];

	let randomChoice = Math.floor(Math.random() * 3);

	return options[randomChoice];

};


function getHumanChoice(){

	let userInput = prompt("rock, paper or scissors?");
	return userInput.toLowerCase();	
}


let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice,computerChoice){
    if (humanChoice === computerChoice){
        return "It's a tie!";
    } else if (humanChoice == 'rock' && computerChoice == 'paper'){
        computerScore += 1;
        return "Computer wins!";
    } else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        humanScore += 1;
        return "You win!";
    } else if (humanChoice == 'paper' && computerChoice == 'scissors'){
        computerScore += 1;
        return "Computer wins!";
    } else if (humanChoice == 'paper' && computerChoice == 'rock'){
        humanScore += 1;
        return "You win!";
    } else if (humanChoice == 'scissors' && computerChoice == 'rock'){
        computerScore += 1;
        return "Computer wins!";
    } else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        humanScore += 1;
        return "You win!";
    }
}


let rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
let scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
let paperButton = document.createElement('button');
paperButton.textContent = 'Paper';

let body = document.querySelector('body');
let gameScreen = document.createElement('div');

// Create a row for the buttons
let buttonRow = document.createElement('div');
buttonRow.style.display = 'flex';
buttonRow.style.flexDirection = 'row';
buttonRow.style.justifyContent = 'center';
buttonRow.style.alignItems = 'center';

buttonRow.appendChild(rockButton);
buttonRow.appendChild(scissorsButton);
buttonRow.appendChild(paperButton);

let buttons = document.getElementsByTagName('button');

body.appendChild(gameScreen);


gameScreen.style.display = 'flex';
gameScreen.style.flexDirection = 'column';
gameScreen.style.justifyContent = 'center';
gameScreen.style.alignItems = 'center';



for (let i = 0; i < buttons.length; i++){

	buttons[i].style.padding = '10px'; 
	buttons[i].style.margin = '5px';
}


let scoreBoard = document.createElement('div');
gameScreen.appendChild(buttonRow);
gameScreen.appendChild(scoreBoard);

function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        let winner = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
        scoreBoard.textContent = `${winner} Final Score: You ${humanScore} - Computer ${computerScore}`;
        // Disable buttons
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}


rockButton.addEventListener('click', () => {
	 let result = playRound('rock',getComputerChoice());
	scoreBoard.textContent = `${result} | You: ${humanScore} Computer: ${computerScore}`;
	checkGameOver();

});
scissorsButton.addEventListener('click', () => {
	let result = playRound('scissors',getComputerChoice());
	scoreBoard.textContent = `${result} | You: ${humanScore} Computer: ${computerScore}`
	checkGameOver();

});
paperButton.addEventListener('click', () => {
	let result = playRound('paper',getComputerChoice());
	scoreBoard.textContent = `${result} | You: ${humanScore} Computer: ${computerScore}`;
	checkGameOver();

});





