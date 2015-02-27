function slayDragon() {

    var slaying = true;

    var youHit = Math.floor(Math.random() * 2);
    // Math.random() returns number btw. 0 and 0.9999
    // and Math.floor() rounds DOWN
    // so the result can be either 0 (false) or 1 (true)

    var damageThisRound = Math.floor(Math.random() * 5 + 1);
    // Math.random() returns number btw. 0 and 0.9999
    // and Math.floor() rounds DOWN
    // so the result can be 1, 2, 3, 4, or 5

    var totalDamage = 0;

    alert("You're an extremely brave fighter and as such you have decided to help your kingdom and beat a dangerous dragon. You travel long and far. Finally, you find the dragon's cave.");
    alert("Whoops, nobody has told you that the dragon has 5 heads!");
    alert("Well, what can you do... After saying your prayers, you are about the face the dragon. Whether you hit it or miss it depends on the odds of the fate.");
    alert("You start hitting the dragon with your shiny sword and hope for the best! You can't miss even once or it kills you!");

    while(slaying) {
        if(youHit) {
            alert("You hit the dragon and do " + damageThisRound + " damage!");
            totalDamage += damageThisRound;
            
            if(totalDamage === 5) {
                alert("Congrats, you killed the 5-headed dragon!");
                slaying = false;
            }
            else if (totalDamage >= 1){
                alert("Good, you did some damage but not enough. Remember the dragon has 5 heads!");
                youHit = Math.floor(Math.random() * 2);
            }      
        }        
        else{
            alert("Oh no, you missed! And the dragon killed you with its most viscious head!");
            slaying = false;   
        }
    }
        
}
