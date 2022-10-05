// Let's create 4 functions!

// 0. Add 4 to a number

function addFour(inputNumber) {
  let outputNumber = inputNumber + 4;
  return outputNumber;
}

console.log(addFour(4));
console.log(addFour(-1));
console.log(addFour(37));

// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)

function squared(inputNumber) {
  let outputNumber = inputNumber * inputNumber;
  return outputNumber;
}

console.log(squared(2));
console.log(squared(5));
console.log(squared(-3));

// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)

// 2. Get string length!

// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5

function stringLength(inputName) {
  let outputName = inputName.length;
  return inputName + " and it has " + outputName + " letters";
}

console.log(stringLength("testing"))
console.log(stringLength("This is a longer string."))

// 3. Add two numbers together

// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments

function addNumbers(inputX, inputY) {
  let outputZ = inputX + inputY;
  return outputZ;
}

console.log(addNumbers(4, 2));
console.log(addNumbers(6, 3));

// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";

function sayHello(inputHello) {
  let outputHello = "Hello, " + inputHello;
  return outputHello;
}

console.log(sayHello("Paul"));

