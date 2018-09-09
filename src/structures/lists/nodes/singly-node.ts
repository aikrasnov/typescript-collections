export class SinglyNode<T> {
    private readonly data: T;
    private next: SinglyNode<T>;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }

    public getData(): T {
        return this.data;
    }

    public setNext(next: SinglyNode<T>): void {
        this.next = next;
    }

    public getNext(): SinglyNode<T> {
        return this.next;
    }
}
