// Challenge: Implement a stack with operations Push, Pop, Max, where each operation takes constant time to complete: O(c)

class Stack {
  // fields
  stack: number[]; // Declare 'stack' as a number array
  index: number; // Declare 'index as number
  maxStack: number[];
  maxIndex: number;

  constructor() {
    this.stack = []; // Define 'stack' as an empty array
    this.index = 0; // Define 'index' as 0
    this.maxStack = [];
    this.maxIndex = 0;
  }

  // Add item on top of stack
  push(value: number) {
    this.stack[this.index] = value;

    // Build the 2nd stack as we add item to original stack
    // Create the initial value of 'maxStack'
    if (this.maxIndex === 0) {
      this.maxStack[this.maxIndex] = value;
      this.maxIndex++;
    }

    // Later on, only add 'value' to 'maxStack' if value is the same or bigger than the last ele of original 'stack'
    if (value >= this.stack[this.index - 1]) {
      this.maxStack[this.maxIndex] = value;
      this.maxIndex++;
    }

    // Increase the 'index' of 'stack' every time we add an element onto 'stack'
    this.index++;
  }

  // Remove item from top of stack
  pop() {
    // If 'stack' is an empty array, return this warning
    if (this.index === 0) return 'Empty stack';

    // Build the 2nd stack as we remove item from original stack
    // If the last ele in 'stack' is the same of the last ele in 'maxStack',
    // then remove this element from 'maxStack'
    if (this.stack[this.index - 1] === this.maxStack[this.maxIndex - 1]) {
      this.maxStack.length = this.maxIndex - 1;
      this.maxIndex--;
    }

    // Remove this element from original 'stack'
    this.stack.length = this.index - 1;
    this.index--;
  }

  // Find out the max value in the stack: Grab the top value from 'maxStack' (to make it O(c))
  max() {
    return this.maxStack[this.maxIndex - 1];
  }
}

const stack1 = new Stack();
// console.log(stack1);

stack1.push(4);
// console.log(stack1);
// console.log(stack1.max());

stack1.push(3);
// console.log(stack1);
// console.log(stack1.max());

stack1.push(5);
// console.log(stack1);
// console.log(stack1.max());

stack1.push(5);
console.log(stack1);

stack1.pop();
console.log(stack1);
console.log(stack1.max());
stack1.pop();
console.log(stack1);
console.log(stack1.max());
