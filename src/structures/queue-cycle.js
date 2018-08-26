const assert = require('assert');

class CycleQueue {
    constructor(size) {
        if (typeof size !== 'number') {
            throw new Error('size should be number');
        }

        this.size = size;
        this.insertPosition = 0;
        this.removePosition = 0;
        this.storage = [];
    }

    insert(element) {
        if (typeof this.size >= this.storage.length || this.storage[this.insertPosition] !== undefined) {
            throw new Error('Queue is full!');
        }

        this.storage[this.insertPosition] = element;
        this.insertPosition++;

        if (this.insertPosition >= this.size) {
            this.insertPosition = 0;
        }
    }

    remove() {
        const result = this.storage[this.removePosition];
        this.storage[this.removePosition] = undefined;
        this.removePosition++;

        if (this.removePosition >= this.size) {
            this.removePosition = 0;
        }
        return result;
    }
}

const queue = new CycleQueue(5);

queue.insert(1);
queue.insert(2);
queue.insert(3);
queue.insert(4);
queue.insert(5);

assert.deepStrictEqual(queue.storage, [1, 2, 3, 4, 5], 'should have all inserted items');
assert.throws(() => queue.insert(6), {
    name: 'Error',
    message: 'Queue is full!',
}, 'should throw error when queue is full');
assert(queue.remove() === 1, 'should remove 1 and return it');
assert(queue.remove() === 2, 'should remove 2 and return it');
assert.deepStrictEqual(queue.storage, [undefined, undefined, 3, 4, 5], 'should not have deleted items');

queue.insert(6);
queue.insert(7);
assert.deepStrictEqual(queue.storage, [6, 7, 3, 4, 5], 'should have all inserted items');
assert(queue.remove() === 3, 'should remove 3 and return it');

queue.insert(8);

assert.throws(() => {queue.insert(9)}, {
    name: 'Error',
    message: 'Queue is full!'
}, 'should throw error instead of overwriting');
