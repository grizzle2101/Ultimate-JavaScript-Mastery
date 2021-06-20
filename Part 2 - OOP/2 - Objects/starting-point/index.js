//Lecture 2 - Object Literals:
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw() {
    console.log("draw circle...");
  },
};

//access using dot notation
circle.draw();

//Note - properties != methods, properties store a value, methods perform some function.

//Lecture 3 - Factories:

//Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("factory draw circle...");
    },
  };
}

const testCircle = createCircle(2);
testCircle.draw();

//Lecture 4 - Constructor:
/*
function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log("constructor draw circle...");
    });
}
*/

const another = new Circle(3);
//1. New Creates Empty Object. 2. Sets object to point to Circle Object. 3. Passes Values.
another.draw();

//Note - we have 2 methods to create an object Factory & Constructor, this keyword
// and new keyword means its a constructor.
// C# Developers might be familiar with the new keyword, providing a new instance
// of a class, but again in JavaScript we don't really have that concept, its sytacic sugar.

//Lecture 5 - Contrsuctor Factory:
//Every object in JavaScript has a constructor function, a way to display the method
//that created the given object.

console.log(Circle.constructor());

//let x = {};
//Even Empty Object literals have the same constructor property.
//same as let x = new Object();
//console.log(x.constructor);

//We have a few other built in contructors.
new String(); //same as '', "", ``
new Boolean(); //same as true, false
new Number(); //same as 1, 2, 3

//Lecture 6 - Functions are Objects:
//Functions are Objects, see these properties.
Circle.name;
Circle.length;
Circle.constructor; //Our previous created constructor.

//Using Built in Function Constructor
const Circle1 = new Function(
  "radius",
  `
  this.radius = radius,
  this.draw = function () {
      console.log("constructor draw circle...");
    };`
);

const testOneCircle = new Circle1(2);
console.log("test my custom constructor funciton - ", another);
console.log("test factory function - ", testOneCircle);

//Same properties & methods are available.

//Note - Our NEW operator is essentially using the call method to pass THIS context
//and any arguments.
Circle.call(window, 1);

//Take Home - Functions in JavaScript are Objects.
//Parameters belong in a function, we PASS in agruments when invoked.

//Lecture 7 - Value V Reference Types:
//We have 2 categories of types, Value Types aka Primitives & Reference Types aka objectc.

//Value Types:
//-Number
//-String
//-Boolean
//-Symbol
//-Undefined
//-null

//Reference Types:
//-Object
//-Function
//-Array

//Example 1 - Primitive Copying
//2 totally seperate variables
let x = 10;
let y = x;
x.value = 20;
console.log(x, " - ", y);

//Example 2 - Reference Type Copying:
//Reference the Same Object
let z = { value: 10 };
let w = z;
z.value = 39;

console.log(z, " - ", w);

//Where Primitive copy the valyue, reference types copy the refernece to the same object.
//This means when we edit the value, we edit it for both variables!

//Example 3 - Function Usage:
//let number = 10; //primitive
let number = { value: 10 }; //reference

function increase(number) {
  //number++; //primitives - number is copied, but only exists within this funciton.
  number.value++; //Reference Types - Can update a reference to Object, without returning.
}

increase(number);
console.log(number);

//Take home - Primitive are copied by their value, reference types are copied by
//their reference.

//Lecture 8 - Adding or Removing Properties:
//In JavaScript our objects are dynamic, so we can add or remove properties on the fly.

const cirlce = new Circle(10);

//Example - Updating Location Property
circle.location = { x: 1 }; //DOT notations
console.log("circle -", circle);

//note - We can also use Bracket Notation.
//This is useful when we dont know the value of a property until runtime.
//also when the propertie names dont conform
circle["location"] = { x: 3 }; //bracket notation also works.
circle["center-location"] = { x: 22 }; //also when the property names dont conform

//Example - Delete a Property:
delete circle.location;
delete circle["location"];

//Take home - We can assign & remove properties at will.

//Lecture 9 - Enumerating Properties:
//Example 1 - Iterate over properties of an Object
for (const key in circle) {
  if (typeof circle[key] !== "function") console.log(key, " - ", circle[key]);
}

//Example 2 - Get All Keys:
const keys = Object.keys(circle);

console.log(keys);

//Example 3 - Check for Property:
if ("radius" in circle) {
  console.log("Circle has a Radius!");
}

//Lecture 10 - Abstraction:

//Lets add some complexity to the Circle.
/*
function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function () {};
  this.draw = function () {
    console.log("constructor draw circle...");
    this.computeOptimumLocation();
  };
}
*/

//const testCircle = new Circle();
//testCircle.computeOptimumLocation(); //I should not be able to access this.

//Task - Abstraction, lets hide the detail. And only expose the interface we want.
//If we can hide computeOptimumLocation and Default location, we dont give the user
//A change to wreck our object, and we're free to change the implementation
//without knock on to consumers of this method...
/*
function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function () {};
  this.draw = function () {
    console.log("constructor draw circle...");
    this.computeOptimumLocation();
  };
}
*/

//Lecture 11 - Private Properties & Methods:
//So carrying on from abstraction, our best way to abstract is to implment private
// properties & methods.

/*
function Circle(radius) {
  this.radius = radius;
  //note - Closure determines what variables are going to be exposed to an inner function.
  //Don't confuse Scope & Closure, scope is temporary but closure is permanent.
  //Set properties
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function () {};

  this.draw = function () {
    console.log("constructor draw circle...");
    computeOptimumLocation();
    console.log("radius - ", this.radius);
    console.log("default location - ", defaultLocation);
  };
}

const testCircle = new Circle();
*/

//Take home - Use let instead of THIS to define private variables.
//Closure dertermines which variables are exposed to an inner function.
//Scope is temporary, but closure persists in memory.
//Example - A variable to store the count of errors, is exposed to inner function
// which reads lines in a file and attempts to sum, or increases error count.

//Lecture 12 - Getters & Setters:
//So Carrying on from the previous lecture, what if we want to read the default location?

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };

  this.draw = function () {
    console.log("draw circle...");
  };

  //Task 1 - Getter Function Property:
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation; //part of the closure of inner function.
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid Location."); //Added error handling
      defaultLocation = value;
    },
  });
}

const testCircleTwo = new Circle(2);

//getting default location
console.log(testCircleTwo.defaultLocation);

//setting default location:
testCircleTwo.defaultLocation = { x: 22, y: 55 };
console.log(testCircleTwo.defaultLocation);

//Take home - use Object.defint property to define getters & setters.

//Excercise 1 - Stopwatch:
//cannot call a method twice in a row...

function StopWatch() {
  //private variables
  let startTime,
    endTime,
    duration = 0;

  //use Closure to allow inner function to use.
  let isStarted = false;

  this.start = function () {
    if (!isStarted) {
      console.log("Start");
      isStarted = !isStarted;
      startTime = new Date();
    } else {
      throw new Error("Stopwatch already Started...");
    }
  };
  this.stop = function () {
    if (isStarted) {
      console.log("Stop");
      isStarted = !isStarted;

      endTime = new Date();
      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;
    } else {
      throw new Error("Stopwatch already Stopped...");
    }
  };

  this.reset = function () {
    startTime = 0;
    endTime = 0;
    duration = 0;
  };

  //Getters for Duration
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new StopWatch();

//sw.start();
//sw.stop();
//console.log("duration - ", sw.duration);
