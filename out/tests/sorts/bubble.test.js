"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_for_sort_1 = require("./array-for-sort");
const index_1 = require("../../index");
describe('bubble sort', () => {
    it('should sort array', () => {
        const sorted = index_1.bubbleSort(array_for_sort_1.unsorted);
        for (let i = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(-1);
        }
    });
    it('should sort array in reverse order', () => {
        const sorted = index_1.bubbleSort(array_for_sort_1.unsorted, true);
        for (let i = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(1);
        }
    });
    it('should sort empty array without error', () => {
        index_1.bubbleSort(array_for_sort_1.empty);
    });
    it('should sort array of equal values', () => __awaiter(this, void 0, void 0, function* () {
        const sorted = index_1.bubbleSort(array_for_sort_1.equalValue);
        for (let i = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(0);
        }
    }));
    it('should sort array of equal values (reverse)', () => __awaiter(this, void 0, void 0, function* () {
        const sorted = index_1.bubbleSort(array_for_sort_1.equalValue);
        for (let i = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].compareTo(sorted[i + 1])).toStrictEqual(0);
        }
    }));
});
//# sourceMappingURL=bubble.test.js.map