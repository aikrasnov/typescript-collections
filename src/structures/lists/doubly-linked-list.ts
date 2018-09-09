import {DoublyNode} from './nodes/doubly-node';
import {Collection} from '../collection';

export class DoublyLinkedList<T> implements Collection<T> {
    private firstNode: DoublyNode<T>;
    private lastNode: DoublyNode<T>;

    constructor() {
        this.firstNode = null;
        this.lastNode = null;
    }

    public add(element: T): void {
        const node: DoublyNode<T> = new DoublyNode(element);
        if (this.firstNode === null && this.lastNode === null) {
            this.firstNode = node;
            this.lastNode = node;
            return;
        }

        node.setNext(this.firstNode);
        this.firstNode.setPrevious(node);
        this.firstNode = node;
    }

    public addToBack(element: T): void {
        const node: DoublyNode<T> = new DoublyNode(element);

        if (this.firstNode === null && this.lastNode === null) {
            this.firstNode = node;
            this.lastNode = node;
            return;
        }

        this.lastNode.setNext(node);
        node.setPrevious(this.lastNode);
        this.lastNode = node;
    }

    public remove(): T {
        if (this.firstNode === null) {
            return;
        }

        const node: DoublyNode<T> = this.firstNode;
        this.firstNode = this.firstNode.getNext();

        if (this.firstNode !== null) {
            this.firstNode.setPrevious(null);
        } else {
            this.lastNode = null;
        }

        return node.getData();
    }

    public removeFromBack(): T {
        if (this.lastNode === null) {
            return;
        }

        const node: DoublyNode<T> = this.lastNode;
        this.lastNode = this.lastNode.getPrevious();

        if (this.lastNode !== null) {
            this.lastNode.setNext(null);
        } else {
            this.firstNode = null;
        }

        return node.getData();
    }

    public peek(): T {
        if (this.firstNode === null) {
            return;
        }

        return this.firstNode.getData();
    }

    public peekBack(): T {
        if (this.lastNode === null) {
            return;
        }

        return this.lastNode.getData();
    }

    public isEmpty(): boolean {
        return this.firstNode === null && this.lastNode === null;
    }
}
