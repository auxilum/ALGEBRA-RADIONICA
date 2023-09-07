let simpleCalculator = function (num1, num2, operation) {
  if (operation === "+") {
    let result = add(num1, num2);
    console.log(result);
  } else if (operation === "-") {
    let result = sub(num1, num2);
    console.log(result);
  }
};

let add = function (num1, num2) {
  return num1 + num2;
};

let sub = function (num1, num2) {
  return num1 - num2;
};

let multiplication = function (num1, num2) {
  return num1 * num2;
};

simpleCalculator(3, 3, "-");
