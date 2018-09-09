import {SinglyLinkedList} from '../../../index';

const linkedList: SinglyLinkedList<any> = new SinglyLinkedList();
const maxSize: number = 10;

describe('singly list', () => {

    it('should be empty', () => {
        expect(linkedList.isEmpty()).toStrictEqual(true);
    });

    it('peek should return undefined while list is emprty', () => {
        expect(linkedList.peek()).toStrictEqual(undefined);
    });

    it('should add element to linked list', () => {
        linkedList.add(1);
        expect(linkedList.peek()).toStrictEqual(1);
    });

    it('should not be empty', () => {
        expect(linkedList.isEmpty()).toStrictEqual(false);
    });

    it('should remove element from list', () => {
        expect(linkedList.remove()).toStrictEqual(1);
    });

    it('should be empty after remove last element', () => {
        expect(linkedList.isEmpty()).toStrictEqual(true);
    });

    it('should add few elements to list', () => {
        for (let i: number = 0; i < maxSize; i++) {
            linkedList.add(i);
            expect(linkedList.peek()).toStrictEqual(i);
            expect(linkedList.isEmpty()).toStrictEqual(false);
        }
    });

    it('should remove all element from list', () => {
        for (let i: number = maxSize - 1; i >= 0; i--) {
            expect(linkedList.peek()).toStrictEqual(i);
            expect(linkedList.remove()).toStrictEqual(i);
            expect(linkedList.peek()).not.toStrictEqual(i);
        }

        expect(linkedList.isEmpty()).toStrictEqual(true);
        expect(linkedList.peek()).toStrictEqual(undefined);
    });
});
