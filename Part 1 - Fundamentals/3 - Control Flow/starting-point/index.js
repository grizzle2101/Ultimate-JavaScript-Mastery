//Control Flow
//Lecture 1 - IF ELSE
//Conditional Statements:
//IF/ELSE & Case/Switch

let hour = 12;

if (hour >= 6 && hour < 12) console.log("Good Morning!");
else if (hour >= 12 && hour <= 18) console.log("Good Afternoon!");
else console.log("Good Evening");

//Lecture 2 - Switch/Case
let role = "guest";

//Case/switch example
switch (role) {
  case "guest":
    console.log("Guest User!");
    break; //break from loop.
  case "moderator":
    console.log("moderator User!");
    break;
  default:
    console.log("Unknown Role");
}

//IF else Alternative
if (role === "Guest") console.log("Guest");
else if (role === "moderator") console.log("moderator");
else console.log("unknown user!");

//Which is better? In this case IF else, was less code, and its a little cleaner.
//But at the end of the day its up to personal preference.

//Lecture 3 - For:
//Loops - For, While, DoWhile, ForIn & ForOf
//They all do the same thing, but in subtly different ways.

//1 - initial expression, 2 - condition, 3 - increment expression
//let i = 0;                    i < 5               i++
for (let i = 1; i <= 5; i++) {
  console.log("Hello World - ", i);
  //display odd numbers from 1 to 5.
  if (i % 2 !== 0) {
    console.log("1 odd - ", i);
  }
}

//same in reverse order
for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log("2 odd - ", i);
  }
}

//Lecture 4 - While:
//The main difference here, is we have to declare variables OUTSIDE the loop.
//WHILE loops cannot perform multiple declarations in their loop expression.
let i = 0;
while (i < 5) {
  if (i % 2 !== 0) console.log("while odd - ", i);
  i++;
}

//Lecture 5 - DoWhile:
i = 9;
do {
  if (i % 2 !== 0) console.log("do while odd - ", i);
  i++;
} while (i < 5);

//DoWhile are ALWAYS executed, at least once.
//Conditions are evaluated after its first execution.

//Lecture 6 - Infinite Loops:
i = 0;

while (i < 0) {
  console.log(i);
  i++; //comment this for infinite loop
}
//every type of loop can fall into a infinite loop which will crash your browser.

//Lecture 7 - For In:
//We use the ForIn loop to iterate over the properties of an object.
const person = {
  name: "Mosh",
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]); //bracket notation
}

//note - remember we use bracket notation when we do not know ahead of time,
//the properties we're likely to deal with.

const colors = ["red", "green", "blue"];

for (let index in colors) console.log(index, colors[index]);

//Can use this to iterate over loops, but since ES6, there is a better way to do this.

//Lecture 8 - For Of:
for (const item of colors) {
  console.log(item);
}
//benefits: NO index, and we dont need index to retrieve a value.

//Use FOR IN to iterate over properties of an object.
//Use FOR OF to iterate over an array of items.

//Lecture 9 - Break & Continue:
//With all the loops we've looked so far, so very import keywords to understand.

i = 0;
while (i < 10) {
  console.log(i);
  //if(i === 5) break;
  if (i % 2 === 0) {
    i++;
    continue;
  }
  i++;
}

//break - jumps out of the loop
//continue - jump to the next iteration of the loop

//Excercise 1 - Max of Two Numbers:
function calculateMax(a, b) {
  //if(a > b) return a;
  //return b;

  return a > b ? a : b; //ternary operator more efficent.
}

let max = calculateMax(9, 6);
console.log("max - ", max);

//Excersie 2 - Landscape or Portrait:
//Width greater than heigh = landscape

function isLandscape(width, height) {
  return width > height;
}

console.log(isLandscape(1080, 900));

//Excercise 3 - FizzBuzz
//divisible by 3 Fizz
//divisible by 5, buzz
//divisible by both 3 & 5, fizzbuzz

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN; //JavaScript best practice

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  else if (input % 3 === 0) return "Fizz";
  else if (input % 5 === 0) return "Buzz";
  return input;
}

//note - make sure to order most specific condition first, and most generic at the bottom.
//note - use NAN when calculations go wrong, eg like passing strings to fizzbuzz.

i = 1;
while (i <= 15) {
  console.log(fizzBuzz(i));
  i++;
}

console.log(fizzBuzz("WONK"));

//Excercise 4 - Dermit Points:
//Speed limit = 70
//At or below 70 is OK
//for every 5 above the speed limit, 1 point.
//more than 12, points, license is suspended

//My Solution
function checkSpeed(speed) {
  const speedLimit = 70;
  const wiggleRoom = 5;
  let points = 0;
  if (speed > speedLimit) {
    let speedDiff = speed - (speedLimit + wiggleRoom);
    //iterate over diff in increments of 5, for each iteration add 1 point.
    for (let i = 0; i < speedDiff; i += 5) {
      points++;
    }
  }
  return points > 12 ? "License Suspended" : points;
}

console.log("License Check - ", checkSpeed(175));

//Mosh Version:
function checkTheSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed <= speedLimit + kmPerPoint) {
    console.log("Ok");
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) {
      console.log("License Suspended");
    } else {
      console.log("Points - ", points);
    }
  }
}

//note - Use CONST to make sure the value cant be changed after assignment. e.g. with Points.
checkTheSpeed(75);

//note - Moshs solution had slightly tidyer math,
