/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        const newNode = new Node(val);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1
            return
        }
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++
            return
        }
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length += 1

    }

    /** pop(): return & remove last item. */

    pop() {
        if (!this.head) return console.log('empty list')
        const poppedVal = this.tail.val
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.previous
        }

        this.length -= 1
        return poppedVal
    }

    /** shift(): return & remove first item. */

    shift() {
        if (!this.head) return console.log('empty list')
        const shiftedVal = this.head.val
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.previous = null
        }

        this.length -= 1
        return shiftedVal
    }

    /** getAt(idx): get val at idx. */

    getAt(idx) {
        if (idx >= this.length) return console.log('Idx out of bounds');
        let count = 0;
        let currentNode = this.head
        while (count <= idx) {
            if (count === idx) return currentNode.val;
            currentNode = currentNode.next
            count += 1
        }
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        if (idx >= this.length) return console.log('Idx out of bounds');
        let count = 0;
        let currentNode = this.head
        while (count <= idx) {
            if (count === idx) {
                currentNode.val = val
            }
            currentNode = currentNode.next
            count += 1
        }
    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
        debugger
        if (idx >= this.length) return console.log('Idx out of bounds');
        if (idx === this.length - 1) return this.push(val)
        if (idx === 0) return this.unshift(val)
        let count = 0;
        let nodeBefore = null;
        let nodeAfter = this.head;
        const newNode = new Node(val);
        while (count <= idx) {
            if (count === idx) {
                nodeBefore = nodeAfter.previous
                nodeBefore.next = newNode
                nodeAfter.previous = newNode
                newNode.next = nodeAfter
                newNode.previous = nodeAfter
            }
            nodeAfter = nodeAfter.next
            count += 1
        }
        this.length += 1
    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {
        if (idx >= this.length) return console.log('Idx out of bounds');
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();
        let count = 0;
        let nodeBefore;
        let nodeAfter;
        let currentNode = this.head

        while (count <= idx) {
            if (count === idx) {
                nodeBefore = currentNode.previous;
                nodeAfter = currentNode.next;
                nodeAfter.previous = nodeBefore;
                nodeBefore.next = nodeAfter;
                this.length--
                return currentNode.val
            }
            currentNode = currentNode.next
            count++
        }

    }

    /** average(): return an average of all values in the list */

    average() {
        if (this.length === 0) return 0
        let sum = 0;
        let currentNode = this.head
        for (let i = 0; i <= this.length - 1; i++) {
            sum += currentNode.val;
            currentNode = currentNode.next
        }
        return sum / this.length
    }
}


const link = new LinkedList();
const linkFull = new LinkedList();
linkFull.push(1)
linkFull.push(2)
linkFull.push(3)
linkFull.push(4)
linkFull.push(5)

module.exports = { LinkedList, link, linkFull };
