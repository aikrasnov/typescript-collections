// https://en.wikipedia.org/wiki/Priority_queue
import {Comparable} from '../../utils/comparable';
import {Printable} from '../../utils/printable';
import {ArrayTransformer} from '../../utils/array';

export class PriorityQueue<T extends Comparable<T>> implements Printable {
    private readonly storage: T[];
    private arrayTrasnformer: ArrayTransformer;

    constructor() {
        this.storage = [];
        this.arrayTrasnformer = new ArrayTransformer(this.storage);
    }

    public insert(element: T): void {
        if (this.storage.length === 0) {
            this.storage.push(element);
            return;
        }

        let insertIndex: number;
        for (insertIndex = 0; insertIndex < this.storage.length; insertIndex++) {
            if (element.compareTo(element) === 1) {
                break;
            }
        }

        this.storage.splice(insertIndex, 0, element);
    }

    public remove(): T {
        const result: T = this.storage[this.storage.length - 1];
        this.storage.splice(this.storage.length - 1, 1)
        return result;
    }

    public print(): void {
        console.log(this.arrayTrasnformer.array2String());
    }
}
