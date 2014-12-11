window.onload = function(){

var yourName = prompt("Enter Your Name");
var name = yourName.toUpperCase();

var playerName = document.getElementById('player_name');
playerName.innerHTML = name + ":";
var welcomeName = document.getElementById('welcome_name');
welcomeName.innerHTML = "WELCOME " + name; 

var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');

var yourPick = document.getElementById('your_pick');
var computerPick = document.getElementById('computer_pick');
var yourPicture = document.getElementById('your_picture');
var computerPicture = document.getElementById('computer_picture');



var result = function(yourOption){
	var options = ["Rock", "Paper", "Scissors"];
	var computerOption = options[Math.floor(Math.random() * options.length)];


	var playerScore = document.getElementById('player_score');
    var computerScore = document.getElementById('computer_score');
    var resultText = document.getElementById('result_text');
	
	if(yourOption == "Rock" && computerOption == "Scissors"){
		yourPick.innerHTML = yourOption;
		computerPick.innerHTML = computerOption;
		yourPicture.src = "img/rock.png"		
		computerPicture.src = "img/scissors.png"
		playerScore.innerHTML ++;
	}
	else if(yourOption == "Rock" && computerOption == "Paper"){
		yourPick.innerHTML = "ROCK";
		computerPick.innerHTML = "PAPER";
		yourPicture.src = "img/rock.png"
		computerPicture.src = "img/paper.png"
		computerScore.innerHTML ++;
	}
	else if(yourOption == "Rock" && computerOption == "Rock"){
		yourPick.innerHTML = "ROCK";
		computerPick.innerHTML = "ROCK";
		yourPicture.src = "img/rock.png";
		computerPicture.src = "img/rock.png";
	}
	else if(yourOption == "Paper" && computerOption == "Scissors"){
		yourPick.innerHTML = "PAPER";
		computerPick.innerHTML = "SCISSORS";
		yourPicture.src = "img/paper.png"
		computerPicture.src = "img/scissors.png"
		computerScore.innerHTML ++;		
	}
	else if(yourOption == "Paper" && computerOption == "Paper"){
		yourPick.innerHTML = "PAPER";
		computerPick.innerHTML = "PAPER";
		yourPicture.src = "img/paper.png"
		computerPicture.src = "img/paper.png"

	}
	else if(yourOption == "Paper" && computerOption == "Rock"){
		yourPick.innerHTML = "PAPER";
		computerPick.innerHTML = "ROCK";
		yourPicture.src = "img/paper.png"
		computerPicture.src = "img/rock.png"
		playerScore.innerHTML ++;
	}

	else if(yourOption == "Scissors" && computerOption == "Scissors"){
		yourPick.innerHTML = "SCISSORS";
		computerPick.innerHTML = "SCISSORS";
		yourPicture.src = "img/scissors.png"
		computerPicture.src = "img/scissors.png"

	}
	else if(yourOption == "Scissors" && computerOption == "Paper"){
		yourPick.innerHTML = "SCISSORS";
		computerPick.innerHTML = "PAPER";
		yourPicture.src = "img/scissors.png"
		computerPicture.src = "img/paper.png"
		playerScore.innerHTML ++;

	}
	else if(yourOption == "Scissors" && computerOption == "Rock"){
		yourPick.innerHTML = "SCISSORS";
		computerPick.innerHTML = "ROCK";
		yourPicture.src = "img/scissors.png"
		computerPicture.src = "img/rock.png"
		computerScore.innerHTML ++;
	}



	function scoreBoard() {
		console.log("do something");
	    if(playerScore.innerHTML == 3){
	     resultText.innerHTML = "YOU WIN, " + name;
	}
		if(computerScore.innerHTML == 3)
			resultText.innerHTML = "YOU LOSE, " + name + ". EAT TURDS, BUTTFACE";
    }

    scoreBoard();

}

rock.onclick = function(){
	result("Rock")
}

paper.onclick = function(){
	result("Paper")
}

scissors.onclick = function(){
	result("Scissors")
}


};








































