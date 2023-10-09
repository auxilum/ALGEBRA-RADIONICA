const findMax = require("../dz");

test("finding max number 523 in array", () => {
  let numbers = [2, 5, 6, 8, 324, 523, 2, 1, 4, 6];
  expect(findMax(numbers)).toBe(523);
});

test("finding max number 100023 in array", () => {
  let numbers1 = [2, 5, 6, 8, 324, 100023, 523, 2, 1, 4, 6];
  expect(findMax(numbers1)).toBe(100023);
});

test("finding max number 32356 in array", () => {
  let numbers2 = [2, 5, 6, 8, 324, 32356, 523, 2, 1, 4, 6];
  expect(findMax(numbers2)).toStrictEqual(32356);
});
