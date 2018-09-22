//Dependencies
var express = require("express");
var app = express();
// var bodyParser = require("body-parser");
var PORT = 3000;

//Sets up BodyParser
//   app.use(bodyParser.urlencoded({ extended: false }))
//   app.use(bodyParser.json())

//Data
var characters = [
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


app.get("/api/characters/:character", function(req, res) {
   
    var chosen = req.params.character;
    console.log(chosen);
  
    
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
  
   
    return res.send("No character found");
  });



//App is listening
app.listen(PORT, function(){
    console.log("My app is listening on port " + PORT);
})