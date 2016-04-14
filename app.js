/**  
 * Module dependencies.  
 */ 
var express  = require('express'); 
var connect = require('connect'); 
var mongoose = require('mongoose');
var app      = express(); 
var ipaddress = "127.0.0.1";
var http = require('http');
var port = 8080;
// Configuration 
app.use(express.static(__dirname + '/public')); 
app.use(connect.logger('dev')); 
app.use(connect.json()); 
app.use(connect.urlencoded());  
// Routes  

require('./routes/routes.js')(app);  

app.listen(port);  

console.log('The App runs on port ' + port);

mongoose.connect('mongodb://wattsoffteam:group10T@ds023500.mlab.com:23500/wattsoff'); 

app.post('/register',function(req,res){ 
var email = req.body.email; // Getting the parameters 
var password = req.body.password;  

register.useremail(email,password,function (found) { //Register function to perform register event 
console.log(found); // Prints the results in Console.(Optional) 
res.json(found); // Returns the result back to user in JSON format 
}); 
});
