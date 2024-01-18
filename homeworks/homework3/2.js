"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/


function tax() {
    const num = Number(prompt('Введите число'));
    if (Number.isFinite(num)) {
        const salary = (num * 0.87).toFixed(2);
        console.log(`Размер заработной платы за вычетом налогов равен ${salary}.`);
    } else {
        console.log('Значение задано неверно');
    }
}
tax();



