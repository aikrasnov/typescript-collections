import {CircularQueue} from '../../../index';
// import {QueueFullError} from '../../../src/structures/array-based/queues/errors/queue-full-error';

const queueSize: number = 5;
const circularQueue: CircularQueue<any> = new CircularQueue(queueSize);

describe('circular queue', () => {

    it('should be empty', () => {
        expect(circularQueue.isEmpty()).toStrictEqual(true);
    });

    it(`should have size ${queueSize}`, () => {
        expect(circularQueue.getSize()).toStrictEqual(queueSize);
    });

    it('peek should return undefined', () => {
        expect(circularQueue.peek()).toStrictEqual(undefined);
    });

    it('remove should return undefined', () => {
        expect(circularQueue.remove()).toStrictEqual(undefined);
    });

    it('should add elements to queue', () => {
        for (let i: number = 0; i < queueSize; i++) {
            circularQueue.add(i);
            expect(circularQueue.peek()).toStrictEqual(0);
        }
    });

    it('should not be empty', () => {
        expect(circularQueue.isEmpty()).toStrictEqual(false);
    });

    it('should throw error when queue is full', () => {
        expect(() => circularQueue.add(0)).toThrow();
    });

    it('should remove elements from queue except one', () => {
        for (let i: number = 0; i < queueSize - 1; i++) {
            expect(circularQueue.peek()).toStrictEqual(i);
            expect(circularQueue.remove()).toStrictEqual(i);
            expect(circularQueue.peek()).not.toStrictEqual(i);
        }
    });

    it('should add elements to queue after remove', () => {
        for (let i: number = 0; i < queueSize - 1; i++) {
            circularQueue.add(i);
            expect(circularQueue.peek()).toStrictEqual(4);
        }
    });

    it('should remove all elements', () => {
        for (const el of [4, 0, 1, 2, 3]) {
            expect(circularQueue.remove()).toStrictEqual(el);
        }
    });
});
