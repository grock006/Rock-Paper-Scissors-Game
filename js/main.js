console.log("hello world")
var string = "hello word"
console.log(string)
var capitalize = string.charAt(0).toUpperCase() + string.substring(1);
console.log(capitalize)

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
	var string = prompt("Pick Rock, Paper or Scissors");
	var yourOption = string.charAt(0).toUpperCase() + string.substring(1);

	var computerOption = options[Math.floor(Math.random() * options.length)];
	var yourPick = document.getElementById('your_pick');
	var computerPick = document.getElementById('computer_pick');
	var picture = document.getElementById('result');
	var resultText = document.getElementById('result_text');

	var showButton = document.getElementById('hidden');
	showButton.style.display = "block";

	//var buttonChange = document.getElementById('try_again');

	//var testString = document.getElementById('computer_pick');
	//testString.innerHTML = "Hello World";

	if(yourOption == "Rock" && computerOption == "Scissors"){
		console.log("You win!");
		yourPick.innerHTML = "ROCK";
		computerPick.innerHTML = "SCISSORS";
		picture.src = "img/thumbsup.jpeg";
		resultText.innerHTML = "You win!";
		//buttonChange.color = "yellow";
 	}
	else if(yourOption == "Rock" && computerOption == "Paper"){
		console.log("You lose");
		yourPick.innerHTML = "ROCK";
		computerPick.innerHTML = "PAPER";
		picture.src = "img/thumbsdown.jpg";
		resultText.innerHTML = "You lose.";
	}
	else if(yourOption == "Rock" && computerOption == "Rock"){
		console.log("You tie, try again.");
		yourPick.innerHTML = "ROCK";
		computerPick.innerHTML = "ROCK";
		picture.src = "img/tie.jpg";
		resultText.innerHTML = "You tie, try again.";
	}

	else if(yourOption == "Paper" && computerOption == "Scissors"){
		console.log("You lose");
		yourPick.innerHTML = "PAPER";
		computerPick.innerHTML = "SCISSORS";
		picture.src = "img/thumbsdown.jpg";
		resultText.innerHTML = "You lose.";
	}
	else if(yourOption == "Paper" && computerOption == "Paper"){
		console.log("You tie");
		yourPick.innerHTML = "PAPER";
		computerPick.innerHTML = "PAPER";
		picture.src = "img/tie.jpg";
		resultText.innerHTML = "You tie, try again.";
	}
	else if(yourOption == "Paper" && computerOption == "Rock"){
		console.log("You win!");
		yourPick.innerHTML = "PAPER";
		computerPick.innerHTML = "ROCK";
		picture.src = "img/thumbsup.jpeg";
		resultText.innerHTML = "You win!";
	}

	else if(yourOption == "Scissors" && computerOption == "Scissors"){
		console.log("You tie");
		yourPick.innerHTML = "SCISSORS";
		computerPick.innerHTML = "SCISSORS";
		picture.src = "img/tie.jpg";
		resultText.innerHTML = "You tie, try again.";
	}
	else if(yourOption == "Scissors" && computerOption == "Paper"){
		console.log("You win");
		yourPick.innerHTML = "SCISSORS";
		computerPick.innerHTML = "PAPER";
		picture.src = "img/thumbsup.jpeg";
		resultText.innerHTML = "You win!";
	}
	else if(yourOption == "Scissors" && computerOption == "Rock"){
		console.log("You lose");
		yourPick.innerHTML = "SCISSORS";
		computerPick.innerHTML = "ROCK";
		picture.src = "img/thumbsdown.jpg";
		resultText.innerHTML = "You lose.";
	}
	else{
		alert("You must pick Rock, Paper or Scissors!")
		window.location.reload()
	}


	// if(yourOption == true && computerOption == true){
	// button.display = "block";
 //    }

};


//Run function

window.onload  = function () {
 compareOptions();
 }
