function calculate(a,b,c){
    let fruit = a;
    let kilograms = (b / 1000);
    let money = (kilograms * c).toFixed(2);

    return `I need $${money} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`;
}