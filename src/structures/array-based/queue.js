// https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
const assert = require('assert');

class Queue {
    constructor() {
        this.storage = [];
    }

    insert(element) {
        for (let i = this.storage.length; i > 0; i--) {
            this.storage[i] = this.storage[i - 1];
        }

        this.storage[0] = element;
    }

    remove() {
        const result = this.storage[this.storage.length - 1];
        this.storage.splice(this.storage.length - 1, 1);
        return result;
    }

    peek() {
        return this.storage[this.storage.length - 1];
    }

    isEmpty() {
        return this.storage.length === 0;
    }

}

const queue = new Queue();
queue.insert(1);
queue.insert(2);
queue.insert(3);

assert.deepStrictEqual(queue.storage, [3, 2, 1], 'should put all element to queue');
assert(queue.remove() === 1, 'should extract first element');
assert.deepStrictEqual(queue.storage, [3, 2], 'should not have 1 in queue');
assert(queue.peek() === 2, 'should show first element');
queue.insert(4);
assert.deepStrictEqual(queue.storage, [4, 3, 2], 'should add 4 to queue');
assert(queue.peek() === 2, 'peek should show 2');
assert(queue.remove() === 2, 'remove should delete and return 2');
assert(queue.isEmpty() === false, 'isEmpty should return false');
queue.remove();
queue.remove();
assert(queue.isEmpty(), 'isEmpty should return true after deleting all elements');
