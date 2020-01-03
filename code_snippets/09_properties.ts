class Point {
  //naming convention of fields: camel case
  //naming convention of underline fields in constructor: with a prefix underline
  constructor(private _x?: number, private _y?: number) {}

  draw() {
    console.log(`X: ${this._x}, Y: ${this._y}`);
  }

  //Getter method
  get x() {
    return this._x; //Inside the class, we do have access to the private members in the class (while we don't have the access from the outside)
  }

  //Setter method: Can only change the value of x if the value is within a range
  set x(value) {
    if (value < 0) throw new Error("Value can't be less than 0");
    this._x = value;
  }
}

let point = new Point(1, 2);
let x = point.x; //We can use properties as fields (not as methods anymore).
point.x = 10; //We can use properties as fields (not as methods anymore).
point.draw();
