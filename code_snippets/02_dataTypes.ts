let a: number;
let b: boolean;
let c: string;
let d: any; // any data type
let e: number[] = [1, 2, 3]; // array of numbers & [optionally] initialise the array as [1, 2, 3]
let f: any[] = [1, true, "a", false]; //any array & [optionally] initialise the array as [1, true, "a", false]

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2
} //We specify the numbers here for explicitness. Otherwise, the numbers will be automatically assigned.
let backgroundColor = Color.Red;
