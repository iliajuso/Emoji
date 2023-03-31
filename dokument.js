import {data as emoji} from "./data.js";
let container = document.querySelector(".container")
console.log(emoji);
function choiceCard(dataEm){
    dataEm.forEach(el =>createCard(el));
}
choiceCard(emoji);
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
// createCard(card)