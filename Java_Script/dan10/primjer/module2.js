const { Exercise, Run } = require("./excersize");

let a = Exercise;
console.log(a.getTotalSteps());
a.walk();
console.log(a.getTotalSteps());

let b = Run;
b.run();
b.run();
b.run();
console.log(b.getTotalSteps());
