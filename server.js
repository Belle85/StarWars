//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
    routeName: "obi",
    name: "Obi Wan Kenobi",
    role: "Sith Lord",
    age:350,
    forcePoints: 1500
  }];


  //Routes
  //=====================================================================================
  //This is the route for the home page.

  app.get('/', function(req, res){
    //   res.send("Welcome to the start Wars Page!");
    res.sendFile(path.join(__dirname, "index.html"))
      console.log("Welcome to the start Wars Page!");
  });

  //Takes use to the route displaying the page where a charcter can be added.
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });


// Displays all characters
    app.get("/api/characters", function(req, res) {
    return res.json(characters);
    });


// Displays a single character, or shows "No character found"
    app.get("/api/characters/:character", function(req, res) {
 
    //This variable does not get the information from my object put from the route input in the address bar in the browser
    var chosen = req.params.character;
    console.log(chosen);
  
    // Filters to show only the selected character   
    for (var i = 0; i < characters.length; i++) {
       if (chosen === characters[i].routeName){
        // This logs the character object requested.
           console.log(characters[i]);
        //    This returns in the browser the object requested.
           return res.json(characters[i]);
    
       }
    }
  
    // Otherwise display "No character found"
    return res.send("No character found");
  });

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res){

    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newCharacter = req.body;
    console.log(newCharacter);
    
    // We then add the json the user sent to the character array
    characters.push(newCharacter);
    // We then display the JSON to the users
    res.json(newCharacter)
})


//App is listening
app.listen(PORT, function(){
    console.log("My app is listening on port " + PORT);
})