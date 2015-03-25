// the constructor function animal stores replies for all animal & default (i.e. general) cases
function animal (reply1, reply2Yes, reply2No, reply3A, reply3B){
      this.reply1 = reply1;
      this.reply2Yes = reply2Yes;
      this.reply2No = reply2No;
      this.reply3A = reply3A;
      this.reply3B = reply3B;
    }
//  the individual replies of all animal & default (i.e. general) cases
var unicorn = new animal ("I knew you would pick a unicorn! Before you start the challenge, have you ever killed anyone (YES or NO)?",
    "",
    "Good, just checking... Are you MALE or FEMALE?",
    "Sorry, unicorns don't like men. They are weird like that. Unfortunately, this means you can't pass through the magical forest!",
    "Good, unicorns like females so you can pass through my magical forest!");
var troll = new animal ("I knew you would pick a troll! Before you start the challenge, have you ever picked your nose (YES or NO)?",
    "",
    "Good, just checking... Are you SMART or STRONG?",
    "Great! Smart people can easily beat the troll and pass through the magical forest!",
    "Great! Strong people can easily beat the troll and pass through the magical forest!");
var rabbit = new animal ("I knew you would pick a rabbit! Before you start the challenge, have you ever eaten a rabbit (YES or NO)?",
    "",
    "Good, just checking... Are you QUICK or RICH?",
    "Great! Quick people can easily out run the rabbit and pass through the magical forest!",
    "Too bad! Money won't help you with the rabbit, you can't pass through the magical forest!");
var general = new animal ("Please pick a UNICORN, a TROLL or a RABBIT.",
    "Ehm. That was unexpected. Leave my magical forest right now before I call the magical forest police!",
    "Please answer YES or NO.",
    "Please answer again.",
    "");

// function to determine reply1
function showReply1 () {
	// variables used by the showReply1 function
    var myAnswer1 = document.getElementById("myAnswerID1").value.toUpperCase();
	var replyText1 = document.getElementById("replyID1");
	var show2 = document.querySelector(".show2");

	// switches through myAnswer1 options and chooses the right property (e.g. reply1) from the right animal object (e.g. unicorn) to show in the replyText1 div in the HTML
    switch (myAnswer1) {
    	case "UNICORN":
    		replyText1.innerHTML = unicorn.reply1;
    		break;
    	case "TROLL":
    		replyText1.innerHTML = troll.reply1;
    		break;
    	case "RABBIT":
    		replyText1.innerHTML = rabbit.reply1;
    		break;
    	default:
    		replyText1.innerHTML = general.reply1;
    		break;
    }
    // the replyText1 div in the HTML is switched from hidden (set in css as a default option) to visible
    replyText1.style.visibility = "visible";
    // inputs for the 2nd round are only shown if one of the three animals is answered
    if (myAnswer1 === "UNICORN" || myAnswer1 === "TROLL" || myAnswer1 === "RABBIT") {
    	show2.style.visibility = "visible";
    }
} //closes function showReply1  

// function to determine reply2
function showReply2 () {
    // variables used by the showReply2 function
	var myAnswer1 = document.getElementById("myAnswerID1").value.toUpperCase();
	var myAnswer2 = document.getElementById("myAnswerID2").value.toUpperCase();
	var replyText2 = document.getElementById("replyID2");
	var show3 = document.querySelector(".show3");

	// loops through myAnswer2 options and chooses the right property (e.g. reply2) from the right animal object (e.g. unicorn) to show in the replyText2 div in the HTML	
    if (myAnswer2 === "YES"){
		replyText2.innerHTML = general.reply2Yes;     
	}
		else if (myAnswer1 === "UNICORN" && myAnswer2 === "NO"){
		replyText2.innerHTML = unicorn.reply2No;
		show3.style.visibility = "visible";
	}
	else if (myAnswer1 === "TROLL" && myAnswer2 === "NO"){
		replyText2.innerHTML = troll.reply2No;
		show3.style.visibility = "visible";
	}
	else if (myAnswer1 === "RABBIT" && myAnswer2 === "NO"){
		replyText2.innerHTML = rabbit.reply2No;
		show3.style.visibility = "visible";
	}
	else {
		replyText2.innerHTML = general.reply2No;		
	}  
	// the replyText2 div in the HTML is switched from hidden (set in css as a default option) to visible
	replyText2.style.visibility = "visible";  		
} //closes function showReply2    

// function to determine reply3
function showReply3 () {
	// variables used by the showReply3 function
	var myAnswer3 = document.getElementById("myAnswerID3").value.toUpperCase();
	var replyText3 = document.getElementById("replyID3");

	// switch cycles through myAnswer3 options and chooses the right property (e.g. reply3A) from the right animal object (e.g. unicorn) to show in the replyText3 div in the HTML			
	switch (myAnswer3) {
    	case "MALE":
    		replyText3.innerHTML = unicorn.reply3A;
    		break;
    	case "FEMALE":
    		replyText3.innerHTML = unicorn.reply3B;
    		break;		    		   	
    	case "SMART":
    		replyText3.innerHTML = troll.reply3A;
    		break;	
    	case "STRONG":
    		replyText3.innerHTML = troll.reply3B;
    		break;	
    	case "QUICK":
    		replyText3.innerHTML = rabbit.reply3A;
    		break;			    				    		
    	case "RICH":
    		replyText3.innerHTML = rabbit.reply3B;
    		break;
    	default:
    		replyText3.innerHTML = general.reply3A;		    		
			break;	
    }
    // the replyText3 div in the HTML is switched from hidden (set in css as a default option) to visible
	replyText3.style.visibility = "visible";   		
} //closes function showReply3    		
