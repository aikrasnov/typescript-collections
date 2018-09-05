import {Comparable} from '../src/utils/comparable';

export class ComparableTestClass implements Comparable<ComparableTestClass> {
    private readonly foo: number;

    constructor(foo: number) {
        this.foo = foo;
    }

    public getFoo(): number {
        return this.foo;
    }

    public compareTo(o: ComparableTestClass): 1 | 0 | -1 {
        if (this.foo > o.getFoo()) {
            return 1;
        } else if (this.foo === o.getFoo()) {
            return 0;
        } else {
            return -1;
        }
    }

}
