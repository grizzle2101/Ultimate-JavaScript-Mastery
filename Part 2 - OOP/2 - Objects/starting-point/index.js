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
