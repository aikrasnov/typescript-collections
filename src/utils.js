const assert = require('assert');

/**
 * Sorts arrays of numbers and strings in same way
 */
const sort = (first, second, symbol = 0) => {

    // if it array of numbers
    if (typeof first === 'number' && typeof second === 'number') {
        return first - second;
    }

    const isStringArrays = typeof first === 'string' && typeof second === 'string';
    const symbolsEqual = first[symbol] === second[symbol];
    const endReached = symbol > first.length - 1 || symbol > second.length - 1;
    if (isStringArrays &&  symbolsEqual && !endReached) {
        return sort(first, second, symbol + 1);
    }

    return first.charCodeAt(symbol) - second.charCodeAt(symbol);
};

/**
 * Get nice string representation of array
 */
function arrayToString(array) {
    return `[ ${array.join(', ')} ]`
}

function applySort(sortFunct) {

    const arraysForSort = [
        [...new Array(10)].map(() => Number((Math.random() * 10).toFixed(0))),
        [1, 2, 3, 4, 5],
        [5, 4, 3, 2, 1],
        [1, 3, 2, 5, 4],
        [5, 4, 1, 2, 1],
        [5, 5, 5, 5, 5],
        [-1, -2, -3, -4],
        [-33, 33, 1, -6],
        [1, 2, 3, 4, 5, 6, 1, 2, 3],
        ['a', 'b', 'd', 'c'],
        ['c', 'a', 'c', 'b'],
    ];


    for (const array of arraysForSort) {
        console.log(`Before sort: ${arrayToString(array)}`);

        const result = sortFunct(array, false);
        const reversedResult = sortFunct(array, true);

        console.log(`After sort: ${arrayToString(result)}`);
        console.log(`After sort (reversed): ${arrayToString(reversedResult)}`);
        console.log();

        array.sort(sort);

        assert.deepStrictEqual(array, result, 'error in sort');
        assert.deepStrictEqual(array.reverse(), reversedResult, 'error in reversed sort');
    }
}

module.exports = {
    applySort,
    sort,
    arrayToString,
};
