// !!!! 1 PART !!!

// !! Task 1. 
// Получить первый и последний элементы массива
// Дан массив чисел. Выведи в консоль первый и последний элементы.

// !SOLUTION

// const myArr = [2, 4, 6, 7, 45]
// console.log(`First value is ${myArr[0]} \nLast value is ${myArr.at(-1)}`);


// !! Task 2. 
// Проверить, есть ли элемент в массиве
// Дан массив строк. Используя includes(), проверь, есть ли в массиве слово "apple".

// !SOLUTION

// const element = 'Vlad'

// const myArr = ['Dominika', 'Zhanna', 'Valerii', 'Vlad']
// console.log(myArr.includes(element));

// !! Task 3. 
// Добавить и удалить элементы
// Создай массив из трёх чисел.
// Добавь в конец число 100 (push), а потом удали последний элемент (pop).

// !SOLUTION

// const myArr = [4, 66, 234]
// console.log(myArr);
// myArr.push(100)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// !! Task 4. 
// Преобразовать строку в массив слов
// Дана строка: "I love JavaScript".
// Используя split(), преврати её в массив слов.

// !SOLUTION

// const myStr = 'I love Javascript';
// const myArr = myStr.split(' ');

// console.log(myArr);


// !! Task 5. 
// Превратить массив в строку
// Есть массив: ["JS", "is", "awesome"].
// Собери из него строку "JS-is-awesome" с помощью join("-").

// !SOLUTION

// const myArr = ['JS', 'is', 'awesome']
// const newStr = myArr.join(' ')
// console.log(newStr);


// !! Task 6. 
// Найти индекс элемента
// Дан массив чисел. Используя indexOf(), найди индекс числа 7.
// Если его нет — выведи "Не найден".

// !SOLUTION
// let num = 9
// const arrNums = [56, 4345, 2, 66, 7, 8, 9]
// const numIndex = arrNums.indexOf(+num)
// if (numIndex === -1) {
//     console.log(`The num ${num} is not found`);
// } else {
//     console.log(`The index of num ${num} is ${numIndex}`)
// }


// !! Task 7. 
// Скопировать часть массива
// Дан массив: [10, 20, 30, 40, 50, 60].
// Используя slice(), создай новый массив, который содержит только элементы от 20 до 50 включительно.

// !SOLUTION

// const arrOfNums = [10, 20, 30, 40, 50, 60]
// const newArr = arrOfNums.slice(1, -1)
// console.log(newArr);

// !! Task 8. 
// Удалить элементы с помощью splice
// Есть массив: ["a", "b", "c", "d", "e"].
// Удалить элементы "b", "c" и вставить на их место "X".

// !SOLUTION

// const arrOfStr = ['a', 'b', 'c', 'd', 'e']
// arrOfStr.splice(1, 2, 'X')

// console.log(arrOfStr);


// !! Task 9. 
// Объединение массивов
// Даны два массива: [1, 2, 3] и [4, 5, 6].
// Создай новый массив, объединенный с помощью concat().

// !SOLUTION

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const newArr = arr1.concat(arr2)
// console.log(newArr);


// !! Task 10. 
// Увеличить все элементы массива в два раза
// Дан массив чисел.
// Используя любой цикл (for или for…of), создай новый массив, где каждое число умножаем на 2.

// !SOLUTION

// const myArr = [2, 10, 22, 60]
// const newArr = myArr.map(x => x * 2)
// console.log(newArr);


// !!!! 2 PART !!!

// !! Task 1 
// Создание простого объекта. Создайте объект user с полями:
//     name — "Alex"
//     age — 25
//     city — "Prague"
// Выведите каждое свойство в консоль.

// !SOLUTION

// const user = {
//     name: 'Alex',
//     age: 25,
//     city: 'Prague'
// }
// for (i in user) {
//     console.log(i);
//     console.log(user[i]);
// }

// !! Task 2. Изменение и добавление свойств
// Создайте объект car, добавьте свойства:
// brand: "Tesla"
// year: 2022
// Измените значение свойства year на 2024.

// !SOLUTION

