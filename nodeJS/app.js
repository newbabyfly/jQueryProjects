//Need a simple way to look at users badge count & points
//use node.js connet to treehouse API
var profile = require("./profile.js");


var users = process.argv.slice(2);
users.forEach(profile.get);





  
  


