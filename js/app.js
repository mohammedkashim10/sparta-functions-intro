// ==========FUNCTIONS==========
// ===NAMED FUNCTION===
function addNumbers() {
  var result = 10 + 5;
  console.log(result);
}

addNumbers();

// ===ANONYMOUS FUNCTION===
// Saved as variable
var addNumbers = function() {
  var result = 10 + 5;
  console.log(result);
}

addNumbers();

// Saved as property of object
var obj = new Object(); // Same as var obj = {};

obj.addNumbers = function() {
  var result = 10 + 5;
  console.log(result);
}

obj.addNumbers();

// ===ARROW FUNCTION===
var addNumbers = (num1, num2) => {
  var result = num1 + num2;
  console.log(result);
}

addNumbers(10, 5);
addNumbers(2, 8);
addNumbers(7.5, 1);
addNumbers(42, 0);

var addNumbers = (num1, num2) => {
  return num1 + num2;
}

console.log(addNumbers(10, 5));
