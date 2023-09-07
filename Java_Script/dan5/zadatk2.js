let names = ["John", "Jane", "Bob", , "Mike"];

// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// 2. Dodajte svoje ime na kraj niza.
names.push("Bruno");
console.log(names);
// 3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon što ispišete "Jane" izađite iz petlje.
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
  if (names[i] === "Jane") {
    break;
  }
}
// 4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.
for (let i = 0; i < names.length; i++) {
  if (names[i] === undefined) {
    names.splice(i, 1);
  }
}
console.log(names);
