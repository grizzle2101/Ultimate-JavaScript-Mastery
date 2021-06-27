//Lecture 1 - ES6 Classes:
//So now we know all about Objects & prototypical inheritance, lets see some ES6 classes
//That add some Syntactic sugar to make thigs look more like C# and Java.
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

//note - if we head over to https://babeljs.io/ and paste in our code, we can see
//what it looks like in ES5, thus proving this class keyword is just a constructor function!

//note - class keyword enforces the NEW keyword.
