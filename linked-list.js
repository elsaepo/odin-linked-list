class Node {
    constructor() {
        value: null;
        next: null
    }
}

class LinkedList {
    constructor() {
        head: null;
        tail: null;
    }
    append(value) {
        const newNode = new Node();
        newNode.value = value;
        if (this.tail) this.tail.next = newNode;
        if (!this.head) this.head = newNode;
        this.tail = newNode;
    }
    prepend(value) {
        const newNode = new Node();
        newNode.value = value;
        if (this.head) newNode.next = this.head;
        if (!this.tail) this.tail = newNode;
        this.head = newNode;
    }
    size = function () {
        if (!this.head) return 0;
        function getSize(node) {
            if (!node.next) return 1;
            else return 1 + getSize(node.next);
        }
        return getSize(this.head);
    }
    pop = function () {
        if (!this.tail) return null;
        // let last
    }
    toString = function () {
        function getString(node) {
            if (!node) return `null`;
            console.log(node)
            return `( ${node.value} ) -> ` + getString(node.next);
        }
        return getString(this.head);
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

console.log(list)