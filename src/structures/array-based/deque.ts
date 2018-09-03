// https://en.wikipedia.org/wiki/Double-ended_queue

export class Deque<T> {
    private readonly storage: T[];

    constructor() {
        this.storage = [];
    }

    public pushFront(element: T): void {
        for (let i: number = this.storage.length; i > 0; i--) {
            this.storage[i] = this.storage[i - 1];
        }

        this.storage[0] = element;
    }

    public pushBack(element: T): void {
        this.storage[this.storage.length] = element;
    }

    public popFront(): T {
        return this.storage.splice(0, 1)[0];
    }

    public popBack(): T {
        return this.storage.splice(this.storage.length - 1, 1)[0];
    }
}
