const {applySort} = require('../utils');

function bubbleSort(array, reverse) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {

            const swap = reverse ? array[j] > array[j + 1] : array[j] < array[j + 1];

            if (swap) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

applySort(bubbleSort);

