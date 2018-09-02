// https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
import {Printable} from '../../utils/printable';
import {ArrayTrasformer} from '../../utils/array';

export class Stack<T> implements Printable {
    private storage: T[];
    private arrayTrasformer: ArrayTrasformer;

    constructor() {
        this.storage = [];
        this.arrayTrasformer = new ArrayTrasformer(this.storage);
    }

    public push(element: T): void {
        this.storage.push(element);
    }

    public pop(): T {
        return this.storage.pop();
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
