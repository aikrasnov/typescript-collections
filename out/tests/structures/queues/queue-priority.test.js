"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../index");
const comparable_test_class_1 = require("../../comparable-test-class");
const queue = new index_1.PriorityQueue();
const foo = [
    new comparable_test_class_1.ComparableTestClass(0),
    new comparable_test_class_1.ComparableTestClass(1),
    new comparable_test_class_1.ComparableTestClass(2),
    new comparable_test_class_1.ComparableTestClass(3),
    new comparable_test_class_1.ComparableTestClass(4),
    new comparable_test_class_1.ComparableTestClass(5),
    new comparable_test_class_1.ComparableTestClass(6),
    new comparable_test_class_1.ComparableTestClass(7),
    new comparable_test_class_1.ComparableTestClass(8),
    new comparable_test_class_1.ComparableTestClass(9),
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
//# sourceMappingURL=queue-priority.test.js.map