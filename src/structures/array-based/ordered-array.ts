// https://en.wikipedia.org/wiki/Sorted_array
import {Comparable} from '../../utils/comparable';
import {Printable} from '../../utils/printable';
import {ArrayTrasformer} from '../../utils/array';

export class OrderedArray<T extends Comparable<T>> implements Printable {
    private storage: T[];
    private arrayTrasformer: ArrayTrasformer;

    /**
     * Create ordered array
     */
    constructor() {
        this.storage = [];
        this.arrayTrasformer = new ArrayTrasformer(this.storage);
    }

    public print(): void {
        console.log(this.arrayTrasformer.array2String());
    }

    /**
     * Add element to ordered array.
     */
    public add(element: T): void {
        if (this.storage.length === 0) {
            this.storage.push(element);
            return;
        }

        let insertIndex: number;
        for (insertIndex = 0; insertIndex < this.storage.length; insertIndex++) {
            if (element > this.storage[insertIndex]) {
                break;
            }
        }

        this.storage.splice(insertIndex, 0, element);
    }

    public linearSearch(value: T): boolean {
        for (const element of this.storage) {
            if (element.compareTo(value) === 0) {
                return true;
            }
        }

        return false;
    }

    public binarySearch(value: T): boolean {
        let left: number = 0;
        let right: number = this.storage.length - 1;

        while (left <= right) {
            const middleIndex: number = left + Math.floor((right - left) / 2);
            const middleValue: T = this.storage[middleIndex];
            const compareResult: number = middleValue.compareTo(value);

            if (compareResult === 0) {
                return true;
            }

            if (compareResult === 1) {
                left = middleIndex + 1;
            } else {
                right = middleIndex - 1;
            }
        }

        return false;
    }
}
