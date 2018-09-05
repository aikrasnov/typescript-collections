import {ComparableTestClass} from '../comparable-test-class';

export const unsorted: ComparableTestClass[] = [
    new ComparableTestClass(2),
    new ComparableTestClass(1),
    new ComparableTestClass(3),
    new ComparableTestClass(-12),
    new ComparableTestClass(-251),
    new ComparableTestClass(-1),
    new ComparableTestClass(256),
    new ComparableTestClass(1024),
];

export const empty: ComparableTestClass[] = [];
export const equalValue: ComparableTestClass[] = [
    new ComparableTestClass(1),
    new ComparableTestClass(1),
    new ComparableTestClass(1),
    new ComparableTestClass(1),
    new ComparableTestClass(1),
    new ComparableTestClass(1),
    new ComparableTestClass(1),
];
