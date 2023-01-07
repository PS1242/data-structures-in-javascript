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
    //display list
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
    //insert node at end of list
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
    //insert node at starting of list
    insertAtBeg(val) {

        if (!this.head) return this.insert(val);

        const node = new Node(val);

        node.next = this.head;
        this.head = node;

        this.length++;

        return this;
        
    }
    //insert node at a specific position
    insertAtPos(val, pos) {
        if(!this.head) {
            return this.insert(val);
        }
        if(pos === 0) {
            return this.insertAtBeg(val);
        }
        if(pos > this.length) {
            console.log('Position is greater than list size, please enter valid value');
            return this;
        }
        else {
            const node = new Node(val);
            let temp = this.head;
            let i = 0;
            while( i < pos - 1) {
                temp = temp.next;
                i++;
            }
            node.next = temp.next;
            temp.next = node
            if(node.next === null) {
                this.last = node;
            } 
            this.length++;
        }
        return this;
    }


    //remove last node of list
    removeLast() {

        if(!this.head) {
            console.log('Linked list is empty!');
            return this;
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
    //remove the head of list
    removeFirst() {
        if(!this.head) {
            console.log('Linked list is empty!');
            return this;
        }
        else {
            //only one node is present
            if(this.head === this.last) {
                this.head = null;
                this.last = null;
                this.length--;
            }
            else {
                this.head = this.head.next;
                this.length--;
            }
        }
        return this;
    }
    //reverses the list
    reverse() {
        if(!this.head) {
            console.log('Linked list is empty!');
        }
        else {
            //only one node in list, do nothing
            if(this.head === this.last) {
                return this;
            }
            else {
                let prev,next,curr;
                prev = null;
                next = null;
                curr = this.head;
                
                while(curr !== null) {
                    next = curr.next;
                    curr.next = prev;
                    prev = curr;
                    curr = next;
                }
                this.last = this.head;
                this.head = prev;
            }
        }
        return this;
    }
}


//working

const list = new Linkedlist();

list
.insert(1)
.insert(2)
.insert(3)
.showList()
.removeLast()
.showList()
.insertAtBeg(10)
.showList()
.insertAtBeg(100)
.showList()
.removeFirst()
.showList()
.reverse()
.showList()
.insertAtPos(999, 2)
.showList();