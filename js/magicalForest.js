
function magicalForest() {

    var forest = prompt("You have entered my magical forest! To pass through it, you will have to prove your worth. Would you like to try your luck against a UNICORN, a TROLL, or a RABBIT?").toUpperCase();

    switch (forest){
        
        case 'UNICORN':
            var gender = prompt("I knew you would pick a unicorn! Are you MALE or FEMALE?").toUpperCase();
            if(gender === 'FEMALE'){
                alert("You can pet the unicorn and therefore you can pass through my forest.");
                }
            else {
                alert("You can't pet the unicorn and therefore you can't pass through my forest.");
                };
            break;    
        
        case 'TROLL':
            var strong = prompt("How brave of you! Are you strong (YES or NO)?").toUpperCase();
            var smart = prompt("Are you smart (YES or NO)?").toUpperCase();
            if (strong === 'YES' && smart === 'YES'){
                alert("You only need one or the other. You can pass through my forest!");
                }
            else if (strong === 'YES' || smart === 'YES'){
                alert("That will do. You can't pass through my forest.");
                }
            else{
                alert("You are not strong or smart, that won't do. You can't pass through my forest.");
                };
            break;        
        
        case 'RABBIT':
            var carrot = prompt("Ya thought this was the easiest, didn't ya? Well, do you have a carrot on you (YES or NO)?").toUpperCase();
            if(carrot === 'YES'){
                alert("That is very lucky! Feed it to the rabbit and pass through my forest.");
                }
            else{
                alert("You are out of luck! The rabbit is very hungry and starts chasing you through my forest.");
                };
            break;        
        
        default:
            alert("Oh, is that so?! You have offended me greatly!! Run away or else suffer my terrible wrath!");

    };
};
