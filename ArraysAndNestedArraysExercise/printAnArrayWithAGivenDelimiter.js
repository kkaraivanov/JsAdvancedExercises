function pgd(...args){
    const [a, d] = [...args];
    return a.join(`${d}`);
}

console.log(pgd(['One', 'Two', 'Three', 'Four', 'Five'], '-'))