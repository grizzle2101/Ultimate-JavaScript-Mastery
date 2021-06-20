//Lecture 4 - Property Descriptors:

let person = { name: "Mosh" };
console.log(person);
//After logging person we can still all the Protype methods eg toString()

//But if we look in the keys, we cant?
for (let key in person) {
  console.log(key);
}

//Same with Object Keys
Object.keys(person);

//Some times our properties have attributes, and these attributes prevent enumeration.
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");

console.log(descriptor);
//Results
//-Configureable true - means we can delete
//-enumerable - why we cant iterate over this...
//-writeable - means we can override it
//value - the function used when we call toString()

//Task - Getting our own Attributes:
Object.defineProperty(person, "name", {
  writable: false, //read only now
  enumerable: false, //cant iterate now
  configurable: false, //cant delete now
});

person.name = "john";
console.log("name - ", person.name);
console.log(Object.getPrototypeOf(person));
delete person.name;
//now we can no longer change the name, iterate over its properties or delete name.

//Take home - use property descriptors to configure how our object properties are used.

//Lecture 5 - Constructor Prototypes:

//To find an objects prototype, we use getPrototypeOf.
Object.getPrototypeOf(person);

//One thing to know is the contructor also has a prototype.
//As we know functions are objects, so even constructors are objects!

/*
function Circle(radius) {
  this.radius = radius;
}
*/

// Example - Contructor === base object prototype:
let myProtype = Circle.prototype;
console.log(myProtype);

//Now create a dummy object for comparison
let myObj = {};

console.log("Is Same object?", myProtype.prototype === myObj.prototype);

//Example Array > base array > base object
let array = [];
console.log("Is Same object?", myProtype.prototype === array.prototype);

//Take Home - Contructor prototype is same base oject.

//Lecture 6 - Prototype V Instance Members:

function Circle(radius) {
  this.radius = radius;
  /* moving method to prototype
  this.draw = function () {
    console.log("draw");
  };
  */
  this.move = function () {
    console.log("moving circle...");
  };
}

const c1 = new Circle(1);
const c2 = new Circle(2);

console.log(c1);
console.log(c2);

//Scenario - Now if we have 1000 circles, we're going to have 1000 instances of
//the draw method. This is a lot of wasted memory, whats the solution?
// Using Prototypical inheritance, we can define this method in the prototype.

//Task - set Draw on the Circle Prototype:
Circle.prototype.draw = function () {
  console.log("draw");
  this.toString();
};

console.log(c1); //draw no longer visible on C1 Object
c1.draw(); //but we still have access here.

//Task - Override Methods:
Circle.prototype.toString = function () {
  console.log("Look at me im a Circle...", this.radius);
};

c1.toString();

//Task - Prototype Memmbers invoking instance members:
Circle.prototype.callSomething = function () {
  this.move();
  console.log("movement completed");
};

c1.callSomething();

//Take Home
//Prototype members are variables of function on the prototype, instance members
//exist on the child object.
// 1 - We can add Instance members to the prototype, less memory & duplication.
// 2 - We can override prototype members with instance members.
// 3 - Prototype members can access instance members, and vice versa.

//Lecture 7 - Iterating Instance and Prototype Members:
//note - because we have object reference, any changes we make like adding new methods
//are immediately available.

console.log(Object.keys(c1)); // only returns instance members.

//returns all members. Instance & Prototype
for (const key in c1) {
  console.log("key - ", key);
}

//check instance property
console.log(c1.hasOwnProperty("radius"));
console.log(c1.hasOwnProperty("draw")); // false, its on the prototype
