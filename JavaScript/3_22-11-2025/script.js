// !! Task 1

// Попросите пользователя ввести свой возраст. Если ему 18 или больше — вывести «Доступ разрешён». Иначе — «Доступ запрещён».

// ! SOLUTION

// let userAge = +prompt("Enter your age: ");

// document.body.innerHTML = `<h1 style="color:red;">${
//   userAge >= 18 && typeof userAge !== NaN ? "Access granted" : "Go away"
// }</h1>`;

// !! Task 2

// Проверка чётности числа

// ! SOLUTION

// let userValue = prompt("What number?");
// if (userValue !== null) {
//   userValue = userValue.trim();
//   document.body.innerHTML = `<h1 style="color:blue">The value <strong style="color:red">${userValue}</strong> is ${
//     isNaN(Number(userValue)) || userValue === ""
//       ? "wrong, must be a number"
//       : Number(userValue) % 2 === 0
//       ? "even"
//       : "odd"
//   }
// </h1>`;
// }

// !! Task 3

// Больше/меньше/равно
// Попросите пользователя ввести два числа.
// Выведите:
//     - первое больше
//     - второе больше
//     - числа равны

// ! SOLUTION
// let firstNum = prompt("Enter first number: ");
// let secondNum = prompt("Enter second number: ");
// if (firstNum !== null && secondNum !== null) {
//   firstNum = firstNum.trim();
//   secondNum = secondNum.trim();
//   if (firstNum !== "" || secondNum !== "") {
//     if (firstNum > secondNum) {
//       document.body.innerHTML = `<h1 style="color:blue;">The num ${firstNum} is higher than ${secondNum}`;
//     } else if (firstNum < secondNum) {
//       document.body.innerHTML = `<h1 style="color:blue;">The num ${firstNum} is lower than ${secondNum}`;
//     } else if (firstNum === secondNum) {
//       document.body.innerHTML = `<h1 style="color:blue;">The num ${firstNum} is equal than ${secondNum}`;
//     }
//   }
// }
// !! Task 4

// Проверка логина и пароля

// ! SOLUTION

// const USER_NAME = "Vlad";
// const USER_PASSWORD = "560200@";
// let userName = prompt("Enter your login");
// let userPassword;
// if (userName !== null) {
//   userPassword = prompt("Enter your password");
//   if (userPassword !== null) {
//     if (userName === USER_NAME && userPassword === USER_PASSWORD) {
//       document.body.innerHTML = `<h1 style="color:green;"> Access granted<h1>`;
//     } else {
//       document.body.innerHTML = `<h1 style="color:red;"> INCORRECT USER NAME OR/AND PASSWORD<h1>`;
//     }
//   }
// }

// !! Task 5

// Определение сезона
// Пользователь вводит число месяца (1–12).
// Выведите: зима, весна, лето, осень.

// ! SOLUTION

// let userValue = prompt("Enter the number of month from 1 to 12");
// if (userValue !== null) {
//   if (userValue >= 1 && userValue <= 12) {
//     if (userValue >= 9 && userValue <= 11) {
//       alert("This is AUTUMN");
//     } else if (userValue >= 3 && userValue <= 5) {
//       alert("This is SPRING");
//     } else if (userValue >= 6 && userValue <= 8) {
//       alert("This is SUMMER");
//     } else {
//       alert("This is WINTER");
//     }
//   } else {
//     alert("VALUE ERROR!!");
//   }
// }

// !! Task 6

// Делится ли число на 3 и 5 одновременно

// ! SOLUTION

// const userValue = prompt("Enter your value");

// if (userValue !== null) {
//   const userValueStr = userValue.trim();
//   const num = +userValueStr;
//   if (num > 0) {
//     if (num % 3 === 0 && num % 5 === 0) {
//       document.body.innerHTML = `<h1 style="color:green;">YES!!! Your value <strong>${num}</strong> can be divided by 3 and 5`;
//     } else {
//       document.body.innerHTML = `<h1 style="color:red;">NO!!! Your value <strong>${num}</strong> cannot be divided by 3 and 5`;
//     }
//   } else {
//     document.body.innerHTML = `<h1 style="color:red;">INCORRECT VALUE: <strong style='color:brown;'>${userValueStr}</strong> cannot be divided`;
//   }
// }

// !! Task 7

// Проверка длины строки

// ! SOLUTION

// const userInput = prompt("Enter some words please");

// document.body.innerHTML = `<h1 style="color:purple;">Length of your string is ${userInput.length}</h1>`;

// !! Task 8

// Проверка диапазона
// Пользователь вводит число.
// Если оно от 10 до 20 включительно — «В диапазоне».
// Иначе — «Вне диапазона».

// ! SOLUTION

// const userInput = prompt("Enter your value in range (10 - 20)");

// if (!isNaN(Number(userInput)) && userInput.trim() !== "") {
//   if (Math.ceil(userInput) > 9 && Math.pow(userInput) < 21) {
//     document.body.innerHTML = `<h1 style="color: brown;">Your value <span style="color:green;">${userInput}</span> is CORRECT`;
//   } else {
//     document.body.innerHTML = `<h1 style="color: brown;">Your value <span style="color:red;">${userInput}</span> is out of range(10 - 20)`;
//   }
// } else {
//   document.body.innerHTML = `<h1 style="color: brown;">Your value <span style="color:red;">${userInput}</span> is not a number`;
// }

// !! Task 9

// Вложенные условия: кинотеатр
// Попросить возраст.
// Если возраст < 16 → доступ запрещён.
// Если возраст от 16 до 18 → доступ только с родителями.
// Если 18 и больше → доступ разрешён.

// ! SOLUTION

