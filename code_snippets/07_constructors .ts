class Point {
  x: number;
  y: number;

  //'?'after parameters makes them optional
  //Once you make a parameter optional, all the parameters on its right need to be optional as well (TypeScript)
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }
}

let point = new Point(); //Now we can create a new objects without parameters
point.draw();
