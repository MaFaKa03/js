// Задание 1: 
 
// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна 
// вывести в консоль строку: 
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

function hello(name, surname, age) {
    console.log(`Привет, ${name} ${surname}. Вы уже большой, вам ${age}.`);
}
hello('Костя', 'Хаит', 28);

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.

const squard = function (num){
    return num = num * num;
}
console.log(squard(4));

// 3. Создайте функцию, которая принимает число. 
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

function checkNum(num) {
    if (!Number.isFinite(num) || num === 0) {
        return;
    }
    if (num > 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // num > 0 ? console.log('+++') : console.log('---'); 
}
checkNum(6);
checkNum(-2);
checkNum('bvjhjdm');
checkNum(0);

// Задание 2: 
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в 
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу 
// данной функции.

function sum(firstNum, secondNum, thirdNum) {
    console.log(firstNum + secondNum + thirdNum);
}
sum(5, 6, 1);

// Задание 3: 
 
// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень 
// переданного числа. 
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную 
// сумму в консоль. 

function returnSquard(num) {
    return Math.sqrt(num);
}
console.log(returnSquard(3) + returnSquard(4));

// 2. Создайте функцию, которая находит минимальное число из 2х переданных 
// аргументов функции и вернет найденное значение.

const minNum = function (num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }  
}
console.log(minNum(4, 6));

// Задание 4:
 
// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает 
// день недели на русском языке.

function dayFromWeek(num) {
    switch (num) {
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
        case 7:
            return 'Sunday';
            break;
        default:
            break;
    }
}
console.log(dayFromWeek(7));
console.log(dayFromWeek(-7));
console.log(dayFromWeek(8));
console.log(dayFromWeek(0));

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в 
// зависимости от времени суток (утро, день, вечер, ночь), например: 
// "Добрый день, Иван." или "Доброй ночи, Иван.".

function helloTimeOfDay(name) {
    var date = new Date();
    if (date.getHours() >= 0 && date.getHours() < 5) {
        return `Доброй ночи, ${name}`;
    } else if (date.getHours() >= 5 && date.getHours() < 12) {
        return `Доброе утро, ${name}`;
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
        return `Добрый день, ${name}`;
    } else {
        return `Добрый вечер, ${name}`;
    }
    
}
// console.log(helloTimeOfDay('Kostya'));

// Реализовать функцию round5, которой передается целое число, функция должна 
// возвращать ближайшее целое число к тому что было передано, без остатка делящееся 
// на 5.
 

function round5(val) {
    if (val > 0) {
        if (val % 5 == 0) {
            return val;
        } else if(val % 5 >= 3) {
            return (5 - (val % 5)) + val; 
        } else {
            return (val - (val % 5));
        }
    } else {
        if (val % 5 == 0) {
            return val;
        } else if(val % 5 <= -3) {
            return (-5 - (val % 5)) + val; 
        } else {
            return (val - (val % 5));
        }
    }

}
 
console.log(round5(0)); // 0
console.log(round5(2)); // 0
console.log(round5(3)); // 5
console.log(round5(11)); // 10
console.log(round5(14)); // 15
console.log(round5(50)); // 50
console.log(round5(-2)); // 0
console.log(round5(-3)); // -5

// Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо 
// чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, 
// кратных пяти — слово «Buzz». Если число кратно и 3, и 5, то программа должна 
// выводить слово «FizzBuzz»
function fizzBuzzList() {
    for (let index = 0; index < 99; index++) {
        if ((index + 1) % 3 == 0 && (index + 1) % 5 == 0) {
            console.log('FizzBuzz');
        }else if ((index + 1) % 3 == 0) {
            console.log('Fizz');
        } else if ((index + 1) % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(index + 1);
        }
        
    }
}
fizzBuzzList();