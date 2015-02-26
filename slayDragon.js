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

    while(slaying) {
        if(youHit) {
            console.log("You hit the dragon and did " + damageThisRound + " damage!");
            totalDamage += damageThisRound;
            
            if(totalDamage >= 4) {
                console.log("Congrats, you killed the dragon!");
                slaying = false;
            }
            else{
                youHit = Math.floor(Math.random() * 2);
            }      
        }
        
        else{
            console.log("You missed and the dragon killed you!");
            slaying = false;   
        }
    }
        
}
