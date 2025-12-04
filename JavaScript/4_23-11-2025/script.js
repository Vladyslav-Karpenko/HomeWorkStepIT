// !! TASK 1.
// Вывести день недели по номеру (1–7)

// ! SOLUTION
// const userValue = prompt("Enter the number of day: (from 1 to 7)");
// let day;
// let dayInRange = true;
// switch (userValue) {
//   case "1":
//     day = "Monday";
//     break;
//   case "2":
//     day = "Tuesday";
//     break;
//   case "3":
//     day = "Wednesday";
//     break;
//   case "4":
//     day = "Thursday";
//     break;
//   case "5":
//     day = "Friday";
//     break;
//   case "6":
//     day = "Saturday";
//     break;
//   case "7":
//     day = "Sunday";
//     break;
//   default:
//     dayInRange = false;
//     alert("day is out of range");
// }
// if (dayInRange) {
//   document.body.innerHTML = `<h1 style="color:purple;"> Today is ${day} ! Have a good day</h1>`;
// }

// !! TASK 2.
// Тип напитка.
// Пользователь вводит: "tea", "coffee" или "water".
// и ему выводит цену 35 крон, 70 крон и  25 крон соответсвенно

// ! SOLUTION

// const userInput = prompt("What drink do you want? tea / coffee / water");
// let price;
// let isInputCorrect = true;
// switch (userInput) {
//   case "tea":
//     price = 35;
//     break;
//   case "coffee":
//     price = 70;
//     break;
//   case "water":
//     price = 25;
//     break;
//   default:
//     isInputCorrect = false;
//     alert("Inccorrect value!! It must to be tea / coffee / water");
// }
// if (isInputCorrect) {
//   document.body.innerHTML = `<h1 style="color:red;">${userInput[0].toUpperCase()}${userInput.slice(
//     1
//   )}
//   its a good choice and you need to pay only ${price} CZK</h1>`;
// }

// !! TASK 3.
// Определение сезона
// номер месяца 12, 1-2 - зима;
// номер месяца 3 - 5  - весна;
// номер месяца 6 - 8 - лето;
// номер месяца 9 - 11 - осень.

// ! SOLUTION

// const userInput = prompt("Enter the number of month (from 1 to 12)");

// let season;
// switch (userInput) {
//   case "12":
//   case "1":
//   case "2":
//     season = "Winter";
//     break;
//   case "3":
//   case "4":
//   case "5":
//     season = "Spring";
//     break;
//   case "6":
//   case "7":
//   case "8":
//     season = "Summer";
//     break;
//   case "9":
//   case "10":
//   case "11":
//     season = "Autumn";
//     break;
//   default:
//     alert("Incorrect VALUE! Please try again");
// }
// if (+userInput > 0 && +userInput < 13) {
//   document.body.innerHTML = `<h1 style="color:blue"> Your choise is a ${season}</h1>`;
// }
// !! TASK 4.
// Меню команд
// Пользователь вводит: start, stop, exit, help
// Вывести соответствующее действие. При проверки действия, команду которую ввел
// пользователь привести к единому типу, то есть учесть все нюансы ввода.

// ! SOLUTION

// const userCmd = prompt("Enter your command! (start / stop / exit / help) ");
// const cmdFormat = userCmd.toLowerCase().trim();

// if (cmdFormat === "start") {
//   document.body.innerHTML = `<h1 style="color:green;">Start bitch!</h1>`;
// } else if (cmdFormat === "stop") {
//   document.body.innerHTML = `<h1 style="color:red;">WoW WoW WOW Stop!!! bitch!</h1>`;
// } else if (cmdFormat === "help") {
//   document.body.innerHTML = `<h1 style="color:brown;">What help do you need bitch???</h1>`;
// } else if (cmdFormat === "exit") {
//   document.body.innerHTML = `<h1 style="color:blue;">EXIT EXIT EXIT!!! Ok!!!</h1>`;
// } else {
//   document.body.innerHTML = `<h1 style="color:purple;">unknown command bitch!</h1>`;
// }

// !! TASK 5.
// Вывести числа от 1 до 100

// ! SOLUTION

// for (i = 1; i <= 100; i += 2) {
//   document.body.innerHTML += `<h3 style="color:green; background-color: yellow; text-align:center;">${i}</h3>`;
//   document.body.innerHTML += `<h3 style="color:blue; background-color: grey; text-align:center;"">${
//     i + 1
//   }</h3>`;
// }

