// ***SUE'S AWESOME JAVASCRIPT CHEETSHEAT***

// ____________VARIABLES_____________

// Storing a String
var result="#";

// Storing Values
// Note to self: You would never store a number as a variable because the variable needs to be able to change.
var character = values[Math.floor(Math.random()*messages.length)];
var value = result + character;
var total = 0, i = 1; // you can store multiple values at a time

// Storing an Array
var messages = ["item","item"];

// Storing a Function, although I don't really understand this...
var myFunction = function(parameter) { 
  return parameter*2;
}

myFunction = function(parameter){
  return parameter/2;
}

// Variables in the DOM
var text = "Hello World!";
document.getElementById("demo").innerHTML = text;

// ______________FUNCTIONS_________________
function addingFunction(a,b) {
  return a+b;
}

// Anonymous functions can be stored in variables

var myFunction = function() {
  alert("Hello!");
}

// Callback example
function anotherFunction(anyFunction) {
  console.log(2+2); anyFunction();
}

anotherFunction(myFunction);
// This will return the alert stored in myFunction and console log 4

// ______________LOOPS_________________

// FOR LOOPS
for(i = 0; i < 5; i++) {
  // do something - but what?? Find a good example.
}

// WHILE LOOPS

var total = 0, i=1;
while (i < 10) {
  total += i; // I don't understand what this means.
  i++; // Break statement?
}
console.log(total); // returns the total value

// vs. 

var total = 0, i=1;
while (i < 10) {
  total += i;
  i++;
  console.log(total); // inside the loop, displays the value each time.
}

// _________________ jQuery ____________________

// CSS Animate Event

$(".element-class").animate({ // put the properties inside of {} because they are key:value pairs
  opacity: .25,
  width: '70%' // this needs to be in quotes
}, 2000 ); // close the function with ) and ; to end the statement

// Click Event

$("#element-id").click(
  function() {
    alert('imclicked!'); // don't forget the ; to end the statement
  } // } this closes the function
); // ) closes the click event and ; to end the statement

// Animation Callbacks

$('.box-1').show( // event triggers another function
  function () { // function that is triggered
    $('.box-1').animate({
    opacity: .5
  })
});


