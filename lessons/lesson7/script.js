const person = {
    name: 'kostya',
    age: 28,
    sex: 'male',
    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old. I identify as ${this.sex}`);
    },
    changeName(name) {
        this.name = name;
    }
}
person.introduce();
person.changeName('Nika');
person.introduce();

const animal = {
    name: '',
    eat() {
        console.log(`${this.name} is eating.`);
    },

};
const dog = {
    name: 'Rex',
    bark() {
        console.log(`${this.name} is barking`);
    },
    eat: animal.eat,
};
animal.eat();
dog.bark();
dog.eat();

const calc = {
    add(num1, num2) {
        return num1 + num2;
    },
    subtract(num1, num2) {
        return num1 - num2;
    },
    mult(num1, num2) {
        return num1 * num2;
    }
};
console.log(calc.add.call(null, 5, 3));
console.log(calc.subtract.apply(null,[5, 3]));

class Person {

    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old.`);
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person('Kostya', 28);
person1.introduce();

class BankAccount {
    static bankName = 'FruitBank';
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance ${this.balance}`);
    }
    withDrawal(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawal ${amount} from account ${this.accountNumber}. New balance ${this.balance}`);
        } else {
            console.log(`Not enough money into ${this.accountNumber}`);
        }  
    }
}

const myAccount = new BankAccount('4084531063452', 50000);
myAccount.deposit(1000);
myAccount.withDrawal(30000);
myAccount.withDrawal(100000);
console.log(myAccount);
