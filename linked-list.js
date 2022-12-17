class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.tail) this.tail.next = newNode;
        if (!this.head) this.head = newNode;
        this.tail = newNode;
    }
    prepend(value) {
        const newNode = new Node(value);
        if (this.head) newNode.next = this.head;
        if (!this.tail) this.tail = newNode;
        this.head = newNode;
    }
    size() {
        if (!this.head) return 0;
        let current = this.head;
        let size = 1;
        while (current.next){
            size++;
            current = current.next;
        }
        return size;
    }
    at(index){
        if (index < 0) return null;
        let currentIndex = 0;
        let current = this.head;
        while (currentIndex !== index){
            if (!current.next) return null;
            current = current.next;
            currentIndex++;
        }
        return current;
    }
    pop() {
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
    insertAt(index, value){
        if (index === 0) return this.prepend(value);
        let previousNode = this.at(index-1);
        if (!previousNode) return null;
        let newNode = new Node(value);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        if (this.tail === previousNode) this.tail = newNode;
    }
    deleteAt(index){
        if (index < 0) return null;
        let deletedNode = this.at(index);
        if (!deletedNode) return null;
        if (this.head === deletedNode){
            if (deletedNode.next){
                this.head = deletedNode.next;
                deletedNode.next = null;
            } else {
                this.head === null;
                this.tail === null;
            }
            return deletedNode;
        }
        let previousNode = this.at(index-1);
        previousNode.next = deletedNode.next;
        if (!previousNode.next) this.tail = previousNode;
        deletedNode.next = null;
        return deletedNode;
    }
    contains(value) {
        let current = this.head;
        while(current){
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }
    find(value) {
        let index = 0;
        let current = this.head;
        while(current){
            if (current.value === value) return index;
            current = current.next;
            index++;
        }
        return null;
    }
    toString() {
        function getString(node) {
            if (!node) return `null`;
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