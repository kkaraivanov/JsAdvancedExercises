function rotateArray(...args){
    let [a, i] = [...args];
    i = i % (a.length);
    //a.push.apply(a, a.splice(0, i)); //left rotation
    a = a.splice(-i).concat(a); //right rotation
    
    return a.join(' ');
}

console.log(rotateArray(['1', '2', '3', '4'], 2))

// console.log(rotateArray([
// 'Banana', 
// 'Orange', 
// 'Coconut', 
// 'Apple'], 
// 15
// ))