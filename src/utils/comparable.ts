export interface Comparable<T> {
    compareTo(o: T): -1 | 0 | 1;
}
