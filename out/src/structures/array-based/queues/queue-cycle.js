"use strict";
// https://en.wikipedia.org/wiki/Circular_buffer
Object.defineProperty(exports, "__esModule", { value: true });
const queue_full_error_1 = require("./errors/queue-full-error");
class CircularQueue {
    constructor(size) {
        this.size = size;
        this.storage = Array(this.size);
        this.insertPosition = 0;
        this.removePosition = 0;
    }
    add(element) {
        if (this.storage[this.insertPosition] !== undefined) {
            throw new queue_full_error_1.QueueFullError();
        }
        this.storage[this.insertPosition] = element;
        this.insertPosition++;
        if (this.insertPosition >= this.size) {
            this.insertPosition = 0;
        }
    }
    remove() {
        const result = this.storage[this.removePosition];
        delete this.storage[this.removePosition];
        if (!this.isEmpty()) {
            this.removePosition++;
        }
        if (this.removePosition >= this.size) {
            this.removePosition = 0;
        }
        return result;
    }
    peek() {
        return this.storage[this.removePosition];
    }
    isEmpty() {
        return this.storage.filter((el) => el !== undefined).length === 0;
    }
    getSize() {
        return this.size;
    }
}
exports.CircularQueue = CircularQueue;
//# sourceMappingURL=queue-cycle.js.map