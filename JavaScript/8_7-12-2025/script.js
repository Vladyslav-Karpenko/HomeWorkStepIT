// !!! TASK 1: Создать структуру
// Создай через JavaScript следующую структуру и добавь в body:
// <div class="container">
//   <h1>Заголовок</h1>
//   <p>Это параграф</p>
//   <button>Кнопка</button>
// </div>
// ! SOLUTION
// let myDiv = document.createElement('div')
// document.body.prepend(myDiv)
// myDiv.className = 'container'
// let myH1 = document.createElement('h1')
// let myP = document.createElement('p')
// let myBtn = document.createElement('button')
// myDiv.append(myH1, myP, myBtn)
// myBtn.textContent = 'Click me'

// !!! TASK 2: Изменить существующие элементы
// <div id="box" class="old">Старый текст</div>
// Измени через JavaScript:
// Текст на "Новый текст"
// Класс на "new"
// Добавь атрибут data-status="active"
// Измени цвет фона на "lightblue"
// ! 
// let myDiv = document.createElement('div')
// myDiv.textContent = 'OLD TEXT'
// myDiv.id = 'box'
// myDiv.classList.add('old')
// document.body.prepend(myDiv)
// ! SOLUTION
// myDiv.textContent = 'NEW TEXT'
// myDiv.className = 'new'
// myDiv.setAttribute('data-status', 'active')
// myDiv.style.backgroundColor = 'lightblue'
// let myBody = document.body
// myBody.style.backgroundColor = 'red'


// !!! TASK 3: Создать список
//         Создай через JavaScript ul с 5 элементами li (текст: "Элемент 1", "Элемент 2" и т.д.)
// ! SOLUTION
// let myUl = document.createElement('ul')
// for (let i = 1; i <= 5; i++) {
//     let myLi = document.createElement('li')
//     myLi.textContent = `Element ${i}`
//     myUl.append(myLi)
// }
// document.body.prepend(myUl)

// !!! TASK 4: Добавить элементы в разные позиции

//         <div id="container">
//         <p id="middle">Середина</p>
//         </div>
//         Добавь через JavaScript:  
//             - Параграф "Начало" в начало container (перед middle)
//             - Параграф "Конец" в конец container (после middle)
//             - Заголовок h2 "Перед контейнером" перед самим container
//             - Заголовок h2 "После контейнера" после самого container
// ! 
// let myDiv = document.createElement('div')
// myDiv.id = 'container'
// document.body.prepend(myDiv)
// let paragraphMiddle = document.createElement('p')
// paragraphMiddle.id = 'middle'
// paragraphMiddle.textContent = 'Middle'
// myDiv.append(paragraphMiddle)
// ! SOLUTION
// let paragraphBegin = document.createElement('p')
// paragraphBegin.textContent = 'Begin'
// myDiv.prepend(paragraphBegin)

// let paragraphEnd = document.createElement('p')
// paragraphEnd.textContent = 'End'
// myDiv.append(paragraphEnd)

// let h2Start = document.createElement('h2')
// h2Start.textContent = 'Title start'
// document.body.prepend(h2Start)

// let h2End = document.createElement('h2')
// h2End.textContent = 'Title end'
// document.body.append(h2End)

// !!! TASK 5: Удаление элементов
//         <ul id="list">
//         <li>Элемент 1</li>
//         <li class="remove-me">Элемент 2</li>
//         <li>Элемент 3</li>
//         <li class="remove-me">Элемент 4</li>
//         <li>Элемент 5</li>
//         </ul>

//     Удали через JavaScript:
//        - Все элементы с классом "remove-me"
//        - Первый элемент списка
// ! 
// let myUl = document.createElement('ul')
// myUl.id = 'list'

// for (let i = 1; i <= 5; i++) {
//     let myLi = document.createElement('li')
//     myLi.textContent = `Element ${i}`
//     myUl.append(myLi)
// }
// myUl.children[1].classList.add('remove-me')
// myUl.children[3].classList.add('remove-me')
// ! SOLUTOIN
// myUl.children[0].remove()

// document.body.prepend(myUl)
// const classRemoveMe = document.querySelectorAll('.remove-me')
// classRemoveMe.forEach((li) => li.remove())


// !!! TASK 6: Замена элемента
//     <p id="old">Старый параграф</p>

