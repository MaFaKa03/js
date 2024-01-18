"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

function maxNum(num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    } else if(num3 > max) {
        max = num3;
    }
    alert(`Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${max}.`)
}

const num1 = Number(prompt('Enter number: '));
const num2 = Number(prompt('Enter number: '));
const num3 = Number(prompt('Enter number: '));
maxNum(num1, num2, num3);


