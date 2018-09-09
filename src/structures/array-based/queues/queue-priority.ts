// https://en.wikipedia.org/wiki/Priority_queue
import {Comparable} from '../../../utils/comparable';
import {Queue} from './queue';

export class PriorityQueue<T extends Comparable<T>> extends Queue<T> {

    constructor() {
        super();
        this.storage = [];
    }

    public add(element: T): void {
        if (this.storage.length === 0) {
            this.storage.push(element);
            return;
        }

        let insertIndex: number;
        for (insertIndex = 0; insertIndex < this.storage.length; insertIndex++) {
            if (this.storage[insertIndex].compareTo(element) === 1) {
                break;
            }
        }

        this.storage.splice(insertIndex, 0, element);
    }

    public remove(): T {
        const result: T = this.storage[this.storage.length - 1];
        this.storage.splice(this.storage.length - 1, 1);
        return result;
    }
}
