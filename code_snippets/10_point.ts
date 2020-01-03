//We added the 'export' keyword here, now Point class is accessible outside the file

export class Point {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }
}
