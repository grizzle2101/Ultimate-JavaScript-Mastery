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

//Take home - use Object.keys to iterate over instance members.
//use FOR IN loop to iterate over all members, instance & prototype.
//check instance properties using .hasOwnProperty(<property>)

//Lecture 8 - Avoid Extending Built-in Objects:
//So in the future you might be attempted to create functions for existing objects.

Array.prototype.shuffle = function () {
  console.log("shuffle");
};

const array = [];
array.shuffle();

//Why is this not good?
// DONT modify objects you don't own.
// If the JavaScript developers or 3rd parties change this, you will waste DAYS
// debugging issues when this happens.
// Also it could have knock on effects if those methods are used internally or elsewhere.

//Excercise 1 - StopWatch:
//Taking the Stopwatch from earlier, we're going to move its methods to a Prototype.
//Then we will run into a problem with the variables & scope.

function StopWatch() {
  let startTime,
    endTime,
    duration,
    isStarted = 0;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set function(value) {
      duration = value;
    },
  });

  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
  });

  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
  });

  Object.defineProperty(this, "isStarted", {
    get: function () {
      return isStarted;
    },
  });
}

//Prototype Functions
StopWatch.prototype.start = function () {
  if (!this.isStarted) {
    console.log("Start");
    this.isStarted = !this.isStarted;
    this.startTime = new Date();
  } else {
    throw new Error("Stopwatch already Started...");
  }
};

StopWatch.prototype.stop = function () {
  if (this.isStarted) {
    console.log("Stop");
    this.isStarted = !this.isStarted;

    this.endTime = new Date();
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += this.seconds;
  } else {
    throw new Error("Stopwatch already Stopped...");
  }
};

StopWatch.prototype.reset = function () {
  this.startTime = 0;
  this.endTime = 0;
  this.duration = 0;
};

const watch = new StopWatch();
watch.start();

//Take home - We got punked, this was a terrible idea!
//We are only going to ever have 1 instance of the stopwatch, why would you need to
//optimize this. In order to get this to work, we've exposed our stopwatch to call
//kinds of state breaking bugs. Now the variables are accessible from outside,
//and we've violated the whole point of abstraction, to make things simpler, and
//not expose our complexity.

//premature optimization is the root of all evils!
