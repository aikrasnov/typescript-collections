const assert = require('assert');

class Stack {
    constructor() {
        this.storage = [];
    }

    push(element) {
        this.storage[this.storage.length] = element;
    }

    pop() {
        const result = this.storage[this.storage.length - 1];
        this.storage.length = this.storage.length - 1;
        return result;
    }

    peek() {
        return this.storage[this.storage.length - 1];
    }

    isEmpty() {
        return this.storage.length === 0;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

assert.deepStrictEqual(stack.storage, [1, 2, 3], 'stack should have 1, 2, 3');
assert(stack.isEmpty() === false, 'stack should be not empty');
assert(new Stack().isEmpty() === true, 'new stack should be empty');
assert(stack.peek() === 3, 'peek should return last elem');
assert.deepStrictEqual(stack.storage, [1, 2, 3], 'stack should not change after peek');
assert(stack.pop() === 3, 'pop should return last element and delete him from stack');
assert.deepStrictEqual(stack.storage, [1, 2], 'stack should be changed');