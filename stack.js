//stack implementation - LIFO data structure.

class Stack {
  constructor() {
    this.stack = [];
  }

  show() {
    if (!this.stack.length) {
      console.log("stack is empty!");
    } else {
      console.log(this.stack);
    }
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    if (!this.stack[this.stack.length - 1]) {
      console.log("stack is empty!");
    } else {
      const poppedItem = this.stack.pop();
      return poppedItem;
    }
  }

  peek() {
    if (!this.stack.length) {
      console.log("stack is empty!");
    } else {
      return this.stack[this.stack.length - 1];
    }
  }
}

//working
let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.show();

stack.peek();


