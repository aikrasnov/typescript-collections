import {Queue} from '../../../index';

const queue: Queue<any> = new Queue();

describe('queue', () => {

    it('queue should be empty', () => {
       expect(queue.isEmpty()).toStrictEqual(true);
    });

    it('peek should return undefined', () => {
        expect(queue.peek()).toStrictEqual(undefined);
    });

    it('should put element in queue', () => {
        queue.add(1);
        expect(queue.peek()).toStrictEqual(1);
    });

    it('queue should not be emprty', () => {
        expect(queue.isEmpty()).toStrictEqual(false);
    });

    it('peek should show first element in queue', () => {
        queue.add(2);
        queue.add(3);
        queue.add(4);
        expect(queue.peek()).toStrictEqual(1);
    });

    it('remove should return first element in queue', () => {
        expect(queue.peek()).toStrictEqual(1);
        expect(queue.remove()).toStrictEqual(1);
        expect(queue.peek()).toStrictEqual(2);
    });

    it('should remove all element from queue', () => {
        expect(queue.remove()).toStrictEqual(2);
        expect(queue.remove()).toStrictEqual(3);
        expect(queue.remove()).toStrictEqual(4);
        expect(queue.remove()).toStrictEqual(undefined);
    });

    it('queue should be empty', () => {
        expect(queue.isEmpty()).toStrictEqual(true);
    });
});
