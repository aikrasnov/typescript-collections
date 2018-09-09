import {unsorted, empty, equalValue} from './array-for-sort';
import {selectionSort} from '../../index';
import {ComparableTestClass} from '../comparable-test-class';

describe('selection sort', () => {

    it('should sort array', () => {
        const sorted: ComparableTestClass[] = selectionSort(unsorted);

        for (let i: number = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(-1);
        }
    });

    it('should sort array in reverse order', () => {
        const sorted: ComparableTestClass[] = selectionSort(unsorted, true);

        for (let i: number = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(1);
        }
    });

    it('should sort empty array without error', () => {
        selectionSort(empty);
    });

    it('should sort array of equal values', () => {
        const sorted: ComparableTestClass[] = selectionSort(equalValue);

        for (let i: number = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(0);
        }
    });

    it('should sort array of equal values (reverse)', () => {
        const sorted: ComparableTestClass[] = selectionSort(equalValue);

        for (let i: number = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(0);
        }
    });
});
