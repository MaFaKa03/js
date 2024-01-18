// Задание 1: 
 
// 1. Создайте массив с элементами 1, 2, 3. 
// Выведите на экран каждый из этих элементов.
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}

// 2. Создайте массив с произвольными элементами. 
// Выведите на экран количество элементов в этом массиве.
const array = [5, 7, 10, 'kostya', true, 4.7];
console.log(array.length);

// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента 
// число 1, вместо второго - 2, вместо третьего - 3.

const arr3 = ['a', 'b', 'c'];
let newElement = 1;
for (let i = 0; i < arr3.length; i++) {
    arr3[i] = newElement;
    newElement++;
    
}
console.log(arr3);

// Задание 2:
 
// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте 
// каждый элемент массива на единицу.

const arrNumber = [1, 2, 3];
for (let i = 0; i < arrNumber.length; i++) {
    arrNumber[i]++;
}
console.log(arrNumber);

// 2. Узнайте длину следующего массива и объясните почему такое значение:


const arrNull = [];
arrNull[3] = 'a';
arrNull[8] = 'b';
console.log(arrNull.length);

// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.

const arrAdd = [1, 2, 3];
arrAdd.push(4, 5);
console.log(arrAdd);

// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента. 
// Проверьте, какое станет значение свойства length после этого.

const arrRemove = [1, 4, 6, 4, 3];
arrRemove.pop();
arrRemove.pop();
console.log(arrRemove.length);

const arrRemove2 = [1, 4, 6, 7, 3];
arrRemove2.splice(1, 1);
arrRemove2.splice(2, 1);
console.log(arrRemove2);

// Задание 3:
 
// 1. С помощью цикла for выведите в консоль числа от 11 до 33.

for (let i = 11; i < 33; i++) {
    console.log(i);
    
}

// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 
// до 100 включительно.

for (let i = 1; i < 101; i++){
    if (i % 2 != 0) {
        console.log(i);
    }
   
}

// 3. С помощью цикла for выведите в консоль числа от 100 до 0.

for (let index = 100; index >= 0; index--) {
    console.log(index);
    
}

// 4. Создать переменную с заданным числом. Умножайте число на 3 столько раз, 
// пока результат умножения не станет больше 1000. Какое число получится? 
// Посчитайте количество итераций, необходимых для этого.

let num = 1;
let count = 0;

// do {
//     num = num * 3;
//     count++;
// } while (num * 3 < 1000);

while (num * 3 < 1001) {
    num = num * 3;
    count++;
}

console.log(num);
console.log(count);

// Задание 4:
 
// 1. Создать массив `[2, 5, 9, 15, 1, 4]`.
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
const arrNum = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 3 && arrNum[i] < 10) {
        console.log(arrNum[i]);
    }
    
}
// 2. Найдите сумму четных чисел от 2 до 100.
let result = 0;
for (let i = 2; i < 100; i+=2) {
    result = result + i
    
}
console.log(result);

// 3. Создать массив `[2, 5, 9, 3, 1, 4]`.
// Найдите сумму элементов этого массива.

let sum = 0;
const arrSum = [2, 5, 9, 3, 1, 4];
for (let i = 0; i < arrSum.length; i++) {
    sum += arrSum[i];
    
}
console.log(sum);

// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let arrString = '';
for (let i = 0; i < 10; i++) {
    if (i === 9) {
        arrString += '-';
    } else {
      arrString += `-${i + 1}`;  
    }
    
}
console.log(arrString);

// 5. Создать массив `[2, 5, 9, 0, 3, 1, 4]`.
// Запустите цикл, который будет по очереди выводить элементы этого массива в 
// консоль до тех пор, пока не встретится элемент со значением 0. После этого 
// цикл должен завершить свою работу.

const arr5 = [2, 5, 9, 0, 3, 1, 4];
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] === 0) {
        break;
    } else {
        console.log(arr5[i]);
    }
    
}

//      Задание 5:
 
// 1. Создать массив из 10 случайных чисел от 0 до 100 включительно.
// Наобходимо вывести в консоль все числа, которые делятся и на 2, и на 3.
const arrRandom = [...Array(10)];
// console.log(arrRandom.length);
for (let i = 0; i < arrRandom.length; i++) {
    arrRandom[i] = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
}
console.log(arrRandom);
for (let i = 0; i < arrRandom.length; i++) {
    if (arrRandom[i] % 6 == 0) {
        console.log(arrRandom[i]);
    }
    
}

// 2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество 
// цифр 3 в этом массиве.

const arr6 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;
for (let i = 0; i < arr6.length; i++) {
    
    if (arr6[i] === 3) {
        counter++;
    }
}
console.log(counter);

// 4. Дан массив: `[1, 2, 3, 4, 5]`.
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]

const arr7 = [1, 2, 3, 4, 5];
arr7.splice(1, 2);
console.log(arr7);

// В функцию передается строка в которой находятся круглые скобки, необходимо 
// реализовать функцию так, чтобы она возвращала правду, если скобки парные (
// открывающие и закрывающие), а также порядок открывающих и закрывающих скобок 
// верно соблюден.
 

function validParentheses(str) {

    if (str.length % 2 != 0 || str[0] === ')') {
        return false;
        
    } else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i+1]) {
                return false;
            }
        
        }
    }
    return true;


}
 
console.log(validParentheses('()')); // true
console.log(validParentheses('())')); // false
console.log(validParentheses('())(')); // false

// В функцию передается число, необходимо из функции вернуть максимальное число, 
// содержащее те же цифры, что и в переданном числе. Если было передано 
// некорректное число, вернуть NaN.
 

function getMax(num) {
    if (!Number.isFinite(num)) {
        return NaN;
    } else {
        let result = String(num);
        const arr = result.split('');
        for (let i = 0; i < arr.length; i++) {
            if (!Number(arr[i])) {
                arr.splice(i, 1);
            }
        }
        arr.sort(function (a, b) {
            return b - a;
        });
        result = arr.join('');
        result = Number(result);
        return result;

    }

}
 
console.log(getMax(6118)); // 8611
console.log(getMax(17)); // 71
console.log(getMax(17.5)); // 751
console.log(getMax('Привет')); // NaN

