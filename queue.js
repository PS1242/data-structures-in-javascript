//queue implementation - FIFO data structure.

class Queue {

  constructor() {
    this.q = [];
  }

  show() {
    if (!this.q.length) {
      console.log("queue is empty!");
    } else {
      console.log(this.q);
    }
  }

  enqueue(val) {
    this.q.push(val);
  }

  dequeue() {
    if (!this.q.length) {
      console.log("queue is empty!");
    } else {
      return this.q.shift();
    }
  }
}


//working

let q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

q.show();

q.dequeue();

q.show();
