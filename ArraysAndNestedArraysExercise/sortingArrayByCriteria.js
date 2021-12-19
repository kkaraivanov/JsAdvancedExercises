function sortingArrayByCriteria(a){
    let arr = Array.from(a).sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    return arr.join('\r\n')
}

console.log(sortingArrayByCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sortingArrayByCriteria(['test', 'Deny', 'omen', 'Default']));