//     Замени его через JavaScript на:
//     html<div class="new">Новый div</div>

// const paragraph = document.createElement('p')
// paragraph.id = 'old'
// paragraph.textContent = 'Old paragraph'
// document.body.prepend(paragraph)
// !
// const newDiv = document.createElement('div')
// newDiv.textContent = 'New div'
// newDiv.classList.add('new')

// paragraph.replaceWith(newDiv)

// !!! TASK 7: Создать таблицу
// Создай через JavaScript таблицу 3x3:
// <table>
//   <tr>
//     <td>1</td>
//     <td>2</td>
//     <td>3</td>
//   </tr>
//   <tr>
//     <td>4</td>
//     <td>5</td>
//     <td>6</td>
//   </tr>
//   <tr>
//     <td>7</td>
//     <td>8</td>
//     <td>9</td>
//   </tr>
// </table>
// ! SOLUTION
// const myTable = document.createElement('table')
// let countTable = 1
// for (let i = 1; i <= 3; i++) {
//     let myTr = document.createElement('tr')
//     myTable.append(myTr)
//     for (let j = 1; j <= 3; j++) {
//         let myTd = document.createElement('td')
//         myTd.textContent = `${countTable++}`
//         myTr.append(myTd)
//     }
// }

// document.body.prepend(myTable)
// !!! TASK 9: Работа с классами
//         <div id="box" class="red large">Box</div>
//         Через JavaScript:
// Добавь класс "active"
// Удали класс "large"
// Переключи класс "red" (если есть - удали, если нет - добавь)
// Замени класс "active" на "inactive"
// ! 

// const myDiv = document.createElement('div')
// myDiv.id = 'box'
// myDiv.classList.add('red', 'large')
// myDiv.textContent = 'Box'
// document.body.prepend(myDiv)
// !SOLUTION
// myDiv.classList.add('active')
// myDiv.classList.remove('large')
// myDiv.onclick = () => { myDiv.classList.toggle('red') }
// myDiv.classList.replace('active', 'inactive')

// !!! TASK 10: Создать карточки товаров
// Создай через JavaScript 3 карточки товаров со следующей структурой:
// <div class="product">
//   <img src="product1.jpg" alt="Товар 1">
//   <h3>Товар 1</h3>
//   <p class="price">1000 крон</p>
// </div>

// Данные товаров:
// Товар 1, product1.jpg, 1000 крон
// Товар 2, product2.jpg, 2000 крон
// Товар 3, product3.jpg, 3000 крон


// !SOLUTION
// for (let i = 1; i <= 3; i++) {
//     const divContainer = document.createElement('div')
//     divContainer.classList.add('product')
//     let productTitle = document.createElement('h3')
//     let productPrice = document.createElement('p')
//     let productImg = document.createElement('img')
//     productImg.src = `product${i}.jpg`
//     productImg.alt = `product ${i}`
//     productTitle.textContent = `Product ${i}`
//     productPrice.textContent = `${i * 1000} CZK`
//     divContainer.append(productImg, productTitle, productPrice)
//     document.body.append(divContainer)
// }

// !!! TASK 11: Навигация по DOM
//     <div id="parent">
//     <div class="child">Первый</div>
//     <div class="child">Второй</div>
//     <div class="child">Третий</div>
//     </div>
//     Через JavaScript:
//         - Получи второй дочерний элемент и измени его текст на "ВТОРОЙ"
//         - Получи последний дочерний элемент и добавь ему класс "last"
//         - Получи первый дочерний элемент и добавь перед ним новый div с текстом "Нулевой"
// const parentDiv = document.createElement('div')
// const nameOfDiv = ['first', 'second', 'third']
// document.body.prepend(parentDiv)
// for (let i = 0; i < 3; i++) {
//     let childDiv = document.createElement('div')
//     childDiv.classList.add('child')
//     childDiv.textContent = nameOfDiv[i]
//     parentDiv.append(childDiv)
// }
// ! SOLUTION
// const secodDiv = parentDiv.children[1]
// secodDiv.textContent = secodDiv.textContent.toUpperCase()

// const lastChild = parentDiv.lastChild
// lastChild.classList.add('last')

// const firstDiv = parentDiv.children[0]

// const zeroDiv = document.createElement('div')
// zeroDiv.textContent = 'Zero div'

// firstDiv.before(zeroDiv)