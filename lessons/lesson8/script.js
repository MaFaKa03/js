function getPrototypeChain(obj) {
    const chain = [];
    let currentObj = obj;

    while (currentObj != null) {
        chain.push(currentObj);
        currentObj = Object.getPrototypeOf(currentObj);   
    }

    return chain;
}

const MusicSeries = {
    model: 'Music1',
};
const Blues = {
    model: 'Blues2'
};
Object.setPrototypeOf(Blues, MusicSeries);
console.log(getPrototypeChain(Blues));

class Animal {
    constructor(name) {
        this.name = name;
    }
    speack() {
    }

}
class Dog extends Animal {
    speack() {
        console.log('wow');
    }
    fetch() {
        console.log(`Dog ${this.name} brought ball`);
    }
}
const myDog = new Dog('Nika');
myDog.speack();
myDog.fetch();





class Product {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class ShopingCart {
    constructor(customerName, initialTotalCost = 0) {
        this.customerName = customerName;
        this.initialTotalCost = initialTotalCost;
        this.items = [];
    }
    addItem(product, quantity = 1) {
        for (let i = 0; i < quantity; i++) {
            this.items.push(product);    
        }
        // this.cart.product = product;
        // this.cart.quantity = quantity;
    }
    getCurrentTotalCost() {
        let totalCost = this.initialTotalCost;
        for (let i = 0; i < this.items.length; i++) {
            totalCost += this.items[i].cost;
            
        }
        return totalCost;
    }
    checkout() {
        console.log(`Order issued for ${this.customerName} total cost is ${this.getCurrentTotalCost()}`);
    }

}

const bread = new Product('Borodinski', 60);
const myCart = new ShopingCart('Kostya');
myCart.addItem(bread, 2);
myCart.checkout();

