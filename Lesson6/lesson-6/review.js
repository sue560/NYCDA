// string -> "word" "abc123#$%."
// number -> 1 -1 0.5
// boolean -> true false
// undefined/null -> no value
// array -> ["x", 0, true, 1] // list
// multi-dimensional array -> [["apple", "orange"], ["yellow"]]
// object -> { key: "value" } // dictionary

var num = 1;
var word = "apple";

var colors = ["orange", "yellow"];

console.log(colors[1]);

var shirmung = { lastName: "Bielefeld", age: 50 };

console.log(shirmung.age);
console.log(shirmung["age"]);

// === !== < > <= >=

var age = 30;

if (age < 50) {
  alert("age is less than 50");
} else if (age < 40) {
  alert("age is less than 40");
}

function subNumbers(num1, num2) {
  return num1 - num2;
}

var x = 2;
var y = 1;

var result = subNumbers(x, y);

console.log(result);

function revealName(secretName) {
  return alert(secretName);
}

revealName("smalltalk");
revealName("shirmung");

function printing() {
  return "lskadjflksadjflkadsjf";
}

console.log(printing());

printing();
printing();
printing();

function doorTrick(door) {
  if (door === 1) {
    console.log("you should've chosen door 2");
  } else if (door === 2) {
    console.log("you should've chosen door 3");
  } else if (door === 3) {
    console.log("smalltalk");
  } else {
    console.log("whoops, not a door");
  }
}

doorTrick("cat");
doorTrick(3);

for (var i = 1; i <= 5; i++) {
  console.log(i);
}

var colors = ["green", "yellow", "orange"];

for (var i = 1; i < colors.length; i++) {
  console.log(colors[i]);
}

var bottles = 99;

while (bottles > 0) {
  console.log(bottles + " bottles of beer on the wall");
  bottles--;
}
