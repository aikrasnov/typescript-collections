import {unsorted, empty, equalValue} from './array-for-sort';
import {insertionSort} from '../../index';
import {ComparableTestClass} from '../comparable-test-class';

describe('insertion sort', () => {

    it('should sort array', () => {
        const sorted: ComparableTestClass[] = insertionSort(unsorted);

        for (let i: number = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(-1);
        }
    });

    it('should sort array in reverse order', () => {
        const sorted: ComparableTestClass[] = insertionSort(unsorted, true);

        for (let i: number = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(1);
        }
    });

    it('should sort empty array without error', () => {
        insertionSort(empty);
    });

    it('should sort array of equal values', async () => {
        const sorted: ComparableTestClass[] = insertionSort(equalValue);

        for (let i: number = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(0);
        }
    });

    it('should sort array of equal values (reverse)', async () => {
        const sorted: ComparableTestClass[] = insertionSort(equalValue);

        for (let i: number = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(0);
        }
    });
});
