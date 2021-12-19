function subtract() {
    let num1 = document.getElementById('firstNumber').value;
    let num2 = document.getElementById('secondNumber').value;
    let result = document.getElementById('result');

    if(num1 === null || num2 === null || result === null) throw new Error('Error')
    let x = Number(num1), y = Number(num2)
    result.textContent = x - y;
}