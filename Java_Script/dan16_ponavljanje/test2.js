//Deklarirajte varijable y i z te im dodijelite proizvoljne vrijednosti. Nakon toga razlomite ovu ternarnu operaciju na 3 različite operacije (upotrebom grananja). Ispišite dobivenu vrijednost varijable x.
let y = 2;
let z = 2;

// var x = z === 2 ? y : 5;

let xNaDrugiNacin = (x) => {
  if (x === 2) {
    return 2;
  } else {
    return 5;
  }
};

// console.log(x);
console.log(xNaDrugiNacin(2));
