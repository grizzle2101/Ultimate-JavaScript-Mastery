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
function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log("constructor draw circle...");
    });
}

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

let x = {};
//Even Empty Object literals have the same constructor property.
//same as let x = new Object();
console.log(x.constructor);

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
