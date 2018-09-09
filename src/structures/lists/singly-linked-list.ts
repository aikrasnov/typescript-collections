import {SinglyNode} from './nodes/singly-node';
import {Collection} from '../collection';

export class SinglyLinkedList<T> implements Collection<T> {
    private node: SinglyNode<T>;

    constructor() {
        this.node = null;
    }

    public add(element: T): void {
        const node: SinglyNode<T> = new SinglyNode(element);

        if (this.node === null) {
            this.node = node;
            return;
        }

        node.setNext(this.node);
        this.node = node;
    }

    public remove(): T {
        const node: SinglyNode<T> = this.node;
        this.node = this.node.getNext();
        return node.getData();
    }

    public peek(): T {
        if (this.node === null) {
            return;
        }

        return this.node.getData();
    }

    public isEmpty(): boolean {
        return this.node === null;
    }
}
