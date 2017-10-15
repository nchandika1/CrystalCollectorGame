$(document).ready(function() {
	var redNum = 0;
	var blueNum = 0; 
	var greenNum = 0;
	var yellowNum = 0;
	var playerScore = 0;
	var computerScore =0;
	var wins = 0;
	var losses = 0;

	function randomNumberForCrystals() {
		/* Random number between 1 and 12 */
		return (Math.floor(Math.random() * 12) + 1);
	}

	function randomNumberForComputer() {
		/* Random number between 18 and 120 */
		return (Math.floor(Math.random() * 102) + 18);
	}

	function displayScore(wins, losses, result) {
		console.log("Display Score: " + wins + "," + losses + "," + result);
		$("#wins-text").text(wins);
		$("#losses-text").text(losses);
		$("#result-text").html(result);
	}

	function displayComputerScore() {
		console.log("Random: " + computerScore);
		$("#comp-random-num").text(computerScore);
	}

	function resetValues() {
		redNum = randomNumberForCrystals();
		blueNum = randomNumberForCrystals();
		greenNum = randomNumberForCrystals();
		yellowNum = randomNumberForCrystals();
		computerScore = randomNumberForComputer();
		playerScore = 0;
		$("#comp-random-num").text(computerScore);
		$("#score-text").text(playerScore);
	}

	function crystalClickFunction (crystalType) {
		var gameOver = false;
		var result = "";

		switch (crystalType) {
			case "red":
				console.log("Crystal Clicked: " + crystalType);
				playerScore += redNum;
				break;
			case "blue":
				console.log("Crystal Clicked: " + crystalType);
				playerScore += blueNum;
				break;
			case "yellow":
				console.log("Crystal Clicked: " + crystalType);
				playerScore += yellowNum;
				break;
			case "green":
				console.log("Crystal Clicked: " + crystalType);
				playerScore += greenNum;
				break;
		}
		
		console.log("playerScore: " + playerScore);
		if (playerScore == computerScore) {
			wins++;
			gameOver = true;
			result = "You Won!"
		} else if (playerScore > computerScore) {
			losses++;
			gameOver = true;
			result = "You Lost!"
		} else {
			$("#score-text").text(playerScore);
		}

		if (gameOver){
			displayScore(wins, losses, result);
			resetValues();
			displayComputerScore();
			$("#score-text").text("0");
		}
	}

	function playGame() {
		displayScore(0, 0, "   ");
		resetValues();

		$("#result-text").text = "";
		$("#red-crystal").click(function() { crystalClickFunction("red");});
		$("#blue-crystal").click(function() { crystalClickFunction("blue");});
		$("#yellow-crystal").click(function() { crystalClickFunction("yellow");});
		$("#green-crystal").click(function() { crystalClickFunction("green");});
		console.log(redNum, blueNum, yellowNum, greenNum);
		console.log(playerScore);
	}

	playGame();
});