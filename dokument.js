import {data as emoji} from "./data.js";
let container = document.querySelector(".container")
console.log(emoji);
let cardB
function choiceCard(dataEm){
dataEm.forEach(el =>createCard(el));
cardB = document.querySelectorAll(".wrap")
}
renderCards(emoji)
choiceCard(emoji);
const cards = Object.values(document.querySelectorAll(".wrap"))
const input = document.querySelector("input")
input.addEventListener("change", (event) => {
    findCardsByName(cards, event.target.value)
})
function findCardsByName(cards, queryString) {
    // Преобразуем значение в нижний регистр
    queryString = queryString.toLowerCase()
    // перебираем все карточки
    cards.map((card) => {
        // Получаем описание из карточки и преобразуем к нижнему регистру
        const cardDesc = card.children[2].innerHTML.toLowerCase()
        // Если описание карточки включает в себя текст для поиска (queryString)
        if (cardDesc.includes(queryString)) {
            card.style.display = 'flex'
        } else {
            card.style.display = 'none'
        }

    })

}

/**
 * Функция отрисовки карточек
 * @param cards
 */
 function renderCards(cards) {

    cards.forEach(element => {
        element.keywords = deleteDuplicates(element.keywords) // Удаляем дубликаты
        createCard(element) // Рисуем элементы
    });
}
/**
 * Поиск одинаковых слов строке
 * @param string
 * @returns {string}
 */
 function deleteDuplicates(string) {
    let arr2 = []
    let arr = string.split(" ")

    // Вариант №2 реализации поиска уникальных значне
    //   return ([...new Set(arr)]).join(" ")

    // Вариант №1
    arr.forEach((arrElement) => {
        if (!arr2.includes(arrElement)) {
            arr2.push(arrElement)
        }
    })
    return arr2.join(" ")
}


// let card = {
//     emoji: '💯',
//     title: '100',
//     keywords: 'Hundred, points, symbol, wow, win, perfect, parties',
// }
function createCard(obj) {
let card = document.createElement("div")
card.className = "wrap"
let symbol = document.createElement("div")
symbol.textContent = obj.symbol;
symbol.className = "emoji"
let title = document.createElement("h2")
title.textContent = obj.title;
let keyw = document.createElement("p")
keyw.textContent= obj.keywords;
card.append(symbol)
card.append(title)
card.append(keyw)
container.append(card)
}
createCard(card)

// import {data as emoji} from "./data.js";

// let container = document.querySelector(".container");

// function choiceCard(dataEm){
//     container.innerHTML = "";
//     dataEm.forEach(el =>createCard(el));
// }

// function createCard(obj) {
//     let card = document.createElement("div");
//     card.className = "wrap";
//     let symbol = document.createElement("div");
//     symbol.textContent = obj.symbol;
//     symbol.className = "emoji";
//     let title = document.createElement("h2");
//     title.textContent = obj.title;
//     let keyw = document.createElement("p");
//     keyw.textContent= obj.keywords;
//     card.append(symbol);
//     card.append(title);
//     card.append(keyw);
//     container.append(card);
// }

// choiceCard(emoji);

// let input = document.querySelector("input");

// input.addEventListener("input", (e) => {
//     let filteredData = emoji.filter(obj => obj.keywords.includes(e.target.value)|| 
//     obj.title.includes(e.target.value));
//     choiceCard(filteredData);
// })