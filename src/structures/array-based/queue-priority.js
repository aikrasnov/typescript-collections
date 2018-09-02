// https://en.wikipedia.org/wiki/Priority_queue
const assert = require('assert');

class PriorityQueue {
    constructor() {
        this.storage = [];
    }

    insert(element) {
        if (!element.priority) {
            throw new Error('Element should have property priority');
        }

        if (this.storage.length === 0) {
            this.storage.push(element);
            return;
        }

        let insertIndex;
        for (insertIndex = 0; insertIndex < this.storage.length; insertIndex++) {
            if (element.priority > this.storage[insertIndex].priority) {
                break;
            }
        }

        this.storage.splice(insertIndex, 0, element);
    }

    remove() {
        const result = this.storage[this.storage.length - 1];
        this.storage.splice(this.storage.length - 1, 1);
        return result;
    }
}

const priorityQueue = new PriorityQueue();

assert.throws(() => priorityQueue.insert(1), {
    name: 'Error',
    message: 'Element should have property priority'
});

priorityQueue.insert({value: 'foo', priority: 1});
priorityQueue.insert({value: 'foo', priority: 2});
priorityQueue.insert({value: 'foo', priority: 3});
priorityQueue.insert({value: 'foo', priority: -1});
priorityQueue.insert({value: 'foo', priority: -4});
priorityQueue.insert({value: 'foo', priority: 5});
priorityQueue.insert({value: 'foo', priority: 4});

assert.deepStrictEqual(priorityQueue.storage, [
    {value: 'foo', priority: 5},
    {value: 'foo', priority: 4},
    {value: 'foo', priority: 3},
    {value: 'foo', priority: 2},
    {value: 'foo', priority: 1},
    {value: 'foo', priority: -1},
    {value: 'foo', priority: -4},
]);

assert.deepStrictEqual(priorityQueue.remove(), {value: 'foo', priority: -4});
assert.deepStrictEqual(priorityQueue.remove(), {value: 'foo', priority: -1});
assert.deepStrictEqual(priorityQueue.remove(), {value: 'foo', priority: 1});

assert.deepStrictEqual(priorityQueue.storage, [
    {value: 'foo', priority: 5},
    {value: 'foo', priority: 4},
    {value: 'foo', priority: 3},
    {value: 'foo', priority: 2},
]);

priorityQueue.insert({value: 'foo', priority: 6});
priorityQueue.insert({value: 'foo', priority: -6});

assert.deepStrictEqual(priorityQueue.storage, [
    {value: 'foo', priority: 6},
    {value: 'foo', priority: 5},
    {value: 'foo', priority: 4},
    {value: 'foo', priority: 3},
    {value: 'foo', priority: 2},
    {value: 'foo', priority: -6},
]);

