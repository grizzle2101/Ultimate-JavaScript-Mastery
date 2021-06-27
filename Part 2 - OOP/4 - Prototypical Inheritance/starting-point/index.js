//Lecture 1 - Creating your own prototypical inheritance:
//Carrying on from the previous section we had the Cirlce, and we learned
//about using prototypes to add functions to the prototype.

/*
function Circle(radius) {
  this.radius = radius;
}
*/

//Task - Create Shape Object to Contain reuseable methods.
//function Shape() {}

/*
Shape.prototype.draw = function () {
  console.log("draw");
};

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};
*/

//How do we inherit from Shape? - Using Object.Create
//Circle.prototype = Object.create(Shape.prototype);
//Square.prototype = Object.create(Shape.prototype);

const circle = new Circle(3);
const square = new Square();

console.log("Testing Circle Inheritance - ", circle);
console.log("Testing Square Inheritance - ", square);

function Square() {}

//Lecture 2 - Resetting the Constructor:
console.log("Reconstructed Circle - ", new Circle.constructor());
//console.log("Shape Prototype - ", new Circle.prototype.constructor()); //return

//Note - always set Constructor & Prototype togther.
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; //set constructor to correct function.

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

//Test
console.log(
  "Revised Circle Constructor - ",
  new Circle.prototype.constructor()
);

//Lecture 3 - Calling the Super Contructor

//Task - Modify Shape to take in Color.
function Shape(color) {
  this.color = color;
}

Shape.prototype.draw = function () {
  console.log("draw");
};

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

const testCircle = new Circle(22, "red");
console.log("Checking Circle -", testCircle); //No Color... After modification, Color!

//How do we call the Super Constructor?
//Task - Set color - Using Shape.call and passing THIS obj.
function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
