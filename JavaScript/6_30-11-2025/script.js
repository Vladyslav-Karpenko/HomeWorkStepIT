// !! TASK 1
// Напиши функцию greetUser, которая принимает объект:
// { name: "Alex", age: 25 }
// и выводит строку: Привет, Alex! Тебе 25 лет.
// Используй деструктуризацию объекта внутри функции.

// !! SOLUTION
// function greetUser(obj) {
//     const { name, age } = obj
//     return `Hi ${name}!! You are ${age} years old.`
// }
// console.log(greetUser({ name: 'Alex', age: 25 }));


// !! TASK 2

// Напиши функцию getLastItem, которая принимает массив и возвращает его последний элемент. 
// Если массив пустой → возвращает "массив пуст".

// !! SOLUTION
// function getLastItem(arr) {
//     if (arr.length > 0) {
//         return arr.at(-1)
//     }
//     return `The array is empty`
// }
// console.log(getLastItem([]));
// console.log(getLastItem([24, 23, 2222]));

// !! TASK 3

// Напиши функцию hasProperty(obj, key), которая принимает объект и строку. Функция должна вернуть: 
//  		- true — если свойство существует
//  		- false — если нет

// !! SOLUTION

// function hasProperty(obj, key) {
//     return key in obj
// }

// const myStr = 'city'
// const myObj = {
//     name: 'Vlad',
//     age: 36,
//     city: 'Prague'
// }
// console.log(myObj);
// console.log(hasProperty(myObj, myStr));
// console.log(hasProperty(myObj, 'name'));
// console.log(hasProperty(myObj, 'skills'));
// myObj['skills'] = 'JavaScript'
// console.log(hasProperty(myObj, 'skills'));
// console.log(myObj);

// !! TASK 4

// Напишите функцию sumObjectValues(obj), которая возвращает сумму всех чисел объекта: const data = { a: 2, b: 5, c: 7 };

// !! SOLUTION

// function sumObjectValues(obj) {
//     result = 0
//     for (o of Object.values(obj)) {
//         result += o
//     }
//     return result
// }
// const data = {
//     a: 2,
//     b: 5,
//     c: 7
// }
// console.log(sumObjectValues(data))
// console.log(Object.keys(data));
// console.log(Object.values(data));

// !! TASK 5

// Напиши функцию filterByLength(arr, minLen), которая принимает:
// - массив строк
//     - минимальную длину строки
// И возвращает новый массив, где только строки длиннее minLen.

// !! SOLUTION

// function filterByLength(arr, minLen) {
//     const resultArr = []
//     for (i of arr) {
//         if (i.length > minLen)
//             resultArr.push(i)
//     }
//     return resultArr
// }

// const myArr = ['Vladyslav', 'Cat', 'House', 'Dominika', 'Books']

// console.log(filterByLength(myArr, 3));
// console.log(filterByLength(myArr, 5));

// !! TASK 6

// Напиши функцию createUser(name, age), которая возвращает объект:

// {
//     id: <случайное число от 1 до 1000 >,
//         name: "",
//             age: 0,
//                 isActive: true
// }
// ID генерируй внутри функции с помощью Math.random().

// !! SOLUTION

// function createUser(name, age) {
//     return {
//         id: Math.floor((Math.random() * 1000) + 1),
//         name: name,
//         age: age,
//         isActive: true
//     }
// }

// console.log(createUser('Vladyslav', 36));

// !! TASK 7

// Напиши функцию countEven(numbers), которая принимает массив чисел и возвращает количество чётных чисел.

// !! SOLUTION

// const myArr = [2, 3, 4, 5, 6, 7, 8]

// function countEven(numbers) {
//     let count = 0;
//     for (i of numbers) {
//         if (i % 2 === 0) {
//             count++
//         }
//     }
//     return count
// }

// console.log(countEven(myArr));

// !! TASK 8

// Напиши функцию formatName(fullName), которая принимает строку "oleksii shevchenko" и возвращает "Oleksii Shevchenko".
// То есть первая буква каждого слова — большая.

// !! SOLUTION

// function formatName(fullName) {
//     let newArr = []
//     for (i of fullName.split(' ')) {
//         newArr.push(i[0].toUpperCase() + i.slice(1))
//     }
//     return newArr.join(' ')
// }
// console.log(formatName('vladyslav karpenko'));

// !! TASK 9

// Напиши функцию merge(obj1, obj2), которая возвращает НОВЫЙ объект, содержащий свойства обоих:
// merge({ a: 1 }, { b: 2 }) → { a: 1, b: 2 }

// !! SOLUTION

// const obj1 = {
//     name: 'Vlad',
//     age: 36
// }
// const obj2 = {
//     surname: 'Karpenko',
//     city: 'Prague'
// }

// const merge = (obj1, obj2) => Object.assign(obj1, obj2)

// console.log(merge(obj1, obj2));


// !! TASK 10

// Есть массив:

// const users = [
//     { name: "Alex", online: true },
//     { name: "Maria", online: false },
//     { name: "Oleg", online: true }
// ];

// Напиши функцию getOnlineUsers(users), которая возвращает новый массив имён пользователей, которые online.

// !! SOLUTION

// const users = [
//     { name: 'Alex', online: true },
//     { name: 'Maria', online: false },
//     { name: 'Oleg', online: true }
// ]
// const getOnlineUsers = (users) => {
//     const resultArr = []
//     for (user of users) {
//         if (user.online) {
//             resultArr.push(user.name)
//         }
//     }
//     return resultArr
// }
// console.log(getOnlineUsers(users));
