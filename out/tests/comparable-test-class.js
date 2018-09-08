"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ComparableTestClass {
    constructor(foo) {
        this.foo = foo;
    }
    getFoo() {
        return this.foo;
    }
    compareTo(o) {
        if (this.foo > o.getFoo()) {
            return 1;
        }
        else if (this.foo === o.getFoo()) {
            return 0;
        }
        else {
            return -1;
        }
    }
}
exports.ComparableTestClass = ComparableTestClass;
//# sourceMappingURL=comparable-test-class.js.map