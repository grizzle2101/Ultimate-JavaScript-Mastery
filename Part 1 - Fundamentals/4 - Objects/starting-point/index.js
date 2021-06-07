//Lecture 1 - Basics:
//We should group highly related variables into a function.
let radius = 1;
let x = 1;
let y = 2;

//highly related functions should also be contained inside the object.
function draw() {}
function move() {}

//objects use key value pairs to denote any type of data, variables, other objects & booleans.
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: false,
  draw: function () {
    console.log("draw");
  },
};

//Access using the dot notation
circle.draw();

//OOP - Object Oriented Programming.
//function exists by itself, a function in a class is a method.
//in the next section, we're going to look at different ways to create objects.

//Lecture 2 - Factory Functions:
//In the previous section we used the object literal notation to create an object.
//The problem is to create other objects we're duplicating so much code!
const circle1 = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: false,
  draw: function () {
    console.log("draw");
  },
};

const circle2 = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: false,
  draw: function () {
    console.log("draw");
  },
};

//How do we encapsulate methods so it can be shared with the other classes?
//Answer - Using a Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

//note - if our key and value are the same like radius: radius, we can remove the assignment
//as JavaScript smart enough to map the input to the key.

//Using these Objects
const c1 = createCircle(1);
console.log(c1);
c1.draw();

const c2 = createCircle(2);
console.log(c2);
c2.draw();

//Lecture 3 - Constructor Functions:

//Note - Constructor functions use Pascal Notation.

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

//note - this references an empty object

//new operator, creates empty object, set this to point to object, finally return set object.
const circle = new Circle(1);
const c3 = createCircle(2);

//Whats better? Constructor pattern more familar to OO programmers C#, Java etc.
//Some purists prefer factory functions, but just pick one and stick with it.
