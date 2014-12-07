

function compareOptions(){

	var options = ["Rock", "Paper", "Scissors"]
	
	//var string = prompt("Pick Rock, Paper or Scissors");
	
	var yourOption = string.charAt(0).toUpperCase() + string.substring(1);
	var computerOption = options[Math.floor(Math.random() * options.length)];
	var yourPick = document.getElementById('your_pick');
	var computerPick = document.getElementById('computer_pick');
	var picture = document.getElementById('result');
	var resultText = document.getElementById('result_text');

	var showButton = document.getElementById('hidden');
	showButton.style.display = "inline";


		var yourPicture = document.getElementById('your_picture');
		var computerPicture = document.getElementById('computer_picture');

		function changeRock() {
			if(yourOption == "Rock")
				yourPicture.style.width = "35%";
			if(computerOption == "Rock")
				computerPicture.style.width = "35%"
		}

		var player = 0;
		var computer = 0;
		var playerScore = document.getElementById("player_score");
		var computerScore = document.getElementById("computer_score");
		playerScore.innerHTML = player;
		computerScore.innerHTML = computer;
		
		function counter(){
			if(yourOption == "Rock"){
			   player += 1
			   playerScore.innerHTML = player;
			   }		
		}


	if(yourOption == "Rock" && computerOption == "Scissors"){
		console.log("You win!");
		yourPick.innerHTML = "ROCK";
		computerPick.innerHTML = "SCISSORS";
		//picture.src = "img/thumbsup.jpeg";
		resultText.innerHTML = "You win!";
		yourPicture.src = "img/rock.png"		
		computerPicture.src = "img/scissors.png"
 	}
	else if(yourOption == "Rock" && computerOption == "Paper"){
		console.log("You lose");
		yourPick.innerHTML = "ROCK";
		computerPick.innerHTML = "PAPER";
		//picture.src = "img/thumbsdown.jpg";
		resultText.innerHTML = "You lose.";
		yourPicture.src = "img/rock.png"
		computerPicture.src = "img/paper.png"
	}
	else if(yourOption == "Rock" && computerOption == "Rock"){
		console.log("You tie, try again.");
		yourPick.innerHTML = "ROCK";
		computerPick.innerHTML = "ROCK";
		//picture.src = "img/tie.jpg";
		resultText.innerHTML = "You tie, try again.";
		yourPicture.src = "img/rock.png";
		computerPicture.src = "img/rock.png";
	}

	else if(yourOption == "Paper" && computerOption == "Scissors"){
		console.log("You lose");
		yourPick.innerHTML = "PAPER";
		computerPick.innerHTML = "SCISSORS";
		//picture.src = "img/thumbsdown.jpg";
		resultText.innerHTML = "You lose.";
		yourPicture.src = "img/paper.png"
		computerPicture.src = "img/scissors.png"		
	}
	else if(yourOption == "Paper" && computerOption == "Paper"){
		console.log("You tie");
		yourPick.innerHTML = "PAPER";
		computerPick.innerHTML = "PAPER";
		//picture.src = "img/tie.jpg";
		resultText.innerHTML = "You tie, try again.";
		yourPicture.src = "img/paper.png"
		computerPicture.src = "img/paper.png"

	}
	else if(yourOption == "Paper" && computerOption == "Rock"){
		console.log("You win!");
		yourPick.innerHTML = "PAPER";
		computerPick.innerHTML = "ROCK";
		//picture.src = "img/thumbsup.jpeg";
		resultText.innerHTML = "You win!";
		yourPicture.src = "img/paper.png"
		computerPicture.src = "img/rock.png"

	}

	else if(yourOption == "Scissors" && computerOption == "Scissors"){
		console.log("You tie");
		yourPick.innerHTML = "SCISSORS";
		computerPick.innerHTML = "SCISSORS";
		//picture.src = "img/tie.jpg";
		resultText.innerHTML = "You tie, try again.";
		yourPicture.src = "img/scissors.png"
		computerPicture.src = "img/scissors.png"

	}
	else if(yourOption == "Scissors" && computerOption == "Paper"){
		console.log("You win");
		yourPick.innerHTML = "SCISSORS";
		computerPick.innerHTML = "PAPER";
		//picture.src = "img/thumbsup.jpeg";
		resultText.innerHTML = "You win!";
		yourPicture.src = "img/scissors.png"
		computerPicture.src = "img/paper.png"

	}
	else if(yourOption == "Scissors" && computerOption == "Rock"){
		console.log("You lose");
		yourPick.innerHTML = "SCISSORS";
		computerPick.innerHTML = "ROCK";
		//picture.src = "img/thumbsdown.jpg";
		resultText.innerHTML = "You lose.";
		yourPicture.src = "img/scissors.png"
		computerPicture.src = "img/rock.png"
	}
	else{
		alert("You must pick Rock, Paper or Scissors!")
		window.location.reload()
	}

	changeRock();
	counter();

};


window.onload  = function () {
 compareOptions();
 }


