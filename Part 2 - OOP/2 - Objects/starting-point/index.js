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
function Cirlce(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log("constructor draw circle...");
    });
}

const another = new Cirlce(3);
//1. New Creates Empty Object. 2. Sets object to point to Circle Object. 3. Passes Values.
another.draw();

//Note - we have 2 methods to create an object Factory & Constructor, this keyword
// and new keyword means its a constructor.
// C# Developers might be familiar with the new keyword, providing a new instance
// of a class, but again in JavaScript we don't really have that concept, its sytacic sugar.
