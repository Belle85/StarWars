//Dependencies
var express = require("express");
var app = express();
// var bodyParser = require("body-parser");
var PORT = 3000;

//Sets up BodyParser
//   app.use(bodyParser.urlencoded({ extended: false }))
//   app.use(bodyParser.json())

//Data
var character = [
    {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
    },
    {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
    },
    {
    routeName: " Obi",
    name: "Obi Wan Kenobi",
    role: "Sith Lord",
    age:350,
    forcePoints: 1500
  }];




  //Routes
  app.get('/', function(req, res){
      res.send("Welcome to the start Wars Page!");
      console.log("Welcome to the start Wars Page!");
  });

  app.get("/:character", function(req, res){
      console.log("This is my first character " + character[0].name);
      var chosen = req.params.character[0].name;
      console.log(chosen);
      res.end();
  })

//These are the individual routes if we were using each charater as their own variable instead of a global Character object for all of them.
//   app.get("/yoda", function(req, res) {
//     res.json(yoda);
//   });

//   app.get('/darthmaul', function(req, res){
//       res.json(darthmaul);
//       console.log("This is my Darthmaul Page!");
//   });

//   app.get('/obi', function(req, res){
//     res.json(obi);
//     console.log("This is my Obi Page!");
// });


//App is listening
app.listen(PORT, function(){
    console.log("My app is listening on port " + PORT);
})