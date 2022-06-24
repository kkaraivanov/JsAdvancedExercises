class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = []
    }
    loadingVegetables(vegetables) {
        const result = new Set(vegetables.map(e => {
            const [type, quantity, price] = e.split(' ');
            const index = this.availableProducts.findIndex(p => p.type === type)
            if (index !== -1) {
                this.availableProducts[index].quantity += Number(quantity);
                if (this.availableProducts[index].price < Number(price)) {
                    this.availableProducts[index].price = Number(price)
                }
            } else {
                this.availableProducts.push({ type, quantity: Number(quantity), price: Number(price) })
            }
            return type
        }))

        return `Successfully added ${Array.from(result.values()).join(', ')}`;
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let e of selectedProducts) {
            const [type, quantity] = e.split(' ');
            const index = this.availableProducts.findIndex(el => el.type === type);
            if (index === -1) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if (this.availableProducts[index].quantity < Number(quantity)) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            const price = this.availableProducts[index].price * Number(quantity);
            this.availableProducts[index].quantity -= Number(quantity);
            totalPrice += price;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        const index = this.availableProducts.findIndex(e => e.type === type);
        if (index === -1) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (this.availableProducts[index].quantity < Number(quantity)) {
            this.availableProducts[index].quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        this.availableProducts[index].quantity -= Number(quantity);
        return `Some quantity of the ${type} has been removed.`;
    }
    revision (){
        const products = this.availableProducts.sort((a, b) => a.price - b.price).map(e => `${e.type}-${e.quantity}-$${e.price}`)
        return [
            'Available vegetables:',
            products.join('\n'),
            `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        ].join('\n')
    }
}