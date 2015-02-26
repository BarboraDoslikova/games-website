function rockPaperSci() {
    // Asks the user to make a choice.
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    console.log(userChoice);

    // Selects a random number as the basis for the computer's choice.
    var computerChoice = Math.random();
    // Prints computer's choice. 
    console.log(computerChoice);
    // Cconverts the previously generated random number into the computer's choice.
    if (computerChoice <= 0.33) {
        computerChoice = "rock";
    }
    else if (computerChoice >= 0.66) {
        computerChoice = "paper";
    }
    else
    {
        computerChoice = "scissors";
    };

    // Compares the user's and computer's choices and returns the result.
    var compare = function(choice1, choice2) {
        if (choice1 === choice2) {
            return "The result is a tie!";
        }
        else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "rock wins";
            }
            else {
                return "paper wins";
            };    
        }
        else if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "paper wins";
            }
            else {
                return "scissors wins";
            };    
        }
        else if (choice1 === "scissors") {
            if (choice2 === "rock") {
                return "rock wins";
            }
            else {
                return "scissors wins";
            };    
        }
    };

    // Compares choices.
    compare(userChoice, computerChoice);

    // What if user selects, e.g. a dog?
    // If it's a tie, ask to go to the 2nd round.
    // What if there is a 4th option, e.g. a toliet?
}
