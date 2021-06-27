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
/*
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

//Method 2 - Call Method on the Parent Object:
Square.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this); //Call Parent Version
  console.log("duplicate Square"); //Call Child Version
};

const s = new Square(44);
s.duplicate(); //see new duplicate behavior
*/

//Lecture 6 - Polymorphism:
function Square(size) {
  this.size = size;
}

extend(Square, Shape);

Circle.prototype.duplicate = function () {
  console.log("duplicate circle");
};

Square.prototype.duplicate = function () {
  console.log("duplicate square");
};

const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
  shape.duplicate();
}

//Lecture 8 - Mixins:
//So carrying on from the theory lecture, lets compose some objects.

//Task - create canEat & canWalk:
const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

//Task 2 - Combine behaviors using object.assign:
//const person = Object.assign({}, canEat, canWalk);
//console.log("person object - ", person);

//Task 3 - Create Person Object
function Person() {}
//Task 7 - Refactor - Use Mixin:
mixin(Person.prototype, canEat, canSwim);
//Object.assign(Person.prototype, canEat, canWalk); //copy behaviors to Person Prototype
const person = new Person();

//Task 4 - Use Person Object:
console.log("person object - ", person);
person.walk();
person.eat();

//Task 5 - Introduce Behaviors for Goldfish:
const canSwim = {
  swim: function () {
    console.log("swimming");
  },
};

function GoldFish() {}
//Object.assign(GoldFish.prototype, canSwim, canEat);

//Task 7 - Refactor - Use Mixin:
mixin(GoldFish.prototype, canEat, canSwim);

const goldfish = new GoldFish();
console.log("goldfish object - ", goldfish);
goldfish.swim();
goldfish.eat();

//Task 6 - Create Mixin:
//Creating a Mixin will help us reduce duplication & simplify things.
//rest operator, will allow  to pass unlimited arguments
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

//Take home - Compose objects using Object.assign to assign methods to the target
//classes' prototype.
//-Create a mixin function to avoid duplicating this assignment
//--use the ES6 REST operator to take in ALL additional arguments.
