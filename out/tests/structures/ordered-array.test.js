"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const comparable_test_class_1 = require("../comparable-test-class");
const orderedArray = new index_1.OrderedArray();
const elems = [
    new comparable_test_class_1.ComparableTestClass(1),
    new comparable_test_class_1.ComparableTestClass(-10),
    new comparable_test_class_1.ComparableTestClass(10),
    new comparable_test_class_1.ComparableTestClass(-200),
    new comparable_test_class_1.ComparableTestClass(400),
    new comparable_test_class_1.ComparableTestClass(-600),
    new comparable_test_class_1.ComparableTestClass(800),
    new comparable_test_class_1.ComparableTestClass(1000),
    new comparable_test_class_1.ComparableTestClass(-1200),
];
describe('ordered array', () => {
    it('array should be empty', () => {
        expect(orderedArray.isEmpty()).toStrictEqual(true);
    });
    it('peek should return undefined', () => {
        expect(orderedArray.peek()).toStrictEqual(undefined);
    });
    it('remove should return undefined', () => {
        expect(orderedArray.remove()).toStrictEqual(undefined);
    });
    it('should add element to array', () => {
        for (const elem of elems) {
            expect(orderedArray.linearSearch(elem)).toStrictEqual(false);
            orderedArray.add(elem);
            expect(orderedArray.linearSearch(elem)).toStrictEqual(true);
        }
        expect(orderedArray.peek()).toStrictEqual(elems[7]);
    });
    it('should remove largest element', () => {
        expect(orderedArray.remove()).toStrictEqual(elems[7]);
        expect(orderedArray.peek()).toStrictEqual(elems[6]);
    });
    it('search should return false for missing elements', () => {
        const missingElems = [
            new comparable_test_class_1.ComparableTestClass(9999),
            new comparable_test_class_1.ComparableTestClass(-9999),
            new comparable_test_class_1.ComparableTestClass(-999),
            new comparable_test_class_1.ComparableTestClass(999),
            new comparable_test_class_1.ComparableTestClass(666),
            new comparable_test_class_1.ComparableTestClass(-666),
        ];
        for (const elem of missingElems) {
            expect(orderedArray.binarySearch(elem)).toStrictEqual(false);
            expect(orderedArray.linearSearch(elem)).toStrictEqual(false);
        }
    });
    it('search should return true for existing elements', () => {
        const existingElems = elems.slice(0, 1);
        for (const elem of existingElems) {
            expect(orderedArray.binarySearch(elem)).toStrictEqual(true);
            expect(orderedArray.linearSearch(elem)).toStrictEqual(true);
        }
    });
    it('array should not be empty', () => {
        expect(orderedArray.isEmpty()).toStrictEqual(false);
    });
});
//# sourceMappingURL=ordered-array.test.js.map