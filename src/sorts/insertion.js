const {applySort} = require('../utils');

function insertionSort(unsortedArray, reverse) {
    const array = Array.from(unsortedArray);

    let j;
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];

        if (!reverse) {
            for (j = i; array[j - 1] >= temp; j--) {
                array[j] = array[j - 1];
            }
        } else {
            for (j = i; array[j - 1] <= temp; j--) {
                array[j] = array[j - 1];
            }
        }

        array[j] = temp;
    }

    return array;
}

applySort(insertionSort);
