// Prevent us from attempting to use variables
// that are not declared
"use strict"

// Create some const variables and attempt to reassign them
const favoriteFood = "Pizza";
console.log(favoriteFood);
// Uncomment the next line to see the error:
// favoriteFood = "Burger"; // This will throw a TypeError: Assignment to constant variable

// Create let variables and reassign values
let currentMood = "Happy";
console.log(currentMood); // Output: Happy

currentMood = "Excited";
console.log(currentMood); // Output: Excited

// Experiment with let and const scope
if (true) {
  const fixedValue = "I am constant inside the block";
  let variableValue = "I can change inside the block";
  console.log(fixedValue);
  console.log(variableValue);

  variableValue = "I have changed";
  console.log(variableValue);
}
// Uncomment the next line to see the error:
// console.log(fixedValue); // ReferenceError: fixedValue is not defined
// console.log(variableValue); // ReferenceError: variableValue is not defined

