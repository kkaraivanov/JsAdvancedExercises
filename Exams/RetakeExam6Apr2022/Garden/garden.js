class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }

        this.spaceAvailable -= spaceRequired
        const plant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        }

        this.plants.push(plant);
        return `The ${plantName} has been successfully planted in the garden.`;
    }
    ripenPlant(plantName, quantity){
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }
        const plant = this.plants.find(x => x.plantName == plantName);
        if (plant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        plant.ripe = true;
        plant.quantity += quantity;
        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }
    harvestPlant(plantName){
        const plantIndex = this.plants.findIndex(x => x.plantName == plantName);
        if (plantIndex == -1) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        const plant = this.plants[plantIndex];
        if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.plants.splice(plantIndex, 1);
        this.storage.push(`${plantName} (${plant.quantity})`)
        this.spaceAvailable += plant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }
    generateReport(){
        const plants = this.plants.map(p => p.plantName).sort((a, b) => a.localeCompare(b));
        const plantsRow = `Plants in the garden: ${plants.join(', ')}`;
        const storageRow = this.storage.length === 0 
            ? 'Plants in storage: The storage is empty.'
            : `Plants in storage: ${this.storage.join(', ')}`;
        
        return [
            `The garden has ${this.spaceAvailable} free space left.`,
            plantsRow,
            storageRow,
        ].join('\n')
    }
}