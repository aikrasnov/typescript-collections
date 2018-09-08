import {Deque} from '../../../index';

const deque: Deque<any> = new Deque();

describe('deque', () => {

    it('should be empty', async () => {
        expect(deque.isEmpty()).toStrictEqual(true);
    });

    it('remove should return undefined', async () => {
        expect(deque.remove()).toStrictEqual(undefined);
    });

    it('removeFromFront should return undefined', async () => {
        expect(deque.removeFromFront()).toStrictEqual(undefined);
    });

    it('peek should return undefined', async () => {
        expect(deque.peek()).toStrictEqual(undefined);
    });

    it('peekFront should return undefined', async () => {
        expect(deque.peekFront()).toStrictEqual(undefined);
    });

    it('should add element to queue', async () => {
        deque.add(1);
        expect(deque.peek()).toStrictEqual(1);
    });

    it('should be not empty', async () => {
        expect(deque.isEmpty()).toStrictEqual(false);
    });

    it('should add element to begin queue', async () => {
        deque.add(2);
        expect(deque.peekFront()).toStrictEqual(2);
    });

    it('should add element to end queue', async () => {
        deque.addToBack(3);
        expect(deque.peek()).toStrictEqual(3);
    });

    it('should add more element to queue', async () => {
        deque.add(4);
        deque.addToBack(5);
        deque.add(6);
        deque.addToBack(7);

        expect(deque.peek()).toStrictEqual(7);
        expect(deque.peekFront()).toStrictEqual(6);
    });

    it('should remove element from front', async () => {
        expect(deque.removeFromFront()).toStrictEqual(6);
        expect(deque.peekFront()).toStrictEqual(4);
    });

    it('should remove element from back', async () => {
        expect(deque.remove()).toStrictEqual(7);
        expect(deque.peek()).toStrictEqual(5);
    });
});
