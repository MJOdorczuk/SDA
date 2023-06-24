class Node{
    constructor(v, next) {
        this.value = v;
        this.next = next;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }

    get(i) {
        var current = this.head;
        for (var j = 0; j < i; j++) current = current.next;
        return current.value;
    }

    set(i, v) {
        var current = this.head;
        for (var j = 0; j < i; j++) current = current.next;
        current.value = v;
    }

    length() {
        var current = this.head;
        var l = 0;
        while (current !== null) {
            current = current.next;
            l++;
        }
        return l;
    }

    insert(i, v) {
        var current = this.head;
        if (i == 0) this.head = new Node(v, current);
        else {
            for (var j = 0; j < i - 1; j++) current = current.next;
            current.next = new Node(v, current.next);
        }
    }

    remove(i) {
        var current = this.head;
        for (var j = 0; j < i - 1; j++) current = current.next;
        current.next = current.next.next;
    }

    toArray() {
        var current = this.head;
        var vals = []
        while(current !== null) {
            vals.push(current.value);
            current = current.next;
        }
        return vals;
    }
}
