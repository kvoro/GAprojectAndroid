/**  
 * Module dependencies.  
 */ 
var express  = require('express'); 
var connect = require('connect'); 
var app      = express(); 
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
// Configuration 
app.use(express.static(__dirname + '/public')); 
app.use(connect.logger('dev')); 
app.use(connect.json()); 
app.use(connect.urlencoded());  
// Routes  

require('./routes/routes.js')(app);  

app.listen(port, ipaddress);  

console.log('The App runs on port ' + port);


app.post('/register',function(req,res){ 
var email = req.body.email; // Getting the parameters 
var password = req.body.password;  

register.useremail(email,password,function (found) { //Register function to perform register event 
console.log(found); // Prints the results in Console.(Optional) 
res.json(found); // Returns the result back to user in JSON format 
}); 
});
