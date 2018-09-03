// https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
import {Printable} from '../../utils/printable';
import {ArrayTransformer} from '../../utils/array';

export class Queue<T> implements Printable {
    private storage: T[];
    private arrayTrasformer: ArrayTransformer;

    constructor() {
        this.storage = [];
        this.arrayTrasformer = new ArrayTransformer(this.storage);
    }

    public insert(element: T): void {
        this.storage.unshift(element);
    }

    public remove(): T {
        return this.storage.shift();
    }

    public peek(): T {
        return this.storage[this.storage.length - 1];
    }

    public isEmpty(): boolean {
        return this.storage.length === 0;
    }

    public print(): void {
        console.log(this.arrayTrasformer.array2String());
    }
}
