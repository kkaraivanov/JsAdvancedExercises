function calorieObject(input){
    let calories = {};
    
    for (let x = 0; x < input.length; x += 2) {
        const prop = input[x];
        const value = input[x + 1];
        calories[prop] = parseInt(value);
    }

    console.log(calories);
}

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])