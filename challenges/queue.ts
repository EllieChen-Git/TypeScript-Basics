class Queue {
  queue: number[];
  maxQueue: number[];

  constructor() {
    this.queue = [];
    this.maxQueue = [];
  }

  push(value: number) {
    if (this.queue.length === 0) {
      this.maxQueue = [value];
    }
    this.queue = [value, ...this.queue];
    if (
      this.queue.length > 1 &&
      value > this.maxQueue[this.maxQueue.length - 1]
    ) {
      this.maxQueue = [...this.queue].sort();
    } else {
      this.maxQueue = this.maxQueue;
    }
  }

  pop() {
    this.queue.length = this.queue.length - 1;
    this.maxQueue = [...this.queue].sort();
  }

  max() {
    return this.maxQueue[this.maxQueue.length - 1];
  }
}

const queue1 = new Queue();
// console.log(queue1);

queue1.push(1);
console.log(queue1);
console.log(queue1.max());

queue1.push(6);
console.log(queue1);
console.log(queue1.max());

queue1.push(3);
console.log(queue1);
console.log(queue1.max());

queue1.push(6);
console.log(queue1);
console.log(queue1.max());

queue1.push(1);
console.log(queue1);
console.log(queue1.max());

queue1.push(1);
console.log(queue1);
console.log(queue1.max());

// console.log('********* pop() starts here ******');

// queue1.pop();
// console.log(queue1);
// console.log(queue1.max());
// queue1.pop();
// console.log(queue1);
// console.log(queue1.max());
// queue1.pop();
// console.log(queue1);
// console.log(queue1.max());
// queue1.pop();
// console.log(queue1);
// console.log(queue1.max());
