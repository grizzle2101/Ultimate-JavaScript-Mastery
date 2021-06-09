//Lecture 1 - Basics:
//We should group highly related variables into a function.
let radius = 1;
//let x = 1;
//let y = 2;

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
const circle3 = new Circle(1);
const c3 = createCircle(2);

//Whats better? Constructor pattern more familar to OO programmers C#, Java etc.
//Some purists prefer factory functions, but just pick one and stick with it.

//Lecture 4 - Dynamic Nature of Objects:
//One different thing about JavaScript, objects are dynamic.
//That means we can add properties & methods to them at a moments notice.

const circleee = {
  radius: 1,
};

//add properties
circleee.color = "yellow";
circleee.draw = function () {
  console.log("WEEE");
};

console.log(circleee);

//remove properties
delete circleee.color;
delete circleee.draw;

console.log(circleee);

//Wait, this object is const, why can we change it?
//Const is javascript means we cant REASSIGN, not that we cant modify it.
//const circle = {}; cirlce = 2; //will throw errors.

//Lecture 5 - Constructor Property
//Every object in JavaScript has a constructor property.

const circle4 = createCircle(1); //has built in constructor
const circle5 = new Circle(3); //has our custom consturctor

console.log(circle4.constructor);
console.log(circle5.constructor);

//objectl literal consturctor
let z = {};
//let zObj = new Object(); //what happens under the hood.

//string constructor
new String(); //same as '', "" or ``
new Boolean(); //same as true or false
new Number(); //same as 1, 2, 3 ...

//Take home - every object has a constructor property, which points to the method
//used to create itself.

//Lecture 6 - Functions are Objects:
//One of the confusing things about javascript is that  functions are actually objects.

function Circlez(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

//Access some Object Properites...
//console.log(Circlez.name);
//console.log(Circlez.length);

//it even has its constructor
//console.log(Circlez.constructor); //native code? It used our function to create the obj.

//Another way to construct our function object
/*
const testCircle = new Function(
  "radius",
  `
  this.radius = radius;
  this.draw = function(){ 
    console.log('draw')}`
);

const circleOne = new testCircle(1);
circleOne.draw();
*/

//This also created a new function object, this is technicall what NEW does under the hood.
//Calls a method, passes the instance of THIS and the parmaters needed to construct.
//           this, parameters
Circlez.call({}, 1);

//apply works much the same, just takes in an array instead.
Circlez.apply({}, [1, 2, 3]);

//Take Home - In JavaScript, functions ARE objects.

//Lecture 7 - Value VS Reference Types:
/*
let x = 10;
let y = x;

x = 20;
//Notice changing X, does not change Y.
consolel.log(x, y);
*/

//What if we change these to Reference Types?
let x = { value: 10 };
let y = x;

x.value = 20;
console.log(x, y);
//result - 20 & 20.

//Take home - when we create an object, the value is not stored in the x variable.
//X is only a reference to a location in memory, so when we change X, Y also gets the changes.

function increase(number) {
  //number++;
  number.value++;
}

//Value Type
let number = 10;
increase(number);
console.log(number);

//Why no increment? The incremented number only exists inside the scope of the function...
//We have 2 independent copies...

//Reference Type:
let numberz = { value: 10 };
increase(numberz);
console.log(numberz);

//Lecture 8 - Enumerating Properties of an Object:
const circ = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

//In previous lecture, we went over forOf and forIn.
for (let key in circ) {
  console.log(key, circ[key]);
}

/*OF only works on iterables, aka ARRAYS & MAPS.
for (let key of circ) {
  console.log(key, circ[key]);
}
*/

//Hack - We can however get the keys of the Circle object, then iterate over that.
//Object.keys - returns object properties as string array.
for (const key of Object.keys(circ)) {
  console.log(key);
}

//object.enteries returns the properties and methods as a keyvalue pair.
for (const entry of Object.entries(circ)) {
  console.log(entry);
}

//simplest way to iterate properties of an object is using FOR IN loop.
//Simplest way to check if a property or method exists is to use IN, like so.
if ("radius" in circ) console.log("Yes!");

//Lecture 9 - Cloning an Object:
//So using the enumeration for last lecture, we could iterate & copy everything into a new object.

//const another = {};

//method 1 - old school way to copy
/*
for (let key in circ) {
  another[key] = circ[key];
}

console.log(another);
*/

//method 2 - object.assign(target, itemToCopy)
//Object.assign(another, circ);

const another = Object.assign({ color: "yellow" }, circ); //add properties & copy
console.log(another);

//method 3 - spread operator:
//... spread copies all the variables & methods
const anotha = { ...circ };

//Take Home - Object.assign takes 1 or more objects, and combines them.
//Spread operator can be used to easily copy 1 object into another.

//Lecture 11 - String:

//string primitive
const message = "This is my first message";

//string object
const anotherWan = new String("Hi");

console.log(typeof message);
console.log(typeof anotherWan);
//first is string, second is an object

//using string methods:
console.log(message.length);
console.log(message.includes("my"));
console.log(message.startsWith("This"));
console.log(message.endsWith("e"));
console.log(message.indexOf("my"));
console.log(message.replace("first", "second"));
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim()); //removes whitespace, has Trim Left, right etc.

