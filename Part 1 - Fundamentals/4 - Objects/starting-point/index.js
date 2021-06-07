//Lecture 1 - Basics:
//We should group highly related variables into a function.
let radius = 1;
let x = 1;
let y = 2;

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
