var x = "Lorem ipsum",
  y = 2345,
  z = "2345";
q = false;

console.log(y);

// 1.
var trueFalse = !!"false" == !!"true";
console.log(trueFalse);

// 2.
console.log(q || x || y || z);

// 3.
var num = 6;
num--;
console.log(num);

// 4.
let price = 26.5;
let taxRate = 0.082;

let totalPrice = price + price * taxRate;
console.log(totalPrice.toFixed(2));

console.log("Total:", totalPrice);

// 1. Koja je vrijednost varijable trueFalse? Čemu služe dvostruki negacijski znakovi?

//console.log(trueFalse);

// 2., 3. i 4. Koju će vrijednost ispisati console.log? Zašto?
