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
