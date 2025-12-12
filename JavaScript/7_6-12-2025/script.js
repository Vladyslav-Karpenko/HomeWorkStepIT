// !!! Task 1 
// Фильтр заказов
// Есть массив заказов в интернет-магазине.
// Нужно получить только оплаченные заказы.
// !! SOLUTION

// const orders = [
//     { id: 1, status: "paid", total: 100 },
//     { id: 2, status: "pending", total: 50 },
//     { id: 3, status: "paid", total: 70 },
// ];

// const paidOrders = orders.filter((order) => order.status === 'paid')
// console.log(paidOrders);

// !!! Task 2 
// Найти ближайшее событие
// Есть массив событий с датами.
// Найти событие, которое наступит первым после текущей даты.

// const events = [
//     { name: "Концерт", date: "2025-12-10" },
//     { name: "Выставка", date: "2025-12-05" },
//     { name: "Фестиваль", date: "2025-12-20" }
// ];
// const today = "2025-12-06";
// !! SOLUTION

// const getDayDifference = events.map(event => {
//     const todayDate = new Date(today)
//     const msToDays = (ms) => ms / (1000 * 60 * 60 * 24)
//     return { name: event.name, date: msToDays(new Date(event.date) - todayDate) }
// })

// const filterMinus = getDayDifference.filter(event => {
//     return event.date > 0
// })

// const minValue = filterMinus.reduce((min, date) =>
//     min.date < date.date ? min : date
// )

// console.log(`The first date is ${events.filter((event) => (event.name === minValue.name))[0].date} it will be a ${minValue.name}`);

// !!! Task 3 
// Проверить наличие товаров на складе
// Есть массив товаров.
// Проверить, есть ли хотя бы один товар с количеством > 0.

// const products = [
//     { name: "Телефон", qty: 0 },
//     { name: "Ноутбук", qty: 0 },
//     { name: "Наушники", qty: 5 }
// ];
// !! SOLUTION

// const isInStock = products.filter((arr) => arr.qty > 0)


// if (isInStock.length > 0) {
//     isInStock.forEach((product) => {
//         console.log(`We have in stock ${product.name}`)
//     })
// } else {
//     console.log(`Sorry nothing in stock`);
// }


// !!! Task 4 
// Все пользователи совершеннолетние?
// Массив пользователей с возрастом.
// Проверить, все ли старше 18 лет.

// const users = [
//     { name: "Alex", age: 20 },
//     { name: "Mia", age: 17 },
//     { name: "John", age: 22 }
// ];
// !! SOLUTION

// const isAdult = users.every((user) => user.age >= 18) ? `All users are adult` : `Not all users are adult`
// console.log(isAdult);

// !!! Task 5 
// Подсчёт суммы покупок
// Массив заказов с суммами.
// Подсчитать общую сумму всех заказов.

// const orders = [
//     { id: 1, total: 100 },
//     { id: 2, total: 50 },
//     { id: 3, total: 70 },
// ];

// !! SOLUTION

// const sumOfOrders = orders.reduce((acc, num) => acc + num.total, 0)
// console.log(sumOfOrders);

// !!! Task 6 
// Получить имена клиентов
// Массив клиентов.
// Получить массив только с именами.

// const clients = [
//     { id: 1, name: "Alex" },
//     { id: 2, name: "Mia" },
//     { id: 3, name: "John" },
// ];
// !! SOLUTION

// const arrClients = clients.map((client) => client.name)
// console.log(arrClients);


// !!! Task 7 
// Удалить пользователей младше 21 и получить массив их имён.
// const users = [
//     { name: "Alex", age: 20 },
//     { name: "Mia", age: 25 },
//     { name: "John", age: 30 }
// ];
// !! SOLUTION

// const userOlder21 = users.filter((user) => user.age > 21).map((user) => user.name)
// console.log(userOlder21);

// !!! Task 8 
// Обновить объект
// Массив пользователей.
// Поменять возраст пользователя с id = 1 на 30.
// const users = [
//     { id: 1, name: "Alex", age: 20 },
//     { id: 2, name: "Mia", age: 25 }
// ];
// !! SOLUTION

// users.forEach((user) => {
//     if (user.id === 1) {
//         user.age = 30
//     }
// })
// console.log(users);

// !!! Task 9 
// Сортировка
// Массив товаров.
// Отсортировать по цене по убыванию.
// const products = [
//     { name: "Телефон", price: 500 },
//     { name: "Ноутбук", price: 1000 },
//     { name: "Наушники", price: 150 }
// ];
// !! SOLUTION

// const sortProducts = products.sort((a, b) => b.price - a.price)
// console.log(sortProducts);

// !!! Task 10 
// Комбинированный метод
// Массив студентов.
// Получить имена студентов с баллом > 80.

// const students = [
//     { name: "Alex", score: 90 },
//     { name: "Mia", score: 75 },
//     { name: "John", score: 85 }
// ];
// !! SOLUTION

// const studentsScore80 = students.filter((student) => student.score > 80).map((studentName) => studentName.name)
// console.log(studentsScore80);
