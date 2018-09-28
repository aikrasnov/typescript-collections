import {DoublyLinkedList} from '../../../index';

const linkedList: DoublyLinkedList<any> = new DoublyLinkedList<any>();

describe('doubly linked list', () => {

    it('should be empty', () => {
        expect(linkedList.isEmpty()).toStrictEqual(true);
    });

    it('peek should return undefined', () => {
        expect(linkedList.peek()).toStrictEqual(undefined);
    });

    it('peekBack should return undefined', () => {
        expect(linkedList.peekBack()).toStrictEqual(undefined);
    });

    it('remove should return undefined', () => {
        expect(linkedList.remove()).toStrictEqual(undefined);
    });

    it('removeFront should return undefined', () => {
        expect(linkedList.removeFromBack()).toStrictEqual(undefined);
    });

    it('should add element to list begin', () => {
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);

        expect(linkedList.peek()).toStrictEqual(3);
        expect(linkedList.isEmpty()).toStrictEqual(false);
    });

    it('should peek element from end list', () => {
        expect(linkedList.peek()).toStrictEqual(3);
    });

    it('should add element to list end', () => {
        linkedList.addToBack(4);
        expect(linkedList.peekBack()).toStrictEqual(4);
    });

    it('should remove all elements', () => {
        expect(linkedList.removeFromBack()).toStrictEqual(4);
        expect(linkedList.remove()).toStrictEqual(3);
        expect(linkedList.removeFromBack()).toStrictEqual(1);
        expect(linkedList.remove()).toStrictEqual(2);

        expect(linkedList.isEmpty()).toStrictEqual(true);
    });

    it('addToBack should add element to empty list', () => {
        linkedList.addToBack(1);
        expect(linkedList.isEmpty()).toStrictEqual(false);
        expect(linkedList.peekBack()).toStrictEqual(1);
        expect(linkedList.peek()).toStrictEqual(1);
    });

    it('should removeFromBack should remove last element', () => {
        expect(linkedList.removeFromBack()).toStrictEqual(1);
        expect(linkedList.isEmpty()).toStrictEqual(true);
    });
});
