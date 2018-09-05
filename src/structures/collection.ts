export interface Collection<T> {
    add(element: T): void;
    remove(): T;
    peek(): T;
    isEmpty(): boolean;
}
