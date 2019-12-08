//In order to adhere to 'cohesion' principle, we changed from 'interface' to 'class' here

class Point {
  x: number; // field: storing data
  y: number; // field: storing data

  // method
  draw() {
    //... actual code/logic here
  }

  // method
  getDistance(anotherPoint: Point) {
    //... actual code/logic here
  }
}
