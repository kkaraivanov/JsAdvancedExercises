class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHike = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`
        }

        this.goals[peak] = altitude
        return `You have successfully added a new goal - ${peak}`
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.goals.hasOwnProperty(peak) && this.resources <= 0) {
            throw new Error(`You don't have enough resources to start the hike`)
        }

        let dif = this.resources - Number(time) * 10;
        if (dif < 0) {
            return `You don't have enough resources to complete the hike`
        }
        this.resources -= Number(time) * 10;
        this.listOfHike.push({ peak, time, difficultyLevel });
        return `You hiked ${peak} peak for ${time} hours and you have ${dif}% resources left`
    }
    rest(time) {
        this.resources += Number(time) * 10
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }

        return `You have rested for ${time} hours and gained ${time * 10}% resources`
    }
    showRecord(criteria) {
        if (this.listOfHike.length === 0) {
            return `${this.username} has not done any hiking yet`
        }
        
        let hiks = [];
        if (criteria != 'all') {
            hiks = this.listOfHike.filter(e => e.difficultyLevel == criteria).sort((x, y) => x.time - y.time)
            if (hiks.length === 0) return `${this.username} has not done any ${criteria} hiking yet`

            return `${this.username}'s best ${criteria} hike is ${hiks[0].peak} peak, for ${hiks[0].time} hours`
        }

        hiks = this.listOfHike.map(e => `${this.username} hiked ${e.peak} for ${e.time} hours`)
            return [
                `All hiking records:`,
                hiks.join('\n')
            ].join('\n')
    }
}