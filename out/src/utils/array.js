"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayTransformer {
    constructor(array) {
        this.array = array;
    }
    array2String() {
        return `[\n ${this.array.join(',\n')} \n]`;
    }
}
exports.ArrayTransformer = ArrayTransformer;
//# sourceMappingURL=array.js.map