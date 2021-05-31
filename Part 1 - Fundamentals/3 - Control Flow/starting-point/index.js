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
  name: 'Mosh',
  age: 30
};

for(let key in person){
  console.log(key, person[key]); //bracket notation
}

//note - remember we use bracket notation when we do not know ahead of time, 
//the properties we're likely to deal with.

const colors = ['red', 'green', 'blue'];

for (let index in colors) 
  console.log(index, colors[index]);

//Can use this to iterate over loops, but since ES6, there is a better way to do this.