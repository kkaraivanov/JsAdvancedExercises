function rotateArray(a, c){
    let arr = a.map(x => x);
    let count = c % a.length;
    
    while(count > 0){
        arr.unshift(arr.pop());
        count--;
    }
    
    return arr.join(' ');
}

console.log(rotateArray(['1', '2', '3', '4'], 2));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15));