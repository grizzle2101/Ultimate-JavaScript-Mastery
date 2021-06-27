//Lecture 1 - ES6 Classes:
//So now we know all about Objects & prototypical inheritance, lets see some ES6 classes
//That add some Syntactic sugar to make thigs look more like C# and Java.
/*
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  draw() {
    console.log("draw");
  }
}

const circle = new Circle(2);

console.log("What is this Class? - ", typeof Circle); //Its a constructor Function!
*/
//note - if we head over to https://babeljs.io/ and paste in our code, we can see
//what it looks like in ES5, thus proving this class keyword is just a constructor function!

//note - class keyword enforces the NEW keyword.

//Lecture 2 - Hoisting:
//In JavaScript there are 2 ways to define a function.
//Function Declarations V Function Expressions.

sayHello(); // using hoisted function

// Function Declaration
function sayHello() {}

//sayGoodbye(); // this is not hoisted, will raise error.
// Function Expression
const sayGoodbye = function () {};

// There is a critial difference between the 2, declarations are hoisted.
//eg moved to the top.

//How does this apply to ES6 Classes? Classes are NOT hoisted, so we cannot use them
//before their creation like with traditional functions.

//const c = new Circle(); //cannot access, classes are not hoisted...
//const s = new Square();

// class declaration
class Circle {}

// class expression
const Square = class {};

//Which approach is better declarations or expressions? Although hoisting is a nice
//feature, it really is a sloppy code practice.
// The order in which we create an object, and utilize should make sense when reading
//the code, we should not rely on hoisting as we can be working with Objects without
//understanding the proper order in which it is used.
// Note - Regarding ES6, use Class Declaration, is simpler and cleaner.
