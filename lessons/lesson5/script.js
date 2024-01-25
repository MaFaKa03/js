// Задание 1:
 
// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена 
// дней недели. Выведите на экран “Вторник”.

const week = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
    7: 'Sunday',

};
console.log(week[2]);

// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.

const user = {
    name: 'Kostya',
    surname: 'Khait',
    age: 28,

};
console.log(`${user.name} ${user.surname} ${user.age} `);

// 3. Добавьте в объект user свойство отчество, которое пользователь должен 
// ввести с клавиатуры.

user.secondName = prompt("Enter secomdName");
console.log(user);

// 4. Удалите свойство surname.

delete user.surname;
console.log(user);

// Задание 2:
 
// 1. Создайте два массива: первый с названиями дней недели, а второй - с их 
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`
const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const numberDays = [1, 2, 3, 4, 5, 6, 7];

// 2. С помощью цикла создайте объект, ключами которого будут названия дней, 
// а значениями - их номера.
const dayOfWeek = {

};
for (const key in days) {
        dayOfWeek[days[key]] = numberDays[key];

}
console.log(dayOfWeek);

// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и 
// возведите каждый элемент этого объекта в квадрат.
const squad = { x: 1, y: 2, z: 3 };
for (const key in squad) {
    squad[key] **= 2;
}
console.log(squad);

// Задание 3:
 
const obj = {
    num: 10,
    key1: {
        problem: {
            trouble: -4,
        },
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
};

function getSum(object) {
    let sum = 0;
    for (const key in object) {
        if (typeof object[key] === 'number') {
            sum += object[key];
        } else {
            sum += getSum(object[key]);
        }
    }
    return sum;
}

console.log(getSum(obj));
 
// Найдите сумму всех чисел, приведенного объекта.

// Задание 4: 
 
// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и 
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос 
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать, 
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль 
// выводится текст: “вы проиграли”.
 
const riddle = {
    question: 'Зимой и летом одним цветом',
    answer: 'елка',
    clue: ['зеленая', 'ростет в лесу', 'наряжаем на новый год'],
    askQuestion() {
        let input = prompt(this.question)
        // let count = 0;
        if (input.toLowerCase() === this.answer.toLowerCase()) {
            console.log('Congratulation');
        } else {
            for (let i = 0; i < this.clue.length; i++) {
                input = prompt(this.clue[i]);
                if (input.toLowerCase() === this.answer.toLowerCase()) {
                    console.log('Congratulation');
                    break;
                } else if (i + 1 === this.clue.length) {
                    console.log('Вы проиграли');
                }
                
            }
        }
    }
};
console.log(riddle.askQuestion());