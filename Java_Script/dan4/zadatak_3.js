// 1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom ("") između imena i prezimena.

let firstName = "Bruno";
let lastName = "Babojelic";
let fullName = `${firstName} ${lastName}`;
//let fullName = firstName + " " + lastName;
console.log(fullName);

// 2. Razlomite ovu ternarnu operaciju na 3 različite operacije!
let z = 4;
let y = "blabla";
var x = z === 2 ? y : 5;
if ((z === 2) === true) {
  x = y;
  console.log(x);
} else {
  x = 5;
  console.log(x);
}

// 3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "Broj 2 je paran").
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} je paran.`);
  } else {
    console.log(`${i} je neparan.`);
  }
}
