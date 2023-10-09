// 2. Napišite test koji testira kod u script.js. Iskoristite bar dvije funkcije podudarnosti.
// 3. U slučaju da test ne prolazi, ispravite grešku i ponovite test dok ne prođe!

// let arrOfNumbers = [2, 5, 6, 8, 324, 523, 2, 1, 4, 6];

function findMax(numbers) {
  let i;
  let max = -Infinity;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// console.log(findMax(arrOfNumbers));

module.exports = findMax;
