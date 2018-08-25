const {applySort} = require('../utils');

function selectionSort(array, reverse) {
    for (let i = 0; i < array.length; i++) {

        let swapIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            const takeNewValue = reverse ? array[j] < array[swapIndex] : array[j] > array[swapIndex];

            if (takeNewValue) {
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
