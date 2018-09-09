// https://en.wikipedia.org/wiki/Circular_buffer

import {QueueFullError} from './errors/queue-full-error';
import {Collection} from '../../collection';

export class CircularQueue<T> implements Collection<T> {
    private readonly storage: T[];
    private readonly size: number;
    private insertPosition: number;
    private removePosition: number;

    constructor(size: number) {
        this.size = size;
        this.storage = Array(this.size);
        this.insertPosition = 0;
        this.removePosition = 0;
    }

    public add(element: T): void {
        if (this.storage[this.insertPosition] !== undefined) {
            throw new QueueFullError();
        }

        this.storage[this.insertPosition] = element;
        this.insertPosition++;

        if (this.insertPosition >= this.size) {
            this.insertPosition = 0;
        }
    }

    public remove(): T {
        const result: T = this.storage[this.removePosition];
        delete this.storage[this.removePosition];

        if (!this.isEmpty()) {
            this.removePosition++;
        }

        if (this.removePosition >= this.size) {
            this.removePosition = 0;
        }
        return result;
    }

    public peek(): T {
        return this.storage[this.removePosition];
    }

    public isEmpty(): boolean {
        return this.storage.filter((el: any) => el !== undefined).length === 0;
    }

    public getSize(): number {
        return this.size;
    }
}
