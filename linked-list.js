class Node {

    constructor(val) {
        this.next = null;
        this.val = val;
    }
}

class Linkedlist {

    constructor() {

        this.head = null;
        this.last = null;
        this.length = 0;
    }

    showList() {

        if(!this.head) {
            console.log('Linked list is empty!');
        }
        else {

            let listValues = [];
            let temp = this.head;

            while(temp) {

                listValues.push(temp.val);
                temp = temp.next;
            }

            console.log(listValues.join(' -> '));
        }

        return this;
    }

    insert(val) {

        const node = new Node(val);

        //first node
        if(!this.head) {
            this.head = node;
            this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }

        this.length++;

        return this;

    }

    removeLast() {

        if(!this.head) {
            console.log('Linked list is empty!');
        }
        else {
            //only one node is present
            if(this.head === this.last) {

                this.head = null;
                this.last = null;
                this.length--;
            }
            else {
                let temp = this.head;

                //traverse till the second last node
                while(temp.next.next) {
                    temp = temp.next
                }

                temp.next = null;
                this.last = temp;
                this.length--;
            }       
        }

        return this;
    }
}


//working

let list = new Linkedlist();

list.insert(1).insert(2).insert(3).showList().removeLast().showList();