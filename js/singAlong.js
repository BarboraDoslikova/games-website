function singAlong() {

	// Asks the user to enter their name.
	var userName = prompt("What's your name?");

	//Greets the user by his name!
	alert("Hello " + userName + "!");


	// Check if the user is ready to play!
	confirm("Press OK if you're ready!");

	// Asks the user to enter their age.
	var age = prompt("What's your age?");

	// Gives a warning if the user is too young and gives encouragement if the user is sufficiently old.
	if (age < 13)
	{
	    alert("OK, " + userName + ", you are allowed to go but you might be doomed ;)");
	}
	else
	{
	    alert("OK, " + userName + ", that's great! You are old enough to go ;)");
	}

	// Starts the game.
	alert("You are at a Purity Ring concert, and you hear this lyric 'You push and you pull.'");

	// Continues the game by setting the stage for the interaction.
	alert("Suddenly, Megan James stops singing and says, 'Who wants to sing with me?'");

	// Continues the game by asking the user to interact.
	var userAnswer = prompt("She look directly into your eyes and asks: '" + userName + ", do you want to sing with me on stage?'").toUpperCase();

	// Asks the user to make some hard choices.
	if (userAnswer === "YES")
	{
	    alert("You and Megan start singing together. The crowds go crazy! And the end of the song the crowds carry you off the stage and you feel like the world is your oyster!");
	}
	else if (userAnswer === "NO")
	{
	    alert("'Oh no! Why so shy, " + userName + "?' Megan shakes her head sadly and continues singing 'You push and you pull.'");
	}
	else
	{
	    alert("Did you say something? Megan can't hear you over the cheering of her fans, she shakes her head and continues singing 'You push and you pull.'");
	}

	// Ends the game by asking the user for feedback.
	var feedback = prompt("At the end of the concert, Megan asks you: 'How did you the Push, Pull song? Please rate it on a scale from 1 to 10 where 10 is the best song you have heard like in...ever!'");

	// Thanks the user for the feedback.
	if (feedback >= 8)
	{
	    alert("'Thank you, " + userName + "! We should sing at the next concert!'");
	}
	else
	{
	    alert("'Thank you, " + userName + "! Maybe you will like my next song better!'");
	}

}
