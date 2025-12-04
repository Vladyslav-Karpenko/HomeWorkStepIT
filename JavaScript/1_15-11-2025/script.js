document.body.innerHTML = `<h1 style="color:red">HomeWork # 1 (15-11-2025)</h1>`;
// !! TASK # 1
document.body.innerHTML += `<h2 style="color:purple">Task # 1 (Создание e-mail адреса)</h2>`;
document.body.innerHTML += `<p style="color:grey">- Напишите программу, которая создаёт строку, содержащую ваш e-mail.E-mail составьте, соединив: <br>
- Ваше имя, пользователь вводит с клавиатуры;<br>
- Символ точка .<br>
- Вашу фамилию, тоже пользователь вводит с клавиатуры<br>
- С окончанием @mujmail.com<br>
- Используйте оператор + для соединения строк.<br>
- Выведите результат на страницу через <span style="color:green">document.body.innerHTML.</span></p>`;

// !! SOLUTION # 1

// document.body.innerHTML += `<h3 style="color:brown;">${prompt('What is your name?')}.${prompt("What is your surname?")}@mujmail.com</h3>`;

// !! TASK # 2
document.body.innerHTML += `<h2 style="color:purple">Task # 2 (Комбинация имени и возраста)</h2>`;
document.body.innerHTML += `<p style="color:grey">- Пусть пользователь с клавиатуры введёт имя и возраст.<br>
- Выведите через <span style="color:green">document.body.innerHTML</span> на страницу строку:<br>
<span style="color:green">"Привет,</span> <имя>! <span style="color:green">Тебе</span> <возраст> <span style="color:green">лет."</span></p>`;

// !! SOLUTION # 2

// document.body.innerHTML += `<h3 style="color:brown;">Hello, ${prompt('What is your name?')}! You are ${prompt('How old are you?')} years old`

// !! TASK # 3
document.body.innerHTML += `<h2 style="color:purple">Task # 3 (Простой калькулятор)</h2>`;
document.body.innerHTML += `<p style="color:grey">- Пусть есть две переменные а и b.<br>
- Выведите на страницу сумму, разность, произведение и частное этих чисел в виде:<br>
<span style="color:green">Сумма: ...<br>
Разность: ...<br>
Произведение: ...<br>
Частное: ...</p></span>`;

// !! SOLUTION # 3

let firstNum = Number(prompt("Enter the first num"));
let secondNum = Number(prompt("Enter the second num"));
let sumResult = firstNum + secondNum;
let differenceResult = firstNum - secondNum;
let productResult = firstNum * secondNum;
let quotientResult = firstNum / secondNum;

document.body.innerHTML += `<h3 style="color:brown;"> Sum of numbers: ${firstNum} + ${secondNum} = ${sumResult}</h3>`;
document.body.innerHTML += `<h3 style="color:brown;"> Difference of numbers: ${firstNum} - ${secondNum} = ${differenceResult}</h3>`;
document.body.innerHTML += `<h3 style="color:brown;"> Product of numbers: ${firstNum} * ${secondNum} = ${productResult}</h3>`;
document.body.innerHTML += `<h3 style="color:brown;"> Quotient of numbers: ${firstNum} / ${secondNum} = ${quotientResult}</h3>`;

// !! TASK # 4
document.body.innerHTML += `<h2 style="color:purple">Task # 4 (Расчёт дневного бюджета)</h2>`;
document.body.innerHTML += `<p style="color:grey">- У студента есть месячный бюджет 12 000 Кс.<br>
- Месяц состоит из 30 дней.<br>
- Посчитайте средний дневной бюджет.<br>
- Выведите на страницу: <span style="color:green">"Средний дневной бюджет:</span> <результат> <span style="color:green">Кс".</span></p>`;

// !! SOLUTION # 4

// let monthlyBudget = 12000;
// let daysOnMonth = 30;
// document.body.innerHTML += `<h3 style="color:brown;">Average daily budget is ${
//   monthlyBudget / daysOnMonth
// }</h3>`;

// !! TASK # 5
document.body.innerHTML += `<h2 style="color:purple">Task # 5 (Расчёт месячного дохода и налога)</h2>`;
document.body.innerHTML += `<p style="color:grey">- Вы работаете 7 часов в день, ставка 320 К/час.<br>
- В месяце 21 рабочий день.<br>
- Если вы работаете как самозанятый (OSVC), можно вычесть 60% дохода как
паушал.<br>
- На оставшиеся 40% дохода начисляется налог 15%.<br>
- Нужно вычислить размер налога<br>
- Используйте переменные, арифметические операции и вывод через
<span style="color:green">document.body.innerHTML.</span></p>`;

// !! SOLUTION # 5

// let workingDays = 21;
// let hoursPerDay = 7;
// let kcPerHour = 320;

// let monthlySalary = kcPerHour * hoursPerDay * workingDays;
// let expenses = monthlySalary * 0.6
// let taxBase = monthlySalary - expenses
// let tax = taxBase * 0.15
// document.body.innerHTML += `<h3 style="color:brown;">The monthly salary is ${monthlySalary} Kc<br> Pausal 60% = ${expenses
// }<br> Tax base is 40% = ${
//   taxBase
// } Kc <br>We need to pay tax 15% = ${tax} Kc</h3>`;
