// const ime = "Ivan";
// const pozdrav = `Moje ime je ${ime}`;
// console.log(pozdrav);

function ispisiImena(prvo, drugo, trece) {
  console.log(trece);
}

// Spread operator (...) dekonstrukcija niza
const x = ["Ivan", "Marija", "David"];
ispisiImena(...x);

function ispisiImena(...imena) {
  console.log(imena);
}
const y = ["Ivan", "Marija", "David"];
ispisiImena("Matija");
