const { expect } = require("chai");
const findMax = require("../domaca_mocha");

describe("Multiple tests of max number", () => {
  it("finding max number 523 in array", () => {
    let numbers = [2, 5, 6, 8, 324, 523, 2, 1, 4, 6];
    expect(findMax(numbers)).to.equal(523);
  });

  it("finding max number 100023 in array", () => {
    let numbers1 = [2, 5, 6, 8, 324, 100023, 523, 2, 1, 4, 6];
    expect(findMax(numbers1)).to.equal(100023);
  });

  it("finding max number 32356 in array", () => {
    let numbers2 = [2, 5, 6, 8, 324, 32356, 523, 2, 1, 4, 6];
    expect(findMax(numbers2)).to.deep.equal(32356);
  });
});
