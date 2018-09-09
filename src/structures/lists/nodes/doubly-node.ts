export class DoublyNode<T> {
    private readonly data: T;
    private next: DoublyNode<T>;
    private previous: DoublyNode<T>;

    constructor(data: T) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    public getData(): T {
        return this.data;
    }

    public setNext(next: DoublyNode<T>): void {
        this.next = next;
    }

    public getNext(): DoublyNode<T> {
        return this.next;
    }

    public setPrevious(previous: DoublyNode<T>): void {
        this.previous = previous;
    }

    public getPrevious(): DoublyNode<T> {
        return this.previous;
    }
}
