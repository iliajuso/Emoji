// import {data } from "./data.js";
let response = await fetch("https://emoji.ymatuhin.workers.dev/")
let data = await response.json()
let container = document.querySelector(".container")

function choiceCard(dataEm){
    container.innerHTML = "";
    dataEm.forEach(el =>createCard(el));
}
function removeDuplicateWords(text) {
    let words = text.split(" ");
    words = words.filter((word, index) => words.indexOf(word) === index);
    return words.join(" ");
}


function createCard(obj) {
    let card = document.createElement("div");
    card.className = "wrap";
    let symbol = document.createElement("div");
    symbol.textContent = obj.symbol;
    symbol.className = "emoji";
    let title = document.createElement("h2");
    title.textContent = obj.title;
    let keyw = document.createElement("p");
    keyw.textContent = removeDuplicateWords(obj.keywords);
    card.append(symbol);
    card.append(title);
    card.append(keyw);
    container.append(card);
}
choiceCard(data);

let input = document.querySelector("input");

input.addEventListener("input", (e) => {
    let filteredData = data.filter(obj => obj.keywords.includes(e.target.value)|| 
    obj.title.includes(e.target.value));
    choiceCard(filteredData);
})