//escape notation
//const messageTwo = "This is \"my\" first message";
//console.log(messageTwo);

console.log(message.split(" ")); //splits string by empty space or characters.

//Lecture 13 - Template Literals:
const maMessage = "this is my \n" + "'first' message";
console.log(maMessage);

//How can we tidy this up? Using template literals

//What kind of Template literals?
//Object {}
//Boolean true or false
//string '' or ""
//Template literals for ES6 and upwards

//benefits - Add line break directly, use placeholders for varaibles, MUCH tidyer
const name = "John";
const anotherOne = `Hi ${name} this is my 
'first' message on day ${2 + 2}.`;

console.log(anotherOne);

//Take home - template literals let us work with strings in a much more flexible
// & cleaner way.

//Lecture 14 - Date:
const now = new Date(); //Date is constructor function
const date1 = new Date("May 11 2019 09:00");
const date2 = new Date(2018, 4, 11, 9);

//getters & setters
now.setFullYear(2012);
now.getFullYear();

console.log(now, date1, date2);

//date formatting
console.log(now.toISOString());

//Note - ISO formatting the most common format to use for web development.

//Excercise 1 - Address Object:
//Create address object with 3 properties, street, City & ZipCode.
//Create a function called showAddress that iterates over & prints the contents.

//Task 1 - Address Object:
//Factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

//Using Factory
const address = createAddress("123 Fake Street", "Sin City", "D04");

//Task 2 - Address Function
//ForIn to display properties of Object
function showAddress(address) {
  for (const key in address) {
    console.log(`${key} - ${address[key]}`); //template literals
  }
}

//Passing Address to Iterator
showAddress(address);

//Excercise 2 - Factory & Constructor Functions:

//factory function
function createAddressFactory(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

//constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const testAddress = new Address("123 Fake Street", "Sin City", "D04");
showAddress(testAddress);

//Excercise 3 - Object Equality:
//Create a function to compare the contents of the 2 objects.
let addressOne = new Address("123 Fake Street", "Sin City", "D04");
let addressTwo = new Address("123 Fake Street", "Sin City", "D04");

//note - as these are reference types === wont work, as it compares their locations, not values.
//we need to compare the properties....

//Task 1 - areEqual:
function areEqual(address1, address2) {
  for (let key in address1) {
    if (address1[key] !== address2[key]) {
      return false;
    }
  }
  return true;
}

console.log("Testing Object Equality - ", areEqual(addressOne, addressTwo));

//Task 2 - areSame: (check if they're the same object reference):
//Simplest way to check if objects are the same, strict equality operator.
function areSame(addressOne, addresstwo) {
  return addressOne === addresstwo;
}
//test different objects
console.log("Are the Same?", areSame(addressOne, addressTwo));

//test assignment of same oreference type
let addressThree = addressOne;
console.log("Are the Same?", areSame(addressOne, addressThree));

//Excercise - Blog Post Object:

function createBlogPostFactory(title, body, author, views, comments, isLive) {
  return {
    title,
    body,
    author,
    views,
    comments: {
      author: comments.author,
      body: comments.body,
    },
    isLive,
  };
}

let blogPost = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    {
      author: "a",
      body: "b",
    },
    {
      author: "c",
      body: "d",
    },
  ],
  isLive: true,
};

console.log("BlogPost - ", blogPost);
