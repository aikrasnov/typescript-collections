const {arrayToString} = require('../utils');
const assert = require('assert');

class OrderedArray {

    /**
     * Create ordered array
     */
    constructor() {
        this.storage = [];
    }

    print() {
        console.log(arrayToString(this.storage));
    }

    /**
     * Add element to ordered array. If element is object, key for sort should be presented.
     */
    add(element) {
        if (!(typeof element).match(/string|number|boolean/)) {
            throw new Error(`Element should have type string, or number, or boolean`);
        }

        if (this.storage.length > 0 && typeof this.storage[0] !== typeof element) {
            throw new Error(`Element should have type ${typeof this.storage[0]}`);
        }

        if (this.storage.length === 0) {
            this.storage.push(element);
            return;
        }

        let insertIndex;
        for (insertIndex = 0; insertIndex < this.storage.length; insertIndex++) {
            if (element > this.storage[insertIndex]) {
                break;
            }
        }

        this.storage.splice(insertIndex, 0, element);
    }

    linearSearch(value) {
        for (const element of this.storage) {
            if (value === element) {
                return true;
            }
        }

        return false;
    };

    binarySearch(value) {
        let left = 0;
        let right = this.storage.length - 1;

        while (left <= right) {
            const middleIndex = left + Math.floor((right - left) / 2);
            const middleValue = this.storage[middleIndex];

            if (middleValue === value) {
                return true;
            }

            if (middleValue > value) {
                left = middleIndex + 1;
            } else {
                right = middleIndex - 1;
            }
        }

        return false;
    }
}

const array = new OrderedArray();
array.add(51);
array.add(-2);
array.add(3);
array.add(-4);
array.add(5);
array.add(6);

assert.deepStrictEqual(array.storage, [51, 6, 5, 3, -2, -4], 'Array should be sorted');

console.log(array.linearSearch(5));
console.log(array.linearSearch(-1235));

console.log(array.binarySearch(5));
console.log(array.binarySearch(-1235));
console.log();

let searched;
console.log('Generate array of numbers...');
const count = 5000; // set bigger number for see different beetween linear and binary search
let time = new Date().getTime();
for (const number of [...new Array(count)].map(() => Number((Math.random() * count).toFixed(0)))) {
    searched = number;
    array.add(number);

    if ((array.storage.length % 100000) === 0) {
        console.log(`Done ${array.storage.length} of ${count} in ${new Date().getTime() - time}ms`);
        time = new Date().getTime();
    }
}
console.log('Complete!');
console.log();

time = new Date().getTime();
console.log(`Linear search (${searched}) start`);
console.log(array.linearSearch(searched));
console.log(`Linear search complete in ${new Date().getTime() - time}ms`);
console.log();

time = new Date().getTime();
console.log(`Binary search (${searched}) start`);
console.log(array.binarySearch(searched));
console.log(`Binary search complete in ${new Date().getTime() - time}ms`);
