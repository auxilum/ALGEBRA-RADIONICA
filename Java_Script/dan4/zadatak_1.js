let x = 9999;

if (0 <= x && x <= 9) {
  console.log(`Broj ${x} je jednoznamenkast`);
} else if (10 <= x && x <= 99) {
  console.log(`Broj ${x} je dvoznamenkast`);
} else if (100 <= x && x <= 999) {
  console.log(`Broj ${x} je troznamenkast`);
} else {
  console.log(`Broj ${x} je veci od 999`);
}
