import {PriorityQueue} from '../../../index';
import {ComparableTestClass} from '../../comparable-test-class';

const queue: PriorityQueue<ComparableTestClass> = new PriorityQueue();
const foo: ComparableTestClass[] = [
    new ComparableTestClass(0),
    new ComparableTestClass(1),
    new ComparableTestClass(2),
    new ComparableTestClass(3),
    new ComparableTestClass(4),
    new ComparableTestClass(5),
    new ComparableTestClass(6),
    new ComparableTestClass(7),
    new ComparableTestClass(8),
    new ComparableTestClass(9),
];

describe('priority queue', () => {

    it('queue should be empty', () => {
        expect(queue.isEmpty()).toStrictEqual(true);
    });

    it('peek should return undefined while queue empty', () => {
        expect(queue.peek()).toStrictEqual(undefined);
    });

    it('remove should return undefined while queue empty', () => {
        expect(queue.remove()).toStrictEqual(undefined);
    });

    it('should add element to queue', () => {
        queue.add(foo[0]);
        expect(queue.peek()).toStrictEqual(foo[0]);
    });

    it('queue should not be empty', () => {
        expect(queue.isEmpty()).toStrictEqual(false);
    });

    it('should remove element from queue', () => {
        expect(queue.remove()).toStrictEqual(foo[0]);
    });

    it('should add few elements to queue', () => {
        queue.add(foo[1]);
        queue.add(foo[3]);
        queue.add(foo[2]);
        queue.add(foo[4]);
        queue.add(foo[6]);
        queue.add(foo[5]);

        expect(queue.peek()).toStrictEqual(foo[6]);
        expect(queue.remove()).toStrictEqual(foo[6]);
    });
});
