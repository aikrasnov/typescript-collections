import {OrderedArray} from '../../src/structures/array-based/ordered-array';
import {ComparableTestClass} from '../comparable-test-class';

const orderedArray: OrderedArray<ComparableTestClass> = new OrderedArray<ComparableTestClass>();
const elems: ComparableTestClass[] = [
    new ComparableTestClass(1),
    new ComparableTestClass(-10),
    new ComparableTestClass(10),
    new ComparableTestClass(-200),
    new ComparableTestClass(400),
    new ComparableTestClass(-600),
    new ComparableTestClass(800),
    new ComparableTestClass(1000),
    new ComparableTestClass(-1200),
];

describe('ordered array', () => {

    it('array should be empty', async () => {
        expect(orderedArray.isEmpty()).toStrictEqual(true);
    });

    it('peek should return undefined', async () => {
        expect(orderedArray.peek()).toStrictEqual(undefined);
    });

    it('remove should return undefined', async () => {
        expect(orderedArray.remove()).toStrictEqual(undefined);
    });

    it('should add element to array', async () => {
        for (const elem of elems) {
            expect(orderedArray.linearSearch(elem)).toStrictEqual(false);
            orderedArray.add(elem);
            expect(orderedArray.linearSearch(elem)).toStrictEqual(true);
        }

        expect(orderedArray.peek()).toStrictEqual(elems[7]);
    });

    it('should remove largest element', async () => {
        expect(orderedArray.remove()).toStrictEqual(elems[7]);
        expect(orderedArray.peek()).toStrictEqual(elems[6]);
    });

    it('search should return false for missing elements', async () => {
        const missingElems: ComparableTestClass[] = [
            new ComparableTestClass(9999),
            new ComparableTestClass(-9999),
            new ComparableTestClass(-999),
            new ComparableTestClass(999),
            new ComparableTestClass(666),
            new ComparableTestClass(-666),
        ];

        for (const elem of missingElems) {
            expect(orderedArray.binarySearch(elem)).toStrictEqual(false);
            expect(orderedArray.linearSearch(elem)).toStrictEqual(false);
        }
    });

    it('search should return true for existing elements', async () => {
        const existingElems: ComparableTestClass[] = elems.slice(0, 1);

        for (const elem of existingElems) {
            expect(orderedArray.binarySearch(elem)).toStrictEqual(true);
            expect(orderedArray.linearSearch(elem)).toStrictEqual(true);
        }
    });

    it('array should not be empty', async () => {
        expect(orderedArray.isEmpty()).toStrictEqual(false);
    });
});
