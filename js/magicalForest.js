
function magicalForest() {

    var forest = prompt("You have entered my magical forest! To pass through it, you will have to prove your worth. Would you like to try your luck against a UNICORN, a TROLL, or a RABBIT?").toUpperCase();

    switch (forest){
        
        case 'UNICORN':
            var kill = prompt("I knew you would pick a unicorn! Before you start the challenge, have you ever killed anyone (YES or NO)?").toUpperCase();
            if(kill === 'YES'){
                alert("Ehm. That was unexpected. Leave my magical forest right now before I call the magical forest police!");
            }
            else {
                alert("Good, just checking...");
            };
            var gender = prompt("Now, are you MALE or FEMALE?").toUpperCase();
            if(gender === 'MALE'){
                alert("Sorry, unicorns don't respond well to males. You can't pet the unicorn and therefore you can't pass through my forest.");                
            }
            else {
                alert("Good, unicorns like females.");
                var virgin = prompt("Uhm, now... I need to ask... are you a virgin (YES or NO)?").toUpperCase();
                if(virgin === 'YES'){
                    alert("As a virgin female, you can pet the unicorn and therefore you can pass through my forest.");                    
                }
                else{
                    alert("Good for you, I guess! But as you are no longer a virgin, you can't pet the unicorn and therefore you can't pass through my forest.");
                }
            }
            break;    
        
        case 'TROLL':
            var strong = prompt("How brave of you! So are you strong (YES or NO)?").toUpperCase();
            var smart = prompt("And are you smart (YES or NO)?").toUpperCase();
            if (strong === 'YES' && smart === 'YES'){
                alert("I'm impressed! You only need one or the other. You can pass through my forest!");
            }
            else if (strong === 'YES' || smart === 'YES'){
                alert("That will do. You can pass through my forest.");
            }
            else{
                alert("You are not strong or smart, that won't do at all. You can't pass through my forest.");
            };
            break;        
        
        case 'RABBIT':
            var carrot = prompt("Ya thought this was the easiest, didn't ya? Well, do you have a carrot on you (YES or NO)?").toUpperCase();
            if(carrot === 'YES'){
                alert("That is very lucky! Feed it to the rabbit.");
                var cabbage = prompt("The rabbit is very hungry though, would you have some cabbage on you (YES or NO)?").toUpperCase();
                if (cabbage === "YES") {
                    alert("That is very lucky indeed! You should try you luck in a lottery. Feed it to the rabbit and pass through the forest.");
                }
                else {
                    alert("Too bad! The - now even more hungry - rabbit starts chasing you through my forest.");
                }
            }
            else{
                alert("That sucks for you! The rabbit is very hungry and is looking at you funny...");
                var grass = prompt("Unless... do you have any grass (YES or NO)?").toUpperCase();
                if (grass === "YES") {
                    alert("OK, great! Feed it to the rabbit and pass through the forest.");
                }
                else {
                    alert("Too bad! The - now even more hungry - rabbit starts chasing you through my forest.");
                }               
            }
            break;        
        
        default:
            alert("Oh, is that so?! You have offended me greatly!! Run away or else suffer my terrible wrath!");
       
    }
}
