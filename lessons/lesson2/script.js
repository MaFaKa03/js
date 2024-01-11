// task1
// let name = prompt('Your name');
// let age = Number(prompt('Your age'));
// alert(`${name} Ваше количество оборотов вокруг солнца ${age}`); 

//task2
// let c = 13 % 5;

//task3

// const firtstNum = Number(prompt("Enter number: "));
// const secondNum = Number(prompt("Enter number: "));
// alert(`Сумма чисел равна ${firtstNum + secondNum}.\n
//         Разность чисел равна ${firtstNum - secondNum}.\n
//         Произведение чисел равно ${firtstNum * secondNum}.\n
//         Частное чисел равно ${firtstNum / secondNum}.\n
//         Остаток от деления чисел равен ${firtstNum % secondNum}.`)

//task3

// console.log(String(true));
// console.log('a' + true); 
// console.log(Number(true));
// console.log(true + 1);
// console.log(true + true);
// console.log(true - true);
// console.log(String(true) + Number(true));

//task4

// 1. Пользователь с клавиатуры вводит число. Необходимо создать условный 
// оператор, который выведет одну из следующих строк в консоль:
// “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.

// const num = Number(prompt('Enter number: '));
// num > 5 ? console.log("Число больше 5") : num < 5 ? console.log('Число меньше 5') : console.log('Число равно 5');

// 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и 
// выведите соответствующее сообщение.

// const test1 = 6;
// const test2 = 6;
// test1 === test2 ? console.log("Number is equels") : console.log("Number is not equels");

// 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух
// чисел минимальное и вывести в консоль строку “Минимальное число `число`”.

// const numFirst = Number(prompt("Enter number: "));
// const numSecond = Number(prompt("Enter number: "));
// numFirst < numSecond ? console.log(`Minimal number is ${numFirst}`) : console.log(`Minimal number is ${numSecond}`);

// 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15.
// Если пользователь ввел значение, о котором его попросили, необходимо вывести 
// сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
// “А вы, я смотрю, хулиганите! `число` - неверное значение.”

// const num = Number(prompt("Enter number bigger then 0 and less then 15"));

// num > 0 && num < 15 ? alert(`Спасибо за ${num}`) : alert(`А вы, я смотрю, хулиганите! ${num} - неверное значение.`)