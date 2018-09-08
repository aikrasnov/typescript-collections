// https://en.wikipedia.org/wiki/Double-ended_queue
import {Queue} from './queue';

export class Deque<T> extends Queue<T> {
    constructor() {
        super();
    }

    public addToBack(element: T): void {
        this.storage.push(element);
    }

    public removeFromFront(): T | undefined {
        return this.storage.shift();
    }

    public peekFront(): T | undefined {
        return this.storage[0];
    }
}
