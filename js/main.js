console.log("hello world")

//var options = ["Rock", "Paper", "Scissors"]

//Choose Your Option ("Rock", "Paper" or "Scissor")
// var yourOption = prompt("Pick Rock Paper of Scissor")

//var yourOption = prompt("Pick Rock, Paper or Scissors")

// Computer Picks Option at Random 
// var computerOption = options.rand
//var computerOption = options[Math.floor(Math.random() * options.length)];

//var computerOption = options[Math.floor(Math.random() * options.length)];

//need a function to compare yourOption to computerOption
//function compareOptions
//If else Statement Determines Who Wins
//If Player #1 picks rock and Computer picks scissors
//then scissors > rock
// if( yourOption == "Rock" && computerOption == "Scissor"){
//	console.log("You win!")};

//Need to print the winning statement to an HTML element ID
// your_pick
// computer_pick
// var yourPick = document.getElementById('your_pick');
// yourPick.innerHTML("you win!")

//var yourPick = document.getElementById('your_pick');
//yourPick.style.color = "Red";

function compareOptions(){

	var options = ["Rock", "Paper", "Scissors"]
	var yourOption = prompt("Pick Rock, Paper or Scissors");
	var computerOption = options[Math.floor(Math.random() * options.length)];

	var yourPick = document.getElementById('your_pick');
	var computerPick = document.getElementById('computer_pick');
	var computerString = computerOption.toString();
	var picture = document.getElementById('result');

	//var testString = document.getElementById('computer_pick');
	//testString.innerHTML = "Hello World";


	if(yourOption == "Rock" && computerOption == "Scissors"){
		console.log("You win!");
		yourPick.innerHTML = "You win";
		picture.src = "img/thumbsup.jpeg";
 	}
	else if(yourOption == "Rock" && computerOption == "Paper"){
		console.log("You lose");
		yourPick.innerHTML = "You lose";
		picture.src = "img/thumbsdown.jpg";
	}
	else if(yourOption == "Rock" && computerOption == "Rock"){
		console.log("You tie, try again.");
		yourPick.innerHTML = "You tie, try again";
		picture.src = "img/tie.jpg";
	}

	else if(yourOption == "Paper" && computerOption == "Scissors"){
		console.log("You lose");
		yourPick.innerHTML = "You lose";
		picture.src = "img/thumbsdown.jpg";
	}
	else if(yourOption == "Paper" && computerOption == "Paper"){
		console.log("You tie");
		yourPick.innerHTML = "You tie, try again";
		picture.src = "img/tie.jpg";
	}
	else if(yourOption == "Paper" && computerOption == "Rock"){
		console.log("You win!");
		yourPick.innerHTML = "You win";
		picture.src = "img/thumbsup.jpeg";
	}

	else if(yourOption == "Scissors" && computerOption == "Scissors"){
		console.log("You tie");
		yourPick.innerHTML = "You tie, try again";
		picture.src = "img/tie.jpg";
	}
	else if(yourOption == "Scissors" && computerOption == "Paper"){
		console.log("You win");
		yourPick.innerHTML = "You win";
		picture.src = "img/thumbsup.jpeg";
	}
	else if(yourOption == "Scissors" && computerOption == "Rock"){
		console.log("You lose");
		yourPick.innerHTML = "You lose";
		picture.src = "img/thumbsdown.jpg";
	}

};


//Run function

window.onload  = function () {
 compareOptions();
 }
