//1. Napišite program koji će ispisati sve brojeve između 0 i 30 djeljive sa 7
let newArr = [];
for (let i = 0; i < 30; i++) {
  if (i % 7 === 0) {
    newArr.push(i);
  }
}
console.log(newArr);

//2. Napišite program koji će zbrojiti sve brojeve između 0 i 100 dijeljive sa 3
let sum = 0;
for (let i = 0; i < 100; i++) {
  if (i % 3 === 0) {
    sum += i;
  }
}
console.log(sum);
