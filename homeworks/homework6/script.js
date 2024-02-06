// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9, 0];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let count = 0;
    const obj = {
        // count: value,
        increment() {
            return count++;
        },
        decrement() {
            return count--;
        },
        result() {
            return count;
        },
    };
    return obj;
}
const counter = createCounter();
counter.decrement();
counter.increment();
counter.increment();
console.log(counter.result());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(rootElement, nameClass) {
    let index = 0;
    if (rootElement[index] != nameClass) {
        index++;
        return findElementByClass(rootElement, nameClass);
    }
    return index;
    
}
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
// не совсем понимаю как работать с DOМ и как запустить рекурсию с ним.
// на сколько я понимаю метод .getElementById() возвращает итерируемый объект, соотвественно for'а должно быть достаточно и if'a и из-за этого не понимаю зачем нужна рекурсия здесь. и в целом с каким мы дркументом работаем, где именно этот метод должен искать нужный класс





