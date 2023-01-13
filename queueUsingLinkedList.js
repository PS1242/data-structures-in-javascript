class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {

    constructor() {
        this.first = null;
        this.size = 0;
    }

    enqueue(val) {

        const node = new Node(val);

        //this is first node
        if(!this.first) {
            this.first = node;
        }
        else {
            node.next = this.first;
            this.first = node;
        }

        this.size++;
        return this;
    }

    dequeue() {

        if(!this.first) {
            console.log('Queue is empty!');
        }
        else {
            this.first = this.first.next;
        }
        this.size--;
        return this;
    }

    peek() {
        if(!this.first) {
            console.log('Queue is empty!');
        }
        else {
            console.log(this.first);
        }
        return this;
    }
}

//working

const queue = new Queue();
queue.enqueue(4).enqueue(5).dequeue().peek();