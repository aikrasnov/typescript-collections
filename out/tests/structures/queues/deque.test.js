"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../index");
const deque = new index_1.Deque();
describe('deque', () => {
    it('should be empty', () => {
        expect(deque.isEmpty()).toStrictEqual(true);
    });
    it('remove should return undefined', () => {
        expect(deque.remove()).toStrictEqual(undefined);
    });
    it('removeFromFront should return undefined', () => {
        expect(deque.removeFromFront()).toStrictEqual(undefined);
    });
    it('peek should return undefined', () => {
        expect(deque.peek()).toStrictEqual(undefined);
    });
    it('peekFront should return undefined', () => {
        expect(deque.peekFront()).toStrictEqual(undefined);
    });
    it('should add element to queue', () => {
        deque.add(1);
        expect(deque.peek()).toStrictEqual(1);
    });
    it('should be not empty', () => {
        expect(deque.isEmpty()).toStrictEqual(false);
    });
    it('should add element to begin queue', () => {
        deque.add(2);
        expect(deque.peekFront()).toStrictEqual(2);
    });
    it('should add element to end queue', () => {
        deque.addToBack(3);
        expect(deque.peek()).toStrictEqual(3);
    });
    it('should add more element to queue', () => {
        deque.add(4);
        deque.addToBack(5);
        deque.add(6);
        deque.addToBack(7);
        expect(deque.peek()).toStrictEqual(7);
        expect(deque.peekFront()).toStrictEqual(6);
    });
    it('should remove element from front', () => {
        expect(deque.removeFromFront()).toStrictEqual(6);
        expect(deque.peekFront()).toStrictEqual(4);
    });
    it('should remove element from back', () => {
        expect(deque.remove()).toStrictEqual(7);
        expect(deque.peek()).toStrictEqual(5);
    });
});
//# sourceMappingURL=deque.test.js.map