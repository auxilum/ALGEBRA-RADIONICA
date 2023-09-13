let randomArr = [
  "brown",
  "fox",
  "quickest",
  "jumps",
  "over",
  "the",
  "lazy",
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

//2D arrays
matrix = [
  [11, 2, -99],
  [20, 19, 10],
  [47, 72, 56],
];

function maxInMatrix(matrix) {
  // your code here...
  let largest = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    let subMatrix = matrix[i];
    for (let j = 0; j < subMatrix.length; j++) {
      if (subMatrix[j] > largest) {
        largest = subMatrix[j];
      }
    }
  }
  return largest;
}

console.log(maxInMatrix(matrix));
