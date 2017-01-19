class LinkNode {
    data: number;
    next: LinkNode;
    
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }

    public display() {
        return this.data;
    }
}

class SinglyLinkedList {
    _length: number;
    head: LinkNode;

    constructor() {
        this._length = 0;
        this.head = null;
    }

    // Adds a value to linked list
    public add(value: number) {
        let node = new LinkNode(value);
        let currentNode = this.head;

        // If the currentNode is null, it means the list is empty
        if(!currentNode) {
            this.head = node;
            this._length++;

            return node;
        }

        // Get the last node of the list
        while(currentNode.next) {
            currentNode = currentNode.next;
        }   

        currentNode.next = node;
        this._length++;

        return node;
    }

    public length(): number {
        return this._length;
    } 

    public toString() : string {
        if(this._length == 0) {
            return "[]";
        }

        let currentNode = this.head;

        let displayString = "[";

        while(currentNode) {
            displayString += ` ${currentNode.data} `;
            currentNode = currentNode.next;
        }

        displayString += " ]";

        return displayString;
    }
}


let list = new SinglyLinkedList();

list.add(5);
list.add(6);
list.add(7);

console.log("" + list);
