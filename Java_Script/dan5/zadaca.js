let randomArr = [
  "brown",
  "fox",
  "quickest",
  "jumps",
  "over",
  "the",
  "lazy",
  "asddddddasdsadsad",
  "dog",
];

const filterFunc = (arr) => {
  let longest = arr[0].length;
  let longestWord;
  for (let i = 1; i < arr.length; i++) {
    let word = arr[i];
    if (word.length > longest) {
      longest = word.length;
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(filterFunc(randomArr));

const filterFunc1 = function (arr, cb) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let ele = arr[i];
    max = cb(max, ele);
  }
  return max;
};

let longestWord = filterFunc1(randomArr, function (max, el) {
  if (el.length > max.length) {
    return el;
  } else {
    return max;
  }
});
console.log(longestWord);
