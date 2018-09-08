"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = require("./queue");
class PriorityQueue extends queue_1.Queue {
    constructor() {
        super();
        this.storage = [];
    }
    add(element) {
        if (this.storage.length === 0) {
            this.storage.push(element);
            return;
        }
        let insertIndex;
        for (insertIndex = 0; insertIndex < this.storage.length; insertIndex++) {
            if (this.storage[insertIndex].compareTo(element) === 1) {
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
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=queue-priority.js.map