const {applySort} = require('../utils');

function selectionSort(unsortedArray, reverse) {
    const array = Array.from(unsortedArray);

    for (let i = 0; i < array.length; i++) {

        let swapIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            const takeNewSwapIndex = reverse ? array[j] > array[swapIndex] : array[j] < array[swapIndex];

            if (takeNewSwapIndex) {
                swapIndex = j;
            }
        }

        const temp = array[i];
        array[i] = array[swapIndex];
        array[swapIndex] = temp;
    }

    return array;
}

applySort(selectionSort);