// !! TASK 6.
// Вывести все нечётные числа от 1 до 20

// ! SOLUTION

// for (i = 1; i < 20; i++) {
//   if (i % 2 !== 0) {
//     document.body.innerHTML += `<h3 style="color: green; text-align: center;"> ${i}`;
//   }
// }

// !! TASK 7.
// Найти сумму чисел от 1 до N - вводит пользователь с клавиатуры

// ! SOLUTION

// const userValue = prompt("Enter your value");
// if (!isNaN(userValue) && userValue !== null && userValue > 1) {
//   const x = Number(userValue);
//   let result = 0;
//   for (let i = 1; i <= x; i++) {
//     result += i;
//   }
//   document.body.innerHTML = `<h1 style="color: blue;"> The summ of nums from 1 to ${x} = ${result}</h1>`;
// }

// !! TASK 8.
// Найти факториал числа N
// (например, 5! → 120, 1 * 2 * 3 * 4 * 5 )

// ! SOLUTION
// const userValue = prompt("Enter your value: ");
// if (!isNaN(userValue) && userValue !== null) {
//   const x = Number(userValue);
//   let result = 1;
//   for (let i = 1; i <= x; i++) {
//     result *= i;
//   }
//   document.body.innerHTML = `<h1 style="color: blue;"> The factorial of ${x} = ${result}</h1>`;
// }

// !! TASK 9.
// Таблица умножения числа 7

// ! SOLUTION

// const num = 7;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} * ${num} = ${num *i}`);
// }

// !! TASK 10.
// Пользователь вводит числа, пока не введёт отрицательное или текст

// ! SOLUTION

// while (true) {
//   let userInput = prompt("Enter something");
//   if (+userInput < 0 || isNaN(+userInput) || userInput === null) {
//     break;
//   } else {
//     console.log(`Your num is ${userInput}`);
//   }
// }

// !! TASK 11.
// Угадай число
// Компьютер -> случайное число от 1 до 10
// Пользователь пытается угадать через prompt

// ! SOLUTION

// while (true) {
//   const randomValue = Math.floor(Math.random() * 10) + 1;
//   const userValue = prompt("Enter your value from 1 to 10");
//   if (+userValue === randomValue) {
//     document.body.innerHTML = `<h1 style="color: purple;">You are WIN!! "${randomValue}" Its a lucky number</h1>`;
//     break;
//   } else {
//     console.log(
//       `You are LOSE!! "${randomValue}" Its a lucky number!! Not your ${+userValue}`
//     );
//   }
// }

// !! TASK 12.
// Введите пароль
//   Просить вводить пароль, пока он не будет "admin123"

// ! SOLUTION

// const PASSWORD = "******";

// while (true) {
//   const userInput = prompt("Enter password");
//   if (userInput === PASSWORD) {
//     document.body.innerHTML = `<h1 style="color: pink;"> WOW!! PASSWORD <span style="color:red;">"${userInput}"</span> HAS BEEN CONFIRMED! `;
//     break;
//   } else {
//     alert("WRONG PASSWORD!!!! ");
//   }
// }

// !! TASK 13.
// Вывести каждую букву строки (через for)

// ! SOLUTION

// const someStr = "Vladyslav Karpenko";
// for (i = 0; i < someStr.length; i += 2) {
//   document.body.innerHTML += `<h2 style="color: red; text-align:center;">${someStr[i]}</h2>`;
//   document.body.innerHTML += `<h2 style="color: blue; text-align:center;">${
//     someStr[i + 1]
//   }</h2>`;
// }

// !! TASK 14.
// Найти количество гласных в слове

// ! SOLUTION

const someWord = prompt("Enter some word");
const vowels = "aeiouy";
let result = 0;

for (i = 0; i <= someWord.length; i++) {
  if (vowels.includes(someWord[i])) {
    result++;
  }
}
document.body.innerHTML = `<h1 style="color:blue; text-align:center;">Your word ${someWord} has ${result} vowels</h1>`;

// !! TASK 15.
// Попросить пользователя ввести число от 1 до 5
//  Если больше 5 — спрашивать снова (while)

// ! SOLUTION

// while (true) {
//   const userValue = prompt("Enter the num from 1 to 5");
//   if (+userValue <= 5 && +userValue >= 1) {
//     alert(`Its Ok! ) Your value ${userValue} is great !) `);
//     break;
//   } else {
//     alert("The value is greater than five!! Try again");
//   }
// }
