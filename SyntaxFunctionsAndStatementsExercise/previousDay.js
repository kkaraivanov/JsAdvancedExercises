function previousDay(...args){
    const [y, m, d] = [...args];
    const prev = new Date(new Date(y, m, d).getTime() - (24 * 60 * 60 * 1000));

    return d === 1 
        ? `${prev.getFullYear()}-${prev.getMonth()}-${new Date(y, m + 1, 0).getDate()}`
        : `${prev.getFullYear()}-${prev.getMonth()}-${prev.getDate()}`;
}

console.log(previousDay(2016, 10, 1));