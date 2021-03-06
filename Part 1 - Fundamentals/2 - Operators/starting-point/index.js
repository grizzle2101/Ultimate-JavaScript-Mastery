// //Lecture 2 - Arithmetic Operators:
// let x = 10;
// let y = 3;

// console.log(x + y); //addition operator
// console.log(x - y); //subtraction operator
// console.log(x + y); //multiplication operator
// console.log(x / y); //division operator
// console.log(x % y); //remainer of division operator
// console.log(x ** y); //NEW - exponentiation operator (to the power of)

// //Increnet operator
// //console.log(x);
// //console.log(++x);
// //console.log(x++);

// //Decrement operator
// console.log(x);
// console.log(--x);

// //Lecture 3 - Assignment Operators
// let x = 10; //basic assignment operator
// x++; // x = x + 1, this is also an assignment operator.

// x += 5; //addition assignment operator. Shorthand for x = x + 5;
// x *= 3; //multiplication assignment operator

// //every arthmetic operator, also has an assignment operator version.

// //Lecture 4 - Comparison Operator:
// let x = 1;

// //relational operators
// console.log(x > 0); //result of comparison is true.
// console.log(x >= 0);
// console.log(x < 0); //false
// console.log(x <= 0);

// //equality operator
// console.log(x === 1);
// console.log(x !== 1);

//Lecture 5 - Equality operators:

//strict equality(ensures same type & value)
let x = 1;
console.log(1 === 1);
console.log(1 === "1");

//loose equality
console.log(1 == "1");

console.log(true == "1");

//Lecture 6 - Ternary Opertor:
//If a customer has over 100 points, we want to classify him as gold, else hes silver.
//We can simplify all this logic into a single statement, using the ternary operator.
let points = 90;
let type = points > 100 ? "Gold" : "Silver";

console.log(type);

//Lecture 7 - Logical Operators:
//3 Types of logical operators are AND, OR, NOT.

//Logical AND (&&)
//returns true if BOTH operands are true.
console.log(true && true); //true
console.log(false && true); //false

//real example
let highIncome = true;
let goodCredit = true;
let eligibleForLoan = highIncome && goodCredit;
console.log(eligibleForLoan);

//Logical OR(||)
//Returns true if either of the operarands are TRUE.

console.log(highIncome || goodCredit); //true

goodCredit = false;
console.log(highIncome || goodCredit); //also true (only 1 operand has to be true)

// NOT operator (!)
// Returns
highIncome = false;
goodCredit = false;
eligibleForLoan = highIncome && goodCredit;
let applicationRefused = !eligibleForLoan; //NOT operator

console.log("Eligible:", eligibleForLoan);
console.log("Refused:", applicationRefused);

//Lecture 8 - Logical Operaors with Non-booleans:
//In JavaScript we have the ability to use logical operators on Non-boolean values.

console.log(false || true); //true
console.log(false || "Mosh"); //returns Mosh
console.log(false || 1); //returns 1
//Logical operators do NOT always return true/false
//But instead tries to intrept Falsey or Truthy

//Falsey
//undefined
// null
// 0
// false
// ''
// Nan - not a Number.

//Anything that is not falsy IS truthy

console.log(false || "Mosh"); //Mosh != Falsey, therefor this operation is truthy.
console.log(false || 1 || 2); // As soon as we find truthy value, return it.

//pick a colour, or defaults to normal.
let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);

userColor = "red";
currentColor = userColor || defaultColor;
console.log(currentColor);

//Lecture 9 - Bitwise Operators:

//1 = 00000001
//2 = 00000010
//R = 00000010
console.log(1 | 2); //bitwise OR (|| is logical OR)

//1 = 00000001
//2 = 00000010
//R = 00000000
console.log(1 & 2); //bitwise AND

//real world example - User permission sytem. (read, write & execute)
//We can use bytes to represent the user permission.
//00000100 - read only
//00000110 - read & write
//00000111 - read, write & execute

const readPermisson = 4; //decimal value for 100
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;

myPermission = myPermission | readPermisson | writePermission;
console.log("My Permission - ", myPermission);

let message = myPermission & readPermisson ? "Yes" : "No";
console.log("Message - ", message);

//Take Home:
//with bitwise OR, we can add permissions.
//with bitwide AND, we can check to see permissions.

//Lecture 10 - Operator Precedence:
let test = 2 + 3 * 4; //BEMDAS

console.log(test); //14

test = (2 + 3) * 4;
console.log(test); //20

//Lecture 12 - Swapping Variables:
let a = "red";
let b = "blue";

console.log(a);
console.log(b);

//code to swap variables
c = a;
a = b;
b = c;

console.log(a);
console.log(b);
