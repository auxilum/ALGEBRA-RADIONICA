let Exercise = (function () {
  var steps = 0;
  function increaseSteps() {
    steps++;
  }
  return {
    getTotalSteps: function () {
      return steps;
    },
    walk: function () {
      increaseSteps();
    },
  };
})();

let Run = (function () {
  var steps = 0;
  function increaseSteps() {
    steps += 3;
  }
  return {
    getTotalSteps: function () {
      return steps;
    },
    run: function () {
      increaseSteps();
    },
  };
})();

module.exports = { Exercise, Run };
