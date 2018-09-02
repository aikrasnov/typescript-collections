// https://en.wikipedia.org/wiki/Selection_sort
import {Comparable} from '../utils/comparable';

export function selectionSort<T extends Comparable<T>>(unsortedArray: T[], reverse?: boolean): T[] {
    const array: T[] = Array.from(unsortedArray);

    for (let i: number = 0; i < array.length; i++) {
        let swapIndex: number = i;

        for (let j: number = i + 1; j < array.length; j++) {
            const compareResult: number = array[j].compareTo(array[swapIndex]);

            if (compareResult === -1 && reverse) {
                swapIndex = j;
            } else if (compareResult === 1) {
                swapIndex = j;
            }
        }

        const temp: T = array[i];
        array[i] = array[swapIndex];
        array[swapIndex] = temp;
    }

    return array;
}
