var person = {
  ime: "Marko",
};

console.log(person.__proto__);

var a = Object.getPrototypeOf(person);
// console.log(a);

function Cat() {}

Cat.prototype.glas = "mijauuu";
let kitty = new Cat();
// console.log(kitty.glas);

let micky = new Cat();
micky.dlaka = "smeda";
console.log(micky.dlaka);
console.log(micky.glas);
console.log(kitty.dlaka);

console.log(Object.getPrototypeOf(kitty));
console.log(Object.getPrototypeOf(micky));
console.log(Object.getPrototypeOf(Cat));
