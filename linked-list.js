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
        let current = this.head;
        let size = 1;
        while (current.next){
            size++;
            current = current.next;
        }
        return size;
    }
    pop = function () {
        if (!this.tail) return null;
        let current = this.head;
        if (this.head === this.tail){
            let value = this.head.value;
            this.head = null;
            this.tail = null;
            return value;
        }
        while (current.next.next){
            current = current.next
        }
        let value = current.next.value;
        this.tail = current;
        current.next = null;
        return value;
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