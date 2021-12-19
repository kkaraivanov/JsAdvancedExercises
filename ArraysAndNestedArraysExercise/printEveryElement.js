function printEveryElement(arr, step){
    let newArr = new Array();
    let x = 0;

    for(let i = 0; i < arr.length; i += step) {
        newArr[x++] = arr[i];
    }

    return newArr;
}

console.log(printEveryElement(['5', '20', '31', '4', '20'], 2));