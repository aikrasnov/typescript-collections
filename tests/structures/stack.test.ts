import {Stack} from '../../src/structures/array-based/stack';

const stack: Stack = new Stack();

describe('stack', () => {

    it('stack should be empty', async () => {
        expect(stack.isEmpty()).toStrictEqual(true);
    });

    it('peek should return nothing while stack is empty', async () => {
        expect(stack.peek()).toStrictEqual(undefined);
    });

    it('remove should return nothing while stack is empty', async () => {
        expect(stack.remove()).toStrictEqual(undefined);
    });

    it('should add element to stack', async () => {
        stack.add('foo');
        expect(stack.peek()).toStrictEqual('foo');
    });

    it('should add one more element', async () => {
        stack.add('bar');
        expect(stack.peek()).toStrictEqual('bar');
    });

    it('should remove element from top', async () => {
        expect(stack.remove()).toStrictEqual('bar');
        expect(stack.peek()).toStrictEqual('foo');
    });

    it('stack should be not empty', async () => {
        expect(stack.isEmpty()).toStrictEqual(false);
    });

    it('should remove last element from stack', async () => {
        expect(stack.remove()).toStrictEqual('foo');
        expect(stack.peek()).toStrictEqual(undefined);
        expect(stack.isEmpty()).toStrictEqual(true);
    });
});
