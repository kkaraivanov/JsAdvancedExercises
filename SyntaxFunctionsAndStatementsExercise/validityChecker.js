function validityChecker(x1, y1, x2, y2){
    function checkIsValid(a, b, c = 0, d = 0){
        let a1 = a - c;
        let b1 = b - d;
        let c1 = Math.sqrt(a1*a1 + b1*b1);

        if (Number.isInteger(c1)) {
            console.log(`{${a}, ${b}} to {${c}, ${d}} is valid`);
        } else {
            console.log(`{${a}, ${b}} to {${c}, ${d}} is invalid`);
        }
    }

    checkIsValid(x1, y1);
    checkIsValid(x2, y2);
    checkIsValid(x1, y1, x2, y2);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);