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

function Circle(radius) {
  this.radius = radius;
}

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
