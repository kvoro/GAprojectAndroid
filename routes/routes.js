var chgpass = require('config/chgpass'); 
var register = require('config/register'); 
var login = require('config/login');  
var action = require('config/action'); 
var broadcast = require('config/broadcast');

module.exports = function(app) {        


     app.get('/', function(req, res) {       

          res.end("Node-Android-Project");    
     });     

     app.post('/login',function(req,res){        
          var email = req.body.email;             
               var password = req.body.password;       

          login.login(email,password,function (found) {           
               console.log(found);             
               res.json(found);    
     });    
     });     

     app.post('/register',function(req,res){         
          var email = req.body.email;             
          var password = req.body.password;
	  var firstname = req.body.firstname;
	  var lastname = req.body.lastname;
	  var city = req.body.city;
	  var street = req.body.street;
	  var gcmregid = req.body.regid;      
          console.log(gcmregid);console.log(email);
          register.register(email,password,firstname, lastname, city, street, gcmregid,function (found) {             
               console.log(found);             
               res.json(found);    
     });     
     });     

     app.post('/api/chgpass', function(req, res) {       
          var id = req.body.id;                 
               var opass = req.body.oldpass;         
          var npass = req.body.newpass;       

          chgpass.cpass(id,opass,npass,function(found){           
               console.log(found);             
               res.json(found);    
     });     
     });     

     app.post('/api/resetpass', function(req, res) {         

          var email = req.body.email;         

          chgpass.respass_init(email,function(found){             
               console.log(found);             
               res.json(found);    
     });     
     });     

     app.post('/api/resetpass/chg', function(req, res) {         
          var email = req.body.email;         
          var code = req.body.code;       
          var npass = req.body.newpass;       

     chgpass.respass_chg(email,code,npass,function(found){           
          console.log(found);             
          res.json(found);    
     
     });     
     });

     app.post('/api/action', function(req, res) {         

          var act = req.body.action;
	  var userEmail = req.body.userEmail;
          //console.log(userEmail);
          action.action(act, userEmail,function(found){             
               console.log(found);             
               res.json(found);    
          });     
     });


     //app.get('/api/broadcast', function (req, res) {
     //     broadcast.broadcast(function(found){             
     //          console.log(found);             
     //          res.json(found);    
     //     });
     // }); 
     app.get('/api/broadcast', function (req,res) {
            broadcast.displayForm(res);
     }); 
     
     app.post('/api/broadcast', function (req, res) {

          broadcast.broadcast(req, res, function(found){             
               console.log(found);             
               res.json(found);    
          });
      });
    
};
