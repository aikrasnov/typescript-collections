import {unsorted, empty, equalValue} from './array-for-sort';
import {bubbleSort} from '../../index';
import {ComparableTestClass} from '../comparable-test-class';

describe('bubble sort', () => {

    it('should sort array', () => {
        const sorted: ComparableTestClass[] = bubbleSort(unsorted);

        for (let i: number = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(-1);
        }
    });

    it('should sort array in reverse order', () => {
        const sorted: ComparableTestClass[] = bubbleSort(unsorted, true);

        for (let i: number = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(1);
        }
    });

    it('should sort empty array without error', () => {
        bubbleSort(empty);
    });

    it('should sort array of equal values', () => {
        const sorted: ComparableTestClass[] = bubbleSort(equalValue);

        for (let i: number = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(0);
        }
    });

    it('should sort array of equal values (reverse)', () => {
        const sorted: ComparableTestClass[] = bubbleSort(equalValue);

        for (let i: number = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(0);
        }
    });
});
