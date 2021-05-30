//Lecutre 1 - Variables:
//var name - deprecated sinced ES6
//let name = 'Mosh';
//console.log(name);


/* Rules:
-Cannot be a reserved keyword
-Should be meaningful
-Cannot start with a number (1number)
-Cannot contain a space of hyphen (-)
- Are case sensitive
*/

// Multiple Variables
//let firstName = 'Mosh', secondName = 'Hammedani';
//console.log(firstName ,secondName);

//note - this is not a best practice, should break up declarations onto their own line.


//Lecture 2 - Constants:
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

//note - if you know a value should NOT change, use CONST over LET.


//Lecture 3 - Primitive Types
//primitive(value types) v reference types
//strings, numbers, booleans, undefined & null are all primitive

let name = 'Mosh'; // string literal
let age = 30; // number literal
let isApproved = true // boolean literal
let firstName; // undefined
let lastName = null; //null


//Lecture 4 - Dynamic Typing:
//static languages v dynamic languaes
// With dynamic languages, values can be changed @ runtime, and not with Static Languages.

// demo - dynamic variables - reassign string literal
let testName = 'Test'
console.log(typeof(testName));
testName = 123;
console.log(typeof(testName));