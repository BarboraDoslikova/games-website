function rockPaperSci() {
    // Asks the user to make a choice.
    var userChoice = prompt("Do you choose ROCK, PAPER or SCISSORS?").toUpperCase();
    alert("You choose " + userChoice + " !");

    // Selects a random number as the basis for the computer's choice.
    var computerChoice = Math.random();

    // Cconverts the previously generated random number into the computer's choice.
    if (computerChoice <= 0.33) {
        computerChoice = "ROCK";
        alert("The computer chooses ROCK!");
    }
    else if (computerChoice >= 0.66) {
        computerChoice = "PAPER";
        alert("The computer chooses PAPER!");
    }
    else
    {
        computerChoice = "SCISSORS";
        alert("The computer chooses SCISSORS!");
    };

    // Compares the user's and computer's choices and returns the result.
    var compare = function(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            alert("The result is a tie!");
        }
        else if (userChoice === "ROCK") {
            if (computerChoice === "SCISSORS") {
                alert("You win!");
            }
            else {
                alert("You lose!");
            }   
        }
        else if (userChoice === "PAPER") {
            if (computerChoice === "ROCK") {
                alert("You win!");
            }
            else {
                alert("You lose!");
            }    
        }
        else if (userChoice === "SCISSORS") {
            if (computerChoice === "PAPER") {
                alert("You win!");
            }
            else {
                alert("You lose!");
            } 
        }
    };

    // Compares choices.
    compare(userChoice, computerChoice);

    // What if user selects, e.g. a dog?
    // If it's a tie, ask to go to the 2nd round.
    // What if there is a 4th option, e.g. a toliet?
}
