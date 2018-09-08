"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function insertionSort(unsortedArray, reverse) {
    const array = Array.from(unsortedArray);
    let j;
    for (let i = 1; i < array.length; i++) {
        const temp = array[i];
        if (!reverse) {
            for (j = i; j >= 1 && array[j - 1].compareTo(temp) > 0; j--) {
                array[j] = array[j - 1];
            }
        }
        else {
            for (j = i; j >= 1 && array[j - 1].compareTo(temp) < 0; j--) {
                array[j] = array[j - 1];
            }
        }
        array[j] = temp;
    }
    return array;
}
exports.insertionSort = insertionSort;
//# sourceMappingURL=insertion.js.map