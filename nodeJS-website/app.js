//create webserver
var router = require('./router.js');
var http = require('http');
http.createServer(function (request, response) {
	router.home(request, response);
	router.user(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>');




//function that handles the reading and merge in values
	//read from file and get string
		//merge values into string