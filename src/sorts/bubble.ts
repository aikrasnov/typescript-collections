// https://en.wikipedia.org/wiki/Bubble_sort
import {Comparable} from '../utils/comparable';

export function bubbleSort<T extends Comparable<T>>(unsortedArray: T[], reverse?: boolean): T[] {
    const array: T[] = Array.from(unsortedArray);

    for (let i: number = array.length - 1; i > 0; i--) {
        for (let j: number = 0; j < i; j++) {

            const compare: number = array[j].compareTo(array[j + 1]);
            if (compare === 1 && !reverse || (reverse && compare === -1)) {
                const temp: T = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}
