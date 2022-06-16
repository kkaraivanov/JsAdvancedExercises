function solv(arr, arg) {
    class Ticket {
        constructor(dest, price, status) {
            this.destination = dest
            this.price = Number(price)
            this.status = status
        }
        compareTo(obj, criteria) {
            if (typeof this[criteria] === 'string') return this[criteria].localeCompare(obj[criteria])
            else return this[criteria] - obj[criteria]
        }
    }
    
    return arr.map(x => new Ticket(...x.split('|'))).sort((x, y) => x.compareTo(y, arg))
}

console.log(solv(['Philadelphia|94.2|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
))