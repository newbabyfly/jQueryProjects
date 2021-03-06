var https = require('https');
var http = require('http');

function printMessage (username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript.";
  console.log(message);
}

//Print Error message
function printError(error) {
		  console.error(error.message);	
};

function get(username) {
	//Connect API url
	var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
		// console.log(response.statusCode);
		
		var body = "";
		
	  //Read data
	  response.on('data', function(chunk) {
		body += chunk;
	  });
	  
	  response.on('end', function() {
		// console.log(body);
		// console.log(typeof body);
		if (response.statusCode === 200) {
			try { var profile = JSON.parse(body);
				printMessage(username, profile.badges.length, profile.points.JavaScript);}
				catch(error) { printError(error);	}
			
		} else {
		printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] 
		+ ")"});
		}

	  });

	  });
	  

	request.on("error", printError);
};

module.exports.get = get;