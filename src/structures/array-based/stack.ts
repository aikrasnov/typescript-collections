// https://en.wikipedia.org/wiki/Stack_(abstract_data_type)

import {Collection} from '../collection';

export class Stack<T = any> implements Collection<T> {
    private readonly storage: T[];

    constructor() {
        this.storage = [];
    }

    public add(element: T): void {
        this.storage.push(element);
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
