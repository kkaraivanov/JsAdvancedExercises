function wordsUppercase(input){
    return input.match(/\w+/g).map(word => {
         return word.toUpperCase(); 
    }).join(', ');
}

console.log(wordsUppercase('Hi, how are you?'));