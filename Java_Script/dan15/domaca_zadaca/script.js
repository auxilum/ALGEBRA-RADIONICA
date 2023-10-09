let _ = require("lodash");

let checkForInputType = (input) => {
  if (_.isUndefined(input)) {
    return "Your input is undefined";
  } else if (_.isNumber(input)) {
    return `${input} is a number`;
  } else if (_.isNull(input)) {
    return `${input} is Null`;
  } else if (_.isBoolean(input)) {
    return `${input} is boolean value`;
  } else if (_.isString(input)) {
    return `${input} is string`;
  } else if (_.isSymbol(input)) {
    return `${input} is symbol`;
  } else if (_.isObject(input)) {
    return `${input} is object`;
  }
};

// console.log(checkForInputType(6));

module.exports = checkForInputType;
