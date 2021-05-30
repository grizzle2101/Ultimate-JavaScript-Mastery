//Lecutre 1 - Variables:
//var name - deprecated sinced ES6
let name = 'Mosh';
console.log(name);


/* Rules:
-Cannot be a reserved keyword
-Should be meaningful
-Cannot start with a number (1number)
-Cannot contain a space of hyphen (-)
- Are case sensitive
*/

// Multiple Variables
let firstName = 'Mosh', secondName = 'Hammedani';
console.log(firstName ,secondName);

//note - this is not a best practice, should break up declarations onto their own line.


//Lecture 2 - Constants:
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//note - if you know a value should NOT change, use CONST over LET.