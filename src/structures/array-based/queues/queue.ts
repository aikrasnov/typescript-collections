// https://en.wikipedia.org/wiki/Queue_(abstract_data_type)

import {Collection} from '../../collection';

export class Queue<T> implements Collection<T> {
    protected storage: T[];

    constructor() {
        this.storage = [];
    }

    public add(element: T): void {
        this.storage.unshift(element);
    }

    public remove(): T {
        return this.storage.pop();
    }

    public peek(): T {
        return this.storage[this.storage.length - 1];
    }

    public isEmpty(): boolean {
        return this.storage.length === 0;
    }
}
