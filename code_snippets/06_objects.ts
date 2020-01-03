// 'Point' here is a class
class Point {
  x: number;
  y: number;

  draw() {
    console.log("X: " + this.x + ", Y: " + this.y); //We need to use 'this' here
    // console.log(`X: ${this.x}, Y: ${this.y}`); //string interpolation
  }

  getDistance(anotherPoint: Point) {
    //...
  }
}

// 'point' here is an 'object'
let point = new Point(); //shorthand (longhand: let point: Point = new Point();)
point.x = 1;
point.y = 2;
point.draw();
