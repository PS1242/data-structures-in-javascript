class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.size = 0;
    }

    push(val) {
        const node = new Node(val);

        if(!this.top) {
            this.top = node;
        }
        else {
            node.next = this.top;
            this.top = node;
        }
        this.size++;
        return this;
    }

    pop() {
        if(this.size <= 0) {
            console.log('Stack is already empty!');
        }
        else {
            this.top = this.top.next;
            this.size--;
        }
        return this;

    }

    peek() {
        if(!this.top) {
            console.log('Stack empty!');
        }
        else {
            console.log(this.top);
        }
        return this;
    }
}

//working
const stack = new Stack();
stack.push(2)
.push(5)
.push(10)
.pop()
.pop()
.peek()
