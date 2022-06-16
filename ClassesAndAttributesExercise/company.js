class Company {
    #departments
    constructor() {
        this.#departments = {}
    }
    addEmployee(name, salary, position, department){
        if (!name || !salary || salary < 0 || !position || !department) throw new Error('Invalid input!');
        if (!this.#departments.hasOwnProperty(department)) this.#departments[department] = [];

        this.#departments[department].push({name, salary, position})
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment(){
        const averages = Object.entries(this.#departments);
        averages.forEach(e => {
            let total = 0;
            e[1].forEach(y => total += y.salary);
            e[1] = (total / e[1].length).toFixed(2)
        })
        averages.sort((x, y) => y[1] - x[1]);
        const bestDepartment = `Best Department is: ${averages[0][0]}\nAverage salary: ${averages[0][1]}\n`;
        const empoyees = this.#departments[averages[0][0]]
            .sort((x, y) => x.name.localeCompare(y.name))
            .sort((x, y) => y.salary - x.salary)
            .map(x => Object.values(x).join(' '));
        
        return bestDepartment + empoyees.join('\n')
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
