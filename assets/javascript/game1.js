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
		return (Math.floor(Math.random() * 11) + 1);
	}

	function randomNumberForComputer() {
		/* Random number between 18 and 120 */
		return (Math.floor(Math.random() * 102) + 18);
	}

	function displayScore(wins, losses, result) {
		/* Display User Win/Loss score */
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
		/* Values at the start of the game */
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
		/* Do something when a given crystal is clicked */

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
			/* When player's score matches computer's it is a win! */
			wins++;
			gameOver = true;
			result = "You Won!"
		} else if (playerScore > computerScore) {
			/* When player's score goes over the computer's it is a loss */
			losses++;
			gameOver = true;
			result = "You Lost!"
		} else {
			/* Otherwise wait for the next click and display the latest score */
			$("#score-text").text(playerScore);
		}

		if (gameOver) {
			/* Game over when either win or loss */
			displayScore(wins, losses, result);  // Display score
			resetValues(); // Reset all crystal values and player score
			$("#comp-random-num").text(computerScore); // Get a new random number for the computer
			$("#score-text").text("0");// Display 0 for the player score
		}
	}

	function playGame() {

		/* Initialize everything first */
		displayScore(0, 0, "   ");
		resetValues();

		/* Crystal Click Handlers */
		$("#red-crystal").click(function() { crystalClickFunction("red");});
		$("#blue-crystal").click(function() { crystalClickFunction("blue");});
		$("#yellow-crystal").click(function() { crystalClickFunction("yellow");});
		$("#green-crystal").click(function() { crystalClickFunction("green");});
	}

	// Play the game
	playGame();
});