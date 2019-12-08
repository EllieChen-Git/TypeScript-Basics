//Optiona 1: In-line annotation
//let drawPoint = (point: {x: number, y: number}) =>{
//
//}

//Optiona 2: Interfaces (naming convention: PascalCase)
interface Point {
  x: number; //two properties x & y
  y: number;
  draw: () => void; //draw function here, doesn't take any parameter, return 'void'
}

//function
let drawPoint = (point: Point) => {
  // actual function code here
};

drawPoint({
  x: 1,
  y: 2
});
