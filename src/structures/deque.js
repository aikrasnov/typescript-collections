const assert = require('assert');

// https://en.wikipedia.org/wiki/Double-ended_queue
class Deque {

    constructor() {
        this.storage = [];
    }

    pushFront(element) {
        for (let i = this.storage.length; i > 0; i--) {
            this.storage[i] = this.storage[i - 1];
        }

        this.storage[0] = element;
    }

    pushBack(element) {
        this.storage[this.storage.length] = element;
    }

    popFront() {
        return this.storage.splice(0, 1)[0];
    }

    popBack() {
        return this.storage.splice(this.storage.length - 1, 1)[0];
    }
}

const deqa = new Deque();

deqa.pushBack(1);
deqa.pushBack(2);
deqa.pushBack(3);

assert.deepStrictEqual(deqa.storage, [1, 2, 3]);

deqa.pushBack(4);

assert.deepStrictEqual(deqa.storage, [1, 2, 3, 4]);

deqa.pushFront(5);

assert.deepStrictEqual(deqa.storage, [5, 1, 2, 3, 4]);

assert(deqa.popBack() === 4);
assert.deepStrictEqual(deqa.storage, [5, 1, 2, 3]);
assert(deqa.popFront() === 5);
assert.deepStrictEqual(deqa.storage, [1, 2, 3]);
assert(deqa.popBack() === 3);
assert.deepStrictEqual(deqa.storage, [1, 2]);
assert(deqa.popFront() === 1);
assert.deepStrictEqual(deqa.storage, [2]);
assert(deqa.popBack() === 2);
assert.deepStrictEqual(deqa.storage, []);
assert(deqa.popBack() === undefined);
assert(deqa.popFront() === undefined);
assert.deepStrictEqual(deqa.storage, []);

deqa.pushBack(4);

assert.deepStrictEqual(deqa.storage, [4]);

deqa.pushFront(5);

assert.deepStrictEqual(deqa.storage, [5, 4]);

deqa.pushFront(6);

assert.deepStrictEqual(deqa.storage, [6, 5, 4]);

deqa.pushBack(7);

assert.deepStrictEqual(deqa.storage, [6, 5, 4, 7]);
