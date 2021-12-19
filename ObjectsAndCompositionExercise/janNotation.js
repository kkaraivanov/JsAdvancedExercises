function janNotation(input){
    const result = {
        error: false,
        operands: [],
        checkSize(){this.operands.length < 2 ? this.error = true : false},
        add(s){this.operands.push(s)},
        makeOperation(opr){
            let s = this.operands.splice(-2);
            this.add(operations(...s, opr));
        },
        print(){
            !this.error ? this.operands.length === 1 ? console.log(...this.operands) : console.log('Error: too many operands!') : console.log('Error: not enough operands!'); 
        }
    }

    input.forEach(element => {
        if(typeof element == 'number'){
            result.add(Number(element))
        }
        else{
            if(result.checkSize()){
                return;
            }else{
                result.makeOperation(element);
            }
        }
    });

    result.print();
    
    function operations(...args) {
        let [x, y, opr] = args
        let methods = {
            '+': (x, y) => +x + +y,
            '-': (x, y) => x - y,
            '/': (x, y) => x / y,
            '*': (x, y) => x * y
        }

        return methods[opr](x, y);
    }
}

janNotation([5,
    3,
    4,
    '*',
    '-']
   );