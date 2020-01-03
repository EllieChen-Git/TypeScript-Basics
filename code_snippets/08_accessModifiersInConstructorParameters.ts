// Original

class Point {
  private x: number;
  private y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }
}

let point = new Point(1, 2);

point.draw();

// With Access Modifiers in Constructor Parameters

class Point {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }
}

let point = new Point(1, 2);

point.draw();

// If you prefix our parameters in constructor with the Access Modifiers (either private or public)
// TypeScript compiler will generate these fields with exact the same names
// And we don't need the assignment (this.x = x;) either'
// TypeScript compiler will also initialise the fields with values of the arguments for us
