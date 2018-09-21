//Dependencies
var express = require("express");
var app = express();
// var bodyParser = require("body-parser");

var PORT = 3000;

//Data
var yoda = {
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  };
  
  var darthmaul = {
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  };

  var obi = {
    name: "Obi Wan Kenobi",
    role: "Sith Lord",
    age:350,
    forcePoints: 1500
  };


//Sets up BodyParser
//   app.use(bodyParser.urlencoded({ extended: false }))
//   app.use(bodyParser.json())

  //Routes
  app.get('/', function(req, res){
      res.send("Welcome to the start Wars Page!");
      console.log("Welcome to the start Wars Page!");
  });

  app.get("/yoda", function(req, res) {
    res.json(yoda);
  });

  app.get('/darthmaul', function(req, res){
      res.json(darthmaul);
      console.log("This is my Darthmaul Page!");
  });

  app.get('/obi', function(req, res){
    res.json(obi);
    console.log("This is my Obi Page!");
});


//App is listening
app.listen(PORT, function(){
    console.log("My app is listening on port " + PORT);
})