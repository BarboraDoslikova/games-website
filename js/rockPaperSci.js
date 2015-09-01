
Skip to content
This repository

    Pull requests
    Issues
    Gist

    @BarboraDoslikova

1
0

    0

BarboraDoslikova/games-website

games-website/js/rockPaperSci.js
@BarboraDoslikova BarboraDoslikova 18 seconds ago Update rockPaperSci.js

1 contributor
67 lines (60 sloc) 2.082 kB
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
        else {
            if (computerChoice !== "PAPER") && (computerChoice !== "PAPER") && (computerChoice !== "PAPER") {
                alert("You didn't enter ROCK, PAPER or SCISSORS. Sorry, you broke the game and are out!");
            }
        }        
    };

    // Compares choices.
    compare(userChoice, computerChoice);


    // If it's a tie, ask to go to the 2nd round.
    // What if there is a 4th option, e.g. a toliet?
}

    Status API Training Shop Blog About Pricing 

    © 2015 GitHub, Inc. Terms Privacy Security Contact Help 

