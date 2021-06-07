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

//Excercise 5 - Even & Odd Numbers:
showNumbers(10);

function showNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    /*
    if (i % 2 === 0) {
      console.log(i, " - Even");
    } else {
      console.log(i, "- Odd");
    }
    */

    //2 liner
    const message = i % 2 === 0 ? "Even" : "Odd";
    console.log(message);
  }
}

//Excercise 6 - Count Truthy:
//Iterate over an array, and count Truthy elements.

function countTruthy(array) {
  let count = 0;

  for (const i of array) {
    //only works for numbers

    /* my solution
    if ((i || "2") === i) {
      console.log(i, "Item is Truthy!");
      count++;
    }
    */
    if (i) count++; //more efficent
  }

  console.log("count - ", count);
}

countTruthy([0, 1, 2, 3, ""]);

//truthy values are non boolean values. JS engine tries to interpret as true/false.
//Falsey values - Undefined, null, '', false, 0, NaN
//test for Truthy if(value)

//Excercise 7 - String Properties:
//Display the properties that contain a string value...
const movie = {
  title: "a",
  year: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(inputValue) {
  for (const key in inputValue) {
    if (typeof inputValue[key] === "string") console.log(key, inputValue[key]);
  }
}

//note - use FOR IN to get the properties & values from an object.

//Excercise 8 - Sum of Multiples of 3 & 5:
//iterate over a limit, sum the occurences of multiples of 3 & 5.
//multiples of 3 - 3, 6, 9
//multiples of 5 - 5, 10

console.log(sum(10));

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}

//note - lines that are highly related, should be kept togther.

//Excercise 9 - Grades:
const marks = [80, 80, 50];

//Average out
// 1 - 59 = F
//60 - 69 = D
//70 - 79 = C
//80 - 89 = B
//90 - 100 = A

console.log(calculateGrades(marks));

/*
function calculateGrades(marks) {
  let averageGrade = 0;

  //sum grades
  for (const mark of marks) {
    averageGrade += mark;
  }

  //average grades
  averageGrade = averageGrade / marks.length;
  console.log("Average Grade - ", averageGrade);

  //logic for returning Grade
  if (averageGrade < 60) console.log("F");
  else if (averageGrade < 70) console.log("D");
  else if (averageGrade < 80) console.log("C");
  else if (averageGrade < 90) console.log("B");
  else if (averageGrade < 100) console.log("A");
  else console.log(NaN);
}
*/

//refactored for single responsibility
function calculateAverage(array) {
  let sum = 0;

  for (const value of array) {
    sum += value;
  }
  return sum / array.length;
}

function calculateGrades(array) {
  const average = calculateAverage(array);
  if (average < 60) return "F";
  else if (average < 70) return "D";
  else if (average < 80) return "C";
  else if (average < 90) return "B";
  return "A";
}

//Excercise 10 - Stars:

showStars(15);

/* My Version
function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log(getStars(i));
  }
}

function getStars(row) {
  let stars = [];
  for (let i = 0; i < row; i++) {
    stars[i] = "*";
  }
  return stars.join("");
}
*/

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let stars = "";
    for (let i = 0; i < row; i++) {
      stars += "*";
    }
    console.log(stars);
  }
}

//Excercise 11 - Prime Numbers:
//Show all prime numbers up to a limit.
//Composite numbers will have many numbers that divide into it evenly eg 12
//EG - 12 - 1, 2, 4, 6, 12
//prime number has only 2 factors, 1 and itself
//13 - 1, 13.

showPrimes(20);

function showPrimes(limit) {
  console.log("limit - ", limit);
  for (let number = 2; number < limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false;
  }
  return true;
}

//note - if you have nested loops, probably a good indicator you should break up
//the functions.
