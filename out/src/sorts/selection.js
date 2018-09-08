"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function selectionSort(unsortedArray, reverse) {
    const array = Array.from(unsortedArray);
    for (let i = 0; i < array.length; i++) {
        let swapIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            const compareResult = array[j].compareTo(array[swapIndex]);
            if (compareResult === -1 && !reverse) {
                swapIndex = j;
            }
            else if (compareResult === 1 && reverse) {
                swapIndex = j;
            }
        }
        const temp = array[i];
        array[i] = array[swapIndex];
        array[swapIndex] = temp;
    }
    return array;
}
exports.selectionSort = selectionSort;
//# sourceMappingURL=selection.js.map