// https://en.wikipedia.org/wiki/Merge_sort
import {Comparable} from '../utils/comparable';

export function mergeSort<T extends Comparable<T>>(unsortedArray: T[], reverse?: boolean): T[] {
    const array: T[] = Array.from(unsortedArray);

    function merge(left: T[], right: T[]): T[] {
        const result: T[] = [];

        while (left.length !== 0 && right.length !== 0) {
            if (left[0].compareTo(right[0]) === 1) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        return result;
    }

    function divide(undividedArray: T[]): T[] {
        const left: T[] = undividedArray.slice(0, undividedArray.length / 2);
        const right: T[] = undividedArray.slice(undividedArray.length / 2, undividedArray.length);

        if (left.length <= 1 && right.length <= 1) {
            return merge(left, right);
        }

        return merge(divide(left), divide(right));
    }

    return divide(array);
}
