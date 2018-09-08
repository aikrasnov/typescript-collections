"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderedArray {
    constructor() {
        this.storage = [];
    }
    /**
     * Add element to ordered array.
     */
    add(element) {
        if (this.storage.length === 0) {
            this.storage.push(element);
            return;
        }
        let insertIndex;
        for (insertIndex = 0; insertIndex < this.storage.length; insertIndex++) {
            if (element.compareTo(this.storage[insertIndex]) === 1) {
                break;
            }
        }
        this.storage.splice(insertIndex, 0, element);
    }
    /**
     * Get the largest element
     */
    peek() {
        return this.storage[0];
    }
    /**
     * Get and remove from array the largest element
     */
    remove() {
        return this.storage.shift();
    }
    isEmpty() {
        return this.storage.length === 0;
    }
    linearSearch(value) {
        for (const element of this.storage) {
            if (element.compareTo(value) === 0) {
                return true;
            }
        }
        return false;
    }
    binarySearch(value) {
        let left = 0;
        let right = this.storage.length - 1;
        while (left <= right) {
            const middleIndex = left + Math.floor((right - left) / 2);
            const middleValue = this.storage[middleIndex];
            const compareResult = middleValue.compareTo(value);
            if (compareResult === 0) {
                return true;
            }
            if (compareResult === 1) {
                left = middleIndex + 1;
            }
            else {
                right = middleIndex - 1;
            }
        }
        return false;
    }
}
exports.OrderedArray = OrderedArray;
//# sourceMappingURL=ordered-array.js.map