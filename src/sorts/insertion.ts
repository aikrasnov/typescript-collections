// https://en.wikipedia.org/wiki/Insertion_sort
import {Comparable} from '../utils/comparable';

export function insertionSort<T extends Comparable<T>>(unsortedArray: T[], reverse?: boolean): T[] {
    const array: T[] = Array.from(unsortedArray);

    let j: number;
    for (let i: number = 1; i < array.length; i++) {
        const temp: T = array[i];

        if (!reverse) {
            j = i;
            for (j = i; array[j - 1].compareTo(temp) >= 0; j--) {
                array[j] = array[j - 1];
            }
        } else {
            for (j = i; array[j - 1].compareTo(temp) < 0; j--) {
                array[j] = array[j - 1];
            }
        }

        array[j] = temp;
    }

    return array;
}
