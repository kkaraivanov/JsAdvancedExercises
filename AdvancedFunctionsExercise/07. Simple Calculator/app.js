function calculator() {
    let selector1, selector2, resultSelector = null
    function init(s1, s2, res){
        selector1 = document.querySelector(s1)
        selector2 = document.querySelector(s2)
        resultSelector = document.querySelector(res)
    }
    
    function add(){
        resultSelector.value = +selector1.value + +selector2.value
    }

    function subtract(){
        resultSelector.value = +selector1.value - +selector2.value
    }

    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result')

