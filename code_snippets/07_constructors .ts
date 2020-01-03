class Point {
  x: number;
  y: number;

  //'?'after variables makes it optional
  //Once you make a variable optional, the variables on its right need to be optional as well
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
