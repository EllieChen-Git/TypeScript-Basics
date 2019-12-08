let a: number; //type annotation: If you don't know the value of the variable ahead of time (i.e. you can't initialise your variable), use type annotation to ensure the typing of your variable. (if you only declare your variable as 'let a;', then the type of your variable 'a' would be 'any')
let b: boolean;
let c: string;
let d: any; // any data type
let e: number[] = [1, 2, 3]; // declare an array of numbers & [optionally] initialise the array as [1, 2, 3]
let f: any[] = [1, true, "a", false]; //declare an array of any data types & [optionally] initialise the array as [1, true, "a", false]

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2
} //We specify the numbers here for explicitness. Otherwise, the numbers will be automatically assigned.
let backgroundColor = Color.Red;
