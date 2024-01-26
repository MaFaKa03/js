function mergeArray(arr1, arr2) {

    const newArr = [...arr1, ...arr2];
    return newArr;
    //or
    //const mergeArray = (arr1, arr2) => [...arr1, ... arr2];
}

console.log(mergeArray([1, 2, 3], [4, 5, 6]));

// function removeDublication() {
//     const values = arguments;
//     const newArr = []; 
//     for (let i = 0; i < values.length; i++) {
//         newArr.push(values[i]);   
//     }
// //     return newArr;
// // }
// // console.log(removeDublication(1, 2, 3, 3, 4, 5, 6, 6, 1, 7));
// console.log(removeDublication(1, 2, 3, 3, 4, 5, 6, 6, 1, 7).filter((item, index, array) => item != array[index + 1]));

//or

function removeDublication(...arguments) {
    return arguments.filter((item, index) => arguments.indexOf(item) === index)
}
console.log(removeDublication(1, 2, 3, 3, 4, 5, 6, 6, 1, 7));
// console.log(removeDublication(1, 2, 3, 3, 4, 5, 6, 6, 1, 7).filter((item, index, array) => item != array[index + 1]));

function getEvenNumbers(array) {
    const newArray = array.filter((i) => i % 2 === 0);
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 2 == 0) {
    //         newArray.push(array[i])
    //     }
    // }
    return newArray;
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 9]));

function calculateAverage(array) {
    // let result = 0;
    // for (let i = 0; i < array.length; i++) {
    //     result += array[i];
    // }
    const res = array.reduce((acc, num) => acc + num) / array.length;
    return res; 
}
console.log(calculateAverage([1, 2, 3, 4, 5, 6, 7, 9]));

function capitalizeFirstLetter(str) {
    // const newArray = str.split(' ');
    // let newStr = '';

    // for (let i = 0; i < newArray.length; i++) {
    //     for (let j = 0; j < newArray[i].length; j++) {
    //         if (j === 0) {
    //             newStr += newArray[i][j].toUpperCase();
    //         } else {
    //             newStr += newArray[i][j];
    //         }
    //         if (j === newArray[i].length - 1) {
    //             newStr += " ";
    //         }
    //     }
    // }
    // return newStr;
    return str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
}
console.log(capitalizeFirstLetter('kostya khait'));

function createCalc(num) {
    // let value = num;
    const obj = {
        value: num,
        add(num) {
            return obj.value += num;
        },
        subtract(num) {
            return obj.value -= num;
        },
        result() {
            return obj.value;
        }
    };
    return obj;
    

}

const calc = createCalc(5);
calc.add(10);
console.log(calc.result());
calc.subtract(3);
console.log(calc.result());

function createGreeting(name) {
    const obj = {
        name: name,
        greeting() {
            console.log(`hello ${name}`);
        }
    }
    return obj;
}
const hl = createGreeting('Kostya');
hl.greeting();

function createPasswordChecker(passwordLength) {
    const obj = {
        passwordLength: passwordLength,
        checker(password) {
            if (password.length === passwordLength) {
                return true;
            } else {
                return false;
            }   
        },
    }
    return obj;

 
}
const check = createPasswordChecker(8);
console.log(check.checker('passwo'));
