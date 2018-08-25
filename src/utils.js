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
        ['a', 'b', 'd', 'c'],
        ['c', 'a', 'c', 'b'],
    ];


    for (const array of arraysForSort) {
        console.log(`Before sort: ${arrayToString(array)}`);

        const result = sortFunct(Array.from(array), false);
        const reversedResult = sortFunct(Array.from(array), true);

        console.log(`After sort: ${arrayToString(result)}`);
        console.log(`After sort (reversed): ${arrayToString(reversedResult)}`);
        console.log()
    }
}

module.exports = {
    applySort,
};