// const userAge = prompt("What is your age?");
// if (!isNaN(Number(userAge)) && userAge.trim() !== "") {
//   if (+userAge < 16) {
//     document.body.innerHTML = `<h1 style="color:red;">Go home little bitch!! You are only ${userAge} !! This is movie is not for you!!</h1>`;
//   } else if (+userAge < 18) {
//     document.body.innerHTML = `<h1 style="color:orange;">You can see this movie only with a parents!! You are only ${userAge} !!</h1>`;
//   } else {
//     document.body.innerHTML = `<h1 style="color:green;">WELCOME bitch!! You are ${userAge} years old!! You can enter the cinema</h1>`;
//   }
// } else {
//   document.body.innerHTML = `<h1 style="color: brown;">Your age <span style="color:red;">"${userAge}"</span> is not a number</h1>`;
// }

// !! Task 10

// Погода и температура
// Пользователь вводит погоду (sunny, cloudy, rain) и температуру.
// Если (sunny или cloudy) И температура выше 15 — «Можно гулять».
// Иначе — «Лучше остаться дома».

// ! SOLUTION

// const weather = prompt("What is the weather today? (sunny/cloudy/rain)");

// if (weather === "sunny" || weather === "cloudy" || weather === "rain") {
//   const temperature = prompt("What is the temperature today?");
//   if (temperature >= 15 && weather !== "rain") {
//     document.body.innerHTML = `<h1 style="color: green;">It is a good weather!! You can go!))</h1>`;
//   } else {
//     document.body.innerHTML = `<h1 style="color:red;">STAY AT HOME!! Today is ${weather} and the temperature is only ${temperature}</h1>`;
//   }
// } else {
//   document.body.innerHTML = `<h1 style="color:red;">Incorrect value. You need to write <span style="color:green;">sunny/cloudy/rain</span></h1>`;
// }

// !! Task 11

// Проверка пробела в строке
// Пользователь вводит текст. Если строка содержит пробел — вывести «Введено несколько слов». Иначе — «Одно слово».

// ! SOLUTION

// const userStr = prompt("Enter some text");

// if (userStr.trim().includes(" ")) {
//   document.body.innerHTML = `<h1 style="color: orange;">There is more than one word!)</h1>`;
// } else {
//   document.body.innerHTML = `<h1 style="color: orange;">It is only one word = <span style="color: brown;">${userStr}</span></h1>`;
// }

// !! Task 12

// Тернарный оператор: скидка
// Пользователь вводит сумму покупки. Если больше 1000 → скидка 10%, иначе 0%.
// Вывести итоговую сумму (использовать тернарный оператор).

// ! SOLUTION

// const userPurchase = prompt("What is the price of your purchase?");

// userPurchase >= 1000
//   ? (document.body.innerHTML = `<h1 style="color:green;">Your disount is 10%. Final payout is ${
//       userPurchase - userPurchase * 0.1
//     }CZK</h1>`)
//   : (document.body.innerHTML = `<h1 style="color:orange;">Purchase without discount. Final payout is ${userPurchase}CZK</h1>`);

// !! Task 13

// Оценка по баллам
// Пользователь вводит число от 0 до 100.
// Вывести:
//     - 90–100 → Отлично
//     -70–89 → Хорошо
//     -50–69 → Удовлетворительно
//     -менее 50 → Неудовлетворительно

// ! SOLUTION

// const userGrade = prompt("What is your grade? From 0 to 100");

// if (
//   !isNaN(+userGrade) &&
//   userGrade !== null &&
//   userGrade.trim() !== "" &&
//   +userGrade >= 0 &&
//   +userGrade <= 100
// ) {
//   if (+userGrade < 50) {
//     document.body.innerHTML = `<h1 style="color: red;">${userGrade} - это Неудовлетворительно</h1>`;
//   } else if (+userGrade < 70) {
//     document.body.innerHTML = `<h1 style="color: brown;">${userGrade} - это Удовлетворительно</h1>`;
//   } else if (+userGrade < 90) {
//     document.body.innerHTML = `<h1 style="color: blue;">${userGrade} - это Хорошо</h1>`;
//   } else {
//     document.body.innerHTML = `<h1 style="color: green;">${userGrade} - это Отлично</h1>`;
//   }
// } else {
//   document.body.innerHTML = `<h1 style="color: red;">ERROR!!!!</h1>`;
// }

// !! Task 14

// Пользователь вводит имя. Если имя начинается с заглавной буквы — всё хорошо.
// Если с маленькой — исправить. Вывести исправленное имя.

// ! SOLUTION

// const userName = prompt("What is your name?");
// const x = userName[0];
// if (x === x.toUpperCase()) {
//   document.body.innerHTML = `<h1 style="color: green;">Correct. First letter in uppercase</h1>`;
// } else {
//   let correctName = x.toUpperCase() + userName.toLowerCase().slice(1);
//   document.body.innerHTML = `<h1 style="color: red;">Incorrect. It is must to be "${correctName}"</h1>`;
// }

// !! Task 15

// Пользователь вводит ввозраст и видит результат:
//  - до 12 - ребёнок
//  - до 18 - подросток
// - больше 18 - взрослый

// ! SOLUTION

// const userInput = prompt("How old are you?");
// if (userInput !== null && userInput.trim() !== "" && !isNaN(+userInput)) {
//   const age = Number(userInput.trim());
//   if (age < 12) {
//     document.body.innerHTML = `<h1 style="color: brown;">You are kid. Because you are ${age} years old.</h1>`;
//   } else {
//     age < 18
//       ? (document.body.innerHTML = `<h1 style="color: purple;">You are teenager. Because you are ${age} years old.</h1>`)
//       : (document.body.innerHTML = `<h1 style="color: purple;">You are very old. Because you are ${age} years old.</h1>`);
//   }
// }
