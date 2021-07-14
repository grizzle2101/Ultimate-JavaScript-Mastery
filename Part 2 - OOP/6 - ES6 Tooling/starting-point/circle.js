const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

module.exports = Circle; // only exporting Circle
//module.exports.Circle = Circle; // exports the Circle
//module.exports.Square = Square; // exports the Circle
