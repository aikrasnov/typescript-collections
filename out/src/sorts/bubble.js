"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bubbleSort(unsortedArray, reverse) {
    const array = Array.from(unsortedArray);
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            const compare = array[j].compareTo(array[j + 1]);
            if (compare === 1 && !reverse || (reverse && compare === -1)) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
exports.bubbleSort = bubbleSort;
//# sourceMappingURL=bubble.js.map