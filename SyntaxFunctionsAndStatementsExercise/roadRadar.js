function rr(s, a) {
    const maxS = limits(a);
    const diff = Math.abs(s - maxS);

    function limits(l) {
        const obj = {
            motorway: '130',
            interstate: '90',
            city: '50',
            residential: '20'
        };

        return obj[l];
    }

    function print(s, m, d) {
        const obj = {
            status: (s) => { return s <= 20 ? 'speeding' : s > 20 && s <= 40 ? 'excessive speeding' : 'reckless driving'; },
            driving: (s, m) => { return `Driving ${s} km/h in a ${m} zone` },
            faster(diff, m) { return `The speed is ${diff} km/h faster than the allowed speed of ${m} - ${this.status(diff)}` },
            print(s, m, d) { return s <= m ? this.driving(s, m) : this.faster(d, m) }
        }

        return obj.print(s, m, d);
    }

    return print(s, maxS, diff)
}

console.log(rr(40, 'city'))
console.log(rr(21, 'residential'));
console.log(rr(120, 'interstate'));
console.log(rr(200, 'motorway'));