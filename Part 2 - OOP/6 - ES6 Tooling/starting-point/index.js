const Circle = require("./circle");

const c = new Circle(10);
console.log("Using Circle - ", c);
console.log("Attempting to Access Private members - ", c._radius);
c.draw();
