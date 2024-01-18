"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

function sum(num1, num2) {
    return num1 + num2;
}
function dif(num1, num2) {
    if (num1 > num2) {
        return num1 - num2;
    } else if (num2 > num1) {
        return num2 - num1;
    } else {
        return 0;
    }
}
function mult(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    if (num2 === 0) {
        return 'Делить на 0 нельзя';
    } else {
        return num1 / num2;
    }
}

console.log(sum(5, 4));
console.log(dif(5, 4));
console.log(dif(7, 8));
console.log(dif(8, 8));
console.log(mult(2, 5));
console.log(div(4, 0));
console.log(div(0, 4));
console.log(div(5, 2));
console.log(div(9, 3));