export class PriorityQueue {
    // Creates a PriorityQueue object
    constructor() {
        this.items = [];
    }

    // Adds a node to the Queue
    enqueue(node) {
        let contain = false;

        for (var i = 0; i < this.items.length; i++) {
            // Find location of the node in the queue
            if (this.items[i].distance > node.distance) {
                this.items.splice(i, 0, node);
                contain = true;
                break;
            }
        }
        // If priority is largest
        if (!contain) {
            this.items.push(node);
        }
    }

    // Removes node with smallest distance from queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Returns node at the front of the queue
    peekFront() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    // Returns the last element in the queue
    peekRear() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[this.items.length - 1];
    }

    // Returns whether queue is empty
    isEmpty() {
        return this.items.length === 0;
    }
}
