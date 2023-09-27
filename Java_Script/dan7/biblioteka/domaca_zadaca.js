// U ovoj vježbi koristit ćemo se lodash bibliotekom. Prvi korak je da instalirate lodash paket na lokalno računalo.

// Korisnik na našoj stranici kreira password. Želimo osigurati da:
// 	1. Je svaki znak u passwordu različit od drugih / jedinstven
// 	2. Su svi znakovi brojke
// 	3. Password nema više od 10 znakova

// Vaš je zadatak:
// 	1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni (naputak: pogledajte lodash metode nad nizovima)
// 	2. Napisati funkciju koja provjerava da li su svi znakovi brojke
// 	3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10

// 1.
const _ = require("lodash");

let dobro = "12345678901231232";
let lose = "11234";

let jedinstveniZnakovi = function (password) {
  let newArr = _.split(password, "", 10);
  let unique = _.uniq(newArr);
  if (
    _.isEqual(newArr, unique) &&
    _.isInteger(_.toNumber(password)) &&
    newArr.length === 10
  ) {
    let pass = _.join(newArr, "");
    return `Vas password je: ${pass}`;
  } else if (password.length < 10 || !_.isEqual(newArr, unique)) {
    return "Vas password je kraci od 10 znakova ili znakovi nisu jedinstveni";
  }
};

console.log(jedinstveniZnakovi(dobro));
console.log(jedinstveniZnakovi(lose));
