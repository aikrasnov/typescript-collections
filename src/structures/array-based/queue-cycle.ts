// https://en.wikipedia.org/wiki/Circular_buffer

export class CircularQueue<T> {
    private readonly size: number;
    private readonly storage: T[];
    private insertPosition: number;
    private removePosition: number;

    constructor(size: number) {
        this.size = size;
        this.insertPosition = 0;
        this.removePosition = 0;
        this.storage = [];
    }

    public insert(element: T): void {
        if (this.size >= this.storage.length || this.storage[this.insertPosition] !== undefined) {
            throw new Error('Queue is full!');
        }

        this.storage[this.insertPosition] = element;
        this.insertPosition++;

        if (this.insertPosition >= this.size) {
            this.insertPosition = 0;
        }
    }

    public remove(): T {
        const result: T = this.storage[this.removePosition];
        this.storage[this.removePosition] = undefined;
        this.removePosition++;

        if (this.removePosition >= this.size) {
            this.removePosition = 0;
        }
        return result;
    }
}
