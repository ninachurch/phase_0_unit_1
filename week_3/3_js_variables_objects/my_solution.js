// I paired [by myself, with:] on this challenge.

// __by myself________________________________________
// Write your code below.

var secretNumber = 7;
//orginially made the password "loveDBC" for step 3, then changed it after test 4
var password = "just open the door";
//I originally made var allowedIn = 5 < 6, but then changed it given error #6 that the value should be false
var allowedIn = 6 < 5;
//I couldn't get past error #8, then realized I needed to seperate the array from the term "new Array []". I then went back and cleaned up the code by just merging them.
var members = ["John", "Nina", "Chris", "Mary"];




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// This was daunting to look at in the beginning- I was confused about what I was supposed to be doing. After exploring the beginners guide I got more of a sense, then just began playing around until I realized what we were trying to do. Once I started the test, the rest was very straightforward and I moved through it much faster than I'd expected. It was actually really enjoyable, as it was just like solving small puzzels each time.
// I felt like I had a clear grasp on making variables. I had to go back and re-look up constructors during the "instanceOf" test. I was also unclear if the 
// best way to make the array would be to do it as I did, or set the "var members = new Array;" then fill the array on the next line. 
// I also wasn't sure if I should fill the actual Array with random names or just assign "members[3] = 'Mary';
// Overall though feeling confident!
// 
// 


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

