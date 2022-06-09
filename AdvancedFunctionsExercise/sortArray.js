function sortArray(arr, args) {
    return arr.sort((x, y) => (args === 'asc' ? x - y : y - x));
} 

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));