// const car = {

// }
// car.brand = 'Tesla'
// car.year = 2022
// console.log(car);

// car.year = 2024
// console.log(car
// );

// !! Task 3. Доступ через квадратные скобки
// Есть объект:
// const product = {
//   "item name": "Laptop",
//   price: 1500
// };
// Выведите значение свойства "item name".

// !SOLUTION

// const product = {
//     "item name": "Laptop",
//     price: 1500
// }
// let { "item name": name, price } = product
// console.log(name);


// !! Task 4. Перебор объекта
// Дан объект:
// const book = {
//   title: "Dune",
//   author: "Frank Herbert",
//   rating: 9.2
// };
// Выведите все ключи и значения через цикл for...in.

// !SOLUTION

// const book = {
//     title: 'Dune',
//     author: 'Frank Herbert',
//     rating: 9.2
// }

// for (k in book) {
//     v = book[k]
//     console.log(`Key: ${k}  Value: ${v}`);

// }

// !! Task 5. Получить сумму значений. Дан объект:
// const salaries = {
//   Alex: 1200,
//   Tom: 1800,
//   Bob: 1500
// }; Найди сумму всех зарплат.

// !SOLUTION

// const salaries = {
//     Alex: 1200,
//     Tom: 1800,
//     Bob: 1500
// }

// let result = 0;

// for (i in salaries) {
//     result += salaries[i]

// }
// console.log(result);

// !! Task 6. Массив объектов. Есть массив:
// const users = [
//   { name: "Alex", age: 25 },
//   { name: "Tom", age: 30 },
//   { name: "Anna", age: 20 }
// ]; - Выведи имена всех пользователей.

// !SOLUTION

// const users = [
//     {
//         name: 'Alex',
//         age: 25
//     },
//     {
//         name: 'Tom',
//         age: 30
//     },
//     {
//         name: 'Anna',
//         age: 20
//     }
// ]

// for (i in users) {
//     console.log(users[i].name);

// }

// !! Task 7. Найти пользователя по имени
// Используя массив из предыдущей задачи, найди объект с name: "Tom".

// !SOLUTION

// const users = [
//     {
//         name: 'Alex',
//         age: 25
//     },
//     {
//         name: 'Tom',
//         age: 30
//     },
//     {
//         name: 'Anna',
//         age: 20
//     }
// ]
// const search = prompt('Enter the name for the search')
// let isIn = Boolean;
// for (i in users) {
//     if (users[i].name.includes(search)) {
//         isIn = true;
//         break
//     } else {
//         isIn = false
//     }

// }
// isIn ? console.log(`I found ${search} in this object`) : console.log(`Sorry, i can't find ${search} in this object`)

// !! Task 8. Вложенные объекты
// Дан объект: 
// const company = {
//   name: "Apple",
//   employees: {
//     total: 150000,
//     offices: {
//       USA: 5,
//       Europe: 3
//     }
//   }
// }; - Выведите количество офисов в Европе.

// !SOLUTION

// const company = {
//     name: 'Apple',
//     employees: {
//         total: 150000,
//         offices: {
//             USA: 5,
//             Europe: 3
//         }
//     }
// }
// const companyName = company.name
// const officeEurope = company.employees.offices.Europe

// console.log(`The ${companyName} has ${officeEurope} offices in Europe`);



// !! Task 9.  Фильтрация массива объектов. Есть массив товаров:
// const products = [
//   { name: "Laptop", price: 1500 },
//   { name: "Phone",  price: 700 },
//   { name: "Tablet", price: 900 },
//   { name: "TV",     price: 2000 }
// ];  - Вывести все товары, у которых цена > 900.

// !SOLUTION

// const products = [
//     {
//         name: 'Laptop',
//         price: 1500
//     },
//     {
//         name: 'Phone',
//         price: 700
//     },
//     {
//         name: 'Tablet',
//         price: 900
//     },
//     {
//         name: 'TV',
//         price: 2000
//     }
// ]
// for (let product of products) {
//     if (product.price > 900) {
//         console.log(product);
//     }
// }