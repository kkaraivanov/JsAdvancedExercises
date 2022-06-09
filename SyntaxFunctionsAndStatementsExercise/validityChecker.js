function vc(...args) {
    const [x1, y1, x2, y2] = [...args];
    const check = (x1, y1, x2 = 0, y2 = 0) => {
        let x = x1 - x2;
        let y = y1 - y2;
        let sqr = Math.sqrt(x*x + y*y);

        return Number.isInteger(sqr) 
            ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
            : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }
    
    return [check(x1, y1), check(x2, y2), check(x1, y1, x2, y2)].join('\n');
}

console.log(vc(2, 1, 1, 1))