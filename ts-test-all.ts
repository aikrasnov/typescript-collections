import {bubbleSort} from './src/sorts/bubble';
import {insertionSort} from './src/sorts/insertion';
import {selectionSort} from './src/sorts/selection';
import {Comparable} from './src/utils/comparable';
import {OrderedArray} from './src/structures/array-based/ordered-array';
import {Stack} from './src/structures/array-based/stack';
import {Deque} from './src/structures/array-based/deque';
import {Queue} from './src/structures/array-based/queue';
import {CircularQueue} from './src/structures/array-based/queue-cycle';
import {PriorityQueue} from './src/structures/array-based/queue-priority';

class ComparableTestClass implements Comparable<ComparableTestClass> {
    private x: number;

    constructor(x: number) {
        this.x = x;
    }

    public getX(): number {
        return this.x;
    }

    public compareTo(o: ComparableTestClass): 0 | -1 | 1 {
        const x: number = o.getX();

        if (x > this.x) {
            return 1;
        } else if (x === this.x) {
            return 0;
        } else {
            return -1;
        }
    }
}

const array: ComparableTestClass[] = [];
array.push(new ComparableTestClass(1));
array.push(new ComparableTestClass(2));
array.push(new ComparableTestClass(-3));
array.push(new ComparableTestClass(-5));
array.push(new ComparableTestClass(14));
array.push(new ComparableTestClass(9));

// console.log(bubbleSort<ComparableTestClass>(array));
// console.log(bubbleSort<ComparableTestClass>(array, true));
// console.log(insertionSort<ComparableTestClass>(array));
// console.log(insertionSort<ComparableTestClass>(array, true));
// console.log(selectionSort<ComparableTestClass>(array));
// console.log(selectionSort<ComparableTestClass>(array, true));
