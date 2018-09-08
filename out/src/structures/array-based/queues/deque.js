"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://en.wikipedia.org/wiki/Double-ended_queue
const queue_1 = require("./queue");
class Deque extends queue_1.Queue {
    constructor() {
        super();
    }
    addToBack(element) {
        this.storage.push(element);
    }
    removeFromFront() {
        return this.storage.shift();
    }
    peekFront() {
        return this.storage[0];
    }
}
exports.Deque = Deque;
//# sourceMappingURL=deque.js.map