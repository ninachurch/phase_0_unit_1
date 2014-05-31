
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
};


// __________________________________________
// Psuedocode
//    define var Adam 
//         var Adam = {};
//    name property = Adam
//         var Adam = {name: "Adam"}
//    in terah, add spouse property = adam
//          spouse: adam,
//    set weight property in terah to 125
//          weight: 125,
//    remove property eyeColor in terah
//          delete eyeColor: "brown"
//    in adam, add spouse property = terah
//          spouse: terah,
//    create var children
//          var children = {};
//    add children property to terah
//          children: children
//    add "Carson" to children var
//        var chidren = {carson: {name: "Carson"}};
//    add "Carter" to children var
//        var chidren = {carter: {name: "Carter"}};
//    add "Colten" to children var
//        var chidren = {colton: {name: "Colton"}};;
//    add children property to adam set at the value of terah.children
//        children: terah.children
//
//

// __________________________________________
// Write your code below.


//Initial Code
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 125,
  hairColor: "brown",
  spouse: adam,
  children: children
};

var adam = {
  name: "Adam",
  spouse: terah,
  children: terah.children
};

var children = {
    carson: {
      name: "Carson"
    },
    carter: {
      name:"Carter"
    },
    colton: {
      name: "Colton"
    }
};


//Refractured Code




// __________________________________________
// Reflection: Use the reflection guidelines
// 
// I suppose I should get used to being frustrated, but this exercise was definitely a wakeup call that I'll need to start developing my patience.
// There were multiple instances during this activity where I knew my code was right, but the problem ended up being in the order I was updating my variables.
// During test #6, I got caught up for a bit. It turned out that even though I was just directly copying and pasting the correct code, because I had var adam placed after var terah, terah was using the old, not updated version of adam. This meant that the test kept failing, even though my code was correct. It led me to be quite frustrated, and learn a very valuable lesson once I figured it out.
// Thankfully after this I was aware that this was an issue, and better able to beat the problem as it came up again.
// Overall though I really enjoy the test based challenges- it really helps me take the code bit by bit.
// I got to the end of all of this and went to review others code, and realized I had done the code from an initial way rather than from scratch.
// So I went back and "refractured" by turning it into manipulation style code rather than what I had.
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)