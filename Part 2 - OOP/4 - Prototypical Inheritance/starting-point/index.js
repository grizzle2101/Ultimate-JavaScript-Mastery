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

//Lecture 2 - Resetting the Constructor:
console.log("Reconstructed Circle - ", new Circle.constructor());
//console.log("Shape Prototype - ", new Circle.prototype.constructor()); //return

//Note - always set Constructor & Prototype togther.
//Circle.prototype = Object.create(Shape.prototype);
//Circle.prototype.constructor = Circle; //set constructor to correct function.
extend(Circle, Shape);

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

//Lecture 4 - Intermediate Function Inheritance:
/*
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Parent;
}

function Square(size) {
  this.size = size;
}

extend(Square, Shape);
//Square.prototype = Object.create(Shape.prototype);
//Square.prototype.constructor = Square;

const testSquare = new Square(10);
console.log("Test Square - ", testSquare);

//Task - Intermediate Function Inheritance
//note we're using uppercase, expecting these to be Constructor Functions...

//Testing Results:
testSquare.draw();
*/

//Lecture 5 - Method Overriding:

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Parent;
}

function Square(size) {
  this.size = size;
}

extend(Square, Shape); //Inherit here

//method 1 - Call Method on the Child Object:
/*
Square.prototype.duplicate = function () {
  //then reassign
  console.log("duplicate Square");
};
*/

//Method 2 - Call Method on the Parent Object:
Square.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this); //Call Parent Version
  console.log("duplicate Square"); //Call Child Version
};

const s = new Square(44);
s.duplicate(); //see new duplicate behavior
