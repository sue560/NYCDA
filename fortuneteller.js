//fortune teller

var numChildren = "2";
var partnersName = "Robert";
var location = "California";
var jobTitle = "Producer";

var future = "You will be a " + jobTitle + " with " + numChildren + " children with " + partnersName + " in " + location;

console.log(future);

// age calculator

var currentYear = 2015;
var birthYear = 1988;
var age = currentYear - birthYear;
console.log(age + " or " + (age - 1 ));

// lifetime supply calculator
var currentAge = 27;
var maxAge = 80;
var perDay = 2;
var total = (perDay * 365) * (maxAge - currentAge);
console.log(total);

// fortune teller function

function tellFortune (numChildren, partnersName, location, jobTitle) {
  var result = "You will be a " + jobTitle + " with " + numChildren + " children with " + partnersName + " in " + location;
  console.log(result);
}

tellFortune(2, "baby", "Colorado", "singer");

// age calculator function 

function calculateage (currentYear, birthYear) {
  age = currentYear - birthYear;
  age2 = age - 1;
  console.log( age + " or " + age2 );
}

calculateage(2018, 2009);
