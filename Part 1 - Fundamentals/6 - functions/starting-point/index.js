

//Lecture 1 - Declarations VS Expressions:
//In this section we're going to go over Functions in more depth.

//Example 1 - Function Declaration
/*
function walk() {
  console.log('Walk');
}
*/


//Example 2 - Annoymous Function Expression
//let run = function() {console.log('Run')};


//What the difference?
//1 - We dont end a function declaration with ;
//2 - In Function Expressions, we dont give the function a name.

//Example 3 - Named Function Expression
//let runAgain = function run() {console.log('Run')};

//Calling our Function Expressions
/*
run();
let move = run;
move();
*/

//Take home - There are 2 methods for creating a function, Function Declarations & Function Expressions.


//Lecture 2 - Hoisting:
//In the previous lecture we went over function declarations V expressions.

//note = we can call the walk function either before or after the method declaration.
walk();
function walk() {
  console.log('Walk');
}
walk();

/*however - not with function expressions.
run();
let run = function() {console.log('Run')};
run();
*/


//Why is this the case? The JavaScript engine checks our functions, and moved them to the top of the page.
//This is what we called HOISTING.
//N.B - Hoisting is the process of moving function declarations to the top of the file. 
//That is why we can use function declarations BEFORE they're definition.


//Excercise 3 - Arguments:
//We know JavaScript is a dynamic language, we can assign and reassign values at a moments notice.


/*
function sum(a, b) {
  return a + b;
}
*/
//console.log('SUM - ', sum(1, 2));
//console.log('SUM - ', sum(1)); //We can pass 1 argument - 1 + undefined = nan
//console.log('SUM - ', sum()); //We can pass 1 argument - 1 + undefined = nan
//console.log('SUM - ', sum(1, 2, 3, 4)); //We can pass 1 argument - 1 + undefined = nan


//How do we pass any many arguments as we want?
//note - We can access the additional arguments with ARGUMENTS

/*
function sum() {
  let total = 0;
  for (let value of arguments) {
    total += value
  } 
  return total;
}
*/

//Lecture 4 - The Rest Operator:
//In modern JavaScript, if we want to have a function with multiple arguments, we can use the REST operator.

//note - REST operator takes all incoming arguments, into an array.
function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b); //We cam then reduce to a single line.
  return total * (1 - discount);
}

console.log('SUM - ', sum(0.1, 20, 30));

//note - REST must always be the last paramter, as in it takes ALL the rest of the arguments.


//Lecture 5 - Default Parameters:
//There are times when we want supply default parameters for a function.

//What if we want to have a default interest rate?
//options 2 - ES6 Default values in parameters
function interest(principal, rate = 3.5, years = 5) {
  //option 1 - Or Operator
  //rate = rate || 3.5;
  //years = years || 5;

  return principal * rate / 100 * years;
}

console.log('interest - ', interest(10000));

// note - One caveat with default parameters, when you provide a value, you must provide a number for the rest of the parameters.
// eg - function interest(principal, rate = 3.5, years) then call with interest(10000, 5), the JS engine cant figure out which
// parameter gets the value...


//Lecture 6 - Getters & Setters:
//If we want to write out a persons name in several places in the application, this might get a bit tedious?
//This is where Getters & Setters help us

const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  /*Version 1 - Create Method to return FullName
  fullName() { 
    return `${person.firstName} ${person.lastName}`
  }
  */
  //Version 2 - Getters & Setters:
  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'John Joe';
console.log(person);

