function sortingNumbers(a){
    let arr = Array.from(a).sort((a, b) => a - b);
    let result = [arr.length];
    let i = 0;

    while (arr.length != 0) {
        let first = arr[0];
        remove(arr, first);
        let last = arr[arr.length - 1];
        remove(arr, last);

        result[i++] = first;
        result[i++] = last;
    }

    function remove(ar, element) {
        let index =  ar.indexOf(element);
        ar.splice(index, 1);
        return ar;
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]