function singAlong() {

	// Asks the user to enter their name.
	var userName = prompt("What's your name?");

	//Greets the user by his name!
	console.log("Hello " + userName + "!");


	// Check if the user is ready to play!
	confirm("I'm ready to play!");

	// Asks the user to enter their age.
	var age = prompt("What's your age?");

	// Gives a warning if the user is too young and gives encouragement if the user is sufficiently old.
	if (age < 13)
	{
	    console.log(userName + ", you are allowed to play but might be doomed ;)");
	}
	else
	{
	    console.log(userName + ", that's great! You are old enough to have a chance at winning at this game ;)");
	}

	// Starts the game.
	console.log("You are at a Purity Ring concert, and you hear this lyric 'You push and you pull.'");

	// Continues the game by setting the stage for the interaction.
	console.log("Suddenly, Megan James stops and says, 'Who wants to sing with me?'");

	// Continues the game by asking the user to interact.
	var userAnswer = prompt("Do you want to sing with me on stage?");

	// Asks the user to make some hard choices.
	if (userAnswer === "yes")
	{
	    console.log("You and Megan start singing together. The crowds go crazy! And the end of the song the crowds carry you off the stage and you feel like the world is your oyster!");
	}
	else
	{
	    console.log("Oh no! Megan shakes her head sadly and continues singing 'You push and you pull.'");
	}

	// Ends the game by asking the user for feedback.
	var feedback = prompt("How did you the game so far? Please rate by entering a number between 1 and 10 where 10 if the best!");

	// Thanks the user for the feedback.
	if (feedback >= 8)
	{
	    console.log("Thank you, " + userName + "! We should sing at the next concert!");
	}
	else
	{
	    console.log("Thank you, " + userName + "! I'll keep practicing coding and singing!");
	}

}
