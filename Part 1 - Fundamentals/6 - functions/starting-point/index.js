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
  console.log("Walk");
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

console.log("SUM - ", sum(0.1, 20, 30));

//note - REST must always be the last paramter, as in it takes ALL the rest of the arguments.

//Lecture 5 - Default Parameters:
//There are times when we want supply default parameters for a function.

//What if we want to have a default interest rate?
//options 2 - ES6 Default values in parameters
function interest(principal, rate = 3.5, years = 5) {
  //option 1 - Or Operator
  //rate = rate || 3.5;
  //years = years || 5;

  return ((principal * rate) / 100) * years;
}

console.log("interest - ", interest(10000));

// note - One caveat with default parameters, when you provide a value, you must provide a number for the rest of the parameters.
// eg - function interest(principal, rate = 3.5, years) then call with interest(10000, 5), the JS engine cant figure out which
// parameter gets the value...

//Lecture 6 - Getters & Setters:
//If we want to write out a persons name in several places in the application, this might get a bit tedious?
//This is where Getters & Setters help us

/*
const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  /*Version 1 - Create Method to return FullName
  fullName() { 
    return `${person.firstName} ${person.lastName}`
  }
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
*/

//Tutorial 7 - Try & Catch:
//Carrying on from the previous lecture, we can see a few problems if we pass numbers or null to the set fullName method...
//This is where Try & Catch error handling comes in handy, lets do some defensive programming.

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    //Task 1 - Throw Exception
    if (typeof value !== "string") throw new Error("Value is not a string");

    const parts = value.split(" ");
    //Task 2 - Handle ' ' assignment
    if (parts.length !== 2)
      throw new Error("Value must have first & last name");

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  //person.fullName = 2; //force data type error
  // person.fullName = ' '; //second error
  person.fullName = "John Doe";
} catch (ex) {
  console.log("caught exception - ", ex);
}

console.log("person - ", person);

//note - Error V Exception:
//const e = new Error('generic error'); //this is an error.
//throw e; //the moment is we throw an error, it becomes an exception.

//Lecture 8 - Local V Global Scope:
const message = "hi"; // available globally
{
  const message = "hi"; // only available inside the block
}
console.log(message);

//Scope determines where the variable or constant is accessible.
//Const & Let are only accessible inside the block in which they reside.

/*
function test(){
  const message = 'hi'; // only available inside function

  if (true) {
    const another = 'bye'; // only available inside IF block.
  }
  console.log(another);
}


function stop() {
  const message = 'bye'; // valid to use message variable, as it only exists within this scope.
  console.log(color); // using global color
  const color = blue;
  console.log('rewriting - ', color); //bad practice, but you can reassign global variables 
}

const color = 'red'; // global scope
*/

//take home - Const & Let are ONLY accessible within in the code block they reside. If they're not in a block, they're global.

//Lecture 9 - Let V Var:
let x = 0;
var y = 0;

/*version 1 - using let
function start() {
  for(let i=0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
//Throws error, I is not accessible.
*/

//version 2 - using var
function start() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
    var color = "red";
  }
  console.log(i, color);
}
//Now I is accessible!
//note - by using VAR, the value is not limited to the scope where it is defined, but the entire function.
// var is a legacy < 2016, let & const create block scope varliables
start();

var color = "red";
let age = 30;

//note - window object
//Window is a global javascript object
//VAR attatched our color to the Global Window Object, which is something we really dont want to do.
//If another 3rd party library has a color variable, very likely our value gets overriden, and all kinds of problems arise.
console.log(window.color);

function sayHi() {
  console.log("HI");
}

//technical functions are attatched to the window too. We'll learn in the next few tutorial to encapsulte functions in a module,
//which will avoid this problem.
window.sayHi();

//Take Home:
//var = function scoped
//let = block scoped
// window = globally available window object, DONT USE.

//Lecture 10 - This Keyword:
/* This references the Object that is executing the current function.
  If a function, is part of an object we call it a method. So if that method is a function in an object, THIS references that object.
  If the function is a regular function(not part of an object), THIS references the global object (window object in browsers, global in node).

  Rule 1 - Method -> object
  Rule 2 - FUnction -> Global
  */

//Example 1 - THIS meaning the object.
/*
const video = {
  title: 'a',
  play() {
    console.log(this)
  }
};
*/

//video.play(); //Prings the Video Object, properties & methods.

//What if we just JavaScript Dynamics to create anotherm method from outside?
//Because we're still using an object, THIS refers to the Video object.
//video.stop = function(){console.log('stop', this)}
//video.stop();

//Example 2 - Function -> Global
function playVideo() {
  console.log("play video", this);
}

playVideo();

//What about Constructor Functions?
//New creates an empty object, and sets THIS to point to the new empty object.
function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("abc");

//Scenario
/*
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  /*
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag)})
  }
  
  //We can't access the title property anymore? That is because call back function do NOT belong to the object.
  //Therefore THIS refers to the WINDOW, not the Object itself anymore.

  //Soltution 1 - Pass thisArgs?, THIS then becomes object we pass.
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};
*/

//video.showTags();
//Take Home:
// -Using THIS in a function refers to the Object itself
// -Using THIS in a standalone function, refers to the WINDOW object.
// -THIS inside a callback function refers to the WINDOW.
// - There are optional thisArguments to pass a reference to the parent object (video object).
//Not every method in JavaScript has the thisArgs? parmeter to pass a new reference, we will discuss more in the next lecture.

//Lecture 11 - Changing This:
//Carrying on from the previous lecture, we're going to look at more ways of
//changing this.

/*
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    //Solution 1 - Store This.
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(this.title, self);
    });
  },
};

*/

function playVideo() {
  console.log(this);
}

//Solution 2 - Pass THIS using CALL.
playVideo.call({ name: "Mosh" });

//Solution 3 - Pass THIS using APPLY.
playVideo.apply({ name: "Josh" }, ["a", "b"]);

//CALL V APPLY?
//Call can send multiple arguments.
playVideo.call({ name: "Mosh" }, "a", "b");

//Solution 4 - Bind:
//Bind does not call playVideo, it returns a new function and sets THIS.
const fn = playVideo.bind({ name: "Fosh" });
fn();
//OR const fn = playVideo.bind({ name: "Fosh" })(); //Calls function

playVideo();

/* Using Bind
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    ); //ss THIS video obj using Bind.
  },
};
video.showTags();
*/

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  //Solution 5 - Using Arrow Functions.
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

video.showTags();

//The great thing about arrow functions is they send a reference of self, so we
//dont need to use any of the other approaches from ES6 and beyond.

//Take Home:
//We looked at a few approaches
//1 - Using a variable to store SELF.
//2 - Using bind to set SELF
//3 - Using arrow functions, most clean & modern approach to passing self.

//Lecture 12 - Sum of Arguments:
// Part 1 - Sum of all the arguments given.
// Part 2 - Given an array, transform & return correct results.

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];

  return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3]));

//Take home - use spread operator to take in all argument as an array.

//Excercise 2 - Area of Circle
//Create a Circle Object with a property for radius, and a read only field for area.

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log("Area - ", circle.area);
circle.area = 222; //test its read only
console.log("Area - ", circle.area);
