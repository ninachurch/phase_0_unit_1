// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.
//  2.


// 0. "YOU SIGNED... WHO?!"
// pseudocode
//pick an actor or actress
    //Name: Drew Berrymore
    //Name: Humphrey Bogart
//create objects for the actors in the list, and the new actors
//create an array of actors as objects

var Drew = {
    Name: "Drew Barrymore",
    Age: 39,
    Quote: "Oh, are you from a country where it's okay to stick your fingers all over   someone else's food?"
};

var Humphrey = {
    Name: "Humphrey Bogart",
    Age: 115,
    Quote: "Here's looking at you kid.",
};



// 1. "Here they Come!"

var Adam = {
    Name: "Adam Sandler",
    Age: 47,
    Quote: "That's your home! Are you too good for your home?!",
};

var Kristen = {
    Name: "Kristen Bell",
    Age: 33,
    Quote: "Do you wanna build a snowman?",
};

var Jim = {
    Name: "Jim Carrey",
    Age: 52,
    Quote: "...So you're telling me there's a chance? YEAH!",
};



// 2. "TIME IS MONEY!"

//YOUR CODE HERE!
var clients = [Drew, Humphrey, Adam, Kristen, Jim];

function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
};


var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"
//Create a function that makes it easy to display client data
  //Call on client name and have their information appear in readable format
//Index clients' names
//Create a function that calls on user input (prompt user)
//Grab object from array
//Pull object properties together in a readable format (concatenate different properties)
//Return new string to user

clientSearch = prompt("Which client are you looking for?", "Type a client's first name here.");

clients.indexOf(clientSearch) > -1



// 4. "But wait, there's more!"



// 5.  ** BONUS **


//  6.  Your Reflection:
