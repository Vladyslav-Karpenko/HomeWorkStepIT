// !! Task # 1 (Форматировщик даты)
// Создайте страницу, которая спросит у пользователя день, месяц и год, и выведет на страницу дату в красивом формате.
// Используйте шаблонную строку.
// ! RESULT
// document.body.innerHTML = `<h1 style="color: purple;">Your date is ${prompt(
//   "What is the day?"
// )} <strong style='color:violet;'>${prompt(
//   "What is the month?"
// )}</strong> ${prompt("What is the year?")} </h1>`;

// !! Task # 2 (Перевод температуры)
// Попросите пользователя ввести температуру в градусах Цельсия.
// Переведите в Фаренгейты: F = C * 1.8 + 32
// и наоборот: С = (5 * (F - 32)) / 9
// Выведите результат на страницу.
// !RESULT
// celsius = +prompt("Enter the temperature in degrees Celsius");
// fahrenheit = +prompt("Enter the temperature in degrees Fahrenheit");
// const celsiusToFahrenheit = celsius * 1.8 + 32;
// const fahrenheitToCelsius = (5 * (fahrenheit - 32)) / 9;
// document.body.innerHTML = `<h1 style="color:brown;">Temperature ${celsius}C in Fahrenheit = ${celsiusToFahrenheit}</h>`;
// document.body.innerHTML += `<h1 style="color:brown;">Temperature ${fahrenheit}F in Celsius= ${fahrenheitToCelsius.toFixed(
//   2
// )}</h>`;

// !! Task # 3 (Округления)
// Пусть есть число 3.67892
// Выведите:
//   - округление вниз
//   - вверх
//   - обычное
//   - до двух знаков после запятой
// !RESULT
// myNumber = 3.67892;
// document.body.innerHTML = `
// <h1 style="color:blue;">
// Original value = ${myNumber}<br>
// Rounded up (ceil) = ${Math.ceil(myNumber)}<br>
// Rounded down (floor) = ${Math.floor(myNumber)}<br>
// Rounded simple (round) = ${Math.round(myNumber)}<br>
// Rounded to two decimal places (toFixed) = ${myNumber.toFixed(2)}
// </h1>
// `;

// !! Task # 4 (Генератор случайного числа)
// Выведите случайное число от 1 до 100.
// Подсказка:
// Math.floor(Math.random() * 100) + 1
// !RESULT
// document.body.innerHTML = `
// <h1 style="color:green;">the value is ${Math.floor(Math.random() * 100) + 1}
// `;

// !! Task # 5 (Проверка на число)
// Пользователь вводит что-то через prompt.
// Определите:
//   - можно ли перевести в число
//   - является ли результат NaN
//   - Выведите соответствующее сообщение.
// !RESULT
// userValue = prompt("Enter some value");
// document.body.innerHTML = `
// <h2 style="color:purple;">
// Your value is "${userValue}"<br>
// Convert to num = ${!isNaN(userValue)}<br>
// Value is NaN = ${isNaN(userValue)}<br>
// </h2>
// `;

// !! Task # 6 (Работа со строками)
// Пусть у вас есть строка:
// const str = "JavaScript is awesome";
// Выполните:
//     - выведите длину строки
//     - выведите слово "JavaScript" из строки
//     - замените "awesome" на "cool"
//     - сделайте всю строку в верхнем регистре
// !RESULT
// const str = "JavaScript is awesome";
// document.body.innerHTML = `
// <h2 style="color:brown;">
// Original string: ${str}<br>
// String length: ${str.length}<br>
// Only frist word (slice): ${str.slice(false, 10)}<br>
// String with new word (replace): ${str.replace("awesome", "cool")}
// </h2>
// `;

// !! Task # 7 (Создание логина)
// Пользователь вводит:
//  - имя
//  - фамилию
//  - Сформируйте логин формата:
//     <имя>.<фамилия>@gmail.com
// Используйте:
//  - trim
//  - toLowerCase
//  - шаблонные строки
// !RESULT
// userName = prompt("What is your name?").toLowerCase().trim();
// userSurname = prompt("What is your surname?").toLowerCase().trim();
// document.body.innerHTML = `
// <h1 style="color:green;">The user login: ${
//   userName + "." + userSurname
// }@gmail.com
// `;

// !! Task # 8 (Расчёт цены с НДС по заданной цене и количеству)
// Напишите программу, которая:
//     - С помощью prompt() спросит пользователя цену за 1 штуку без НДС.
//     - Затем спросит количество штук.
//     - Рассчитает:
//             - общую цену без НДС
//             - сумму НДС (21 %)
//             - общую цену с НДС
//     - Выведет результат с помощью alert().
// !RESULT
// pricePerPiece = +prompt("How much does one piece cost?");
// quantity = +prompt("What quantity?");
// priceTotal = pricePerPiece * quantity;
// vat = priceTotal * 0.21;
// document.body.innerHTML = `
// <h1 style="color:orange;">
// Price: ${priceTotal}<br>
// VAT (21%): ${vat}<br>
// TOTAL PRICE: ${priceTotal + vat}
// </h1>
// `;
// alert(`Total price with VAT is = ${priceTotal + vat}`);
