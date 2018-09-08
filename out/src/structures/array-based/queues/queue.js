"use strict";
// https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.storage = [];
    }
    add(element) {
        this.storage.unshift(element);
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
exports.Queue = Queue;
//# sourceMappingURL=queue.js.map