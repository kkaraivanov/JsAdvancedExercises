function printArrayWithGivenDelimiter(arr, delim){
    return arr.join(`${delim}`);
}

console.log(printArrayWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-'));