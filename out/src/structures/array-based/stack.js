"use strict";
// https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.storage = [];
    }
    add(element) {
        this.storage.push(element);
    }
    remove() {
        return this.storage.pop();
    }
    peek() {
        return this.storage[this.storage.length - 1];
    }
    isEmpty() {
        return this.storage.length === 0;
    }
}
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map