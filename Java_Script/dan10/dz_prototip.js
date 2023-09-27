var character = {
  name: "Eleven",
  show: "Stranger Things",
  portrayedBy: "Millie Bobby Brown",
  randomQuote: function (arr) {
    let random = arr[Math.floor(Math.random() * arr.length)];
    console.log(random);
  },
};

const quotes = [
  "I'm going to my friends. I'm going home.",
  "Pure fuel! PURE FUEL! WOO!",
  "See? Zoomer.",
  "Bitchin.",
];

// 1. Pratite kod u scripts.js.

// 2. Nadite prototip objekta "character" (naputak: koristite metode globalnog Object objekta). Nadite prototip tog prototipa. Ispisite ih.
let proto = Object.getPrototypeOf(character);
console.log(proto);
console.log(Object.getPrototypeOf(proto));

// 3. Dodajte prototipu objekta "character" funkciju koja vraća jedan (slucajno odabran) citat iz niz "quotes".

character.randomQuote(quotes);
