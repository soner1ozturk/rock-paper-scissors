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
		return;
}else if (humanChoice == 'rock' && computerChoice == 'paper'){
	computerScore += 1;
	return 'You lose! Paper beats Rock!'
}else if (humanChoice == 'rock' && computerChoice == 'scissors'){
	humanScore += 1;
	return 'You win! Rock beats Scissors!'
}else if (humanChoice == 'paper' && computerChoice == 'scissors'){
	computerScore += 1;
	return 'You lose! Scissors beats Paper!'

}else if (humanChoice == 'paper' && computerChoice == 'rock'){
	humanScore += 1;
	return 'You win! Paper beats Rock!'

}else if (humanChoice == 'scissors' && computerChoice == 'rock'){
	computerScore += 1;
	return 'You lose! Rock beats Scissors!'
}else if (humanChoice == 'scissors' && computerChoice == 'paper'){
	humanScore += 1;
	return 'You win! Scissors beats Paper!'

}}

function playGame(){

	for (let i=0; i<5; i++){

		playRound(getHumanChoice(),getComputerChoice());
	}

	alert(`Your score is ${humanScore}, computer score is ${computerScore}`);
}

playGame();