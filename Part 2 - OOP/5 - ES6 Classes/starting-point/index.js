//'use strict';

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
//class Circle {}

// class expression
//const Square = class {};

//Which approach is better declarations or expressions? Although hoisting is a nice
//feature, it really is a sloppy code practice.
// The order in which we create an object, and utilize should make sense when reading
//the code, we should not rely on hoisting as we can be working with Objects without
//understanding the proper order in which it is used.
// Note - Regarding ES6, use Class Declaration, is simpler and cleaner.

//Lecture 3 - Static Methods:
//In Classical OO, we have instance & static methods. Whats the difference?

/*
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //Instance method
  draw() {
    console.log("draw");
  }

  // Static method
  static parse(str) {
    console.log("string - ", str);
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}
*/

//const circle = new Circle(2);
//console.log("circle - ", circle);

//Static methods are available on the class itself, not the object instance.
//We often use them to create utility functions, that are not for a specific object.
//circle.draw();

//Task - Use Static Method:
//circle.parse(); // is not available on the instance.

//const anotherCirlce = Circle.parse('{"radius": 1}'); //create object from JSON.
//console.log("another circle - ", anotherCirlce);

//Take home - We use STATIC methods to create utility functions, that are not available
//to the instance.

//Another Example Math Classes, we do not new up MATH, we use static utility methods.
Math.max(1, 2);

class Math2 {
  static absolute(value) {
    return value++;
  }
}

Math2.absolute(3);

//Lecture 4 - The This Keyword:
//In this section we're going to test out THIS with the ES6 Classes.

/*
const Circle = function() {
  this.draw = function() {
    console.log('this - ', this); //refers to circle object
  }
}
*/
//const c = new Circle();

// Method Call on an Object - This refers to circle object
//c.draw();

//const draw = c.draw;
//console.log('draw - ', draw);

// Function call - standalone method, this refers to Global Window.
//draw();

//Task - Set us to Strict Mode 'use strict';
// JavaScript has a strict mode, where it will turn warnings into exceptions and change the behavior of THIS.
// Using STRICT MODE will stop us from modifying the global window object, therefore its undefined.

//What if we use Class & Strict Mode?
/*
class Circle {
  draw() {
    console.log("this - ", this);
  }
}

const c = new Circle();
c.draw(); // method call

const draw = c.draw;
draw(); // function call - undefined
*/
//Take home - the body of our classes are executed in STRICT MODE. This prevents us from modifying the Global window object.

//Lecture 5 - Private Members using Symbols:
//In this section we're going to look at 3 methods for creating private members.
//-1. _radius eg convention approach,
//-2. Symbols
//-3. maps
/*
const _radius = Symbol(); //Using symbols to create random value for variable names.
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }
  //computed property name
  [_draw]() {}
}
const c = new Circle(2);

const key = Object.getOwnPropertySymbols(c)[0];

//Test - Accessing Private Variable
console.log("accesing your private value - ", c[key]);

//Test - Showing Computer Function on Prototype
console.log("circle private methods", Circle.prototype);
*/

//Lecture 6 - Private Members using WeakMaps:
// Carrying on from the precvious section, we're going to look at using WeakMaps to
// achieve private members.

/*
const _radius = new WeakMap(); //private radius variable
const _move = new WeakMap(); //private move method
const _privateProperties = new WeakMap(); //merge private properties

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
    _move.set(this, () => {
      console.log("move", this);
    });
    //set merged properites
    _privateProperties.set(this, {
      radius: radius,
      move: () => {},
    });
  }
  draw() {
    _move.get(this)(); //call private function
    console.log("accessing private radius - ", _radius.get(this)); //use private variable
    console.log(
      "accessing private properties - ",
      _privateProperties.get(this).radius
    ); //use merged private data...
  }
}

const c = new Circle(2);
c.draw();

*/

//Lecture 7 - Getters and Setters:
/*
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    //method 2 - object.defineproperty - convoluted
    //Object.defineProperty(this, "radius", { get: function () {} });
  }
  //method 3 - ES6 getter (prefferred method):
  get radius() {
    return _radius.get(this);
  }
  //Setter
  set radius(value) {
    if (value <= 0) throw new Error("invalid radius");
    _radius.set(this, value);
  }

  /*method 1 - return via method - not ideal, want to call directly c.radius
  getRadius() {
    return _radius.get(this);
  }
}

//testing
const c = new Circle(11);
console.log(c.radius);
c.radius = 22;
console.log(c.radius);
*/

//Lecture 8 - Inheritance:
//Now that we learned all about classes in ES6, lets see how we can implement inheritance.

class Shape {
  //Task 2 - Constructor Usage
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

//Task 1 - Inherit using Extends.
class Circle extends Shape {
  //problem - using a constructor when parent class has one...
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log("draw");
  }
}

//Testing
const c = new Circle("green", 2);
c.move();
c.draw();
console.log("C - ", c);

//See Parent & Child Constructor properties.

//Take home - use EXTENDS to inherit from a class.
// When overriding constructors, you must use the super keyword to provide for base class.
